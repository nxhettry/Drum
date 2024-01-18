var noOfButtons = document.querySelectorAll(".drum").length;
for(var i=0; i<noOfButtons; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        var selectedButtonText = this.innerHTML;
        playSound(selectedButtonText);
        addAnimation(selectedButtonText);
    }
    )
}
document.addEventListener("keypress", function(keyPressed){
    playSound(keyPressed.key); //Here the '.key' holds the value of key that is pressed in document.
    addAnimation(keyPressed.key);
})
function playSound(param){
    switch(param){
    case"w":
    var tom1 = new Audio("tom-1.mp3");
    tom1.play();
    break;

    case"a":
    var tom2 = new Audio("tom-2.mp3");
    tom2.play();
    break;

    case"s":
    var tom3 = new Audio("tom-3.mp3");
    tom3.play();
    break;

    case"d":
    var tom4 = new Audio("tom-4.mp3");
    tom4.play();
    break;

    case"j":
    var snare = new Audio("snare.mp3");
    snare.play();
    break;

    case"k":
    var crash = new Audio("crash.mp3");
    crash.play();
    break;

    case"l":
    var kickbass = new Audio("kick-bass.mp3");
    kickbass.play();
    break;

    default: console.log(selectedButtonText);
}
}
function addAnimation(justPassIt){
    var classToAnimate = document.querySelector("." + justPassIt);
    classToAnimate.classList.add("pressed");
    setTimeout(function(){
        classToAnimate.classList.remove("pressed");
    }, 100);
}