---
layout: post
title: "ECCV 2026: Reflections, Highlights, and Key Takeaways"
date: 2026-09-15
---

### TL;DR

- **A rapidly growing conference:** ECCV 2026 received 10,473 valid submissions from more than 37,000 authors, with 2,834 papers accepted.
- **From perception toward the physical world:** A strong share of the work I encountered focused on downstream applications such as 3D understanding, embodied AI, robotics, autonomous systems, and multimodal reasoning.
- **Competing visions for AI:** The keynote talks presented very different views of where the field should go next, with Yann LeCun offering an especially direct critique of several dominant AI paradigms.
- **The experience:** The poster sessions remained one of the most valuable parts of the conference, both for discovering work and for direct conversations with researchers.

---

<div style="display: flex; align-items: center; gap: 20px; margin-top: 1.5em; margin-bottom: 1.5em;">

  <div style="flex: 0 0 46%;">
    <img src="/assets/IMG_6424.jpeg"
         alt="Vivek Chavan outside Malmö Arena during ECCV 2026"
         style="width: 100%; height: 300px; object-fit: cover; object-position: center; border-radius: 6px;">
  </div>

  <div style="flex: 1; text-align: left;">
    <p><strong>Back at ECCV, two years after Milan.</strong></p>
    <p>
      I just returned from Malmö after attending ECCV 2026. This was my second ECCV, after previously attending ECCV 2024 in Milan, and the first major research conference that I have now attended twice.
    </p>
    <p>
      That made this year's event particularly interesting: it was not only a chance to see where the computer vision community is heading, but also to compare how my own experience of participating in these conferences has changed over the last two years.
    </p>
  </div>

</div>

<div style="display: flex; align-items: center; gap: 24px; margin-top: 1.2em; margin-bottom: 1.5em;">

  <div style="flex: 0 0 38%;">
    <img src="/assets/IMG_5633.jpeg"
         alt="Vivek Chavan with a workshop poster at ECCV 2026"
         style="width: 100%; border-radius: 6px;">
  </div>

  <div style="flex: 1; text-align: left;">
    <p><strong>Five workshop papers presented at ECCV 2026.</strong></p>

    <p>
      I presented our recent and ongoing work across the ECCV workshops. Our contributions covered several closely connected research directions:
      egocentric and exocentric procedural understanding, neuro-symbolic reasoning,
      conditional visual grounding for robot learning, industrial egocentric datasets,
      and multimodal worker assistance.
    </p>

    <p>
      Two of the papers were selected for <strong>oral presentation</strong>,
      at the ACVR and X-Reason workshops.
    </p>
  </div>

</div>

### Workshop Contributions

<p>
  <strong>1. A Framework for Egocentric and Exocentric Procedural Understanding via Temporal Segmentation and Semantic Abstraction</strong><br>
  <em>ACVR 2026: 14th International Workshop on Assistive Computer Vision and Robotics</em><br>
  <strong>Oral presentation</strong> · arXiv preprint coming soon ·
  <a href="https://indego-assistant.github.io/">Project</a>
</p>

<p>
  <strong>2. Towards Neuro-Symbolic Procedural Reasoning for Long-Horizon Vision-Language-Action Manipulation</strong><br>
  <em>X-Reason: Visual Perception and Reasoning in the Interactable World</em><br>
  <strong>Oral presentation</strong> ·
  <a href="https://arxiv.org/abs/2609.05369">arXiv:2609.05369</a> ·
  <a href="https://lnkd.in/extVwuw6">Project</a>
</p>

<p>
  <strong>3. What Matters, When? Diagnosing and Improving Conditional Visual Grounding in Visuomotor Imitation Policies</strong><br>
  <em>DexHAND: Observing and Acting as Dexterous Hands</em><br>
  <a href="https://arxiv.org/abs/2609.05376">arXiv:2609.05376</a> ·
  <a href="https://lnkd.in/extVwuw6">Project</a>
</p>

<p>
  <strong>4. IndEgo: A Dataset of Industrial Scenarios and Collaborative Work for Egocentric Assistants</strong><br>
  <em>Wearable AI Workshop: Towards Real-time Multimodal Contextual Assistants</em><br>
  <a href="https://arxiv.org/abs/2511.19684">arXiv:2511.19684</a> ·
  <a href="https://indego-dataset.github.io/">Project</a>
</p>

<p>
  <strong>5. AI-based worker guidance in assembly and disassembly operations using multimodal ego/exo-centric data capture and structured task knowledge</strong><br>
  <em>FOUND: Foundation Data for Industrial Tech Transfer</em><br>
  <a href="https://arxiv.org/abs/2608.22617">arXiv:2608.22617</a> ·
  CIRP Annals 2026 ·
  <a href="https://indego-assistant.github.io/">Project</a>
</p>


---

## Trends and Observations

The scale of ECCV continues to grow considerably. ECCV 2026 received **10,473 valid submissions from more than 37,000 authors**. Of these, **2,834 papers were accepted**, corresponding to an acceptance rate of **27.1%**. Only **163 papers were selected for oral presentation**, or around **1.6% of valid submissions**, including 28 long orals and 135 short orals.

The longer-term trend is even more striking. ECCV received 2,439 submissions in 2018, 5,150 in 2020, 5,804 in 2022, 8,585 in 2024, and 10,473 in 2026. In eight years, the number of submissions has grown by more than four times.

My personal impression from the poster halls and oral sessions was that an increasing amount of computer vision research is being connected to larger downstream systems. I repeatedly encountered work on **3D reconstruction, spatial understanding, robotics, embodied AI, autonomous systems, world models, egocentric perception, and multimodal reasoning**.

This does not mean that classical computer vision problems are disappearing. Rather, recognition, geometry, tracking, reconstruction, and representation learning are increasingly being placed inside systems that must reason about or interact with the physical world.

The continued strength of **3D vision and geometry** was particularly noticeable. This was also reflected in the Best Paper candidate list, which included work on spatial reasoning, streaming 3D reconstruction, geometric representations, structure-from-motion, point-cloud registration, surface normal estimation, and computational imaging.

For a field that is often discussed today mainly through the lens of foundation models and generative AI, ECCV was a useful reminder that understanding the geometry and physical structure of the visual world remains a central research problem.

---

## Keynotes and Invited Talks

ECCV 2026 featured three keynote speakers: **Kristen Grauman, Yann LeCun, and Jamie Shotton**. The two talks that stood out most to me were those by Kristen Grauman and Yann LeCun.

<div style="display: flex; gap: 12px; margin-bottom: 0.5em;">

  <div style="flex: 1;">
    <img src="/assets/IMG_5941.jpeg"
         alt="Kristen Grauman speaking at ECCV 2026"
         style="width: 100%; border-radius: 6px;">
  </div>

  <div style="flex: 1;">
    <img src="/assets/IMG_6166.jpeg"
         alt="Yann LeCun speaking at ECCV 2026"
         style="width: 100%; border-radius: 6px;">
  </div>

</div>

<p style="text-align: center; font-style: italic; margin-top: -0.2em;">
  Kristen Grauman (left) and Yann LeCun (right), two of the keynote speakers at ECCV 2026.
</p>

### Egocentric Vision and Embodied Intelligence
**Speaker:** Kristen Grauman

Kristen Grauman's talk was naturally one of the most relevant to my own research interests. Egocentric vision has developed far beyond the original problem of recognising actions from first-person video. The broader question is increasingly how an intelligent system can understand what a person is doing over long periods of time, relate first-person observations to the wider environment, learn from human demonstrations, and ultimately use that understanding to assist or act.

This direction appeared repeatedly throughout ECCV, not only in Grauman's keynote but also across workshops and papers on wearable AI, long-video understanding, multimodal perception, and embodied agents.

### World Models and a Provocative Research Agenda
**Speaker:** Yann LeCun

Yann LeCun's keynote focused on world models and his long-standing argument that today's dominant AI systems are still missing fundamental capabilities required for human-level intelligence. His emphasis was on systems that learn predictive models of the world and use them for reasoning, planning, and action.

The most memorable moment came near the end, when he gave an unusually direct set of recommendations to his fellow AI scientists. He argued for moving away from generative models in favour of joint-embedding architectures, probabilistic models in favour of energy-based approaches, contrastive methods in favour of regularised methods, and reinforcement learning as the default route to intelligent behaviour in favour of model-predictive control.

His final recommendation was the sharpest of all: researchers interested in human-level AI should not work on LLMs.

Whether one agrees with all of these prescriptions or not, it was refreshing to hear such a clear research position. Much of contemporary AI development is organised around scaling variations of already successful paradigms. LeCun instead argued that several of those paradigms may themselves be dead ends for the longer-term goal of intelligent agents.

That tension between scaling today's successful systems and searching for fundamentally different architectures was one of the more interesting themes I took away from the conference.

### From Vision to Embodied AI
**Speaker:** Jamie Shotton

The third keynote, by Jamie Shotton, continued another theme visible throughout ECCV: computer vision increasingly serves not only as a mechanism for interpreting images, but as the perceptual foundation of systems that must operate in the physical world.

---

## Best Paper Awards

The ECCV 2026 Best Paper Award was given to:

### Heat Kernel Textures -- the Geodesic Gaussians That Do Not Splat
**Simone Foti, Caner Korkmaz, Stefanos Zafeiriou, Tolga Birdal**

The paper introduces an intrinsic representation for texturing triangular meshes using heat kernels on the surface itself. Instead of depending on a conventional UV parameterisation, appearance is represented directly over the mesh geometry.

Two additional papers received Best Paper Honourable Mentions:

- **LSRM: High-Fidelity Object-Centric Reconstruction via Scaled Context Windows**
- **Poppy: Polarization-Based Plug-and-Play Guidance for Enhancing Surface Normal Estimation**

Taken together, the recognised papers reinforced something that was already visible throughout the conference: **3D geometry and physical understanding remain major research directions even as the wider AI landscape moves toward increasingly large multimodal models.**

---

## Test of Time Awards

ECCV's Koenderink Prize recognises papers from ten years earlier that have had a lasting impact on computer vision. Among the works recognised from ECCV 2016 were several papers that have become foundational references in modern vision.

### Perceptual Losses for Real-Time Style Transfer and Super-Resolution
**Justin Johnson, Alexandre Alahi, Li Fei-Fei**

This work helped establish the idea of evaluating image similarity using deep feature representations rather than relying only on pixel-level losses. Variants of perceptual losses have since become standard across image synthesis, reconstruction, super-resolution, and generative modelling.

### SSD: Single Shot MultiBox Detector
**Wei Liu et al.**

SSD became one of the defining single-stage detectors of the deep-learning era. By predicting classes and bounding boxes directly from multiple feature-map scales, it helped establish a fast and practical approach to object detection that influenced a decade of subsequent systems.

### Learning without Forgetting
**Zhizhong Li, Derek Hoiem**

This paper is particularly relevant to my own research interests. It addressed catastrophic forgetting: the tendency of a neural network to lose performance on previously learned tasks when adapted to new ones.

A decade later, continual learning remains an active research problem. In fact, the same fundamental question has become even more relevant as increasingly large pretrained models are repeatedly adapted to new domains, skills, and tasks.

---

## Poster Presentations and Oral Sessions

<div style="display: flex; align-items: flex-start; gap: 20px; margin-bottom: 1.5em;">

  <div style="flex: 0 0 40%;">
    <img src="/assets/IMG_6065.jpeg"
         alt="Poster session at ECCV 2026"
         style="width: 100%; height: 360px; object-fit: cover; object-position: center; border-radius: 6px;">
  </div>

  <div style="flex: 1; text-align: left;">
    <p><strong>A lively poster session during the main conference.</strong></p>
    <p>
      As with NeurIPS last year, I found that the <strong>poster sessions provided some of the greatest value of the conference</strong>.
    </p>
    <p>
      The sheer number of accepted papers makes it impossible to explore more than a fraction of the programme. Posters solve this surprisingly well. You can move quickly between research areas, stop when something catches your attention, and immediately speak with the people who actually did the work.
    </p>
    <p>
      There is also a completely different quality to these discussions compared with simply reading the paper. You can ask why an experiment was designed in a certain way, what failed before the final method worked, which limitations the authors are most concerned about, or where they intend to take the work next.
    </p>
  </div>

</div>

<div style="display: flex; align-items: flex-start; gap: 20px; margin-bottom: 1.5em;">

  <div style="flex: 0 0 40%;">
    <img src="/assets/IMG_5834.jpeg"
         alt="Oral presentation session at ECCV 2026"
         style="width: 100%; height: 330px; object-fit: cover; object-position: center; border-radius: 6px;">
  </div>

  <div style="flex: 1; text-align: left;">
    <p><strong>One of the oral presentation sessions at ECCV 2026.</strong></p>
    <p>
      The oral programme offered the opposite experience: a highly compressed selection of work presented to a larger audience. Only 163 papers out of more than ten thousand valid submissions received oral presentations this year, making these sessions a very selective subset of the programme.
    </p>
    <p>
      The combination worked well. The oral sessions offered a broad snapshot of notable research, while the poster sessions provided the depth and direct interaction. For me, the latter remained more valuable.
    </p>
  </div>

</div>

---

## Expo and Sponsored Booths

The Expo ran alongside the main conference and brought together major industrial research labs, hardware and software companies, startups, and recruiting teams.

Compared with some academic events, ECCV has an especially visible connection to industrial computer vision research. Many booths went beyond conventional company displays and included live technical demonstrations, research talks, hardware prototypes, and informal opportunities to discuss ongoing work directly with researchers.

<div style="display: flex; gap: 12px; margin-bottom: 0.5em;">

  <div style="flex: 1;">
    <img src="/assets/IMG_5955.jpeg"
         alt="Google recruiter giving a talk at the Google booth during ECCV 2026"
         style="width: 100%; height: 280px; object-fit: cover; object-position: center; border-radius: 6px;">
  </div>

  <div style="flex: 1;">
    <img src="/assets/IMG_5911.jpeg"
         alt="Meta researcher speaking about DINOv3 at ECCV 2026"
         style="width: 100%; height: 280px; object-fit: cover; object-position: center; border-radius: 6px;">
  </div>

</div>

<p style="text-align: center; font-style: italic; margin-top: -0.2em;">
  A recruiter speaking at the Google booth (left) and a Meta research talk on DINOv3 (right).
</p>

I deliberately spent more time exploring the Expo this year. This was something I underestimated at previous conferences. It is easy to focus entirely on the official scientific programme and postpone visiting the booths until later, but the exhibition provides a different cross-section of the field: which problems companies are actively investing in, which technologies are moving from research into products, and which research directions are creating entirely new companies.

The booths were also useful as small presentation spaces in their own right. Alongside recruiting conversations, companies hosted short talks from researchers and technical teams. This made it possible to move between the formal scientific programme and much more informal discussions about current research, engineering, and hiring within the same hall.

The conversations were ultimately at least as valuable as the demonstrations themselves.

---

## General Observations: Venue and Vibe

Malmö made for a very convenient conference location. The conference venues were directly connected to the Hyllie railway station, with Copenhagen and Copenhagen Airport easily reachable across the Öresund connection.

For me, Copenhagen also became part of the conference experience. I spent the week moving between Copenhagen and Malmö, which created the slightly unusual situation of crossing an international border on the way to an academic conference each morning.

<div style="display: flex; gap: 12px; align-items: stretch; margin-bottom: 0.5em;">

  <div style="flex: 1;">
    <img src="/assets/IMG_6114.jpeg"
         alt="Malmö city during ECCV 2026"
         style="width: 100%; height: 220px; object-fit: cover; object-position: center; border-radius: 6px;">
  </div>

  <div style="flex: 1;">
    <img src="/assets/IMG_5812.jpeg"
         alt="Railway tracks at sunset in Malmö during ECCV 2026"
         style="width: 100%; height: 220px; object-fit: cover; object-position: center; border-radius: 6px;">
  </div>

  <div style="flex: 1;">
    <img src="/assets/IMG_6058.jpeg"
         alt="Snacks and sweets served during an ECCV 2026 poster session"
         style="width: 100%; height: 220px; object-fit: cover; object-position: center; border-radius: 6px;">
  </div>

</div>

<p style="text-align: center; font-style: italic; margin-top: -0.2em;">
  Malmö during ECCV 2026: a scene from the city (left), railway tracks at sunset (centre), and refreshments during a poster session (right).
</p>

Inside the conference, the atmosphere was lively throughout the main days. Poster sessions were busy, keynote sessions filled the Arena, and the Expo remained crowded. Despite the size of the event, ECCV still felt more manageable than NeurIPS while being large enough that it was impossible to see everything.

---

## Closing Remarks

ECCV 2026 was particularly meaningful to me because it was the first major research conference I had attended for the **second time**.

When I attended ECCV in Milan in 2024, I was at a different stage of my research. Returning two years later provided an interesting benchmark. The field has moved, my own research interests have evolved, and I participated in the conference differently this time.

Several areas that are increasingly prominent within computer vision: egocentric perception, long-horizon video understanding, embodied AI, robotics, world models, and reasoning about physical tasks, now overlap strongly with the questions I work on myself.

At the same time, the biggest takeaway from actually travelling to these conferences remains remarkably consistent.

Most papers can be read online. Slides can be downloaded. Talks increasingly appear as recordings. What remains difficult to reproduce remotely are the spontaneous conversations: finding a poster you had not planned to visit, asking an author one very specific question, meeting somebody working on the same problem from a completely different direction, or continuing a technical discussion long after the formal session has ended.

Those interactions were the most valuable part of ECCV for me.

Two years after Milan, it was exciting to return and see both how much the community has changed and how much more there is still to explore.
