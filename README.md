# Store Code Review - Green Basket Grocery

## Project Overview
This project is a web-based grocery store interface. It allows users to input item quantities, calculates a total price based on fixed constants, and generates a formatted receipt. It also includes an inactivity timer that resets the cart after 15 seconds.

## Code Investigation
During my review of the provided code, I investigated:
- **DOM Manipulation:** How JavaScript selects input values and updates text content in the receipt area.
- **State Management:** The use of `setTimeout` to handle automatic cart resets.
- **Responsive Design:** The use of CSS Grid and Media Queries to ensure the store works on mobile devices.

## Professional Improvement Suggestion
**Improvement:** Use **Centralized Event Listeners** instead of Inline HTML attributes.

**The Problem:** The current HTML uses `onclick` and `oninput` inside the tags. This makes the code harder to maintain and violates the "Separation of Concerns" principle.
**The Solution:** Use `document.querySelectorAll` in the JavaScript file to attach listeners to all inputs and buttons at once. This keeps the HTML clean and the logic in one place.

## What I Learned
I practiced reading existing code to understand how different files (HTML, CSS, and JS) connect. I also learned how to use constants for pricing to make a project easier to update in the future.
