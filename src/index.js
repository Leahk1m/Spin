import "./style.css";

function createSpinToWin(options) {
  let state = {
    isSpinning: false,
    currentPrize: null,
    discountsArray: [],
    maxNumOfPrizes: 12,
    spinChart: null,
    rotationDegrees: 0,
    showModal: false,
    showStats: false,
    conversionRate: 0,
    conversions: 0,
    views: 0,
    showTheme: false,
  };

  const defaultOptions = {
    colors: [
      "#a1e2e6",
      "#6c78f0",
      "#ff91c9",
      "#fbee85",
      "#ffcc29",
      "#a1e2e6",
      "#6c78f0",
      "#ff91c9",
      "#fbee85",
      "#ffb6b9",
      "#a1e2e6",
      "#6c78f0",
    ],
    prizes: [
      "100%",
      "Charity Donation",
      "80%",
      "Hawaii vacation",
      "90%",
      "Macbook Pro",
      "iPhone 15",
    ],
  };

  const finalOptions = { ...defaultOptions, ...options };

  function setupEventListeners() {
    const openModalButton = document.getElementById("open-modal-button");
    const showStatsButton = document.getElementById("stats-button");
    const modal = document.getElementById("modal");
    const spinWheelButton = document.querySelector(".btn.spin");
    const themeButton = document.querySelector(".btn.theme");

    openModalButton.addEventListener("click", () => {
      setState({ showModal: !state.showModal });
    });

    themeButton.addEventListener("click", () => {
      console.log("theme button clicked");
    });

    showStatsButton.addEventListener("click", async () => {
      await fetchStats();
      setState({ showStats: !state.showStats });
    });

    spinWheelButton.addEventListener("click", () => {
      spinWheel();
    });

    const form = document.getElementById("spin-to-win-form");
    form.addEventListener("submit", handleFormSubmit);
  }

  async function handleFormSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());

    await fetchPrize(data);
  }

  async function fetchPrize(data) {
    try {
      const response = await fetch(
        "https://callbacks.dev.sakari.io/spintowin/13/contacts",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      const result = await response.json();
      setState({ currentPrize: result.data.offer.label });
    } catch (error) {
      console.error("Error in fetchPrize:", error);
    }
  }

  async function fetchDiscounts() {
    // Fetch discounts from api
    try {
      const response = await fetch(
        "https://callbacks.dev.sakari.io/spintowin/13"
      );

      state.discountsArray = [];

      const discounts = await response.json();
      discounts.data.forEach((discount, index) => {
        state.discountsArray.push({ code: discount, index: index });
      });

      while (state.discountsArray.length < state.maxNumOfPrizes) {
        const randomIndex = Math.floor(
          Math.random() * defaultOptions.prizes.length
        );
        const randomDiscount = defaultOptions.prizes[randomIndex];
        if (
          !state.discountsArray.find(
            (discount) => discount.code === randomDiscount
          )
        ) {
          state.discountsArray.push({
            code: randomDiscount,
            index: state.discountsArray.length,
          });
        }
      }
    } catch (error) {
      console.error("error:", error);
    }
  }

  async function fetchStats() {
    // Fetch stats from api
    try {
      const response = await fetch(
        "https://callbacks.dev.sakari.io/spintowin/13/stats"
      );
      const stats = await response.json();

      setState({
        conversionRate: (
          (stats.data.conversations / stats.data.views) *
          100
        ).toFixed(2),
        conversions: stats.data.conversations, //this should be changed to conversions with api change,
        views: stats.data.views,
      });
    } catch (error) {
      console.error("error:", error);
    }
  }

  function setupWheel() {
    //https://chartjs-plugin-datalabels.netlify.app/guide/getting-started.html
    state.spinChart = new Chart("spin-wheel", {
      type: "pie",
      plugins: [ChartDataLabels],
      data: {
        labels: state.discountsArray.map((discount, index) => {
          state.rotationDegrees = index * (360 / state.discountsArray.length);
          return discount.code;
        }),
        datasets: [
          {
            //data keeps size of options the same
            data: Array.from({ length: 12 }, (_, index) => 1),
            backgroundColor: defaultOptions.colors,
          },
        ],
      },
      options: {
        responsive: true,
        animation: { duration: 0 },
        plugins: {
          tooltip: false,
          legend: {
            display: false,
          },
          datalabels: {
            rotation: 90,
            rotation: state.rotationDegrees,
            color: "#ffffff",
            formatter: (_, context) => {
              const label = context.chart.data.labels[context.dataIndex];
              const splitLabels = label.split(" ");
              if (splitLabels.length > 1) {
                return splitLabels[0] + "\n" + splitLabels[1];
              } else {
                return label;
              }
            },
            font: { size: 20 },
            anchor: "center",
            align: "end",
            textAlign: "center",
          },
        },
      },
    });
  }

  async function spinWheel() {
    const arrow = document.getElementById("wheel-arrow");

    setState({ isSpinning: true });
    await fetchPrize();

    console.log("You've won:", state.currentPrize);

    const currentPrizeIndex = state.discountsArray.findIndex((discount) => {
      return discount.code === state.currentPrize;
    });

    const degreesPerDiscount = 360 / state.maxNumOfPrizes;
    const targetAngle =
      360 -
      currentPrizeIndex * degreesPerDiscount +
      arrow.getBoundingClientRect().width;
    const totalDegrees = 2800 + targetAngle; // 8 spins + target angle

    const rotationInterval = window.setInterval(() => {
      const currentRotation = state.spinChart.options.rotation;
      const newRotation = currentRotation + 10;

      state.spinChart.options.rotation = newRotation;
      state.spinChart.update();

      if (newRotation >= totalDegrees) {
        setState({ isSpinning: false });
        clearInterval(rotationInterval);

        state.spinChart.options.rotation = targetAngle;
        state.spinChart.update();

        renderConfetti();
        // renderCongratulations();
      }
    });
  }

  function renderConfetti() {
    const containerBounds = document
      .getElementById("confetti-wrapper")
      .getBoundingClientRect();

    confetti({
      particleCount: 100,
      spread: 70,
      origin: {
        x:
          (containerBounds.left + containerBounds.right) /
          (2 * window.innerWidth),
        y:
          (containerBounds.top + containerBounds.bottom) /
          (2 * window.innerHeight),
      },
    });
  }

  function setState(newState) {
    state = { ...state, ...newState };
    render();
  }

  function render() {
    const wheelElement = document.getElementById("spin-wheel");
    wheelElement.className = state.isSpinning ? "spinning" : "";

    const modal = document.getElementById("modal");
    state.showModal
      ? modal.classList.remove("hidden")
      : modal.classList.add("hidden");

    const themeButton = document.querySelector(".btn.theme");
    state.showModal
      ? themeButton.classList.remove("hidden")
      : themeButton.classList.add("hidden");

    const conversionsContainer = document.getElementById(
      "conversions-container"
    );

    state.showStats
      ? conversionsContainer.classList.remove("hidden")
      : conversionsContainer.classList.add("hidden");

    //Update conversion rate, conversions, and views
    document.getElementById(
      "conversion-rate"
    ).textContent = `Conversion Rate: ${state.conversionRate}%`;
    document.getElementById(
      "conversions"
    ).textContent = `Conversions: ${state.conversions}`;
    document.getElementById("views").textContent = `Views: ${state.views}`;
  }

  async function initialize() {
    setupEventListeners();
    await fetchDiscounts();
    setupWheel();
    render();
  }

  return {
    initialize,
    spinWheel,
  };
}

// Usage
const spinToWin = createSpinToWin(/* options */);
spinToWin.initialize();
