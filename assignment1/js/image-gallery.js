//create array

var imgArray = new Array(
  //list of images
  'protein.jpg',
  'breakfast.jpg',
  'lunch.jpg',
  'dinner.jpg',
  'snack.jpg'
);

var imgPath = "img/";

//select image as large image
function selectImage(imgID) {
  var theImage = document.getElementById('largeImage');
  var newImg;
  newImg = imgArray[imgID];
  theImage.src = imgPath + newImg;
}


//add border to images on selection
function hoverImage(ID) {

    var childImages = document.getElementById("thumbnails").children;
    var i;

    // clear previous border
    for ( i = 0; i < childImages.length; i++ ) {
       childImages[i].style.border = '';
    }

    //Set new border
    document.getElementById(ID).style.border="2px solid purple";
}

var img = document.getElementsByTagName("img");
var text = document.getElementById("caption");

for (var i = 0; i < img.length; i++) {
  img[i].addEventListener("mouseover", function() {
    var alt = this.alt;
    text.textContent = alt;
  });
  img[i].addEventListener("mouseleave", function() {
    text.textContent = '';
  });
}
