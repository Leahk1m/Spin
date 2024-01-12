const discountsArray = [];
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
    code: "Free sakari swag",
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
let spinChart;
let spinBtn;

window.onload = async (event) => {
  spinBtn = document.querySelector(".btn.spin");

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
            anchor: "end",
            align: "start",
            textAlign: "center",
          },
        },
      },
    });
  } catch (error) {
    console.error("error:", error);
  }
};
const arrow = document.getElementById("wheel-arrow");

// spin wheel and land on selected coupon code
function landOnSelectedCode(targetCouponCode) {
  spinBtn.disabled = true;
  const targetDiscount = discountsArray.find(
    (discount) => discount.code === targetCouponCode
  );
  if (!targetDiscount) {
    return;
  }

  const totalDiscounts = 12;
  const degreesPerDiscount = 360 / totalDiscounts;
  const targetAngle =
    360 -
    targetDiscount.index * degreesPerDiscount +
    arrow.getBoundingClientRect().width;
  const totalDegrees = 2800 + targetAngle; // 8 spins + target angle

  const rotationInterval = window.setInterval(() => {
    const currentRotation = spinChart.options.rotation;
    const newRotation = currentRotation + 10;

    const wheel = document.getElementById("spin-wheel");
    wheel.style.transition = "transform 5s ease-out";

    spinChart.options.rotation = newRotation;
    spinChart.update();

    if (newRotation >= totalDegrees) {
      clearInterval(rotationInterval);
      spinChart.options.rotation = targetAngle;
      spinChart.update();
      spinBtn.disabled = false;
      renderConfetti();
    }
  }, 10);
}

document
  .getElementById("spin-to-win-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const formData = new FormData(this);
    const payload = {
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      email: formData.get("email"),
    };

    fetch("https://callbacks.dev.sakari.io/spintowin/13/contacts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((response) => response.json())
      .then((data) => {
        const couponCode = data.data.offer.label;
        console.log("coupon code", couponCode);

        landOnSelectedCode(couponCode);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  });

/// confetti logic after spinning wheel
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

/// form validation (submit button disabled unless all fields are filled)
document.addEventListener("DOMContentLoaded", function () {
  const textFields = document.querySelectorAll(".textfield");
  const submitButton = document.querySelector(".btn.spin");

  textFields.forEach((textfield) => {
    textfield.addEventListener("input", function (event) {
      const firstName = document.getElementById("firstName").value;
      const lastName = document.getElementById("lastName").value;
      const email = document.getElementById("email").value;

      const validationMsg = document.getElementById("email").validationMessage;
      if (validationMsg) {
        submitButton.disabled = true;
      } else if (firstName && lastName && email && !validationMsg) {
        submitButton.disabled = false;
      }
    });
  });
});

/// show stats
document
  .getElementById("stats-button")
  .addEventListener("click", function (event) {
    const conversions = document.getElementById("conversions");
    const views = document.getElementById("views");

    if (
      conversions.style.display !== "none" &&
      views.style.display !== "none"
    ) {
      conversions.style.display = "none";
      views.style.display = "none";
      this.textContent = "Show Stats";
    } else {
      fetch("https://callbacks.dev.sakari.io/spintowin/13/stats")
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          console.log("stats data", data);
          renderStats(data.data);
        })
        .catch((err) => {
          console.log("error:", err);
        });
    }
  });

function renderStats(data) {
  const conversions = document.getElementById("conversions");
  const views = document.getElementById("views");

  conversions.innerHTML = `Conversions: ${data.conversations}`; //this should change from conversations to conversions
  views.innerHTML = `Views: ${data.views}`;

  conversions.style.display = "block";
  views.style.display = "block";
  document.getElementById("stats-button").textContent = "Hide Stats";
}

/// open/close modal handling

document.getElementById("open-modal-button").addEventListener("click", () => {
  if (modal.classList.contains("show")) {
    handleModal("close");
  } else {
    handleModal("open");
  }
});

const handleModal = (action) => {
  const modal = document.getElementById("modal");
  const backdrop = document.getElementById("backdrop");
  const openModalButton = document.getElementById("open-modal-button");

  switch (action) {
    case "open":
      modal.classList.add("show");
      backdrop.classList.add("show");
      openModalButton.textContent = "Hide Modal";
      break;
    case "close":
      modal.classList.remove("show");
      backdrop.classList.remove("show");
      openModalButton.textContent = "Show Modal";
      break;
    default:
      break;
  }
};

document.addEventListener("click", (event) => {
  if (event.target.id === "backdrop" || event.target.id === "x-button") {
    handleModal("close");
  }
});
