# Animated Skill/Progress Bars (Task 29)

A responsive technical skills component featuring dynamic progress bars that fill smoothly using CSS transitions when scrolled into view. Built for Task 29 of the Web Development Internship track.

## Objective
To practice CSS transitions/animations, dataset attribute binding, and viewport scroll detection using the JavaScript `IntersectionObserver` API.

## Tools Used
- HTML5
- CSS3 (Custom properties & Flexbox)
- Vanilla JavaScript (ES6+ & IntersectionObserver)
- FontAwesome (Icons)

## Key Technical Features
1. **Configurable Data Attributes:** Skill target percentages are defined directly on HTML elements using `data-progress` and `data-target` attributes, keeping data decoupled from JS logic.
2. **CSS-Driven Transitions:** The width animation relies on high-performance CSS `transition: width 1.5s cubic-bezier(0.4, 0, 0.2, 1)`.
3. **Scroll-Triggered Detection:** An `IntersectionObserver` instance watches the container and triggers the animation only when the component enters the user's viewport.
4. **Synchronized Counter:** Includes a JS interval counter that smoothly increments numbers from `0%` to the target percentage alongside the bar fill.

## Interview Questions & Answers
- **How would you animate a bar filling to a percentage?**
  Set the initial element `width: 0%` in CSS alongside a transition rule (`transition: width 1.5s ease`). Then, update the inline CSS `style.width` property via JavaScript using a value read from a `data-progress` attribute.
- **What is IntersectionObserver used for?**
  `IntersectionObserver` is a browser API used to asynchronously observe changes in the intersection of a target element with an ancestor element or the top-level document's viewport. It enables performant scroll detection without laggy `window.onscroll` event listeners.
- **How would you keep the percentages configurable?**
  By storing percentages as custom HTML data attributes (e.g., `data-progress="85"`). Adding or updating a skill percentage only requires editing HTML attributes without rewriting JavaScript logic.

## Author
**Cedrick Niyibikora**