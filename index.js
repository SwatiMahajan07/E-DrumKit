var triggerButton;
for (var i=0; i<document.querySelectorAll("button").length; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function (){
    triggerButton = this.textContent;
    keyTone(triggerButton);
    popButton(triggerButton);
  });
};

document.addEventListener("keydown", function(event) {
  keyTone(event.key);
  popButton(event.key);
});

function keyTone(triggerButton){
  switch (triggerButton.toUpperCase()) {
    case 'W':
      var lowTom = new Audio('sounds/lowTom.mp3');
      lowTom.play();
      break;
    case 'A':
      var highTom = new Audio('sounds/highTom.mp3');
      highTom.play();
      break;
    case 'S':
      var floorTom1 = new Audio('sounds/floorTom1.mp3');
      floorTom1.play();
      break;
    case 'D':
      var floorTom2 = new Audio('sounds/floorTom2.mp3');
      floorTom2.play();
      break;
    case 'J':
      var snareDrum = new Audio('sounds/snareDrum.mp3');
      snareDrum.play();
      break;
    case 'K':
      var cymbal = new Audio('sounds/cymbal.mp3');
      cymbal.play();
      break;
    case 'L':
      var bassDrum = new Audio('sounds/bassDrum.mp3');
      bassDrum.play();
      break;
  }
}

function popButton(triggerButton){
  var key = document.querySelector("." + triggerButton.toLowerCase());
  console.log(key.classList.add("button-hover"));
  setTimeout(function () {
    return (key.classList.remove("button-hover"));
  }, 150);
}
