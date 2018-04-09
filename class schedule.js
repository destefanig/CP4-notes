/* This the Javascript aspect of my schedule*/

/*  yOUR WEBSITE IDEA IS SHOE RALTED WHERE YOU CAN BROWSE THE PRICES FOR TRENDING SHOES */

   
   var organize;
   function yeet(){  
   
   
   
   var organize = document.getElementById("CLASS").value;
   

   
   

switch (CLASS) {
   
   
   case "English":
			organize = "English";
	break;		
   case "Math":
			organize = "Math";
	break;		
   case "French":
			organize = "French";
	break;
	case "Science":
			organize = "Science";
	break;
	case "Computer programming":
			organize = "Computer programming";
			break;
}


var organize = document.getElementsByClassName(organize);
	console.log(organize);

	for (i = 0; i < organize.length; i++) {
		organize[i].style.backgroundColor = "lime";
	}
    

   }