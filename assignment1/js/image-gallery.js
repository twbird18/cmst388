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

//photo caption array
var captionArray = [
  'Morning wakeup. Iced coffee with protein.',
  'Chocolate Peanut Butter Oatmeal topped with strawberries, bananas, chocolate chips, flax seeds & peanut butter drizzle. Dessert for breakfast.',
  'Sweet Potato & Avocado Sushi Rolls with an Avocado Rose.',
  'Tomato Sauce with Vegetables & "Meatballs"',
  'Quick evening snack to keep you full until morning. Rice cakes with molasses & peanut butter.'
];


//create/change caption when thumbnail is hovered over
function changeCaption(imgID) {
  var theCaption = document.getElementById("caption");
  var newCaption;
  newCaption = captionArray[imgID];
  theCaption.innerHTML = newCaption;
}

  // shows the defaultCaption and hides the caption div
    function clearCaption() {

       document.getElementById("caption").style.display = "none";
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