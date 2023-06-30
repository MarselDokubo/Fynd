# Fynd

Fynd is a job listing application built with Next.js, TypeScript, Chakra UI, and Storybook. It provides a platform for users to find and apply for job opportunities. This repository contains the source code and documentation for Fynd.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Features

- Job listing: Browse and search for available job opportunities.
- Job details: View detailed information about a specific job.
- Job application: Apply for a job by submitting relevant information.
- User authentication: Sign up, log in, and manage your account.
- Dashboard: Access a personalized dashboard with saved jobs and application history.
- Admin panel: Manage job listings, applications, and user accounts (for administrators).

## Tech Stack

- **Next.js**: A React framework for building server-side rendered and static web applications.
- **TypeScript**: A statically-typed superset of JavaScript that enhances developer productivity and code quality.
- **Chakra UI**: A simple and customizable UI component library for React.
- **Storybook**: A development environment for UI components, allowing easy exploration, testing, and documentation.

## Getting Started

To get a local copy of the project up and running, follow these steps:

1. Clone the repository:

```bash
git clone https://github.com/your-username/fynd.git
```

2. Navigate to the project directory:

```bash
cd fynd
```

3. Install the dependencies:

```bash
npm install
```

4. Set up the environment variables:

   - Create a `.env.local` file in the root directory of the project.
   - Copy the contents of `.env.example` into `.env.local`.
   - Modify the values in `.env.local` to match your local environment configuration.

5. Start the development server:

```bash
npm run dev
```

6. Open your web browser and visit [http://localhost:3000](http://localhost:3000) to access the application.

## Project Structure

The project structure follows a modular approach to keep the codebase organized and maintainable. Here is an overview of the main directories and files:

- `/components`: Contains reusable UI components used across the application.
- `/pages`: Contains the Next.js page components that represent the different routes of the application.
- `/public`: Contains static assets such as images and fonts.
- `/styles`: Contains global styles and theme configuration using Chakra UI.
- `/utils`: Contains utility functions and helpers.
- `/stories`: Contains Storybook stories for visual component testing and documentation.
- `next.config.js`: Next.js configuration file.
- `tsconfig.json`: TypeScript configuration file.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request. Make sure to follow the existing code style and commit message conventions.

To set up the project for development, refer to the [Getting Started](#getting-started) section.

## License

This project is licensed under the [MIT License](LICENSE).

---

Created by Marsel Dokubo.
