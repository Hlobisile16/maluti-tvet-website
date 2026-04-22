# Maluti TVET College — Website Revamp

Developed by: Hlobisile Sibeko  
GitHub: github.com/Hlobisile16  
Submitted to: The Battlefield Holdings (Pty) Ltd  
Submission date: 24 April 2026  

---

## Project overview

This project is a full website revamp for Maluti TVET College, 
developed as part of Phase 2 of The Battlefield internship 
selection process. It includes a fully designed frontend, 
a REST API skeleton, and a live hosted deployment.

---

## Live website

> https://playful-caramel-ed4289.netlify.app/

---

## What is included

### 1. Frontend (HTML, CSS, JavaScript)
- Home page with hero section, feature cards, and announcements
- Programmes page listing all NC(V) and Report 191 qualifications
- Admissions page with step-by-step application process
- News page with latest college announcements
- Contact page with campus details and contact form
- Fully responsive design that works on mobile and desktop
- Consistent navy blue and gold branding throughout

### 2. API skeleton (Node.js + Express)
A REST API with the following endpoints:

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /api/programmes | Returns all programmes |
| GET | /api/programmes/:id | Returns a single programme |
| GET | /api/news | Returns all news articles |
| GET | /api/campuses | Returns all campus details |
| POST | /api/contact | Handles contact form submissions |
| POST | /api/apply | Handles student applications |

### Live API
> https://maluti-tvet-api.onrender.com

| Test these endpoints in your browser: |
|---------------------------------------|
| https://maluti-tvet-api.onrender.com/api/programmes |
| https://maluti-tvet-api.onrender.com/api/news |
| https://maluti-tvet-api.onrender.com/api/campuses |



### 3. Repository structure

maluti-tvet-website/
├── index.html
├── README.md
├── .gitignore
├── css/
│   └── style.css
├── js/
│   └── main.js
├── pages/
│   ├── programmes.html
│   ├── admissions.html
│   ├── news.html
│   └── contact.html
└── api/
    ├── server.js
    └── package.json

---
## Technology stack
| Layer | Technology |
|-------|------------|
| Frontend | HTML5, CSS3, Vanilla JavaScript |
| Backend | Node.js, Express.js |
| Version Control | Git and GitHub |
| Frontend Hosting | Netlify |
| API Hosting | Render |

---
## Developer
Hlobisile Sibeko  
National Diploma in Information Technology  
GitHub: github.com/Hlobisile16  

---
*Developed for The Battlefield Holdings — Phase 2 Assessment | April 2026*