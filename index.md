---
layout: default
title: Vivek Chavan
---

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
    border-radius: 50%; /* Circular photo */
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
    <!-- The photo is assumed to be named 'photo.jpg' in your site's asset folder -->
    <img src="photo.jpg" alt="Vivek Chavan">
  </div>
  
  <!-- Column 2: Your "About Me" Information -->
  <div class="profile-text">
    <h1>Vivek Chavan</h1>
    <p>
      <strong>AI Researcher @ Fraunhofer IPK | PhD Candidate @ TU Berlin</strong>
    </p>
    <p class="links">
      <a href="mailto:vivek.chavan@ipk.fraunhofer.de">Email</a> · 
      <a href="[YOUR_GOOGLE_SCHOLAR_LINK]">Google Scholar</a> · 
      <a href="https://www.linkedin.com/in/vivek9chavan/">LinkedIn</a> · 
      <a href="[YOUR_GITHUB_LINK]">GitHub</a> ·
      <a href="[YOUR_TWITTER_LINK]">Twitter/X</a>
    </p>
    <p>
      I am an AI Researcher and Computer Vision Scientist developing intelligent systems that can understand and operate in complex, real-world human environments. My work focuses on bridging the gap between foundational research and practical, industry-relevant applications.
    </p>
    <p>
      My primary research interests include <strong>Egocentric Vision, Multimodal Learning, and Embodied AI</strong>.
    </p>
  </div>

</div>

---

### News & Updates

*   **Sep 2025:** Our paper, "IndEgo: A Dataset of Industrial Scenarios and Collaborative Work for Egocentric Assistants," was accepted to **NeurIPS 2025!** I look forward to presenting our work as a poster in San Diego this December.
*   **Apr 2025:** Gave an invited talk at the Center for Artificial Intelligence at Sorbonne University in Paris.
*   **Mar 2025:** Featured on the Heise Online "KI-Update" podcast to discuss our research in Industrial AI.
*   **Jul 2023:** Started my role as a Scientific Researcher at Fraunhofer IPK.

---

### Featured Publication

**IndEgo: A Dataset of Industrial Scenarios and Collaborative Work for Egocentric Assistants**
<br>
*Vivek Chavan, Yasmina Imgrund, Tung Dao, Sanwantri Bai, Bosong Wang, Ze Lu, Oliver Heimann, Jörg Krüger*
<br>
*Conference on Neural Information Processing Systems (NeurIPS)*, 2025.
<br>
**[Paper (ArXiv)] [Project Page] [Dataset (Hugging Face)] [Code (GitHub)]**

---

### Invited Talks & Presentations

*   **Invited Talk at Sorbonne University**
    *   *Developing Industrial Egocentric Assistants: Integrating Continual Learning, Data Management, and Multimodal Understanding*
    *   Center for Artificial Intelligence, Paris (April 2025)

*   **Podcast Interview with Heise Online**
    *   *Topic: Current Research in Industrial AI and Egocentric Vision*
    *   (KI-Update, March 29, 2025)
    *   [Link to Podcast: KI-Update Deep-Dive: KI-Brillen helfen in der Industrie | heise online]

*   **Invited Research Talk & Demo at Berlin Science Week**
    *   *Presented current research to the general public*
    *   (November 2024)

*   **Winner of Science Slam Hamburg**
    *   *Top-rated talk on Artificial Intelligence, presented to an audience of ~200*
    *   (July 2024)

*   **Industry Technology Presentation at Control Trade Fair**
    *   *Represented the Machine Vision team with live demos on Anomaly Detection, Object Recognition, and Egocentric Vision*
    *   (Stuttgart, April 2024)

*   **Technical Talk at Fraunhofer Vision Meeting**
    *   *Industrial Continual Learning with a Focus on Energy Consumption and Computational Cost*
    *   (November 2023)

*   **VisionRead Lecture Series**
    *   *Delivered 6 internal lectures on recent research in Computer Vision & AI*
    *   (2023–2024)

---

### Publications

*   **IndEgo: A Dataset of Industrial Scenarios and Collaborative Work for Egocentric Assistants**
    *   V. Chavan, Y. Imgrund, T. Dao, S. Bai, B. Wang, Z. Lu, O. Heimann, J. Krüger
    *   *Conference on Neural Information Processing Systems (NeurIPS)*, 2025.
    *   **[Paper] [Project Page] [Dataset] [Code]**

*   **On the Application of Egocentric Computer Vision to Industrial Scenarios**
    *   V. Chavan, O. Heimann, J. Krüger
    *   *arXiv preprint arXiv:2406.07738*, 2024.
    *   **[Paper]**

*   **A System 1 and System 2 Perspective on Continual Learning for Practical Implementation**
    *   V. Chavan, O. Heimann, J. Krüger
    *   *European Conference on Computer Vision (ECCV) Workshops*, 2024.
    *   **[Paper]**

*   **On the Application of Egocentric Computer Vision to Industrial Inspection**
    *   V. Chavan, O. Heimann, J. Krüger
    *   *European Conference on Computer Vision (ECCV) Workshops*, 2024.
    *   **[Paper]**

*   **Active Data Collection and Management for Real-World Continual Learning via Pretrained Oracle**
    *   V. Chavan, P. Koch, M. Schlüter, C. Briese, J. Krüger
    *   *IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR) Workshops*, 2024.
    *   **[Paper]**

*   **Towards Realistic Evaluation of Industrial Continual Learning Scenarios with an Emphasis on Energy Consumption and Computational Footprint**
    *   V. Chavan, P. Koch, M. Schlüter, C. Briese
    *   *IEEE/CVF International Conference on Computer Vision (ICCV)*, 2023.
    *   **[Paper]**

*   **Green Incremental Learning – Energy Efficient Ramp-Up for AI-Enhanced Part Recognition in Reverse Logistics**
    *   M. Schlüter, R. Schimanek, P. Koch, C. Briese, V. Chavan, et al.
    *   *Procedia CIRP 116*, 2023.
    *   **[Paper]**

*   **MVIP: A Dataset for Industrial Part Recognition**
    *   P. Koch, M. Schlüter, C. Briese, V. Chavan
    *   *Fraunhofer Fordatis*, 2023.
    *   **[Dataset]**

*   **Image-Based Incremental Learning for Part Recognition of Used Automotive Cores in Reverse Logistics**
    *   C. Briese, V. Chavan, M. Schlüter, J. Lehr, O. Kröger
    *   *International Workshop on Autonomous Remanufacturing*, 2023.
    *   **[Paper]**

*   **InVar-100: Industrial Objects in Varied Contexts Dataset**
    *   J. Lehr, V. Chavan, P. Koch, M. Schlüter, C. Briese
    *   2023.
    *   **[Dataset]**
