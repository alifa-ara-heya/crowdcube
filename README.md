
# CrowdCube

A modern crowdfunding platform where individuals and organizations can create, manage, and support meaningful campaigns.

---

## 🌐 **Live Website**

[https://crowdcube-3f046.web.app/](https://crowdcube-3f046.web.app/)

---

## 🚀 **Features**

1. **Create and Manage Campaigns**  
   Users can start their own campaigns with detailed information like title, description, minimum donation, goal, and deadlines.

2. **Secure Donations**  
   Donors can contribute securely to their chosen campaigns with a smooth and user-friendly interface.

3. **Dynamic Sorting and Filtering**  
   View and sort campaigns based on minimum donation amounts and explore campaigns by category.

4. **Responsive Design**  
   The platform is fully responsive, offering a seamless experience across all devices, from mobile to desktop.

5. **Dark Mode Support**  
   Users can toggle between light and dark themes for a personalized viewing experience.

6. **Real-Time Updates**  
   Campaigns and donations are updated in real-time, providing instant feedback to users.

---

## 🛠️ **Technologies and Packages Used**

- **Frontend Framework**: [React](https://reactjs.org/)
- **State Management**: React Context
- **Routing**: [React Router DOM](https://reactrouter.com/)
- **CSS Framework**: [Tailwind CSS](https://tailwindcss.com/) with [DaisyUI](https://daisyui.com/)
- **Backend**: Firebase for authentication and database
- **UI Enhancements**:
  - [SweetAlert2](https://sweetalert2.github.io/) for alerts
  - [React Hot Toast](https://react-hot-toast.com/) for notifications
  - [React Icons](https://react-icons.github.io/react-icons/) for icons
  - [React Simple Typewriter](https://www.npmjs.com/package/react-simple-typewriter) for typewriting effects
  - [Animate.css](https://animate.style/) for animations

---

## 📦 **Dependencies**

### Frontend Dependencies:
- **animate.css**: `^4.1.1`
- **firebase**: `^11.0.2`
- **localforage**: `^1.10.0`
- **match-sorter**: `^8.0.0`
- **prop-types**: `^15.8.1`
- **react**: `^18.3.1`
- **react-dom**: `^18.3.1`
- **react-hot-toast**: `^2.4.1`
- **react-icons**: `^5.4.0`
- **react-router-dom**: `^7.0.2`
- **react-simple-typewriter**: `^5.0.1`
- **react-tooltip**: `^5.28.0`
- **sort-by**: `^1.2.0`
- **sweetalert2**: `^11.14.5`

### Backend Dependencies:
- **cors**: `^2.8.5`
- **dotenv**: `^16.4.6`
- **express**: `^4.21.1`
- **mongodb**: `^6.11.0`

---

## 🖥️ **How to Run This Project Locally**

Follow these steps to set up and run the project on your local machine:

### Prerequisites:
- Ensure you have **Node.js** and **npm** (or **Yarn**) installed on your machine.
- Install **MongoDB** and ensure it's running on your local machine or use a MongoDB cloud instance.

---

### 1. Clone the Repository:
```bash
git clone https://github.com/your-username/crowdcube.git
cd crowdcube
```

---

### 2. Install Dependencies:
#### For the frontend:
Navigate to the `client` directory and install the dependencies:
```bash
cd client
npm install
```

#### For the backend:
Navigate to the `server` directory and install the dependencies:
```bash
cd server
npm install
```

---

### 3. Set Up Environment Variables:
#### Frontend:
- Create a `.env` file in the `client` directory.
- Add your Firebase configuration and other necessary environment variables.

#### Backend:
- Create a `.env` file in the `server` directory.
- Add your MongoDB connection string and any other necessary environment variables:
  ```
  MONGO_URI=your_mongo_connection_string
  PORT=5000
  ```

---

### 4. Start the Project:
#### Start the Backend:
Navigate to the `server` directory and start the server:
```bash
npm start
```

#### Start the Frontend:
Navigate to the `client` directory and start the development server:
```bash
npm start
```

---

### 5. Access the Application:
- Open your browser and go to: [http://localhost:3000](http://localhost:3000)

---

## 📖 **Additional Notes**
- Ensure MongoDB is running locally or adjust the `MONGO_URI` in the `.env` file for a remote database.
- For deployment, set up environment variables appropriately for production.
```

This updated documentation now includes a detailed "How to Run This Project Locally" section along with the dependencies you provided. Let me know if you need further adjustments!
