//left right rotation
var counter = 1;
function toggle()
{
    let x = document.getElementById("lead");
    function rightMove(){
        counter++;
        x.style.transform = "rotate(5deg)";
    }
    function leftMove(){
        counter++;
        x.style.transform = "rotate(-5deg)"
    }
    if(counter & 1) rightMove();
    else leftMove();
}

function toggleBack()
{
    let x = document.getElementById("lead");
    x.style.transform = "rotate(0)";
}
//

// autotyping
var typed = new Typed(".auto-type",{strings: ["Notes","Pdf","Question Paper","Learning Resource"],typeSpeed: 150,backSpeed: 180,loop:true})
//

//reveal
function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 100;
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } 
        else {
            reveals[i].classList.remove("active");
        }
    }
}
window.addEventListener("scroll", reveal);
reveal();
//


