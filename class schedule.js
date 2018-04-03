/* This the Javascript aspect of my schedule*/

/*  yOUR WEBSITE IDEA IS SHOE RALTED WHERE YOU CAN BROWSE THE PRICES FOR TRENDING SHOES */

   
   var organize;
   function yeet(){  
   
   
   
   var organize = document.getElementById("CLASS");
   

   
   

switch (CLASS) {
   
   
   case "English":
			organize = "English";
			
   case "Math":
			organize = "Math";
			
   case "French":
			organize = "French";
}

var organize = document.getElementsByClassName(organize);
	console.log(organize);

	for (i = 0; i < organize.length; i++) {
		organize[i].style.backgroundColor = "lime";
	}
    

   }