/* This the Javascript aspect of my schedule*/



   
   var organize;
   function yeet()
   
   
   
   var organize = document.getElementById("CLASS")

   
   

switch (CLASS) {
   
   
   case "English":
			organize = "English";
			
   case "Math":
			organize = "Math";
			
   case "French":
			organize = "French";
}

var WhichClass = document.getElementsByClassName(organize);
	console.log(WhichClass);

	for (i = 0; i < WhichClass.length; i++) {
		WhichClass[i].style.backgroundColor = "lime";
	}
    

