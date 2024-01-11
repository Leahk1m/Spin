const discountsArray = [];
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

    console.log("did the API return", discounts);

    spinChart = new Chart("spin-wheel", {
      type: "pie",
      plugins: [ChartDataLabels],
      data: {
        labels: discountsArray.map((discount, index) => {
          const rotationDegrees = index * (360 / discountsArray.length);
          return `${discount.code} (${rotationDegrees}°)`;
        }),
        datasets: [
          {
            data: [1, 1, 1, 1, 1],
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
            rotation: 90,
            color: "#ffffff",
            formatter: (_, context) =>
              context.chart.data.labels[context.dataIndex],
            font: { size: 24 },
          },
        },
      },
    });
  } catch (error) {
    console.error("error fetching discounts:", error);
  }
};

function generateValue(targetCouponCode) {
  spinBtn.disabled = true;
  const targetDiscount = discountsArray.find(
    (discount) => discount.code === targetCouponCode
  );
  if (!targetDiscount) {
    return;
  }

  const totalDiscounts = discountsArray.length;
  const degreesPerDiscount = 360 / totalDiscounts;
  const targetAngle = 360 - targetDiscount.index * degreesPerDiscount;
  const totalDegrees = 2800 + targetAngle; // 8 spins + target angle

  const rotationInterval = window.setInterval(() => {
    const currentRotation = spinChart.options.rotation;
    const newRotation = currentRotation + 10;
    spinChart.options.rotation = newRotation;
    spinChart.update();

    if (newRotation >= totalDegrees) {
      clearInterval(rotationInterval);
      spinChart.options.rotation = targetAngle;
      spinChart.update();
      spinBtn.disabled = false;
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

        generateValue(couponCode);
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
    console.log("textfield", textfield);
    textfield.addEventListener("input", function (event) {
      const firstName = document.getElementById("firstName").value;
      const lastName = document.getElementById("lastName").value;
      const email = document.getElementById("email").value;

      if (firstName && lastName && email) {
        submitButton.disabled = false;
      } else {
        submitButton.disabled = true;
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

  console.log("data", data);

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
