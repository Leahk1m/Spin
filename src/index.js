import "./style.css";

function createSpinToWin(options) {
  let state = {
    isSpinning: false,
    currentPrize: null,
    discountsArray: [],
    maxNumOfPrizes: options.maxNumOfPrizes || 12,
    spinChart: null,
    rotationDegrees: 0,
    showModal: false,
    showStats: false,
    conversionRate: 0,
    conversions: 0,
    views: 0,
    hasErrors: true,
    currentThemeIndex: 0,
    formTitle: options.formTitle || "Spin to win!",
    formDescription:
      options.formDescription ||
      "Enter your info for the chance to win one of our big discounts!",
    congratulatoryTitle: options.congratulatoryTitle || "Congratulations!",
    congratulatoryDescription:
      options.congratulatoryDescription ||
      "The wheel favors you with {{{ prize }}}!",
    // Default Themes
    allThemes: [
      {
        backgroundImage:
          "https://hips.hearstapps.com/hmg-prod/images/delish-profiteroles-05-1644593689.jpeg?crop=1xw:0.7874231032125769xh;center,top",
        title: {
          text: "You deserve a treat",
          color: "black",
          font: "Khand, sans-serif",
        },
        content: {
          text: "Enter your info for the chance to win one of our big discounts!",
          color: "white",
          font: "Khand, sans-serif",
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
        content: {
          text: "Enter your info for the chance to win one of our big discounts!",
          color: "white",
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
        content: {
          text: "Enter your info for the chance to win one of our big discounts!",
          color: "white",
          font: "Khand, sans-serif",
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

  function setupEventListeners() {
    const openModalButton = document.getElementById("open-modal-button");
    const showStatsButton = document.getElementById("stats-button");
    const spinWheelButton = document.querySelector(".btn.spin");
    const xButton = document.getElementById("x-button");
    const changeThemeButton = document.getElementById("change-theme-button");

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

    changeThemeButton.addEventListener("click", () => {
      let newThemeIndex = state.currentThemeIndex + 1;
      if (newThemeIndex >= state.allThemes.length) {
        newThemeIndex = 0;
      }
      setState({ currentThemeIndex: newThemeIndex });
    });

    //Form validation
    const inputs = document.querySelectorAll("input");
    inputs.forEach((input) => {
      input.addEventListener("input", () => {
        validateForm();
      });
    });
  }

  function validateForm() {
    const formData = new FormData(document.getElementById("spin-to-win-form"));
    const formValues = Object.fromEntries(formData.entries());

    console.log("formValues", formValues);

    if (
      formValues.firstName &&
      formValues.lastName &&
      formValues.email &&
      isValidEmail(formValues.email)
    ) {
      setState({ hasErrors: false });
    } else {
      setState({ hasErrors: true });
    }
  }

  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  //API call to retrieve selected prize
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
      console.error("error:", error);
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
    //Wheel set up with Chart.js
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
    updateElementVisibility(
      "congratulatory-title",
      !state.isSpinning && !!state.currentPrize
    );
    updateElementVisibility(
      "congratulatory-description",
      !state.isSpinning && !!state.currentPrize
    );
    updateElementVisibility(
      "spin-to-win-form",
      state.isSpinning || !state.currentPrize
    );
    updateElementVisibility("modal", state.showModal);
    updateElementVisibility("backdrop", state.showModal, "show");
    updateElementVisibility("conversions-container", state.showStats);

    //Button states
    updateButtonState(
      "open-modal-button",
      state.showModal,
      "Hide Modal",
      "Show Modal"
    );
    updateButtonState(
      "stats-button",
      state.showStats,
      "Hide Stats",
      "Show Stats"
    );
    updateButtonState(
      ".btn.spin",
      state.isSpinning || state.hasErrors,
      "Try your luck",
      "Try your luck",
      true
    );
    updateButtonState(
      "change-theme-button",
      state.showModal,
      "Change Theme",
      null,
      false,
      true
    );

    // Text content states
    updateTextContent("form-title", state.formTitle);
    updateTextContent("form-description", state.formDescription);
    updateTextContent("congratulatory-title", state.congratulatoryTitle);
    updateTextContent(
      "congratulatory-description",
      state.congratulatoryDescription
    );

    //Conversion stats
    updateTextContent(
      "conversion-rate",
      `Conversion Rate: ${state.conversionRate}%`
    );
    updateTextContent("conversions", `Conversions: ${state.conversions}`);
    updateTextContent("views", `Views: ${state.views}`);

    // Theme change
    const currentTheme = state.allThemes[state.currentThemeIndex];
    applyTheme(currentTheme);
  }

  function updateElementVisibility(
    elementId,
    condition,
    additionalElement = ""
  ) {
    const element =
      document.getElementById(elementId) || document.querySelector(elementId);
    if (element) {
      element.classList.toggle("hidden", !condition);

      if (additionalElement) {
        element.classList.toggle(additionalElement, condition);
      }
    }
  }

  function updateButtonState(
    buttonId,
    condition,
    textTrue,
    textFalse,
    disable = false,
    hidden = false
  ) {
    const button =
      document.getElementById(buttonId) || document.querySelector(buttonId);
    if (button) {
      button.innerText = condition ? textTrue : textFalse;
      if (disable) {
        button.disabled = condition;
      }
      if (hidden) {
        button.classList.toggle("hidden", !condition);
      }
    }
  }

  function updateTextContent(elementId, text) {
    const element = document.getElementById(elementId);
    if (element) {
      if (text.includes("{{{ prize }}}")) {
        if (state.currentPrize && state.currentPrize.slice(-1) === "%") {
          text = text.replace("{{{ prize }}}", `${state.currentPrize} off`);
        }
        text = text.replace("{{{ prize }}}", state.currentPrize);
      }
      element.textContent = text;
    }
  }

  function applyTheme(theme) {
    const backgroundImageContainer = document.querySelector(
      ".image-opacity-layer"
    );
    const formTitle = document.getElementById("form-title");
    const formDescription = document.getElementById("form-description");
    const congratsTitle = document.getElementById("congratulatory-title");
    const congratsDescription = document.getElementById(
      "congratulatory-description"
    );

    if (backgroundImageContainer) {
      backgroundImageContainer.style.backgroundImage = `url(${theme.backgroundImage})`;
    }

    if (formTitle) {
      formTitle.textContent = theme.title.text;
      formTitle.style.color = theme.title.color;
      formTitle.style.textShadow = theme.title.textShadow;
      formTitle.style.fontFamily = theme.title.font || "monospace";
    }

    if (formDescription) {
      formDescription.textContent = theme.content.text;
      formDescription.style.color = theme.content.color;
      formDescription.style.fontFamily = theme.content.font || "monospace";
    }

    if (congratsTitle) {
      congratsTitle.style.color = theme.title.color;
      congratsTitle.style.textShadow = theme.title.textShadow;
      congratsTitle.style.fontFamily = theme.title.font || "monospace";
    }

    if (congratsDescription) {
      congratsDescription.style.color = theme.content.color;
      congratsDescription.style.fontFamily = theme.content.font || "monospace";
    }
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

const spinToWin = createSpinToWin({
  formTitle: "Special Offer Just for You",
  formDescription: "Fill out the form to see what you win!",
  // congratulatoryTitle: "Congratulations!",
  // congratulatoryDescription: "{{{ prize }}} is what you've won!",
});
spinToWin.initialize();
