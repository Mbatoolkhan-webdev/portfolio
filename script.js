
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});

const downloadBtn = document.querySelector(".hero .btn");

downloadBtn.addEventListener("click", () => {
  alert("Your resume is downloading...");
});



const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = contactForm.querySelector("input[type='text']").value.trim();
  const email = contactForm.querySelector("input[type='email']").value.trim();
  const message = contactForm.querySelector("textarea").value.trim();

  if (name === "" || email === "" || message === "") {
    alert("Please fill all the fields");
    return;
  }
  alert("Message sent successfully ");

  contactForm.reset();
});
