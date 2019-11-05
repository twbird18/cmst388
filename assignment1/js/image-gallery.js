//create array

var imgArray = new Array(
  //list of images
  'labbe.jpg',
  'mcleod.jpg',
  'naeher.jpg',
  'solo.jpg',
  'williams.jpg'
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

//add captions to photos
var img = document.getElementsByTagName("img");
var text = document.getElementById("caption");

//loop through images and add captions on mouse over

for (var i = 0; i < img.length; i++) {
  img[i].addEventListener("mouseover", function() {
    var alt = this.alt;
    text.textContent = alt;
  });

  //loop through and remove captions on mouse leave
  img[i].addEventListener("mouseleave", function() {
    text.textContent = '';
  });
}

//change large image Title on mouseenter
var titleText = document.getElementById("mainTitle");

for (var i = 0; i < img.length; i++) {
  img[i].addEventListener('click', function() {
    var id = this.id;
    titleText.textContent = id;
  });
}