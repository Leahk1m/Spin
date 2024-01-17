//HTML
const discountsArray = [];
let spinChart;
let rotationDegrees;
const defaultDiscounts = [
  {
    code: "100%",
    index: 0,
  },
  {
    code: "Charity Donation",
    index: 0,
  },
  {
    code: "80%",
    index: 0,
  },
  {
    code: "90%",
    index: 0,
  },
  {
    code: "Hawaii vacation",
    index: 0,
  },
  {
    code: "iPhone 12",
    index: 0,
  },
  {
    code: "Macbook pro",
    index: 0,
  },
];

const loadExternalResources = () => {
  const head = document.head;

  const faLink = document.createElement("link");
  faLink.rel = "stylesheet";
  faLink.href =
    "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css";

  head.appendChild(faLink);

  const confettiScript = document.createElement("script");
  confettiScript.src =
    "https://cdn.jsdelivr.net/npm/canvas-confetti@1.4.0/dist/confetti.browser.min.js";
  document.body.appendChild(confettiScript);

  const chartScript = document.createElement("script");
  chartScript.src =
    "https://cdnjs.cloudflare.com/ajax/libs/Chart.js/3.9.1/chart.min.js";
  document.body.appendChild(chartScript);

  const chartPluginScript = document.createElement("script");
  chartPluginScript.src =
    "https://cdnjs.cloudflare.com/ajax/libs/chartjs-plugin-datalabels/2.1.0/chartjs-plugin-datalabels.min.js";
  document.body.appendChild(chartPluginScript);
};

const createBackground = () => {
  const backdrop = document.createElement("div");
  backdrop.className = "backdrop";

  document.body.appendChild(backdrop);

  const backgroundContainer = document.createElement("div");
  backgroundContainer.className = "background-container";
  const imageOpacityLayer = document.createElement("div");
  imageOpacityLayer.className = "image-opacity-layer";

  backgroundContainer.appendChild(imageOpacityLayer);
};

const createActionButtons = () => {
  const actionButtons = document.createElement("div");
  actionButtons.className = "action-buttons";

  const statsButton = document.createElement("button");
  statsButton.className = "btn";
  statsButton.id = "action-button";
  statsButton.textContent = "Show Stats";

  const openModalButton = document.createElement("button");
  openModalButton.className = "btn";
  openModalButton.id = "action-button";
  openModalButton.textContent = "Open Modal";

  const changeThemeButton = document.createElement("button");
  changeThemeButton.className = "btn";
  changeThemeButton.id = "action-button";
  changeThemeButton.textContent = "Change Theme";

  actionButtons.appendChild(statsButton);
  actionButtons.appendChild(openModalButton);
  actionButtons.appendChild(changeThemeButton);

  document.body.appendChild(actionButtons);
};

function createSpinToWinComponent() {
  //MODAL
  const modal = document.createElement("div");
  modal.id = "modal";

  const contentContainer = document.createElement("div");
  contentContainer.className = "content-container";
  const mainBox = document.createElement("div");
  mainBox.className = "mainbox";

  //WHEEL
  const wheelContainer = document.createElement("div");
  wheelContainer.className = "wheel-container";
  const wheel = document.createElement("canvas");
  wheel.className = "wheel";
  const wheelCenter = document.createElement("button");
  wheel.id = "spin-wheel";
  wheelCenter.className = "wheel-center";
  wheelContainer.appendChild(wheel);
  wheelContainer.appendChild(wheelCenter);
  modal.appendChild(wheelContainer);

  const xButtonContainer = document.createElement("div");
  xButtonContainer.className = "x-button-container";

  const xButton = document.createElement("i");
  xButton.className = "fa-solid fa-x";
  xButton.id = "x-button";
  xButton.style.cursor = "pointer";

  mainBox.appendChild(wheelContainer);
  contentContainer.appendChild(mainBox);
  modal.appendChild(contentContainer);

  xButtonContainer.appendChild(xButton);
  modal.appendChild(xButtonContainer);

  document.body.appendChild(modal);

  initializeUserForm();
}

function createInput(className, type, placeholder) {
  const input = document.createElement("input");
  input.className = className;
  input.type = type;
  input.placeholder = placeholder;
  return input;
}

//USER FORM
const initializeUserForm = () => {
  const modal = document.getElementById("modal");
  const userForm = document.createElement("form");
  userForm.className = "user-form";

  const inputContainer = document.createElement("div");
  inputContainer.className = "input-container";

  const firstNameInput = createInput("input", "text", "Enter your name");
  const lastNameInput = createInput("input", "text", "Enter your last name");
  const emailInput = createInput("input", "email", "Enter your email");

  [firstNameInput, lastNameInput, emailInput].forEach((input) =>
    inputContainer.appendChild(input)
  );

  const spinButton = document.createElement("button");
  spinButton.className = "btn spin";
  spinButton.type = "submit";
  spinButton.textContent = "Try your luck";

  userForm.appendChild(inputContainer);
  userForm.appendChild(spinButton);

  setUpWheelData(spinButton);
  modal.appendChild(userForm);
};

const setUpWheelData = async (spinBtn) => {
  const spinColors = [
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
  ];

  try {
    const response = await fetch(
      "https://callbacks.dev.sakari.io/spintowin/13"
    );
    const discounts = await response.json();
    discounts.data.forEach((discount, index) => {
      discountsArray.push({ code: discount, index: index });
    });
    const wheel = document.querySelector(".wheel");
    if (wheel) {
      initializeSpinChart(wheel, discounts, spinColors);
    }
  } catch (error) {
    console.error("error:", error);
  }
};

const initializeSpinChart = (wheel, discounts, spinColors) => {
  while (discountsArray.length < 12) {
    //randomly select from default discounts array
    const randomIndex = Math.floor(Math.random() * defaultDiscounts.length);
    //update the index of the default discount and add to all discounts array
    const randomDiscount = defaultDiscounts[randomIndex];
    if (!discountsArray.includes(randomDiscount)) {
      discountsArray.push({
        code: randomDiscount.code,
        index: discountsArray.length,
      });
    }
  }

  //https://chartjs-plugin-datalabels.netlify.app/guide/getting-started.html
  spinChart = new Chart("spin-wheel", {
    type: "pie",
    plugins: [ChartDataLabels],
    data: {
      labels: discountsArray.map((discount, index) => {
        rotationDegrees = index * (360 / discountsArray.length);
        return discount.code;
      }),
      datasets: [
        {
          data: Array.from({ length: 12 }, (_, index) => 1),
          backgroundColor: spinColors,
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
          rotation: rotationDegrees,
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
          // context.chart.data.labels[context.dataIndex],
          font: { size: 20 },
          anchor: "center",
          align: "end",
          textAlign: "center",
        },
      },
    },
  });
};

//CSS
const addStyles = () => {
  const style = document.createElement("style");
  style.textContent = `
      body {
        height: 100vh;
        width: 100%;
        display: flex;
        align-items: center;
      }
      .action-buttons {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        position: absolute;
        gap: 8px;
      }
      #modal {
        position: absolute;
        box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);
        z-index: 30;
        border-radius: 12px;
        // opacity: 0;
        transition: opacity 0.2s ease;
        border: 1px solid pink;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .wheel {
        position: absolute;
        right: 50%;
      }
      .content-container {
        display: flex;
        justify-content: center;
        align-items: center;
        padding-right: 150px;
        position: relative;
        z-index: 2;
        background-repeat: repeat;
        background-size: cover;
        background-position: center;
      }
      .input-container {
        display: flex;
        flex-direction: column;
      
      }
      .mainbox {
        position: relative;
        width: 500px;
        height: 500px;
      }
      .user-form {
        text-align: center;
        padding: 20px;
        border-radius: 8px;
        margin: auto;
        width: fit-content;
        position: absolute;
        left: 50%;
      }
      .user-form h2 {
        color: #000;
        margin-bottom: 15px;
      }
      
      .user-form p {
        color: #333;
        margin-bottom: 20px;
      }
      
      .input{
        font-size: 16px;
        padding: 10px;
        margin-bottom: 10px;
        border: 1px solid #ddd;
        border-radius: 4px;
        display: block;
        width: 250px;
        box-sizing: border-box;
        width: 100%;
      }
      #x-button {
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        width: 23px;
        height: 23px;
        font-size: 0.6rem;
        cursor: pointer;
        z-index: 5;
        border: 1px solid white;
        box-shadow: 0px 0px 3px 0px #ffffff21;
        background-color: #949494;
        color: white;
        font-weight: 700;
        -webkit-text-stroke: medium;
        transition: all 0.3s ease;
      }
      .btn {
        position: relative;
        display: inline-block;
        height: auto;
        background-color: black;
        cursor: pointer;
        min-width: 150px;
        border: 1px solid black;
        color: white;
        transition: all 0.3s ease;
        padding: 10px;
        text-transform: uppercase;
      }
      
      .btn.spin {
        width: 100%;
      }
      
      .btn span {
        position: relative;
        display: inline-block;
        font-size: 14px;
        font-weight: bold;
        letter-spacing: 2px;
        top: 0;
        left: 0;
        width: 100%;
        padding: 10px;
        transition: 0.2s;
      }
      
      .btn:hover {
        color: black;
        background-color: white;
        border: 1px solid black;
      }
      
      .btn:disabled {
        background-color: #ccc;
        color: white;
        cursor: default;
        border: none;
      }
      

      #x-button:hover {
        background-color: #ffffff;
        color: #949494;
        border: 1px solid #949494;
        box-shadow: 0px 0px 3px 0px #949494;
        transition: all 0.3s ease;
      }

      .wheel-center {
        position: absolute;
        transform: translate(-50%, -50%);
        top: 50%;
        height: 20%;
        width: 20%;
        border-radius: 50%;
        cursor: default;
        border: none;
        background: white;
        color: var(--white_color);
        text-transform: uppercase;
        letter-spacing: 0.1rem;
        font-weight: 600;
        box-shadow: 6px 5px 5px 3px #7f7f7f6e;
      }

  `;
  document.head.appendChild(style);
};

//EVENT LISTENERS

const setupEventListeners = () => {
  const xButton = document.getElementById("x-button");
  xButton.addEventListener("click", () => {});
};

const initializeComponent = () => {
  loadExternalResources();
  createActionButtons();
  createSpinToWinComponent();
  addStyles();
  setupEventListeners();
};

//initialize the component
initializeComponent();
