# IRP LMS - Website Recreation

A responsive, semantic recreation of the official **IRP LMS** platform developed using fundamental HTML5 and CSS3.

## 📌 Project Overview
This project rebuilds three core pages of the IRP LMS web application adhering strictly to design guidelines, semantic markup, and responsive web design:
1. **Home Page (`index.html`)**: Features the navigation bar, hero banner with call-to-action, and the 5-step learning journey cards.
2. **Courses Page (`courses.html`)**: Features the course banner, 9 embedded YouTube crash course video tutorials in a responsive 3-column grid (16:9 ratio), and an "Explore More Courses" footer banner.
3. **Contact Us Page (`contact.html`)**: Features the hero banner and a split two-column support layout with direct communication channels and an interactive message form.

---

## 🎨 Color Palette & CSS Variables
All colors are configured in `style.css` via `:root` CSS custom properties:

| Color Purpose | CSS Variable | Hex Code |
| :--- | :--- | :--- |
| **Primary Navy Blue** | `--primary-navy` | `#003366` |
| **Primary Orange** | `--primary-orange` | `#FE781E` |
| **Secondary Blue** | `--secondary-blue` | `#5F9FE0` |
| **Light Blue Background** | `--light-blue-bg` | `#E2F2FD` |
| **White / Card Background** | `--white` | `#FFFFFF` |
| **Light Blue Border** | `--light-blue-border` | `#D6E9FF` |

---

## 🚀 Key Features
- **Semantic & Clean HTML5**: Built with minimal custom classes using standard semantic tags (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`, `<form>`).
- **Responsive Web Design**:
  - **Desktop (> 992px)**: Multi-column layouts (5-column journey, 3-column courses grid, 2-column contact split).
  - **Tablet (641px - 992px)**: Fluid grids collapsing to 2 or 3 columns with stacked banners.
  - **Mobile (≤ 640px)**: Single column stack, touch-friendly navigation, and full-width inputs.
- **Responsive 16:9 Video Embeds**: Utilizes modern CSS `aspect-ratio: 16 / 9;` on video containers to avoid letterboxing.
- **Pure CSS**: No JavaScript or external CSS frameworks needed.

---

## 📁 Project Structure
```text
irp-lms/
├── index.html        # Home Page
├── courses.html      # Courses & Tutorials Page
├── contact.html      # Contact Us & Support Page
├── style.css         # Shared Stylesheet & Media Queries
└── README.md         # Project Documentation
```

---

## 💻 How to View Locally
Simply open any of the `.html` files in your web browser:
- Double click `index.html` in File Explorer, or
- Right click and choose **Open with > Chrome / Edge / Firefox**, or
- If using VS Code, use the **Live Server** extension.

---

## 📤 Publishing to GitHub
Follow these steps to submit your project:
1. Initialize git and commit:
   ```bash
   git init
   git add .
   git commit -m "Complete IRP LMS website recreation"
   ```
2. Create a new public repository on [GitHub](https://github.com/new).
3. Link your remote repository and push:
   ```bash
   git remote add origin https://github.com/<your-username>/<your-repo-name>.git
   git branch -M main
   git push -u origin main
   ```
4. (Optional) Enable **GitHub Pages** under repository **Settings > Pages** to host it live for free!
