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

  async function initialize() {
    setupEventListeners();
    await fetchDiscounts();
    setupWheel();
  }

  function setupEventListeners() {
    const openModalButton = document.getElementById("open-modal-button");
    const showStatsButton = document.getElementById("stats-button");
    const modal = document.getElementById("modal");
    const spinWheelButton = document.querySelector(".btn.spin");

    openModalButton.addEventListener("click", () => {
      console.log("open modal");
      setState({ showModal: !state.showModal });
    });

    showStatsButton.addEventListener("click", () => {
      console.log("show stats");
      setState({ showStats: !state.showStats });
    });

    spinWheelButton.addEventListener("click", () => {
      console.log("spin wheel");
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
      console.log("Prize:", result);
      setState({ currentPrize: result.data.offer.label });

      // Handle the API response
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

    console.log("current prize", state.currentPrize);

    const currentPrizeIndex = state.discountsArray.findIndex((discount) => {
      return discount.code === state.currentPrize;
    });

    const degreesPerDiscount = 360 / state.maxNumOfPrizes;
    const targetAngle =
      360 -
      currentPrizeIndex * degreesPerDiscount +
      arrow.getBoundingClientRect().width;
    const totalDegrees = 1800 + targetAngle; // 5 spins + target angle

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

        // renderConfetti();
        // renderCongratulations();
      }
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
    if (state.showModal) {
      modal.classList.remove("hidden");
    } else {
      modal.classList.add("hidden");
    }

    const conversionsContainer = document.getElementById(
      "conversions-container"
    );
    if (state.showStats) {
      conversionsContainer.classList.remove("hidden");
    } else {
      conversionsContainer.classList.add("hidden");
    }
  }

  return {
    initialize,
    spinWheel,
  };
}

// Usage
const spinToWin = createSpinToWin(/* options */);
spinToWin.initialize();
