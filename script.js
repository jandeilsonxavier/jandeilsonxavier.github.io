window.onload = function(){

let bars = document.querySelectorAll(".progress-bar");

bars.forEach(function(bar){

let value = bar.getAttribute("data-progress");

bar.style.width = value + "%";

});

}
