<h1 align="center">
  todo app
</h1>

<p align="center">A simple to-do list application.</p>

<p align="center">
  <img src="screenshot/screenshot.png" alt="App screenshot">
</p>

## 📦 Tech Stack

[check web in package.json](web/package.json)

[check backend in package.json](backend/package.json)

## 🔩 Installation

To install and run the project locally, follow these steps:

### 1️⃣ Prerequisites

- [**Node.js**](https://nodejs.org/) version v16.15.0
- [**MongoDB**](https://www.mongodb.com/) running locally

### 2️⃣ Clone the repository

```sh
git clone https://github.com/jhonbergmann/todo-app.git
cd todo-app
```

## 🗃 Database

1. Start MongoDB:
   - Run `mongod` in the terminal **or**  
   - Run `MongoDB\Server\4.4\bin\mongod.exe`

## ⚙️ Backend

1. Navigate to the backend directory and install dependencies:
   ```sh
   cd backend
   npm install
   ```

2. Start the backend server:
   ```sh
   npm run production
   ```

3. To monitor the process with PM2:
   ```sh
   ./node_modules/.bin/pm2 monit
   ```

## 🌐 Web

1. Navigate to the web directory and install dependencies:
   ```sh
   cd web
   npm install
   ```

2. Start the development server:
   ```sh
   npm run dev
   ```

3. Open in your browser:
   ```
   http://localhost:9090
   ```

## 📝 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

