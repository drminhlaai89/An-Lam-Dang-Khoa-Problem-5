
A RESTful API built with Express.js, TypeScript, and PostgreSQL for managing resources.

Prerequisites

- Node.js (v14 or higher)
- PostgreSQL (v12 or higher)
- npm (Node Package Manager)
- Postman (use for calling api for testing backend)

Installation

1. Clone the repository
   ```bash
   git clone https://github.com/drminhlaai89/An-Lam-Dang-Khoa-Problem5.git
   Download Zip.
   ```

2. Install dependencies
   npm install

3. Configure the Database
   - Create a PostgreSQL database named `resource_db`
   - Create a `.env` file in the root directory with the following content:
     ```env
     DB_HOST=localhost
     DB_PORT=5432
     DB_USER=postgres
     DB_PASSWORD=1
     DB_NAME=resource_db
     ```

4. Note:
   The server is configured to parse both JSON and URL-encoded payloads using:
   ```
   app.use(express.json());
   app.use(express.urlencoded({ extended: true }));
   ```

## Running the Application

### Development Mode

Start the development server with hot reloading:
npm run dev

Using the Postman to testing the backend

Production Mode

1. Build the Project: 
   The production start script expects the compiled code in the `dist` directory.
   npm run build
   Ensure that the build step completes and that `dist/server.js` exists.

2. Start the Application: 
   npm start

> **Note:**  
> If you get an error like "Cannot find module '.../dist/server.js'", it likely means the build was not run or did not complete successfully. Verify that your TypeScript compilation (as configured in your `tsconfig.json`) outputs files to the `dist` folder.

API Endpoints

 Create Resource
- **Method:** POST  
- **URL:** `/api/resources`  
- **Headers:** `Content-Type: application/json`  
- **Body Example:**
  ```json
  {
      "name": "Resource Name",
      "description": "Resource Description"
  }
  ```

 List Resources
- **Method:** GET  
- **URL:** `/api/resources`  
- **Query Parameters (Optional):**
  - `name` — Filter by resource name
  - `description` — Filter by resource description

 Get Resource
- **Method:** GET  
- **URL:** `/api/resources/{Your Actual Id}`

 Update Resource
- **Method:** PUT  
- **URL:** `/api/resources/{Your Actual Id}`  
- **Headers:** `Content-Type: application/json`  
- **Body Example:**
  ```json
  {
      "name": "Updated Name",
      "description": "Updated Description"
  }
  ```

 Delete Resource
- Method: DELETE  
- URL: `/api/resources/{Your actual ID}`

Technologies Used

- Express.js – Web framework for Node.js
- TypeScript – Superset of JavaScript for scalable development
- TypeORM – ORM for database operations
- PostgreSQL – Relational database system
- ts-node-dev – Development server with hot reloading
