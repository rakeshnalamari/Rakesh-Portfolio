/* ================================
   EDUCATION "READ MORE" BUTTONS
================================= */
const eduBtns = document.querySelectorAll('.edu-btn'); // All "Read More" buttons in Education section
const readMoreInner = document.querySelector('.edu-readmore-inner'); // Container to show expanded content

eduBtns.forEach(btn => {
  // On clicking any Education button
  btn.addEventListener('click', () => {
    const targetId = btn.parentElement.getAttribute('data-edu'); // Get associated content ID
    const content = document.getElementById(targetId);

    // Clear previous content
    readMoreInner.innerHTML = '';

    // Clone hidden content and append it
    const clone = content.cloneNode(true);
    clone.style.display = 'block';
    readMoreInner.appendChild(clone);

    // Smooth fade-in effect
    readMoreInner.style.opacity = '0';
    setTimeout(() => {
      readMoreInner.style.transition = 'opacity 0.5s ease';
      readMoreInner.style.opacity = '1';
    }, 20);
  });

  // Hide content when mouse leaves button
  btn.addEventListener('mouseleave', () => {
    readMoreInner.style.opacity = '0';
    setTimeout(() => {
      readMoreInner.innerHTML = ''; // completely hide content
    }, 500); // fade-out duration
  });
});

// Optional: hide content if mouse leaves the readMoreInner container itself
readMoreInner.addEventListener('mouseleave', () => {
  readMoreInner.style.opacity = '0';
  setTimeout(() => {
    readMoreInner.innerHTML = '';
  }, 500);
});


/* ================================
   SKILLS ANIMATION AND READ MORE
================================= */
document.addEventListener('DOMContentLoaded', () => {

  const skillSection = document.querySelector('#skills');
  const skillItems = document.querySelectorAll('.skill-item'); // Technical skill bars
  const softSkills = document.querySelectorAll('.soft-skill'); // Soft skill elements
  const readmoreBox = document.querySelector('.skill-readmore-box'); // Container to show read-more content
  let animated = false; // Flag to animate technical skills only once

  /* --------------------------
     Animate Technical Skills on scroll
  -------------------------- */
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !animated) {
        skillItems.forEach(item => {
          const bar = item.querySelector('.skill-bar');
          const percentSpan = item.querySelector('.skill-percent');
          const targetPercent = parseInt(bar.getAttribute('data-level'));

          // Animate skill bar width
          bar.style.width = bar.getAttribute('data-level');

          // Animate numeric percentage count
          let count = 0;
          const interval = setInterval(() => {
            if (count <= targetPercent) {
              percentSpan.textContent = count + '%';
              count++;
            } else {
              clearInterval(interval);
            }
          }, 15);
        });
        animated = true;
      }
    });
  }, { threshold: 0.5 });

  observer.observe(skillSection);

  /* --------------------------
     Technical Skills Read More Buttons
  -------------------------- */
  const readmoreButtons = document.querySelectorAll('.skill-readmore-btn');
  readmoreButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const content = btn.getAttribute('data-content');
      readmoreBox.innerHTML = `<p>${content}</p>`;
      readmoreBox.scrollIntoView({ behavior: 'smooth' });
    });
  });

  /* --------------------------
     Skill Hover Info (Circles)
  -------------------------- */
  const skills = document.querySelectorAll('.skill-circle');
  const box = document.getElementById('skill-hover-info');

  skills.forEach(skill => {
    skill.addEventListener("mouseenter", () => {
      // Show skill hover info with dynamic data
      box.classList.add("show-content");
      box.innerHTML = `
        <div class="content">
          <h4>${skill.dataset.title}</h4>
          <p><strong>What I Know:</strong> ${skill.dataset.know}</p>
          <p><strong>What I Built:</strong> ${skill.dataset.built}</p>
          <p><strong>Confidence:</strong> ${skill.dataset.confidence}</p>
        </div>
      `;
    });

    skill.addEventListener("mouseleave", () => {
      box.classList.remove("show-content");
      box.innerHTML = `<h1>Hover over a skill to see details</h1>`;
    });
  });

  /* --------------------------
     Soft Skills Read More
  -------------------------- */
  softSkills.forEach(skill => {
    skill.addEventListener('click', (e) => {
      e.preventDefault(); // Prevent default jump
      const content = skill.getAttribute('data-content');
      readmoreBox.innerHTML = `<p>${content}</p>`;
      readmoreBox.scrollIntoView({ behavior: 'smooth' });
    });
  });

});


/* ================================
   CERTIFICATE MODAL
================================= */
function openCertificate(src) {
  document.getElementById("certificateImage").src = src;
  document.getElementById("certificateModal").style.display = "block";
}

function closeCertificate() {
  document.getElementById("certificateModal").style.display = "none";
}

/* Close certificate modal if clicking outside */
document.getElementById("certificateModal").addEventListener("click", function (e) {
  if (e.target === this) {
    closeCertificate();
  }
});


/* ================================
   SOFT SKILL DISPLAY (Extra Box)
================================= */
function showSoftSkill(text, imgSrc) {
  document.getElementById("softText").textContent = text;
  let img = document.getElementById("softImage");
  img.src = imgSrc;
  img.style.display = "block";
}


/* ================================
   CONTACT INFO HOVER DISPLAY
================================= */
document.querySelectorAll(".info-box").forEach(box => {
  const bar = document.getElementById("hoverDisplayBar");

  box.addEventListener("mouseenter", () => {
    bar.textContent = box.getAttribute("data-text");
    bar.classList.add("active");
  });

  box.addEventListener("mouseleave", () => {
    bar.textContent = "Hover any contact box to see details here";
    bar.classList.remove("active");
  });
});


/* ================================
   ABOUT POPUP
================================= */
function openPopup() {
  document.getElementById("aboutPopup").style.display = "flex";
}

function closePopup() {
  document.getElementById("aboutPopup").style.display = "none";
}

// Close popup when clicking outside the box
document.getElementById("aboutPopup").addEventListener("click", function (e) {
  if (e.target === this) {  
    closePopup();
  }
});


/* ================================
   NAVBAR TOGGLE (HAMBURGER MENU)
================================= */
const menuIcon = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");

menuIcon.addEventListener("click", () => {
  navbar.classList.toggle("active"); // Show/hide mobile menu
});
