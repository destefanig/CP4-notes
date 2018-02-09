

<script>
   
   var searchBox = document.getElementById("button")

   
   

switch (searchBox.value) {
   
    case "Gym":
        course = "Gym";
        break;
    case "Science":
        course = "Science";
        break;
    case "English":
        course = "English";
        break;
    case "Computer programming":
        course = "Computer programming";
        break;
    case "Computer programming":
        course = "Computer programming";
        break;
    case  "Religion":
        course = "Religion";
}
document.getElementById("class").innerHTML = "You have " + course;
</script>
