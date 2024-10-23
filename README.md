# Portfolio - Personal Page

After completing my formal programming training, I created this portfolio to serve as a comprehensive showcase of my skills, projects, and development journey. This project demonstrates my proficiency in front-end development, highlighting my ability to build interactive, responsive, and accessible web applications using technologies like React.js, Bootstrap, and Sass. By incorporating internationalization with i18next, the portfolio allows users to easily switch between English and French, reflecting my bilingual capabilities. Deployed on Vercel, the portfolio also emphasizes my commitment to creating user-friendly, maintainable, and scalable web solutions.

## Overview

### Screenshot

![](/assets/screenshot.png)

### The challenge

Users should be able to:

- Navigate the site through an intuitive menu
- Toggle between English and French, thanks to internationalization
- View detailed information about each project via modal windows
- Download my CV and access my LinkedIn profile through direct links
- View the optimal layout for the website depending on their device's screen size

### Links

- Live Site URL: [See the live page here](https://wealth-health-hr-app.vercel.app/)

## My process

### Built with

- **React.js** for building the user interface
- **Bootstrap**, **React Bootstrap** and **Sass** for consistent and responsive UI styling
- **i18next** for internationalization, enabling multilingual support
- **Vercel** for easy deployment and hosting of the live application

### What I learned

- Implement `i18next` for multilingual support in both English and French
- Design and structure a responsive web page using a combination of Bootstrap, React-Bootstrap, and Sass
- Gain deeper knowledge of Bootstrap for responsive design (using sm, md, lg screen classes instead of custom media queries)

### Continued development

- Refactor the code to store all links in a “constants” file for better code organization and easier maintenance
- Improve the use of the `useTranslation` hook by handling translations only at the App component level and passing the necessary props to child components
- Replace React-Bootstrap modal logic with custom React component (using `useState`, `useEffect`) combined with JavaScript and rely on Bootstrap only for styling
