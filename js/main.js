
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

var darkmode = false

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
  h_button.style.position = "static"

  b_section.style.display = "flex";
  b_button.style.position = "relative"

  t_section.style.display = "none";
  t_button.style.position = "static"

  if (darkmode === true){
    h_button.style.backgroundColor = "#720002"
    t_button.style.backgroundColor = "#720002"
    b_button.style.backgroundColor = "#b40003"
  }
  else {
    h_button.style.backgroundColor = "#ce191d"
    b_button.style.backgroundColor = "#db6567"
    t_button.style.backgroundColor = "#ce191d"
  }
}

trump.onclick = function(){
  h_section.style.display = "none";
  h_button.style.position = "static"

  t_section.style.display = "flex";
  t_button.style.position = "relative"

  b_section.style.display = "none";
  b_button.style.position = "static"
  
  if (darkmode === true){
    h_button.style.backgroundColor = "#720002"
    t_button.style.backgroundColor = "#b40003"
    b_button.style.backgroundColor = "#720002"
  }
  else {
    h_button.style.backgroundColor = "#ce191d"
    t_button.style.backgroundColor = "#db6567"
    b_button.style.backgroundColor = "#ce191d"
  }
}

home.onclick = function(){
  b_section.style.display = "none";
  b_button.style.position = "static"

  h_section.style.display = "flex";
  h_button.style.position = "relative"

  t_section.style.display = "none";
  t_button.style.position = "static"
  
  if (darkmode === true){
    h_button.style.backgroundColor = "#b40003"
    t_button.style.backgroundColor = "#720002"
    b_button.style.backgroundColor = "#720002"
  }
  else {
    b_button.style.backgroundColor = "#ce191d"
    h_button.style.backgroundColor = "#db6567"
    t_button.style.backgroundColor = "#ce191d"
  }

}

document.getElementById("themeChange").addEventListener("click", function() {
  toggleStylesheet("styles/second.css");
  home.onclick();
})

function toggleStylesheet(href, onoff) {
  var existingNode = null;
  var existingIndex = -1;

  for (var i = 0; i < document.styleSheets.length; i++) {
    if (document.styleSheets[i].href && document.styleSheets[i].href.indexOf(href) > -1) {
      existingNode = document.styleSheets[i].ownerNode;
      existingIndex = i;
      break;
    }
  }

  if (onoff == undefined) onoff = !existingNode;

  if (onoff) {
    if (existingNode) return onoff;
    darkmode = true;
    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = href + "?t=" + new Date().getTime(); // Append timestamp to ensure no caching
    console.log("Loading stylesheet: " + link.href);
    document.getElementsByTagName('head')[0].appendChild(link);
  } else {
    if (existingNode) {
      console.log("Removing stylesheet: " + existingNode.href);
      existingNode.parentNode.removeChild(existingNode);
      // Force the browser to recognize the removal
      document.styleSheets[existingIndex].disabled = true;
    }
    darkmode = false;
  }

  return onoff;
}