// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-analytics.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyDOJRWTrO3A7_0SqvBxsCTt6bkNo8pV-bc",                   // আপনার API key
  authDomain: "vcfweb-9bd1f.firebaseapp.com",                             // Auth domain
  databaseURL: "https://vcfweb-9bd1f-default-rtdb.firebaseio.com",       // Realtime database URL
  projectId: "vcfweb-9bd1f",                                             // Firebase project ID
  storageBucket: "vcfweb-9bd1f.firebasestorage.app",                     // Storage bucket
  messagingSenderId: "204316192596",                                      // Messaging sender ID (project number)
  appId: "1:204316192596:android:5b5d6052167c5dd270a2c1",                 // App ID
  measurementId: "G-XXXXXXXXXX"                                          // Measurement ID (Analytics, optional)
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase(app);

// Export the initialized services
export { app, analytics, db };
