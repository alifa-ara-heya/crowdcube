# CrowdCube Server

This is the server-side application for **CrowdCube**, a crowdfunding platform that enables users to create, manage, and support meaningful campaigns. The server handles data storage, user authentication, and API endpoints for seamless communication between the client and the database.

---

## 🌐 **Deployment**

[🌐 Live Website](https://crowdcube-3f046.web.app/)

---

## 📑 **Features**

1. **RESTful API Endpoints**  
   Provides secure and efficient API endpoints for campaign management, user authentication, and donation tracking.

2. **User Authentication**  
   Integrates Firebase for user authentication, ensuring secure login and registration processes.

3. **Campaign Management**

   - Create, update, delete, and retrieve campaigns.
   - Retrieve campaigns based on specific criteria (e.g., user-created campaigns).

4. **Donation Tracking**  
   Stores and manages donor contributions, associating them with campaigns and users.

5. **Error Handling**  
   Robust error handling and validation to ensure smooth operation.

---

## 🛠️ **Technologies Used**

- **Node.js**: Backend runtime environment.
- **Express.js**: Web framework for building RESTful APIs.
- **MongoDB**: Database for storing campaigns, users, and donations.
- **Firebase**: Authentication service for managing user accounts.
- **Vercel**: Deployment platform for server-side hosting.

---

## 🛠️ **API Endpoints**

### **Campaigns**

- `GET /campaigns`: Retrieve all campaigns.
- `POST /campaigns`: Add a new campaign.
- `GET /myCampaigns?email=<user-email>`: Retrieve campaigns created by a specific user.
- `PUT /campaigns/:id`: Update a campaign by ID.
- `DELETE /campaigns/:id`: Delete a campaign by ID.

### **Donations**

- `POST /donations`: Add a new donation.
- `GET /myDonations?email=<user-email>`: Retrieve donations made by a specific user.

### **Users**

- `POST /users`: Add a new user.
- `GET /users`: Retrieve all users.

---

## 🛠️ **Key Packages**

- **Express.js**: Simplifies building RESTful APIs.
- **MongoDB**: Used for database storage.
- **dotenv**: Manages environment variables.
- **Firebase Admin**: Enables secure user authentication.
- **Cors**: Ensures secure cross-origin requests.
