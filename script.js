// script.js

// Set up the page transition effect
document.addEventListener("DOMContentLoaded", () => {
    // Hero Animation
    const heroSection = document.querySelector("#hero");
    heroSection.classList.add("animate__animated", "animate__fadeInUp");
  
    // Add page transition animations
    const links = document.querySelectorAll("nav a");
  
    links.forEach((link) => {
      link.addEventListener("click", (event) => {
        event.preventDefault();  // Prevent the default behavior (instant navigation)
        const target = event.target.getAttribute("href");
  
        // Trigger page fade out animation
        document.body.classList.add("page-fade-out");
  
        setTimeout(() => {
          // After fade-out, redirect to the target page
          window.location.href = target;
        }, 500); // Wait for fade-out to finish before navigating
      });
    });
  
    // Page fade-out effect (to be applied when navigating to another page)
    document.body.classList.add("page-fade-in");
    setTimeout(() => {
      document.body.classList.remove("page-fade-in");
    }, 500);
  });
  
  // Trigger background fade-in/fade-out effect
  let fadeTimeout;
  const body = document.querySelector("body");
  
  window.addEventListener("beforeunload", () => {
    body.classList.add("page-fade-out");
  });
  
  // Ensure the fade-in works on page load
  window.onload = () => {
    body.classList.add("page-fade-in");
    fadeTimeout = setTimeout(() => {
      body.classList.remove("page-fade-in");
    }, 1000); // Fade-in duration
  };
  // Contact forms validation
const forms = document.getElementById('contact-form');
forms.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent forms submission

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // Basic forms validation
  if (name === '' || email === '' || message === '') {
    alert('Please fill in all fields!');
  } else if (!validateEmail(email)) {
    alert('Please enter a valid email address!');
  } else {
    // Simulate forms submission
    alert('Message Sent! Thank you for contacting me.');
    forms.reset(); // Reset forms after submission
  }
});

// Email validation function
function validateEmail(email) {
  const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return re.test(email);
}
// Contact forms validation
const form = document.getElementById('contact-form');
forms.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent forms submission

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // Basic forms validation
  if (name === '' || email === '' || message === '') {
    alert('Please fill in all fields!');
  } else if (!validateEmail(email)) {
    alert('Please enter a valid email address!');
  } else {
    // Simulate forms submission
    alert('Message Sent! Thank you for contacting me.');
    forms.reset(); // Reset forms after submission
  }
});

// Email validation function
function validateEmail(email) {
  const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return re.test(email);
}
