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
    currentThemeIndex: 0,
    allThemes: [
      {
        backgroundImage:
          "https://hips.hearstapps.com/hmg-prod/images/delish-profiteroles-05-1644593689.jpeg?crop=1xw:0.7874231032125769xh;center,top",
        title: {
          text: "You deserve a treat",
          color: "black",
          font: "Khand, sans-serif",
        },
      },
      {
        backgroundImage:
          "https://snowboardmag.com/wp-content/uploads/2016/09/those-days-jussi-oksanen-dean-blotto-gray-snowboarding-for-slider-1400x900.jpg",
        title: {
          text: "Spin for a chance to win on the slopes",
          color: "white",
          font: "Bebas Neue, sans-serif",
        },
      },

      {
        backgroundImage: "https://w.wallhaven.cc/full/rd/wallhaven-rdxvk7.jpg",
        title: {
          text: "Begin your journey with a spin",
          color: "black",
          textShadow: "rgb(206 147 147 / 34%) 1px 0px 10px",
          font: "Rubik Maps, system-ui",
        },
      },
    ],
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
    const xButton = document.getElementById("x-button");

    openModalButton.addEventListener("click", () => {
      setState({ showModal: !state.showModal });
    });

    showStatsButton.addEventListener("click", async () => {
      await fetchStats();
      setState({ showStats: !state.showStats });
    });

    spinWheelButton.addEventListener("click", () => {
      spinWheel();
    });

    xButton.addEventListener("click", () => {
      setState({ showModal: false });
    });

    const form = document.getElementById("spin-to-win-form");
    form.addEventListener("submit", handleFormSubmit);

    document
      .getElementById("change-theme-button")
      .addEventListener("click", () => {
        let newThemeIndex = state.currentThemeIndex + 1;
        if (newThemeIndex >= state.allThemes.length) {
          newThemeIndex = 0;
        }
        setState({ currentThemeIndex: newThemeIndex });
      });
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

    const openModalButton = document.getElementById("open-modal-button");
    const showStatsButton = document.getElementById("stats-button");

    const modal = document.getElementById("modal");
    const backdrop = document.getElementById("backdrop");

    if (state.showModal) {
      modal.classList.remove("hidden");
      backdrop.classList.add("show");
      openModalButton.innerText = "Hide Modal";
    } else {
      modal.classList.add("hidden");
      backdrop.classList.remove("show");
      openModalButton.innerText = "Show Modal";
    }

    const themeButton = document.querySelector(".btn.theme");
    state.showModal
      ? themeButton.classList.remove("hidden")
      : themeButton.classList.add("hidden");

    const conversionsContainer = document.getElementById(
      "conversions-container"
    );

    if (state.showStats) {
      conversionsContainer.classList.remove("hidden");
      showStatsButton.innerText = "Hide Stats";
    } else {
      conversionsContainer.classList.add("hidden");
      showStatsButton.innerText = "Show Stats";
    }

    //Update conversion rate, conversions, and views
    document.getElementById(
      "conversion-rate"
    ).textContent = `Conversion Rate: ${state.conversionRate}%`;
    document.getElementById(
      "conversions"
    ).textContent = `Conversions: ${state.conversions}`;
    document.getElementById("views").textContent = `Views: ${state.views}`;

    // Theme change logic
    const backgroundImageContainer = document.querySelector(
      ".image-opacity-layer"
    );
    const spinTitle = document.getElementById("spin-title");
    const currentTheme = state.allThemes[state.currentThemeIndex];

    backgroundImageContainer.style.backgroundImage = `url(${currentTheme.backgroundImage})`;
    spinTitle.textContent = currentTheme.title.text;
    spinTitle.style.color = currentTheme.title.color;
    spinTitle.style.textShadow = currentTheme.title.textShadow;
    spinTitle.style.fontFamily = currentTheme.title.font || "monospace";
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
