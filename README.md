This is a project called "Culinary Compass" created by Alvin Muli. The project is a recipe finder application. 

### What does this project do?
The Culinary Compass project is a web application that allows users to find and explore various recipes. Users can register, log in, submit their own recipes, explore categories, view random recipes, and create shopping lists. The application aims to provide a platform for users to discover new recipes and manage their cooking preferences.

### Why does this project exist?
The project exists to provide a centralized platform for users to access a wide range of recipes, share their own recipes, and create shopping lists based on selected recipes. It aims to simplify the process of finding and organizing recipes for cooking enthusiasts.

### Main technologies used:
- **Languages**: JavaScript
- **Frameworks**: Express.js
- **Database**: MongoDB
- **ORM**: Mongoose
- **Template Engine**: EJS
- **Other**: Axios, Bcryptjs, Connect-flash, Cookie-parser, Dotenv, Express-ejs-layouts, Express-fileupload, Express-session

### Codebase organization:
- **Root Directory**:
  - `.env`: Environment variables configuration file.
  - `app.js`: Main application file.
  - `package-lock.json` and `package.json`: Dependency management files.
- **Middleware Directory**:
  - `auth.js`: Middleware for authentication.
- **Public Directory**:
  - Contains subdirectories for CSS, images, and uploads used in the application.
- **Server Directory**:
  - **Controllers**: Contains controllers for handling recipe and user-related logic.
  - **Models**: Contains database models for categories, recipes, shopping lists, and users.
  - **Routes**: Contains route definitions for login, recipe, and user actions.
- **Views Directory**:
  - Contains EJS templates for different views like categories, recipes, registration, search, etc.
  - **Layouts**: Contains the main layout template for the application.

### Scripts and Commands:
- The project has a `start` script defined in the `package.json` file that uses `nodemon` to run the `app.js` file.
- Other scripts like `test` are placeholders and can be customized for testing purposes.

In summary, the Culinary Compass project is a recipe finder web application that leverages technologies like Express.js, MongoDB, and EJS to provide users with a platform to discover, share, and organize recipes.

