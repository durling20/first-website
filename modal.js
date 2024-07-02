var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg");

var biden = document.getElementById("biden")
var trump = document.getElementById("trump")
var home = document.getElementById("home")

var h_section = document.getElementById("one")
var t_section = document.getElementById("three")
var b_section = document.getElementById("two")

var b_button = document.getElementById("b_button")
var t_button = document.getElementById("t_button")
var h_button = document.getElementById("h_button")

var span = document.getElementsByClassName("close")[0];

img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

biden.onclick = function(){
  h_section.style.display = "none";
  h_button.style.backgroundColor = "#ce191d"
  h_button.style.position = "static"

  b_section.style.display = "flex";
  b_button.style.backgroundColor = "#db6567"
  b_button.style.position = "relative"

  t_section.style.display = "none";
  t_button.style.backgroundColor = "#ce191d"
  t_button.style.position = "static"

}

trump.onclick = function(){
  h_section.style.display = "none";
  h_button.style.position = "static"
  h_button.style.backgroundColor = "#ce191d"

  t_section.style.display = "flex";
  t_button.style.backgroundColor = "#db6567"
  t_button.style.position = "relative"

  b_section.style.display = "none";
  b_button.style.backgroundColor = "#ce191d"
  b_button.style.position = "static"
}

home.onclick = function(){
  b_section.style.display = "none";
  b_button.style.backgroundColor = "#ce191d"
  b_button.style.position = "static"

  h_section.style.display = "flex";
  h_button.style.backgroundColor = "#db6567"
  h_button.style.position = "relative"

  t_section.style.display = "none";
  t_button.style.backgroundColor = "#ce191d"
  t_button.style.position = "static"
}
