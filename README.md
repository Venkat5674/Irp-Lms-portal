# Responsive Web Design & JavaScript Foundations

This repository contains the technical practical assignment covering **Part A: Frontend CSS Responsiveness (IRP LMS Home Page)** and **Part B: JavaScript Bank Simulator (Types, Variables, & Scoping)**.

---

## 📁 Project Directory Structure

```text
irp-web-development-assignment/
├── part-a-responsive-ui/
│   ├── index.html       # Semantic HTML5 recreation of IRP LMS Home Page
│   └── style.css        # Responsive CSS (Flexbox, CSS Grid, Media Queries)
├── part-b-javascript/
│   └── bank.js          # Standalone JavaScript file (Part 1 & Part 2)
└── README.md            # Setup notes, responsive testing steps, and execution instructions
```

---

## 🚀 Part A: Frontend CSS Responsiveness (IRP LMS Home Page)

### 1. Key Implementation Details
- **CSS Positioning (`position: sticky; top: 0; z-index: 1000;`)**: Anchors the top navigation bar during scrolling, allowing content to pass smoothly underneath.
- **Semantic HTML5**: Minimal custom classes using standard semantic tags (`header`, `nav`, `main`, `section`, `article`, `footer`, `h1`, `h2`, `h3`, `p`, `a`).
- **Responsive Layout Engine**:
  - **Desktop View (≥ 1024px)**:
    - Navigation displays logo, active *Home* link with orange underline indicator, *Courses*, *Contact Us*, and outlined *Sign In* button.
    - Hero banner in a 2-column layout (content left, illustration right).
    - Learning Journey uses an exact 5-column horizontal row (`grid-template-columns: repeat(5, 1fr)`).
  - **Tablet View (768px – 1024px)**:
    - Balanced 2- or 3-column wrapping grid for journey cards.
    - Stacked hero banner.
  - **Mobile View (≤ 768px, tested at 375px & 390px)**:
    - Desktop navigation links automatically hide (`display: none;`).
    - Header preserves brand logo on the left and outlined *Sign In* button on the right with comfortable touch spacing.
    - Hero illustration scales fluidly without overflow.
    - Learning Journey cards form a strict 1-column vertical stack (`grid-template-columns: 1fr;`), spanning full width with orange step numbers on the top-left.

### 2. Design Tokens (`style.css`)
```css
:root {
  --color-primary-navy: #003366;
  --color-primary-orange: #FE781E;
  --color-secondary-blue: #5F9FE0;
  --color-bg-light: #E2F2FD;
  --color-card-bg: #FFFFFF;
  --color-border-light: #D6E9FF;
}
```

### 3. Testing & Verification Instructions for Part A
1. Open `part-a-responsive-ui/index.html` in Google Chrome (or any modern browser).
2. Scroll through the page and verify that the navbar remains anchored at the top.
3. Open **Developer Tools (`F12`)** and toggle the **Device Toolbar (`Ctrl + Shift + M`)**.
4. Test at **Desktop viewport (1200px+)**: Observe the 5-column journey grid and full nav links.
5. Test at **Mobile viewports (375px / 390px)**:
   - Verify navigation links collapse, leaving logo and Sign In button.
   - Verify hero banner stacks vertically without horizontal overflow.
   - Verify journey cards stack in a single column (`grid-template-columns: 1fr`).

---

## ⚙️ Part B: Core JavaScript (Bank Account Simulator)

### 1. Key Implementation Details
- **`"use strict";` Mode**: Enforces strict JavaScript execution.
- **Strict Equality**: Uses `===` and `!==` exclusively across all checks.
- **Part 1: Types & Coercion (`parseAmount`)**:
  - Guards against `null` and `undefined` to prevent coercion to `0`.
  - Validates types, rejects non-string/non-number inputs.
  - Trims whitespace and prevents empty strings `""` from coercing to `0`.
  - Converts with `Number()` and verifies with `Number.isNaN()`.
  - Enforces positive numbers (`> 0`).
  - Tested within `try...catch` blocks for all mandatory inputs: `"500"`, `" 250 "`, `""`, `"abc"`, `null`, `undefined`, `"12.5.3"`.
  - Explains coercion (`"5" + 2 === "52"` vs. `"5" - 2 === 3`) and the historic `typeof null === "object"` bug.
- **Part 2: Scoping, Hoisting & Temporal Dead Zone (TDZ)**:
  - Demonstrates `const` for immutable variables (`BANK_NAME`) and `let` for mutable state (`transactionCounter`).
  - Demonstrates `var` hoisting (prints `undefined`).
  - Demonstrates `let` Temporal Dead Zone (caught `ReferenceError`).
  - Demonstrates function declaration hoisting (callable before definition).
  - Demonstrates function expression hoisting (caught `TypeError`).
  - Demonstrates the Asynchronous Loop Bug:
    - `var` loop logs `3, 3, 3` due to shared global/function scope.
    - `let` loop correctly logs `0, 1, 2` due to fresh per-iteration lexical block binding.

### 2. Execution Instructions for Part B
Run the script using Node.js:
```bash
node part-b-javascript/bank.js
```

**Expected Console Output:**
```text
=== PART 1: Types & Coercion Test Results ===
Input: "500" -> Success: 500
Input: " 250 " -> Success: 250
Input: "" -> Error: Amount cannot be empty.
Input: "abc" -> Error: Invalid number: Unable to parse numeric value.
Input: null -> Error: Amount is required.
Input: undefined -> Error: Amount is required.
Input: "12.5.3" -> Error: Invalid number: Unable to parse numeric value.

=== PART 2: Scoping, Hoisting & TDZ ===
1. Hoisted var before declaration: undefined
2. Caught let TDZ ReferenceError: Cannot access 'hoistedLet' before initialization
3. Function declaration called before definition: Welcome to JS National Bank! System is operational.
4. Caught function expression TypeError: notify is not a function
var loop: 3
var loop: 3
var loop: 3
let loop: 0
let loop: 1
let loop: 2
```

---

## 🌐 Submission & Repository Link
- **Public GitHub Repository**: [https://github.com/Venkat5674/Irp-Lms-portal](https://github.com/Venkat5674/Irp-Lms-portal)
- **Branch**: `main`
