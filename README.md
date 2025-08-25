# Expenses Tracker (React)

A polished, component-driven React application for tracking expenses. This repository demonstrates React fundamentals including component composition, state lifting, controlled forms, simple filtering, and basic data visualization using plain React and CSS.

This README explains what was implemented, why decisions were made, how to run and extend the project, and helpful developer notes.

## Table of contents

- Project overview
- Key features
- Tech stack
- Project structure
- Component contracts (inputs / outputs)
- How to run (development & production)
- Development notes & architecture decisions
- Edge cases & testing notes
- Next steps & suggestions
- Contribution & license


## Project overview

This is a single-page React application that lets users add, list, filter and visualize expenses. The UI is broken into small, focused components located under `src/components`. The app demonstrates common React patterns:

- Component composition and re-use
- Lifting state up for shared data
- Controlled form inputs and validation
- Passing event handlers between components
- Simple chart rendering via reusable chart components

The experience is intentionally minimal and focused on teaching/app demonstration rather than integrating with a backend.


## Key features

- Add a new expense using a controlled form (`NewExpense/ExpenseForm.jsx`).
- Persisted list of expenses kept in component state (in-memory).
- Filter expenses by year (`Expenses/ExpenseFilter.jsx`).
- Expense item display with date breakdown and formatted values (`Expenses/ExpenseItem.jsx`, `Expenses/ExpenseDate.jsx`).
- Simple bar chart to show expense totals per month (`Chart` folder components).
- Clean, component-scoped CSS files for predictable styling.


## Tech stack

- React (Create React App structure)
- JavaScript (ES6+)
- CSS modules (file-per-component CSS, not actual CSS Modules syntax but one-file-per-component)
- No external state manager (Redux) or backend — state is managed with React hooks


## Project structure (important files)

Top-level:

- `package.json` — scripts and dependencies
- `public/index.html` — HTML entry
- `src/index.js` — React entry point
- `src/App.js` — Root application wiring

Key component folders (each contains `*.jsx` and `*.css`):

- `src/components/Expenses` — main expense-related components:
  - `Expenses.jsx` — container that holds filtering, list and chart
  - `ExpenseList.jsx` — renders list of expense items
  - `ExpenseItem.jsx` — single expense UI and event wiring
  - `ExpenseDate.jsx` — formats and displays the date
  - `ExpenseFilter.jsx` — year filter UI
  - `ExpenseChart.jsx` — connects filtered data to the `Chart` components

- `src/components/NewExpense` — adding expenses:
  - `NewExpense.jsx` — wrapper that toggles `ExpenseForm`
  - `ExpenseForm.jsx` — controlled form to create new expense objects

- `src/components/Chart` — visualization primitives:
  - `Chart.jsx` — container for chart bars
  - `ChartBar.jsx` — renders individual bar with height calculated from value

- `src/components/UI` — shared UI primitives:
  - `Card.jsx` — simple presentational wrapper used widely


## Component contracts (small reference)

These are the primary props and data shapes used across the app:

- Expense object shape (used by list, item, form):
  - id: string
  - title: string
  - amount: number
  - date: string or Date (the code converts to Date)

- `ExpenseForm` props:
  - onSaveExpenseData(expense) — called when user submits new expense. Expense contains title, amount, date.
  - onCancel() — called when user cancels the form

- `NewExpense` props:
  - onAddExpense(expense) — wrapper that forwards the created expense up to `App`/parent

- `Expenses` props:
  - items: Expense[] — the list of all expenses

- `ExpenseFilter` props:
  - selected — currently selected year
  - onChangeFilter(year) — handler when filter value changes

- `Chart` / `ChartBar` props:
  - dataPoints: [{ label, value }] — used to compute bar heights and labels


## How to run

Requirements

- Node.js (v14+ recommended)
- npm (or use Yarn)

Install dependencies and start the dev server:

```bash
npm install
npm start
```

This will start the app in development mode and open http://localhost:3000 by default.

Build for production:

```bash
npm run build
```

The `build` folder will contain static files ready to be deployed.


## Development notes & architecture decisions

- Componentization: UI is split into small components (single responsibility). This makes them easy to test and reuse.
- State management: Local state via React hooks was chosen for simplicity and pedagogical clarity. For larger apps, move to a global store or server-side persistence.
- Controlled forms: `ExpenseForm.jsx` uses controlled inputs to provide instant validation and predictable state.
- Styling: Each component has its own CSS file in `src/components/*`. This keeps styles close to the component and avoids naming collisions.
- Accessibility: Semantic HTML elements are used where appropriate; input fields include labels. Further a11y improvements are listed in Next Steps.


## Edge cases & testing notes

Edge cases considered:

- Empty submit: Form prevents submission if required fields are empty.
- Invalid date formats: Form converts to `Date` and components assume valid `Date` objects; additional validation may be added for robustness.
- Large numbers: Amounts are displayed with 2 decimals — consider currency formatting for multiple locales.

Suggested tests (not included):

- Unit test `ExpenseForm` submission behavior (happy path and validation failures)
- Snapshot tests for `ExpenseItem` rendering
- Integration test for adding an expense and verifying it appears in `ExpenseList` and `ExpenseChart`


## Next steps & suggestions

Small, high-value improvements:

- Persist expenses to localStorage so data survives reloads.
- Add currency & locale-aware formatting via `Intl.NumberFormat`.
- Add unit & integration tests with Jest + React Testing Library.
- Add responsiveness and better keyboard/a11y support for the filter and form.
- Introduce lightweight styling system or Tailwind/Emotion for scalable theming.
- Add E2E tests with Playwright or Cypress for critical flows.


## Contribution

This project is structured for easy contribution. To contribute:

1. Fork the repository
2. Create a feature branch
3. Add tests for new behavior
4. Open a pull request with a clear description of changes


## License & credits

This repository does not include a license file — add an appropriate `LICENSE` (MIT, Apache-2.0, etc.) if you plan to share publicly.

This project structure and lesson-style implementation is inspired by common React learning resources and community best practices.


## Quick summary

You now have a small, maintainable React app that demonstrates core React skills: component composition, state and props management, controlled forms, and simple data visualization. The code is intentionally clear and ready for enhancements like persistence, testing, and improved accessibility.

Happy hacking — build something incredible!
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
