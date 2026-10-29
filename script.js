document.addEventListener('DOMContentLoaded', () => {
  const skillsSection = document.getElementById('skills-section');
  const progressFills = document.querySelectorAll('.progress-fill');
  const percentageLabels = document.querySelectorAll('.skill-percentage');
  const replayBtn = document.getElementById('replay-btn');

  let hasAnimated = false;

  // Function to animate fill widths and counter numbers
  function animateSkills() {
    progressFills.forEach((fill) => {
      // Read percentage target from data-progress attribute
      const targetWidth = fill.getAttribute('data-progress');
      fill.style.width = `${targetWidth}%`;
    });

    // Animate numerical counters simultaneously
    percentageLabels.forEach((label) => {
      const targetNumber = parseInt(label.getAttribute('data-target'), 10);
      let currentNumber = 0;
      const duration = 1500; // Matches CSS transition duration
      const incrementTime = Math.floor(duration / targetNumber);

      const counterInterval = setInterval(() => {
        currentNumber++;
        label.textContent = `${currentNumber}%`;

        if (currentNumber >= targetNumber) {
          clearInterval(counterInterval);
          label.textContent = `${targetNumber}%`;
        }
      }, incrementTime);
    });
  }

  // Function to reset skill bars back to 0%
  function resetSkills() {
    progressFills.forEach((fill) => {
      fill.style.width = '0%';
    });
    percentageLabels.forEach((label) => {
      label.textContent = '0%';
    });
  }

  // Configure IntersectionObserver for scroll detection
  const observerOptions = {
    root: null,
    threshold: 0.3 // Trigger when 30% of section is visible
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && !hasAnimated) {
        // Small JavaScript delay before triggering CSS transition
        setTimeout(() => {
          animateSkills();
        }, 150);
        hasAnimated = true;
      }
    });
  }, observerOptions);

  observer.observe(skillsSection);

  // Manual replay button action
  if (replayBtn) {
    replayBtn.addEventListener('click', () => {
      resetSkills();
      setTimeout(() => {
        animateSkills();
      }, 200);
    });
  }
});