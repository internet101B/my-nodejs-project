/*var numberOfDrumButtons =  document.querySelectorAll(".drum").length;

for(var i = 0; i<numberOfDrumButtons; i++)
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        alert("I got Click!!!");
    });

document.getElementById("btn").addEventListener("click",function(){

    let r = document.getElementById("radius").value;

    document.getElementById("Area").innerHTML = r * r * 3.14159;
});

var n = document.querySelectorAll(".drum").length;
for(let i=0; i<n; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
    var b = document.querySelectorAll(".drum")[i].innerHTML;
    alert("I got Click " + b + " button");
    });
}*/

/*var numberOfDrumButtons =  document.querySelectorAll(".drum").length;

for(var i = 0; i<numberOfDrumButtons; i++)
    document.querySelectorAll("button")[i].addEventListener("click",function(){
        var buttonInnerHTML = this.innerHTML;
        switch(buttonInnerHTML){
            case "w":
                var audio = new Audio("sounds/tom-1.mp3");
                audio.play();
            break;
            case "a":
                var audio = new Audio("sounds/tom-2.mp3");
                audio.play();
            break;
            case "s":
                var audio = new Audio("sounds/tom-3.mp3");
                audio.play();
            break;
            case "d":
                var audio = new Audio("sounds/tom-4.mp3");
                audio.play();
            break;
            case "j":
                var audio = new Audio("sounds/snare.mp3");
                audio.play();
            break;
            case "k":
                var audio = new Audio("sounds/crash.mp3");
                audio.play();
            break;
            case "l":
                var audio = new Audio("sounds/kick.mp3");
                audio.play();
            break;
        }
    });*/

    var numberOfDrumButtons =  document.querySelectorAll(".drum").length;

    for(var i = 0; i<numberOfDrumButtons; i++)
        document.querySelectorAll("button")[i].addEventListener("click",function(){
            var buttonInnerHTML = this.innerHTML;
            makeSound(buttonInnerHTML);
        });

        document.addEventListener("keypress",function(event){
            makeSound(event.key);
            alert("The key was pressed!");
        });

        function makeSound(key){
            switch(key){
                case "w":
                    var tom1 = new Audio("sounds/tom-1.mp3");
                    tom1.play();
                break;
                case "a":
                    var tom2 = new Audio("sounds/tom-2.mp3");
                    tom2.play();
                break;
                case "s":
                    var tom3 = new Audio("sounds/tom-3.mp3");
                    tom3.play();
                break;
                case "d":
                    var tom4 = new Audio("sounds/tom-4.mp3");
                    tom4.play();
                break;
                case "j":
                    var snare = new Audio("sounds/snare.mp3");
                    snare.play();
                break;
                case "k":
                    var crash = new Audio("sounds/crash.mp3");
                    crash.play();
                break;
                case "l":
                    var kick = new Audio("sounds/kick.mp3");
                    kick.play();
                break;
                default:
                    console.log(buttonInnerHTML);
            }
        }