import React from "react";

export default function PrivacyPolicy() {
  return (
    <div style={{ minHeight: "100vh", background: "#020617", color: "white", padding: "40px" }}>
      <div
        style={{
          maxWidth: "800px",
          margin: "auto",
          background: "#0b1120",
          padding: "30px",
          borderRadius: "15px",
          boxShadow: "0 0 25px #0ea5e9",
        }}
      >
        <h1 style={{ fontSize: "28px", fontWeight: "bold", marginBottom: "20px", color: "#22d3ee" }}>
          Privacy Policy
        </h1>

        <p style={{ marginBottom: "15px", color: "#cbd5f5" }}>
          Your privacy is important to us. This Privacy Policy explains how we
          collect, use, and protect your information when you use our website.
        </p>

        <h2 style={{ color: "#67e8f9", marginTop: "20px" }}>Information We Collect</h2>
        <ul>
          <li>Information you provide via Gmail/contact.</li>
          <li>Basic usage data through cookies.</li>
        </ul>

        <h2 style={{ color: "#67e8f9", marginTop: "20px" }}>How We Use Your Data</h2>
        <ul>
          <li>To respond to your queries.</li>
          <li>To improve our services.</li>
        </ul>

        <h2 style={{ color: "#67e8f9", marginTop: "20px" }}>Data Protection</h2>
        <p>We secure your data to the best of our capabilities.</p>

        <h2 style={{ color: "#67e8f9", marginTop: "20px" }}>No Data Selling</h2>
        <p>We do NOT sell or trade your data.</p>

        <h2 style={{ color: "#67e8f9", marginTop: "20px" }}>Cookies</h2>
        <p>This website may use cookies for better experience.</p>

        <h2 style={{ color: "#67e8f9", marginTop: "20px" }}>BMI Data</h2>
        <p>
          BMI calculator data is NOT stored anywhere (not even Akhada AI).
        </p>

        <h2 style={{ color: "#67e8f9", marginTop: "20px" }}>Contact</h2>
        <p>Reach us via phone or email.</p>

        <p style={{ marginTop: "30px", fontSize: "12px", color: "#94a3b8" }}>
          Last updated: {new Date().toLocaleDateString()}
        </p>
      </div>
    </div>
  );
}