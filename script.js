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

document.getElementById('spin-to-win-form').addEventListener('submit', function(event) {
  event.preventDefault();
  
  handleRotate();
});


