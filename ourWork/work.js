
var modal = document.getElementById("imageModal");
var modalImg = document.getElementById("modalImage");
var span = document.getElementsByClassName("close")[0];

// Function to enlarge images
document.querySelectorAll('.masonry-item img').forEach(item => {
  item.addEventListener('click', function() {
    modal.style.display = "block";
    modalImg.src = this.src;
  });
});

// Close the modal when the "x" is clicked
span.onclick = function() {
  modal.style.display = "none";
}

// Close the modal when clicking anywhere outside the image
modal.onclick = function() {
  if (event.target === modal) {
    modal.style.display = "none";
  }
}