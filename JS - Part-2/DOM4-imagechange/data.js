
const myImage = document.getElementById("my-image");

myImage.addEventListener("mouseover", function() {
  myImage.src = "./VK.jpeg";
});

myImage.addEventListener("mouseout", function() {
  myImage.src = "./AS.jpeg";
});