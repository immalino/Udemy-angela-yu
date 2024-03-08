const numOfDrumBtns = document.querySelectorAll('.drum').length;
console.log(numOfDrumBtns);

document.querySelector('.w').style.backgroundImage = "url('images/tom1.png')";
document.querySelector('.a').style.backgroundImage = "url('images/tom2.png')";
document.querySelector('.s').style.backgroundImage = "url('images/tom3.png')";
document.querySelector('.d').style.backgroundImage = "url('images/tom4.png')";
document.querySelector('.j').style.backgroundImage = "url('images/crash.png')";
document.querySelector('.k').style.backgroundImage = "url('images/kick.png')";
document.querySelector('.l').style.backgroundImage = "url('images/snare.png')";

for (let i = 0; i < numOfDrumBtns; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var key = this.innerHTML;
    makeSound(key);
    buttonClick(key);
  });
}

document.addEventListener("keypress", function(e){
  var key = e.key;
  
  makeSound(key);
  buttonClick(key);

})

function makeSound(key){

    switch (key) {
      case key = "w":
        var audio = new Audio("sounds/tom-1.mp3");
        audio.play();
        break;
    
      case key = "a":
        var audio = new Audio("sounds/tom-2.mp3");
        audio.play();
        break;
    
      case key = "s":
        var audio = new Audio("sounds/tom-3.mp3");
        audio.play();
        break;
    
      case key = "d":
        var audio = new Audio("sounds/tom-4.mp3");
        audio.play();
        break;
    
      case key = "j":
        var audio = new Audio("sounds/crash.mp3");
        audio.play();
        break;
    
      case key = "k":
        var audio = new Audio("sounds/kick-bass.mp3");
        audio.play();
        break;
    
      case key = "l":
        var audio = new Audio("sounds/snare.mp3");
        audio.play();
        break;
    
      default:
        console.log("Unknown key");
        break;
    };
  };

function buttonClick(keypress) {
  var style = document.querySelector("." + keypress);
  style.classList.add("pressed");

  setTimeout(function() {
    buttonClickRemove(keypress);
  }, 100)

}

function buttonClickRemove(keypress) {
  var style = document.querySelector("." + keypress);
  style.classList.remove("pressed");
}