console.log("javascript!!")

const theButton = document.getElementById("Button");
let theDiv = document.getElementById("vid");
let the_video = document.createElement("iframe");

theButton.addEventListener('click', rick_roll)

function rick_roll(){

    console.log("button clicked!!");
    theDiv.appendChild(the_video)
    the_video.setAttribute("src", "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1")
    the_video.setAttribute("autoplay", "1")
    the_video.setAttribute("width", "560px")
    the_video.setAttribute("height", "315px")
    
}
