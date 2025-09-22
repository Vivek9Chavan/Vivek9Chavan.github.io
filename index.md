---
layout: default
title: Vivek Chavan
---

# 👋 Hello!

<!-- This CSS block creates the two-column responsive layout -->
<style>
  .profile-container {
    display: flex;
    align-items: flex-start; /* Aligns items to the top */
    gap: 30px;
    margin-bottom: 2.5em;
    flex-wrap: wrap;
  }
  .profile-photo {
    flex: 1 1 200px;
    max-width: 200px;
  }
  .profile-photo img {
    width: 100%;
    height: auto;
    border-radius: 12px; /* keep your original non-circular look */
    border: 3px solid #eee;
  }
  .profile-text {
    flex: 3 1 400px; /* Text takes up more space */
  }
  .profile-text h1 {
    margin-top: 0;
    margin-bottom: 0.25em;
  }
  .profile-text p {
    margin-top: 0;
    line-height: 1.6;
  }
  .links a {
    margin-right: 10px;
  }
  /* Responsive stacking for mobile */
  @media (max-width: 768px) {
    .profile-container {
      flex-direction: column;
      align-items: center;
      text-align: center;
    }
  }
</style>

<!-- ================================================== -->
<!--                  PAGE CONTENT START                -->
<!-- ================================================== -->

<!-- The Two-Column Profile Section -->
<div class="profile-container">
  
  <!-- Column 1: Your Photo -->
  <div class="profile-photo">
    <img src="https://github.com/user-attachments/assets/0c18923f-6d38-4312-ae43-9f4e4c7764ad" alt="Vivek Chavan">
  </div>
  
  <!-- Column 2: Your "About Me" Information -->
  <div class="profile-text">
    <h1>👋 Vivek Chavan</h1>
    <p>
      <strong>AI Researcher @ Fraunhofer IPK | PhD Candidate @ TU Berlin</strong>
    </p>
    <p class="links">
      <a href="mailto:vivek.chavan@ipk.fraunhofer.de">📧 Email</a> · 
      <a href="https://scholar.google.com/citations?user=[YOUR-ID]">🎓 Google Scholar</a> · 
      <a href="https://www.linkedin.com/in/vivek9chavan/">💼 LinkedIn</a> · 
      <a href="https://github.com/Vivek9Chavan">🐙 GitHub</a> ·
      <a href="https://twitter.com/[YOUR-HANDLE]">🐦 Twitter/X</a>
    </p>
    <p>
      Welcome to my homepage.
    </p>
    <h2>🔬 About Me</h2>
    <p>
      I am an AI Researcher and Computer Vision Scientist developing intelligent systems that can understand and operate in complex, real-world human environments. My work focuses on bridging the gap between foundational research and practical, industry-relevant applications.
    </p>
    <ul>
      <li>🤖 Industrial Automation</li>
      <li>🧠 Continual Learning</li>
      <li>👓 Egocentric AI</li>
    </ul>
  </div>

</div>

## 📫 Contact

- [LinkedIn](https://www.linkedin.com/in/vivek9chavan/)
