document.addEventListener("keypress", function(event){
    let temp = event.key.toLowerCase();
    makeSound(temp);
    buttonAnimation(temp);
})

for(let i=0;i<=17;i++){
document.querySelectorAll(".keys")[i].addEventListener("click", bajhasound);
function bajhasound(){
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
}
}

function makeSound(key){
    switch(key){
        case "a":
            var audio = new Audio("A4.mp3");
            audio.play();
            break;
        case "s":
            var audio = new Audio("B4.mp3");
            audio.play();
            break;
        case "d":
            var audio = new Audio("C4.mp3");
            audio.play();
            break;
        case "f":
            var audio = new Audio("C5.mp3");
            audio.play();
            break;
        case "g":
            var audio = new Audio("D4.mp3");
            audio.play();
            break;
        case "h":
            var audio = new Audio("D5.mp3");
            audio.play();
            break;
        case "j":
            var audio = new Audio("E4.mp3");
            audio.play();
            break;
        case "k":
            var audio = new Audio("E5.mp3");
            audio.play();
            break;
        case "l":
            var audio = new Audio("F4.mp3");
            audio.play();
            break;
        case "p":
            var audio = new Audio("G4.mp3");
            audio.play();
            break;
        //middle
        case "w":
            var audio = new Audio("Ab4.mp3");
            audio.play();
            break;
        case "e":
            var audio = new Audio("Bb4.mp3");
            audio.play();
            break;
        case "t":
            var audio = new Audio("Db4.mp3");
            audio.play();
            break;
        case "y":
            var audio = new Audio("Db5.mp3");
            audio.play();
            break;
        case "u":
            var audio = new Audio("Eb4.mp3");
            audio.play();
            break;
        case "i":
            var audio = new Audio("Eb5.mp3");
            audio.play();
            break;
        case "o":
            var audio = new Audio("Gb4.mp3");
            audio.play();
            break;
        default:
            console.log(buttonInnerHTML);
    }
}
// for animation 
function buttonAnimation(currentkey){
    var activeButoon= document.querySelector("."+ currentkey);
    activeButoon.classList.add("thicho");
    setTimeout(function(){
        activeButoon.classList.remove("thicho")
    }, 200)
}