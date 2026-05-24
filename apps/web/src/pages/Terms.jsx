import React from "react";

export default function TermsOfService() {
  return (
    <div style={{ minHeight: "100vh", background: "#020617", color: "white", padding: "40px" }}>
      <div
        style={{
          maxWidth: "800px",
          margin: "auto",
          background: "#0b1120",
          padding: "30px",
          borderRadius: "15px",
          boxShadow: "0 0 25px #22c55e",
        }}
      >
        <h1 style={{ fontSize: "28px", fontWeight: "bold", marginBottom: "20px", color: "#4ade80" }}>
          Terms of Service
        </h1>

        <p style={{ marginBottom: "15px", color: "#cbd5f5" }}>
          By accessing and using our website, you agree to the following terms and conditions.
        </p>

        <h2 style={{ color: "#86efac", marginTop: "20px" }}>Use of Service</h2>
        <p>You must use this website only for lawful purposes.</p>

        <h2 style={{ color: "#86efac", marginTop: "20px" }}>No Online Payments</h2>
        <p>
          Payments are NOT accepted on this website. All services or consultations
          must be handled via phone or direct contact.
        </p>

        <h2 style={{ color: "#86efac", marginTop: "20px" }}>Products</h2>
        <p>We sell only our own products. Availability may change anytime.</p>

        <h2 style={{ color: "#86efac", marginTop: "20px" }}>User Responsibility</h2>
        <p>
          You are responsible for the information you provide and how you use our platform.
        </p>

        <h2 style={{ color: "#86efac", marginTop: "20px" }}>Limitation of Liability</h2>
        <p>
          We are not responsible for any losses, damages, or issues arising from use of this website.
        </p>

        <h2 style={{ color: "#86efac", marginTop: "20px" }}>Accuracy</h2>
        <p>
          We try to keep all information accurate, but we do not guarantee completeness at all times.
        </p>

        <h2 style={{ color: "#86efac", marginTop: "20px" }}>Changes to Terms</h2>
        <p>
          These terms may be updated anytime. Continued use means you accept the changes.
        </p>

        <h2 style={{ color: "#86efac", marginTop: "20px" }}>Contact</h2>
        <p>You can contact us via phone or email for any queries.</p>

        <p style={{ marginTop: "30px", fontSize: "12px", color: "#94a3b8" }}>
          Last updated: {new Date().toLocaleDateString()}
        </p>
      </div>
    </div>
  );
}