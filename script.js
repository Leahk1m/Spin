function handleRotate(couponCode) {
  const index = discountsArray.indexOf(couponCode);
  const totalDiscounts = discountsArray.length;
  const degreesPerDiscount = 360 / totalDiscounts;
  const targetDegrees = index * degreesPerDiscount;

  var minSpins = 3; 
  var maxSpins = 6; 
  var spins = Math.floor(Math.random() * (maxSpins - minSpins)) + minSpins;
  var totalDegrees = spins * 360 + targetDegrees;

  var box = document.getElementById('box');
  box.style.transition = 'transform 5s ease-out';
  box.style.transform = `rotate(${totalDegrees}deg)`;

  setTimeout(function() {
    document.getElementById('spin-to-win-form').style.display = 'none';
    document.getElementById('congratsMessage').style.display = 'block'; 
    document.getElementById('confettiWrapper').style.display = 'block';
    renderConfetti();
}, 5000); 
}

function renderConfetti() {
  var containerBounds = document.getElementById('confettiWrapper').getBoundingClientRect();

  
  confetti({
      particleCount: 100,
      spread: 70,
      origin: { 
          x: (containerBounds.left + containerBounds.right) / (2 * window.innerWidth),
          y: (containerBounds.top + containerBounds.bottom) / (2 * window.innerHeight)
      }
  });
}

document.getElementById('spin-to-win-form').addEventListener('submit', function(event) {
  event.preventDefault();

  const formData = new FormData(this);
  const payload = {
    firstName: formData.get('firstName'),
    lastName: formData.get('lastName'),
    email: formData.get('email')
  };

  fetch('https://callbacks.dev.sakari.io/spintowin/13/contacts', {
    method: 'POST', 
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
  .then(response => response.json())
  .then(data => {
    const couponCode = data.data.offer.label; 
    console.log('coupon code', couponCode)

    handleRotate(couponCode);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const textFields = document.querySelectorAll('.textfield');
  const submitButton = document.getElementById('submitButton');

  textFields.forEach((textfield) => {
    console.log('textfield', textfield)
    textfield.addEventListener('input', function(event) {
      const firstName = document.getElementById('firstName').value;
      const lastName = document.getElementById('lastName').value;
      const email = document.getElementById('email').value;

      if(firstName && lastName && email) {
        submitButton.disabled = false;
      } else {
        submitButton.disabled = true;
      }
    });
  })
});

$(document).ready(function() {
  $("#dialog").dialog({
      autoOpen: true, 
      modal: true,     
      width: 'auto',     
      height: 'auto',  
  });

  $("#openDialog").click(function() {
      $("#dialog").dialog("open");
  });
});

document.getElementById('statsButton').addEventListener('click', function(event) {
  renderConfetti();
  const conversions = document.getElementById('conversions');
  const views = document.getElementById('views');

  if (conversions.style.display !== 'none' && views.style.display !== 'none') {
    conversions.style.display = 'none';
    views.style.display = 'none';
    this.textContent = 'Show Stats'; 
  } else {
    fetch('https://callbacks.dev.sakari.io/spintowin/13/stats').then(res => {
      return res.json();
    }).then(data => {
      console.log('stats data', data)
      renderStats(data.data);
    }).catch(err => {
      console.log('error:', err);
    });
  }
});

function renderStats(data) {
  const conversions = document.getElementById('conversions'); 
  const views = document.getElementById('views');
  
  console.log('data', data)

  conversions.innerHTML = `Conversions: ${data.conversations}`; //this should change from conversations to conversions
  views.innerHTML = `Views: ${data.views}`;

  conversions.style.display = 'block';
  views.style.display = 'block';
  document.getElementById('statsButton').textContent = 'Hide Stats';
}

document.getElementById("openModalButton").addEventListener("click", () => {
  if(modal.classList.contains("show")) {
    handleModal('close');
  } else {
    handleModal('open');
  }
}); 

const handleModal = (action) => {
  const modal = document.getElementById("modal");
  const backdrop = document.getElementById("backdrop");
  const openModalButton = document.getElementById("openModalButton");

  switch(action) {
    case 'open':
      modal.classList.add("show");
      backdrop.classList.add("show");
      openModalButton.textContent = 'Hide Modal';
      break;
    case 'close':
      modal.classList.remove("show");
      backdrop.classList.remove("show");
      openModalButton.textContent = 'Show Modal';
      break;
    default:
      break;
  }
};

document.addEventListener("click", (event) => {
  if (event.target.id === "backdrop" || event.target.id === "modal-close-x") {
    handleModal('close');
  }
});
