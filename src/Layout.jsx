// Layout.jsx (example)
import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      {/* Main Content */}
      <main className="flex-1 bg-gradient-to-b from-green-50 to-white">
        {children}
      </main>
      {/* Footer */}
      <Link to="/">
      <footer className="bg-emerald-600 text-white p-4 text-center">
        © 2025 Sunshine Energy Consultants
      </footer>
      </Link>
    </div>
  );
}