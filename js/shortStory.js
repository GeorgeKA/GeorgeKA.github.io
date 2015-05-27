$(document).ready(function() {
	 setTimeout(function(){         
         document.getElementById('loadingDiv').classList.add("loaded");
    }, 3000);
    
    setInterval(function(){
        document.getElementById("loadingEllipses").classList.toggle("loadingVisibilityToggle");
        document.getElementById("loadingString").classList.add("loadingColourToggle");        
    }, 400);
});