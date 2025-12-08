const eduBtns = document.querySelectorAll('.edu-btn');
const readMoreInner = document.querySelector('.edu-readmore-inner');

eduBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const targetId = btn.parentElement.getAttribute('data-edu');
    const content = document.getElementById(targetId);

    // Clear previous content
    readMoreInner.innerHTML = '';

    // Clone hidden content and show
    const clone = content.cloneNode(true);
    clone.style.display = 'block';
    readMoreInner.appendChild(clone);

    // Smooth fade-in
    readMoreInner.style.opacity = '0';
    setTimeout(() => {
      readMoreInner.style.transition = 'opacity 0.5s ease';
      readMoreInner.style.opacity = '1';
    }, 20);
  });

  // Hide content when mouse leaves the button or content area
  btn.addEventListener('mouseleave', () => {
    readMoreInner.style.opacity = '0';
    setTimeout(() => {
      readMoreInner.innerHTML = ''; // hide content completely
    }, 500); // matches fade-out transition
  });
});

// Optional: hide if mouse leaves the readMoreInner itself
readMoreInner.addEventListener('mouseleave', () => {
  readMoreInner.style.opacity = '0';
  setTimeout(() => {
    readMoreInner.innerHTML = '';
  }, 500);
});



document.addEventListener('DOMContentLoaded', () => {

  const skillSection = document.querySelector('#skills');
  const skillItems = document.querySelectorAll('.skill-item');
  const softSkills = document.querySelectorAll('.soft-skill');
  const readmoreBox = document.querySelector('.skill-readmore-box');
  let animated = false; // Animate once per page visit

  // Animate Technical Skills
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !animated) {
        skillItems.forEach(item => {
          const bar = item.querySelector('.skill-bar');
          const percentSpan = item.querySelector('.skill-percent');
          const targetPercent = parseInt(bar.getAttribute('data-level'));

          // Animate bar
          bar.style.width = bar.getAttribute('data-level');

          // Animate number count
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

  // Technical Skills Read More
  const readmoreButtons = document.querySelectorAll('.skill-readmore-btn');
  readmoreButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const content = btn.getAttribute('data-content');
      readmoreBox.innerHTML = `<p>${content}</p>`;
      readmoreBox.scrollIntoView({ behavior: 'smooth' });
    });
  });


  const skills = document.querySelectorAll('.skill-circle');
const box = document.getElementById('skill-hover-info');

skills.forEach(skill => {
  skill.addEventListener("mouseenter", () => {
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



  

  // Soft Skills Read More
 // Soft Skills Read More
softSkills.forEach(skill => {
  skill.addEventListener('click', (e) => {
    e.preventDefault(); // prevent any default jump
    const content = skill.getAttribute('data-content');
    readmoreBox.innerHTML = `<p>${content}</p>`;
    readmoreBox.scrollIntoView({ behavior: 'smooth' });
  });
});

});

const readmoreBox = document.querySelector('.skill-readmore-box');

const readmoreButtons = document.querySelectorAll('.skill-readmore-btn');
readmoreButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const content = btn.getAttribute('data-content');

    // Hide previous content smoothly
    readmoreBox.classList.remove('show');
    setTimeout(() => {
      readmoreBox.innerHTML = `<p>${content}</p>`;
      readmoreBox.classList.add('show'); // fade-in slowly
      readmoreBox.scrollIntoView({ behavior: 'smooth' });
    }, 300); // small delay for fade-out
  });
});







function openCertificate(src) {
  document.getElementById("certificateImage").src = src;
  document.getElementById("certificateModal").style.display = "block";
}

function closeCertificate() {
  document.getElementById("certificateModal").style.display = "none";
}





function showSoftSkill(text, imgSrc) {
  document.getElementById("softText").textContent = text;

  let img = document.getElementById("softImage");
  img.src = imgSrc;
  img.style.display = "block";
}



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



function openPopup() {
  document.getElementById("aboutPopup").style.display = "flex";
}

function closePopup() {
  document.getElementById("aboutPopup").style.display = "none";
}



// Close About Popup when clicking outside the popup box
document.getElementById("aboutPopup").addEventListener("click", function (e) {
  if (e.target === this) {  
    closePopup();
  }
});

document.getElementById("certificateModal").addEventListener("click", function (e) {
  if (e.target === this) {
    closeCertificate();
  }
});




const skills = document.querySelectorAll('.skill-circle');
const box = document.getElementById('skill-hover-info');

skills.forEach(skill => {
  skill.addEventListener("mouseenter", () => {
    box.classList.add("show");
    box.innerHTML = `
      <h4>${skill.dataset.title}</h4>
      <p><strong>What I Know:</strong> ${skill.dataset.know}</p>
      <p><strong>What I Built:</strong> ${skill.dataset.built}</p>
      <p><strong>Confidence:</strong> ${skill.dataset.confidence}</p>
    `;
  });

  skill.addEventListener("mouseleave", () => {
    box.classList.remove("show");
    box.innerHTML = `<h1>Hover over a skill to see details</h1>`;
  });
});

