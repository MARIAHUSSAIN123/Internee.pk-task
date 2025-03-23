let jobportal=document.getElementById("jobportal"); 
let login1=document.getElementById("login1");
jobportal.onclick=()=>{
       window.location.href="jobportal.html";
}
 login1.onclick=()=> {
  window.location.href="login.html";
}
document.addEventListener("DOMContentLoaded", function () {
  let text = "Gain hands-on Experience and Grow with internee.pk A virual internship platform";
  let index = 0;
  let isDeleting = false;
  let target = document.getElementById("animatedText");
  let speed = 100; // Typing speed

  function typeEffect() {
      if (!isDeleting && index < text.length) {
          target.textContent += text[index];
          index++;
          setTimeout(typeEffect, speed);
      } else if (isDeleting && index > 0) {
          target.textContent = text.substring(0, index - 1);
          index--;
          setTimeout(typeEffect, speed / 2); // Faster deletion
      } else {
          isDeleting = !isDeleting;
          setTimeout(typeEffect, 1000); // Pause before switching
      }
  }

  typeEffect(); // Start animation
});
