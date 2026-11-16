# Sheker Coffee - Coffee Online Shop

## Project title and topic
Sheker Coffee is a coffee shop website for a coffee stand at Astana IT University (AITU). This final project continues our midterm and endterm website.

## Group members
- Azimbek Amandykov
- Meiirzhan Tolendi
- Temirlan Nurshaikhinov

## Short description
Sheker Coffee is a six-page website: Home, Menu, About, Gallery, Contact and Account (Sign in). Visitors can view drinks and prices, read about the coffee shop, browse photos and use the contact form. For the endterm, we added interactive features using JavaScript and jQuery. For the final project, we added a light/dark theme, sign-in with localStorage, a jQuery FAQ and a public API integration.

## Features implemented
- Five responsive pages with the same navigation, header and footer
- Registration form validation for name, email, password and password confirmation
- Email checking with regular expressions and a password strength indicator
- Real-time search for drinks and category filter buttons
- Dynamic product table with Create, Read, Update and Delete (CRUD) operations
- Image gallery with a lightbox, previous and next buttons, and jQuery fade effects

### Final project features
- **Light/Dark theme toggle** (button in the navigation bar on every page). The theme is saved in `localStorage` (`theme`), stays after refresh and is the same on all pages.
- **Sign in with localStorage** (`account.html`). The form checks name, email and password. Only the name, email and sign-in date are saved in `localStorage`; the password is not saved. Signed-in users see "Hi, Name" and a Sign out button in the navigation on every page, and a profile card on the Account page. Sign out removes the saved data.
- **FAQ with jQuery** (About page). Six questions; answers open and close with `.slideToggle()` and a `+` / `−` indicator.
- **API integration** (Menu page, "Drink ideas" section) with the free [TheCocktailDB](https://www.thecocktaildb.com/api.php) API:
  - `fetch()` with `async/await`, data in JSON format
  - shows non-alcoholic drinks, search by name, "Surprise me" random recipe and Refresh button
  - "View recipe" loads ingredients, glass and instructions
  - `try/catch` and `response.ok` check show an error message if the request fails

### Our extra feature (not in the requirements)
- **Version for visually impaired** (button `A+` in the navigation on every page). It turns on a high-contrast mode: black background, white and yellow text, bigger font, underlined links, thick borders and a clear focus outline for keyboard users. The choice is saved in `localStorage` (`accessible`), so it stays after refresh and works on all pages. Press `A-` to go back to the normal version.

## Technologies used
- HTML5
- CSS3
- Bootstrap 5
- JavaScript
- jQuery
- Google Fonts
- localStorage
- Fetch API + TheCocktailDB public API

## Individual contributions
### Midterm
- **Azimbek Amandykov:** Home page, header, navigation, main CSS styles and README.
- **Meiirzhan Tolendi:** Menu and About pages, drink cards, menu table and Bootstrap classes.
- **Temirlan Nurshaikhinov:** Gallery and Contact pages, footer and responsive media queries.

### Endterm
- **Azimbek Amandykov:** Updated page styling and helped integrate JavaScript and jQuery into the existing website.
- **Meiirzhan Tolendi:** Added live menu search, category filters and the CRUD product table.
- **Temirlan Nurshaikhinov:** Added registration form validation and the interactive gallery lightbox.

### Final
- **Azimbek Amandykov:** Added the light/dark theme toggle saved in localStorage (`setTheme()`), the version for visually impaired users with the A+ button (`setAccessible()`), dark and accessible styles in `style.css`, the AI credit in the footer, updated the README and prepared the report.
- **Meiirzhan Tolendi:** Added the "Drink ideas" section on the Menu page with TheCocktailDB API: loading drinks with `fetch()` and `async/await` (`getDrinks()`), drink cards and search (`showDrinks()`), full recipe (`getRecipe()`), "Surprise me" and "Refresh" buttons, error handling with `try/catch`.
- **Temirlan Nurshaikhinov:** Added the Account page with a sign-in form and validation, saving the user in localStorage, "Hi, Name" and Sign out in the navigation (`signIn()`, `signOut()`, `showUser()`), and the FAQ section on the About page with jQuery `slideToggle()` and the +/− indicator.

## AI usage
AI tools (Claude by Anthropic) were used as a supporting tool during development of the final project features (theme toggle, sign-in, FAQ, API integration and README). All code was reviewed and tested by the group. This is also credited in the footer of every page.

## Links
- **GitHub repository:** https://github.com/ikrashleboom-svg/midterm-web
- **Published website:** https://ikrashleboom-svg.github.io/midterm-web/
