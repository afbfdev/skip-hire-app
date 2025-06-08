# Skip Hire App

This project is a React front-end application simulating a skips ordering process.

## Table of contents

- Project description
- Features implemented
- Technical approach
- How to Launch the Project
- GitHub link
- Sandbox link

## Project description

This React application aims to provide an intuitive user interface for selecting and ordering skips. The process is divided into several steps, guiding the user through different options.

## Features implemented

* Step Indicator:** * Visual display of progress through the process.
    * Visual display of progress through the order process.
    * Updated icons and text for active, completed and upcoming steps.
    * New:** Adaptation to horizontal scrolling on small screens (smartphones), ensuring that all steps are accessible and legible without clutter.

* SkipCard components:**
    * Detailed display of each skip option (size, rental period, price).
    * Skip selection/deselection management.
      
## Technical approach

The main objective was to improve the user experience and visual consistency on various screen resolutions, focusing on responsive design, accessibility and aesthetics.

1.  Card standardization (`SkipCard`):** **
    * To ensure that all cards have the same height.
    * Images

2.  **Badge management :**
    * Badges (“Not Allowed On The Road” and “Size”) are positioned `absolute` on the map (which is `relative`), allowing them to be superimposed on the image or other elements.

3.  **Price rounding :**
    * The `calculateTotalPrice` function in `utils/helpers.js` to use `Math.round()` to display integer prices, as required. The `Intl.NumberFormat` currency formatter has also been adjusted (`minimumFractionDigits: 0`, `maximumFractionDigits: 0`) to display no decimals.

4.  **Improved Accessibility and Compatibility (Keyboard) :**
    * The `onKeyPress` prop has been replaced by `onKeyDown` on the `SkipCard` component to handle keyboard interactions (Enter, Space), as `onKeyPress` is deprecated in React. `e.preventDefault()` is used to prevent default browser actions on the `Space` event.

5.  **Scrollable Step Indicator (Responsive) :**
    * For small screens, the `StepIndicatorContainer` uses `display: flex; flex-wrap: nowrap; overflow-x: auto;` combined with a `min-width` on `stepItem` to create a horizontal carousel of steps.
    * Scrollbars have been hidden for a cleaner look (`scrollbar-width: none;`, `::-webkit-scrollbar`).

## How to launch the project

1.  **Run the repository:**
    ```bash
    git clone [URL_OF_YOUR_GITHUB_DEPOT]
    cd [name-of-your-project-folder]
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```
3.  **Start the application :**
    ```bash
    npm start
    # or
    yarn start
    ```
    The application should open in your browser at `http://localhost:3000`.

## GitHub link

htthttps://github.com/afbfdev/skip-hire-app.git

## Sandbox link (Testable version)

https://codesandbox.io/p/github/afbfdev/skip-hire-app/main?import=true&workspaceId=ws_DY1bP9ypdEi7dGKRquz8Cc

Translated with DeepL.com (free version)
