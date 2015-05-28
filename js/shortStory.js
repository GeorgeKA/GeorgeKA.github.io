$(window).load(function() { // On page ready
//$(document).ready(function() {    // On page DOM ready
    // Move away loading screen
    setTimeout(function(){
         document.getElementById('loadingDiv').classList.add("loaded");
    }, 2500);
    
    // Add effects to the loading screen
    setInterval(function(){
        document.getElementById("loadingEllipses").classList.toggle("loadingVisibilityToggle");
        document.getElementById("loadingString").classList.add("loadingColourToggle");        
    }, 400);
});