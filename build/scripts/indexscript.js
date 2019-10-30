var currentImage = 0;
var myImages = [
    "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Neumont_University%27s_campus_in_downtown_Salt_Lake_City%2C_Utah..jpg/1599px-Neumont_University%27s_campus_in_downtown_Salt_Lake_City%2C_Utah..jpg",
    "Images/commons.jpg",
    "Images/studentdevlopment.jpg"
];
var intervalNum = 4000;

document.getElementById("myImg").style.background = `#f3f3f3 url(' ${myImages[currentImage]}') bottom center no-repeat`;
document.getElementById("myImg").style.backgroundSize = "cover";
document.getElementById(`myButton1`).style.background = "#FC0";
document.getElementById(`myButton2`).style.background = "rgba(0, 0, 0, 0.0)";
document.getElementById(`myButton3`).style.background = "rgba(0, 0, 0, 0.0)";
document.getElementById("carouselTitle").innerHTML = "Home";
document.getElementById("carouselInfo").innerHTML = "Learn more about us Today!";
document.getElementById("hand").style.display = "none";
document.getElementById("card").style.display = "none";

function nextFunction() {
    console.log(currentImage);
    console.log("length: " + myImages.length)
    if (myImages[currentImage] != null) {
        if (currentImage == myImages.length - 1) {
            currentImage = 0;
            document.getElementById("myImg").style.background = `#f3f3f3 url(' ${myImages[currentImage]}')  bottom center no-repeat`;
            document.getElementById("myImg").style.backgroundSize = "cover";
            document.getElementById("carouselTitle").innerHTML = "Home";
            document.getElementById("carouselInfo").innerHTML = "Learn more about us Today!"
            document.getElementById("hand").style.display = "none";
            document.getElementById("card").style.display = "none";
            document.getElementById("castle").style.display = "inline-block";
        } else if (currentImage >= 0) {
            currentImage += 1;
            document.getElementById("myImg").style.background = `#f3f3f3 url(' ${myImages[currentImage]}')  bottom center no-repeat`;
            document.getElementById("myImg").style.backgroundSize = "cover";
            if(currentImage == 1) {
                document.getElementById("carouselTitle").innerHTML = "Join the Community";
                document.getElementById("carouselInfo").innerHTML = "Join the community and work with others today!"
                document.getElementById("castle").style.display = "none";
                document.getElementById("card").style.display = "none";
                document.getElementById("hand").style.display = "inline-block";
            } else {
                document.getElementById("carouselTitle").innerHTML = "Like Minds";
                document.getElementById("carouselInfo").innerHTML = "Join others who have ideas and goals the same as you!"
                document.getElementById("castle").style.display = "none";
                document.getElementById("hand").style.display = "none";
                document.getElementById("card").style.display = "inline-block";
            }
        } else {
            currentImage = 0;
            document.getElementById("myImg").style.background = `#f3f3f3 url(' ${myImages[currentImage]}')  bottom center no-repeat`;
            document.getElementById("myImg").style.backgroundSize = "cover";
            document.getElementById("carouselTitle").innerHTML = "Home";
            document.getElementById("carouselInfo").innerHTML = "Learn more about us Today!"
            document.getElementById("castle").style.display = "inline-block";
            document.getElementById("card").style.display = "none";
            document.getElementById("hand").style.display = "none";
        }
    }
    switch(currentImage){
        case 0:
        document.getElementById(`myButton1`).style.background = "#FC0";
        document.getElementById(`myButton2`).style.background = "rgba(0, 0, 0, 0.0)";
        document.getElementById(`myButton3`).style.background = "rgba(0, 0, 0, 0.0)";
        document.getElementById("carouselTitle").innerHTML = "Home";
        document.getElementById("carouselInfo").innerHTML = "Learn more about us Today!"
        document.getElementById("hand").style.display = "none";
        document.getElementById("card").style.display = "none";
        document.getElementById("castle").style.display = "inline-block";
        break;
        case 1:
        document.getElementById(`myButton2`).style.background = "#FC0";
        document.getElementById(`myButton1`).style.background = "rgba(0, 0, 0, 0.0)";
        document.getElementById(`myButton3`).style.background = "rgba(0, 0, 0, 0.0)";
        document.getElementById("carouselTitle").innerHTML = "Join the Community";
        document.getElementById("carouselInfo").innerHTML = "Join the community and work with others today!"
        document.getElementById("castle").style.display = "none";
        document.getElementById("card").style.display = "none";
        document.getElementById("hand").style.display = "inline-block";
        break;
        case 2:
        document.getElementById("myButton1").style.background = "rgba(0, 0, 0, 0.0)";
        document.getElementById("myButton2").style.background = "rgba(0, 0, 0, 0.0)";
        document.getElementById("myButton3").style.background = "#FC0";
        document.getElementById("carouselTitle").innerHTML = "Like Minds";
        document.getElementById("carouselInfo").innerHTML = "Join others who have ideas and goals the same as you!"
        document.getElementById("castle").style.display = "none";
        document.getElementById("hand").style.display = "none";
        document.getElementById("card").style.display = "inline-block";
        break;
    }
}

function currentDiv(n) {
    intervalNum = 0;
    currentImage = n-1;
    console.log("IF: "+ currentImage);
    document.getElementById("myImg").style.background = `#f3f3f3 url(' ${myImages[currentImage]}')  bottom center no-repeat`;
    document.getElementById("myImg").style.backgroundSize = "cover";
    switch(currentImage){
        case 0:
        document.getElementById(`myButton1`).style.background = "#FC0";
        document.getElementById(`myButton2`).style.background = "rgba(0, 0, 0, 0.0)";
        document.getElementById(`myButton3`).style.background = "rgba(0, 0, 0, 0.0)";
        document.getElementById("carouselTitle").innerHTML = "Home";
        document.getElementById("carouselInfo").innerHTML = "Learn more about us Today!";
        document.getElementById("hand").style.display = "none";
        document.getElementById("card").style.display = "none";
        document.getElementById("castle").style.display = "inline-block";
        break;
        case 1:
        document.getElementById(`myButton2`).style.background = "#FC0";
        document.getElementById(`myButton1`).style.background = "rgba(0, 0, 0, 0.0)";
        document.getElementById(`myButton3`).style.background = "rgba(0, 0, 0, 0.0)";
        document.getElementById("carouselTitle").innerHTML = "Join the Community";
        document.getElementById("carouselInfo").innerHTML = "Join the community and work with others today!";
        document.getElementById("castle").style.display = "none";
        document.getElementById("card").style.display = "none";
        document.getElementById("hand").style.display = "inline-block";
        break;
        case 2:
        document.getElementById("myButton1").style.background = "rgba(0, 0, 0, 0.0)";
        document.getElementById("myButton2").style.background = "rgba(0, 0, 0, 0.0)";
        document.getElementById("myButton3").style.background = "#FC0";
        document.getElementById("carouselTitle").innerHTML = "Like Minds";
        document.getElementById("carouselInfo").innerHTML = "Join others who have ideas and goals the same as you!";
        document.getElementById("castle").style.display = "none";
        document.getElementById("hand").style.display = "none";
        document.getElementById("card").style.display = "inline-block";
        break;
    }
  
}



setInterval(nextFunction, intervalNum);