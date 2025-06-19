# Notes App

A full-stack notes application built with the MERN stack (MongoDB, Express.js, React.js, Node.js) featuring secure JWT authentication. Users can create, read, update, and delete notes with a clean, responsive interface.

Link to project: [Add your live demo link here]

[Screenshot placeholder - Add a screenshot of your app here]

## How It's Made

**Tech used:** MongoDB, Express.js, React.js, Node.js, JWT, bcrypt, DaisyUI, Vite

This project demonstrates a complete full-stack application with a fully functional REST API and secure authentication. I built a comprehensive REST API using Node.js and Express.js with proper HTTP methods (GET, POST, PUT, DELETE) for all CRUD operations. The API follows RESTful principles with resource-based URLs (`/api/notes` and `/api/users`) and stateless requests.

The backend uses MongoDB as the database with Mongoose for object modeling. Authentication is handled through JWT tokens with bcrypt for password hashing, and the API is protected with rate limiting to prevent brute force attacks. All note endpoints require valid JWT authentication, ensuring data security.

The frontend is built with React.js using Vite for fast development and building. I used DaisyUI components for a clean, modern UI that's fully responsive. React Router handles client-side routing, and axios manages API calls to the backend. The authentication flow includes automatic token validation and session management, with tokens stored securely in localStorage.

The application architecture separates concerns with dedicated controllers, models, and middleware. The frontend automatically handles token expiration and redirects users to login when needed, creating a seamless user experience.

## Optimizations

- **REST API Design**: Implemented proper RESTful endpoints with appropriate HTTP methods and status codes
- **Rate Limiting**: Implemented express-rate-limit to protect against brute force attacks and API abuse
- **Password Security**: Used bcrypt with salt rounds for secure password hashing
- **Token Management**: JWT tokens with 30-day expiration and automatic cleanup
- **Responsive Design**: Mobile-first approach with DaisyUI components for optimal user experience
- **Error Handling**: Comprehensive error handling on both frontend and backend with user-friendly messages
- **Code Organization**: Separated concerns with dedicated controllers, models, and middleware

## Lessons Learned

Building this full-stack application taught me the importance of proper authentication flow and security best practices. I learned how to implement JWT tokens effectively and handle token expiration gracefully. The project reinforced my understanding of RESTful API design and the importance of separating frontend and backend concerns.

Working with MongoDB and Mongoose helped me understand NoSQL database design and the benefits of flexible schemas. I also gained experience with modern React patterns, including hooks and functional components, as well as the benefits of using Vite for faster development builds.

The most rewarding moment was implementing the complete authentication flow and seeing how all the pieces work together - from user registration to secure note creation and management. This project solidified my understanding of full-stack development and gave me confidence in building secure, scalable applications.
