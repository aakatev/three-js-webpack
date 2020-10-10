var modal = document.getElementById("info-modal");
var btn = document.getElementById("open-modal-btn");
var span = document.getElementsByClassName("close-modal-btn")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
} 