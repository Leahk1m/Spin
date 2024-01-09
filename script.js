function handleRotate(couponCode) {

  const index = discountsArray.indexOf(couponCode);

  console.log('discountsArray', discountsArray)
  console.log('index', index)
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
    console.log('Success:', data);
    const couponCode = data.data.offer.label; 

    console.log('coupon code', couponCode)

    handleRotate(couponCode);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
});



