$(document).ready(function() {
    // Move away loading screen
    setTimeout(function(){
         document.getElementById('loadingDiv').classList.add("loaded");
    }, 3000);
    
    // Add effects to the loading screen
    setInterval(function(){
        document.getElementById("loadingEllipses").classList.toggle("loadingVisibilityToggle");
        document.getElementById("loadingString").classList.add("loadingColourToggle");        
    }, 400);
});