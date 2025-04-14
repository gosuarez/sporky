# Sporky

**Sporky** is a modern recipe discovery web application built with **React**, **TypeScript**, and **Vite**. It helps users explore meals tailored to their dietary preferences and meal types, featuring a clean UI, responsive layout, and intuitive search and filtering. Data is fetched from the [Spoonacular API](https://spoonacular.com/food-api) using a custom Axios client, and the project is deployed via [Vercel](https://vercel.com/) for a seamless production experience.

## Live Demo

[Visit Sporky on Vercel](https://sporky-gosuarez.vercel.app/)

## Features

- **Natural Language Search**: Users can search for recipes using free-text queries (e.g. "quick vegan dinner").
- **Recipe Filtering**: Filter results by meal type (e.g., breakfast) and diet (e.g., keto, vegan).
- **Sort Options**: Sort recipes by relevance, popularity, healthiness, preparation time, and more.
- **Dark/Light Mode**: Smooth theme toggle using Chakra UI's built-in support.
- **Responsive Design**: Optimised for all screen sizes with a mobile-first layout.
- **Dynamic Logo Styling**: The SVG logo adapts to the active theme via Chakra’s colour system.
- **Visual Metadata Icons**: Icons clearly indicate prep time, servings, and health score.
- **Robust API Handling**: Custom Axios client with built-in error handling for reliable requests.
- **SEO-Ready Metadata**: Custom favicons and Open Graph tags enhance social sharing and search appearance.

## Tech Stack

| Technology                                                | Purpose                                   |
| --------------------------------------------------------- | ----------------------------------------- |
| [Vite](https://vitejs.dev/)                               | Fast local development and build tooling  |
| [React](https://reactjs.org/)                             | UI framework for building component views |
| [TypeScript](https://www.typescriptlang.org/)             | Static typing and tooling                 |
| [Chakra UI](https://chakra-ui.com/)                       | Responsive component library with theming |
| [Axios](https://axios-http.com/)                          | API requests with error handling          |
| [Spoonacular API](https://spoonacular.com/food-api)       | External recipe data provider             |
| [React Icons](https://react-icons.github.io/react-icons/) | Visual UI indicators                      |
| [Vercel](https://vercel.com/)                             | Hosting and continuous deployment         |

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/en/) (v18 or higher recommended)
- [npm](https://www.npmjs.com/) or [pnpm](https://pnpm.io/)

---

### Installation

Clone the repo and install dependencies:

```bash
git clone https://github.com/gosuarez/sporky.git
cd sporky
npm install
```

### Running the App Locally

```bash
npm run dev
```

Then open your browser to:

```bash
http://localhost:5173
```

### Deployment

Sporky is hosted on Vercel, integrated with GitHub for continuous deployment.

- Environment variables (e.g., API keys) are securely managed in Vercel’s project settings.
- The production build supports theme switching and mobile-first responsiveness.
- Metadata and favicons were generated via `RealFaviconGenerator` for `SEO` and shareability.

### SEO and Metadata

Sporky includes:

- Fully responsive favicons
- Theme-colour support for mobile browsers
- A theme-aware SVG logo with currentColor styling

### About the Project

Sporky was developed independently to explore modern front-end development practices, API integration, and responsive UI design. It demonstrates scalable architecture, custom theming, and practical attention to detail — from branding and mobile optimisation to search UX and deployment workflows.

## Feedback

If you have any questions or feedback, feel free to reach out to me at <contact@gosuarez.com>.

### License

This project is licensed under the [MIT License](LICENSE).

### Author

[Gonzalo Suarez](https://www.gosuarez.com)
