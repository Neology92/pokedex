# Allegro Recruitment Task - Pokédex App

**Apply :** Front-End Software Engineer Intern  
**City:** Poznań  
**Year:** 2020

![Hero Image](https://github.com/user-attachments/assets/2443bf06-3ae2-478d-b41e-9de80b1d85cc)

## About The Project

This project was developed as part of a recruitment task for Allegro's Front-End Internship Program.  
The goal was to create an **interactive, responsive Pokédex application** using **React.js**, powered by the [PokeAPI](https://pokeapi.co/).
![Mobile View Screensho1](https://github.com/user-attachments/assets/456659a2-51bc-47a7-bbe6-d1b3a6e4fe5f)
![Mobile View Screenshot2](https://github.com/user-attachments/assets/d10379fa-3228-4df0-8429-b52fba081990)

## Features

- Browse a list of Pokémon
- View detailed Pokémon information
- Responsive mobile-first design
- Smooth scrolling between sections
- Image lazy-loading
- Styled using **Styled-Components**

## Built With

- React.js
- Webpack
- Babel
- Styled-Components
- React-Scroll
- React-Image
- Axios
- Prettier, Husky, Lint-Staged (code quality)
- Jest (testing)

## Getting Started

### Installation

1. Install packages:
```bash
npm install
```

3. Start development server:
```bash
npm start
```

Or build the project:
```bash
npm build
open ./dist/index.html
```


## Lessons Learned

This was one of my first larger React projects.  
Today, with more experience, I recognize several areas for improvement:

- **Component Architecture:**  
  I would now prefer function components and hooks instead of class components.

- **State Management:**  
  Introducing **Redux Toolkit** would help avoid props drilling and manage state more effectively.

- **Performance Optimization:**  
  The app currently fetches a large amount of data on load, leading to sluggishness.  
  Today, I'd use smarter data fetching strategies.

- **Testing Strategy:**  
  I would add unit tests, integration tests, and use modern libraries like **React Testing Library**.

This project reflects my early journey into front-end development.

## License

Distributed under the MIT License.  
