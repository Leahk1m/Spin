// document.getElementById('spinButton').addEventListener('click', function() {
//   var wheel = document.getElementById('wheel');
//   var deg = Math.floor(5000 + Math.random() * 5000); 

//   wheel.style.transition = 'transform 5s ease-out';
//   wheel.style.transform = `rotate(${deg}deg)`;

//   setTimeout(function() {
//       wheel.style.transition = 'none';
//       wheel.style.transform = `rotate(${deg % 360}deg)`;
//   }, 5000); 
// });

function handleRotate(){
  var min = 1024;
  var max = 9999;
  var deg = Math.floor(Math.random() * (max - min)) + min;
  document.getElementById('box').style.transform = "rotate("+deg+"deg)";

  var element = document.getElementById('mainbox');
  element.classList.remove('animate');

  setTimeout(function(){
    element.classList.add('animate');
  }, 5000);

}