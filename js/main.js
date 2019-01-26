(()=>{

var content = document.getElementById("description");
	var button = document.getElementById("show-more");

	function showmore(){
	
 		if (content.className == "open")
 		{
 		console.log(this);
 		content.className = "";
 		button.innerHTML = "Show More";
 		} 

 		else {
 		console.log(this);
 		content.className = "open";
 		button.innerHTML = "Show Less";
 		}

 		};

button.addEventListener("click", showmore);


})();