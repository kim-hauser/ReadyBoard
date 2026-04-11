git reset --hard HEAD~1# ReadyBoard

A lightweight change management dashboard designed to help teams quickly assess, prioritize, and organize work based on status, ownership, and risk.

## ✨ Overview

ReadyBoard was built to simulate a real-world internal operations tool used to track and manage change requests. The goal was to create a dashboard that is not only functional, but aligned with how teams actually think about work prioritization, visibility, and quick decision-making.

This project emphasizes **usability, clarity, and practical product thinking**.

---

## 🚀 Features

### 🔄 Dual View Modes

* **Status View** – Organizes changes by lifecycle stage (e.g., Open, Pending, Closed)
* **Assignment Group View** – Changes are sorted into “buckets” by team ownership for operational clarity

### 🎯 Risk-Based Prioritization

* Visual **risk indicators (color-coded dots)** for quick scanning
* Filter for **Medium, High, and Very High risk changes** to focus on what matters most
* Logical grouping of risk levels for real-world workflows

### 🔍 Dynamic Filtering

* Filter changes by:

  * Assignment group
  * Owner
  * Risk level
* Multi-select filtering for more flexible queries
* Designed to support real-time decision-making

### 🧩 Reusable Components

* Modular React components for:

  * Cards
  * Filters
  * Risk indicators
* Built with scalability and maintainability in mind

---

## 🛠️ Tech Stack

* **React** (functional components + hooks)
* **Vite** for fast development and build tooling
* **CSS** (custom styling, responsive layout)
* **Netlify** for deployment

---

## 🧠 Design Philosophy

ReadyBoard was built with a focus on:

* **Clarity over complexity** – Simple UI that surfaces what matters
* **Real-world usability** – Inspired by internal tooling and team workflows
* **Scannability** – Users should be able to assess priority at a glance
* **Flexibility** – Multiple views and filters to support different use cases

---

## 📸 Live Demo

👉 https://readyboard.netlify.app/

---

## 🔮 Future Enhancements

* API integration for live data
* Persistent filter state
* Enhanced multi-select UI

---

## 📚 What I Learned

* Building reusable and scalable React components
* Managing UI state across multiple views and filters
* Translating user feedback into functional features
* Debugging real-world issues (rendering, state, styling conflicts)
* Designing with both **users and developers** in mind

---

## 💬 Why I Built This

This project started as a class assignment but evolved into something more meaningful—a tool inspired by real workplace needs. Feedback from colleagues directly influenced features like risk filtering and assignment-based views, making this a collaborative and iterative build.

---

## 👤 Author

Built by Kim Hauser:

Launchcode Women+ Software Development Cohort Participant
IT Product Administrator exploring front-end development and product design

---

## 📝 License

This project is for educational and portfolio purposes.


## Setup

npm install  
npm run dev

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.