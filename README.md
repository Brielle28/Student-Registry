# Student Registration and Records Management System

## Table of Contents
- [Description](#description)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Project Structure](#project-structure)
- [Functionalities](#functionalities)
  - [Form Section](#form-section)
  - [Records Section](#records-section)
- [Commands](#commands)
- [Usage](#usage)
- [Demo](#demo)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgements](#acknowledgements)

## Description
This is a Vue.js-based application for registering students and managing their records. The app provides functionality for adding, editing, deleting, and searching student records. It includes a simple user interface with reactive elements for a smooth user experience.

## Features
- Add new student records with fields for name, age, and email.
- Edit student details directly within the record table.
- Delete records with confirmation for undoing the deletion.
- Search functionality to filter records by name, age, or email.
- Responsive design for a better experience on different screen sizes.

## Technologies Used
- **Vue.js 3**: JavaScript framework for building user interfaces.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **FontAwesome**: Icon library for visual enhancements.

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```bash
   cd <project-folder>
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open the application in your browser at:
   ```
   http://localhost:5173
   ```

## Project Structure

```
project-root/
├── public/            # Public assets
│   └── index.html     # Main HTML file
├── src/               # Source files
│   ├── assets/        # Static assets (e.g., CSS, images)
│   │   └── main.css   # Main stylesheet
│   ├── components/    # Vue components
│   ├── App.vue        # Root component
│   ├── main.js        # Application entry point
│   └── views/         # Application views/pages
├── package.json       # Project metadata and dependencies
├── vite.config.js     # Vite configuration
└── README.md          # Project documentation
```

## Functionalities

### Form Section
- **Input Fields**: For entering the name, age, and email of a student.
- **Validation**: Ensures all fields are filled before submission.
- **Error Handling**: Displays a message if required fields are missing.

### Records Section
- **Table Display**: Shows student records in a structured format.
- **Search**: Filters records by name, age, or email in real time.
- **Edit**: Allows in-place editing of records with save and cancel options.
- **Delete**: Provides soft delete functionality with an undo option.

## Commands

### Project Setup
```bash
npm install
```

### Compile and Hot-Reload for Development
```bash
npm run dev
```

### Type-Check, Compile, and Minify for Production
```bash
npm run build
```

### Lint with ESLint
```bash
npm run lint
```

## Usage

1. Launch the app in your browser after starting the development server.
2. Add student details in the "Student Registration" form and click "Add Record."
3. Use the "Records" section to view, edit, or delete student data.
4. Utilize the search bar to quickly find specific records.

## Demo
Check out the live demo of the application [here](https://student-registry-6np3cwcj0-brielle28s-projects.vercel.app/).

https://github.com/user-attachments/assets/8536bbd0-c354-42c1-b5dc-3fed60525cbf

## Contributing

If you'd like to contribute to this project:
1. Fork the repository.
2. Create a new feature branch (`git checkout -b feature-name`).
3. Commit your changes (`git commit -m 'Add feature'`).
4. Push to the branch (`git push origin feature-name`).
5. Open a pull request.

## License
This project is licensed under the MIT License. See the `LICENSE` file for details.

## Acknowledgements
- [Vue.js](https://vuejs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [FontAwesome](https://fontawesome.com/)
```
