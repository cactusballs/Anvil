const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu")

hamburger.addEventListener("click", mobileMenu);

function mobileMenu(){
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active")
}

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu(){
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}

// cards

function createCardFlipper(card) {
  let isAnimating = false;
  let mouseOverCard = false;

  function flipCard() {
    if (!isAnimating) {
      isAnimating = true;
      card.style.transform = 'rotateY(180deg)'; // Trigger the flip

      setTimeout(() => {
        isAnimating = false;
        if (!mouseOverCard) {
          card.style.transform = 'rotateY(0deg)'; // Flip back if mouse has left the card
        }
      }, 600); // Animation duration
    }
  }

  function unflipCard() {
    if (!isAnimating) {
      card.style.transform = 'rotateY(0deg)'; // Reverse the flip
    }
  }

  card.addEventListener('mouseenter', () => {
    mouseOverCard = true;
    flipCard();
  });

  card.addEventListener('mouseleave', () => {
    mouseOverCard = false;
    if (!isAnimating) {
      unflipCard();
    }
  });
}

document.querySelectorAll('.steel-product-1, .steel-product-2, .steel-product-3, .steel-product-4, .steel-product-5, .steel-product-6').forEach(createCardFlipper);

