# React Project 3 — Admin Dashboard

A responsive SaaS admin analytics dashboard built with **React**, **Vite**, **JavaScript**, and modular **CSS**.

## Features

- Collapsible responsive sidebar navigation (`Sidebar.jsx`)
- Top control navbar with dynamic timeframe selector (`7d`, `30d`, `90d`) (`Navbar.jsx`)
- Reusable KPI metric cards (`DashboardCard.jsx`) rendered via `map()` for Total Users, Revenue, Orders, and Growth Rate
- Monthly revenue & order performance bar chart and channel breakdown (`Statistics.jsx`)
- Filterable recent activity & transaction log (`RecentActivities.jsx`)

## Project Structure

```text
react-project-3-dashboard/
├── src/
│   ├── components/
│   │   ├── DashboardCard.css
│   │   ├── DashboardCard.jsx
│   │   ├── Navbar.css
│   │   ├── Navbar.jsx
│   │   ├── RecentActivities.css
│   │   ├── RecentActivities.jsx
│   │   ├── Sidebar.css
│   │   ├── Sidebar.jsx
│   │   ├── Statistics.css
│   │   └── Statistics.jsx
│   ├── data/
│   │   └── dashboardData.js
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
└── README.md
```

## Getting Started

```bash
npm install
npm run dev
```

To create a production build:

```bash
npm run build
```
