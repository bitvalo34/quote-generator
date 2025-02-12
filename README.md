# quote-generator
Lab 04 of quote generator app.

# Quote Generator

This is a React application that displays a random quote, auto-refreshing every 5 seconds, and allows manual refreshing using a button. The app is styled with Material UI for a clean design.

## Features

- **Random Quote on Load:** Displays a random quote when the app loads.
- **Auto-Refresh:** Automatically updates the quote every 5 seconds using React's `useEffect` hook.
- **Manual Refresh:** A button allows users to fetch a new quote at any time.
- **Material UI Styling:** Uses Material UI components such as Container, Card, Typography, and Button.

## Live Demo

Check out the live preview on CodeSandbox: [CodeSandbox Live Preview](https://codesandbox.io/p/sandbox/5vtwdz)

## Getting Started

1. **Clone the repository:**

   git clone https://github.com/bitvalo34/quote-generator
   cd quote-generator

2. **Install dependencies:**

   npm install

   - In case of dependency conflicts try:
   npm install --legacy-peer-deps

3. **Run the development server:**

   npm start
   
   - The app should now be running at http://localhost:3000.
   - In case of version conflict between ajv and ajv-keywords dependencies try:
   npm install ajv-keywords@3.5.2 --legacy-peer-deps
   npm start

