# BLKY PETS - Full Stack project

This project serves as a comprehensive demonstration of my skills in both frontend and backend development. The frontend is built using React.js, showcasing a user-friendly interface, while Tailwind CSS is employed to enhance the visual aesthetics. On the backend, Nest.js powers the API implementation, providing a robust and scalable server-side architecture. MongoDB is used as the database, ensuring efficient data storage and retrieval.

Feel free to explore the project to experience how I seamlessly integrated those technologies.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Contributing](#contributing)
- [Testing](#testing)
- [License](#license)
- [Acknowledgments](#acknowledgments)
- [Contact](#contact)
- [Changelog](#changelog)
- [Known Issues](#known-issues)
- [FAQ](#faq)

## Installation

1.  **Clone the Repository:**

    ```bash
    git clone https://github.com/your-username/your-repo.git
    cd your-repo
    ```

2.  **Install Dependencies:**

    - Navigate to the backend folder:

      ```bash
      cd backend
      ```

      Install backend dependencies:

      ```bash
      npm install
      ```

    - Navigate to the frontend folder:

      ```bash
      cd ../frontend
      ```

      Install frontend dependencies:

      ```bash
      npm install
      ```

3.  **Configure Environment Variables:**

    - **Backend:**

      Create a `.env` file in the backend folder and configure your MongoDB connection string, API keys, or any other necessary variables. You may also specify the environment by creating `.env.development`, `.env.qa`, and `.env.production` files for each environment.

      ```plaintext
      # Example .env for development
       PORT=8080
       NODE_ENV=development
       MONGO_URL=yourMongoUrl
       JWT_SECRET=secretJwtPassword
       JWT_EXPIRES=1h
       ADMIN_EMAIL=adminEmailAddress
       ADMIN_PWD=adminPassword
       RESET_URL=aUrlToResetPassword
       MAILER_SERVICE=yourMailingService
       MAILER_HOST=yourSmtpHost
       MAILER_USER=yourEmailAddress
       MAILER_PWD=yourServicePassword
      ```

    - **Frontend:**

      Create a `.env` file in the frontend folder if needed.

4.  **Run the Application:**

    - Start the backend:

    To run the application locally, ensure you have [Turbo](https://turbo.build/repo/docs) installed as a dev dependency. If not, you can install it globally:

    ```bash
    npm install -g create-turbo
    ```

    Then in the root folder of the project (where both the server and client folders are located), use the following command:

    ```bash
    npm run dev
    ```

    Backend: Visit http://localhost:3000 in your browser.

    Frontend (Vite with React + TypeScript): Visit http://localhost:5173 in your browser to access the frontend.

## Usage

[Explain how to use the project, including examples or code snippets]

## Features

- [Feature 1]
- [Feature 2]
- ...

## Acknowledgments

[Give credit to third-party libraries, tools, or resources]

## Contact

[Provide your contact information or ways for others to reach out]

## Changelog

[Keep a record of changes made in each version]

## Known Issues

[Highlight any known issues or limitations]

## Disclaimer

This project is created as a showcase of my skills in frontend and backend development. The designs used in this project were provided by my sister for her small pet shop store, and while they are not copyrighted, they are intended for use in this specific project.

### Usage Notice:

- **Educational and Non-Commercial Use Only:** This project is meant for educational purposes and as a demonstration of coding skills. It is not intended for commercial use or reproduction.

- **No Derivative Works:** Modifications or derivatives of this project are not permitted without explicit permission.

### Cloning and Usage:

While I encourage developers and recruiters to explore and learn from this project, please be respectful of its intended use. Unauthorized cloning and usage of this project for commercial purposes or as a base structure for other projects are strongly discouraged.

If you have any questions about the project or its usage, feel free to reach out.
