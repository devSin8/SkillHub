-----

# Project Showcase Hub

A full-stack web application designed to help students upload, showcase, and get peer feedback on academic projects. This platform enables project visibility, collaboration, and recognition through verified student portfolios.

## ✨ Features

  * **User Authentication:** Secure user registration and login (built for both local demo and Firebase).
  * **Profile Management:** Users can create and edit their profiles with details like name, college info, languages, and social links (GitHub, LinkedIn).
  * **Project Showcase:** Upload new projects with a title, description, technologies used, and demo links.
  * **Project Dashboard:** Browse all submitted projects in a clean, card-based layout.
  * **Project Details:** View details for a specific project and (in a future update) read and write comments.

## 🛠️ Tech Stack

This project is built with a modern, decoupled frontend and backend architecture.

### **Frontend (Client-Side)**

  * **React:** A JavaScript library for building the user interface.
  * **React Router:** For handling client-side navigation between pages.
  * **Axios:** For making HTTP requests to the backend API.
  * **Bootstrap:** A CSS framework for responsive design and pre-built components.

### **Backend (Server-Side)**

  * **Java 17:** The core programming language.
  * **Spring Boot:** Framework for building the REST API and running the web server.
  * **Maven:** For managing backend dependencies and building the project.

-----

## 🚀 How to Run Locally

To get this project running on your local machine, you'll need to run both the frontend and backend servers.

### **Prerequisites**

  * **Node.js** (v16 or later): [Download Here](https://nodejs.org/)
  * **Java JDK** (v17 or later): [Download Here](https://www.oracle.com/java/technologies/javase/jdk17-archive-downloads.html)
  * **Git:** [Download Here](https://git-scm.com/)

### **1. Clone the Repository**

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
```

### **2. Run the Backend (Spring Boot)**

Open a terminal window and navigate to the `backend` folder.

```bash
# Go into the backend directory
cd backend

# On macOS/Linux:
./mvnw spring-boot:run

# On Windows:
mvnw.cmd spring-boot:run
```

The backend server will start on `http://localhost:8080`.

### **3. Run the Frontend (React)**

Open a **second** terminal window and navigate to the `frontend` folder.

```bash
# Go into the frontend directory
cd frontend

# Install all necessary packages (only need to do this once)
npm install

# Start the development server
npm start
```

Your browser will automatically open to `http://localhost:3000`, where you can use the app.

-----

## ☁️ Production Deployment Plan

This application is designed to be fully deployed to the cloud.

  * **Frontend (React):** Deployed as a static site on **Firebase Hosting** or **Vercel**.
  * **Backend (Spring Boot):** Deployed as a **Docker** container on **Render** (as a Web Service).
  * **Database:** A managed **PostgreSQL** database (e.g., from Render) connected via **Spring Data JPA**.
  * **Authentication:** **Firebase Authentication** for secure, managed user logins.
  * **File Storage:** **Cloudinary** or **Amazon S3** for hosting project images and videos.

## API Endpoints (Local Demo)

The backend provides the following REST API endpoints for the local demo.

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/api/projects` | Get a list of all projects. |
| `GET` | `/api/projects/{id}` | Get details for a single project. |
| `GET` | `/api/projects/{id}/comments` | Get comments for a single project. |
| `POST` | `/api/projects` | Submit a new project. |
| `POST` | `/api/profile` | Save or update a user's profile. |
| `POST` | `/api/signup` | (Demo) Receive new user signup info. |
| `POST` | `/api/login` | (Demo) Receive user login attempt. |
