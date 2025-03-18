const mainBubble = document.querySelector(".main-blob");
const smallBubbles = document.querySelectorAll(".small-blob1, .small-blob2");
const heroText = document.querySelector(".hero-text");

// Create bubbles
function createBubbles() {
    const container = document.getElementById('bubbles-container');
    const numBubbles = 50;
  
    for (let i = 0; i < numBubbles; i++) {
      const bubble = document.createElement('div');
      bubble.classList.add('bubblee');
  
      // Random properties
      const size = Math.random() * 20 + 5;
      const x = Math.random() * window.innerWidth;
      const y = Math.random() * window.innerHeight;
      const r = Math.floor(Math.random() * 255);
      const g = Math.floor(Math.random() * 255);
      const b = Math.floor(Math.random() * 255);
  
      // Random movement
      const tx = (Math.random() * 100 - 50) + 'px';
      const ty = (Math.random() * 100 - 50) + 'px';
  
      // Set styles
      bubble.style.width = `${size}px`;
      bubble.style.height = `${size}px`;
      bubble.style.left = `${x}px`;
      bubble.style.top = `${y}px`;
      bubble.style.backgroundColor = `rgba(${r}, ${g}, ${b}, 0.3)`;
      bubble.style.setProperty('--tx', tx);
      bubble.style.setProperty('--ty', ty);
  
      // Random animation duration
      bubble.style.animationDuration = `${5 + Math.random() * 10}s`;
  
      container.appendChild(bubble);
    }
  }

  
  
  // Initialize
  document.addEventListener('DOMContentLoaded', () => {
    createBubbles();
    
  
  });
  
  // Resize handler
  window.addEventListener('resize', () => {
    const container = document.getElementById('bubbles-container');
    container.innerHTML = '';
    createBubbles();
  });
  
  
  let isDragging = false;
  let offsetX = 0, offsetY = 0;
  let targetX = 0, targetY = 0;
  let currentX = 0, currentY = 0;
  
  // Ensure the bubble is positioned absolutely
  mainBubble.style.position = "absolute";
  
  // 🏆 Enable dragging on mousedown
  mainBubble.addEventListener("mousedown", (e) => {

      isDragging = true;
      offsetX = e.clientX - mainBubble.offsetLeft;
      offsetY = e.clientY - mainBubble.offsetTop;
  
      mainBubble.style.transition = "none"; // Disable smooth transition while dragging
  });
  
  document.addEventListener("mousemove", (e) => {
      if (!isDragging) return;
  
      targetX = e.clientX - offsetX;
      targetY = e.clientY - offsetY;
      
  
      // 💡 Move the main bubble using absolute positioning
      mainBubble.style.left = `${targetX}px`;
      mainBubble.style.top = `${targetY}px`;
  });
  
  document.addEventListener("mouseup", () => {
      isDragging = false;
  });
  
  // 🔥 Smoothly animate small blobs with delay
  function smoothMove() {
      currentX += (targetX - currentX) * 0.1;
      currentY += (targetY - currentY) * 0.1;
  
      smallBubbles.forEach((bubble, index) => {
          setTimeout(() => {
              bubble.style.left = `${currentX + (index + 1) * 20}px`;
              bubble.style.top = `${currentY + (index + 1) * 20}px`;
          }, index * 100); // Delay each small blob slightly
      });
  
      requestAnimationFrame(smoothMove);
  }
  

  document.addEventListener("DOMContentLoaded", function () {
    var elem = document.querySelector('.carousel');
    if (elem) {  
        new Flickity(elem, {
            cellAlign: 'center',
            contain: true,
            pageDots: true,
            wrapAround: true,
            autoPlay: 3000, 
        });
    }
});

  // ✅ Start trailing animation
  smoothMove();
  
  