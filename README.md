<img src='https://i.ibb.co/mqhYZRD/Logo-BLKYpng.png' />

# BLKY PETS - Full Stack project

This project serves as a comprehensive demonstration of my skills in both frontend and backend development. The frontend is built using React.js, showcasing a user-friendly interface, while Tailwind CSS is employed to enhance the visual aesthetics. On the backend, Nest.js powers the API implementation, providing a robust and scalable server-side architecture. MongoDB is used as the database, ensuring efficient data storage and retrieval.

You can see the live project [here](https://blky-pets.vercel.app/).

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Upcoming features](#upcoming-features)
- [Acknowledgments](#acknowledgments)
- [Contact](#contact)
- [Disclaimer](#disclaimer)

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

      ```
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

      Create a `.env` file in the frontend folder with the following variable:

      ```
      VITE_API_URL=http://localhost:yourPortNumber/api
      ```

4.  **Run the Application:**

    To run the application locally, ensure you have [Turbo](https://turbo.build/repo/docs) installed as a dev dependency. If not, you can install it globally:

    ```bash
    npm install turbo --global
    ```

    Then in the root folder of the project (where both the server and client folders are located), use the following command:

    ```bash
    npm run dev
    ```

    Backend: Visit http://localhost:3000 in your browser.

    Frontend (Vite with React + TypeScript): Visit http://localhost:5173 in your browser to access the frontend.

## Usage

### Important notes

- This project is a showcase and learning resource, not intended for commercial use.

- Respect the usage restrictions mentioned in the Disclaimer section.

- Any feedback or questions are welcome. Feel free to open an issue or reach out.

## Features

### Authentication System

- **Login and Signup:** Users can create accounts, log in, and securely authenticate using the authentication system implemented.

- **Password Recovery:** Forgot your password? The project includes a secure password recovery system to help users regain access to their accounts.

### E-commerce Functionality

- **Product Catalog:** Explore a diverse range of products presented in a user-friendly catalog. The frontend, built with React.js and styled using Tailwind CSS, ensures an engaging shopping experience.

- **Shopping Cart Interaction:** Add products to your cart, update quantities, and remove items. The frontend interacts with the backend, powered by Nest.js and MongoDB, to manage cart data securely.

- **Buying Process:** Experience a streamlined buying process. Select items and finalize your purchase with the implemented buying system getting a the corresponding confirmation email containing your purchase details.

### Responsive Design

- The entire application is designed to be responsive, ensuring a consistent and enjoyable experience across various devices and screen sizes.

### Multi-Environment Support

- The project supports three environments: development, QA, and production, each with its specific configuration to ensure seamless functionality.

### Technologies Used

- **Frontend:** React.js, Vite, TypeScript, Tailwind CSS
- **Backend:** Nest.js, MongoDB
- **Additional Tools:**
  - turbo: for monorepo management
  - react-responsive: for building responsive UI components in React.
  - react-hot-toast: to display messages to users.
  - jwt (JSON Web Tokens): for communication between the frontend and backend, facilitating authentication and authorization.
  - swagger: to document and visualize API specifications.
  - bcrypt: for securely storing user passwords in the database.
  - nodemailer: to send emails, utilized for implementing password recovery and purchase confirmation.
  - passport: for authenticating users.

#### Desktop version

<img src='https://i.ibb.co/2gVDcpG/BLKY-Pets-desktop.png' />

#### Mobile version

<img src='https://i.ibb.co/02xHTZV/BLKY-Pets-mobile.png' />

## Upcoming features

- Full api docs with Swagger
- Reset email confirmation
- Admin dashboard
- Animations
- Filter options
- Newsletter
- Expanded site sections

## Acknowledgments

I would like to express my to [Frida](https://ar.linkedin.com/in/fridavlucius) for her contribution to this project. She crafted the stunning design using Figma, providing a detailed prototype that served as the foundation for the visual elements of the app.

Her creativity and design expertise played a pivotal role in shaping the user interface and overall aesthetic of this showcase.

Go check out [her work](https://www.behance.net/fridavlucius)!

## Contact

Feel free to reach out if you have any questions, feedback, or just want to connect. I'm open to collaboration and discussions.

- [**Email**](mailto:estanislaovl@gmail.com)
- [**LinkedIn**](https://ar.linkedin.com/in/estanisevl)
- [**GitHub**](https://github.com/EstanisEVL)

Looking forward to hearing from you!

## Disclaimer

This project is created as a showcase of my skills in frontend and backend development. The designs used in this project were provided by my sister for her small pet shop store, and while they are not copyrighted, they are intended for use in this specific project.

### Usage Notice:

- **Educational and Non-Commercial Use Only:** This project is meant for educational purposes and as a demonstration of coding skills. It is not intended for commercial use or reproduction.

- **No Derivative Works:** Modifications or derivatives of this project are not permitted without explicit permission.

### Cloning and Usage:

While I encourage developers and recruiters to explore and learn from this project, please be respectful of its intended use. Unauthorized cloning and usage of this project for commercial purposes or as a base structure for other projects are strongly discouraged.

If you have any questions about the project or its usage, feel free to reach out.
