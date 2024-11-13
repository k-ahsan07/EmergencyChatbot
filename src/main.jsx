import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './index.css'; // Global styles
import ChatBot from './ChatBot/ChatBot.jsx';
import Homepage from './homepage/Homepage.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        {/* Home page route */}
        <Route path="/" element={<Homepage />} />

        {/* Chatbot route, accessible without authentication */}
        <Route path="/app" element={<ChatBot />} />

      </Routes>
    </Router>
  </React.StrictMode>
);
