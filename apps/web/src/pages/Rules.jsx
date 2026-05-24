import React from "react";

export default function GymRules() {
  return (
    <div style={{ minHeight: "100vh", background: "#020617", color: "white", padding: "40px" }}>
      <div
        style={{
          maxWidth: "800px",
          margin: "auto",
          background: "#0b1120",
          padding: "30px",
          borderRadius: "15px",
          boxShadow: "0 0 25px #f97316",
        }}
      >
        <h1 style={{ fontSize: "28px", fontWeight: "bold", marginBottom: "20px", color: "#fb923c" }}>
          Gym Rules & Regulations
        </h1>

        <ul style={{ lineHeight: "1.8", color: "#cbd5f5" }}>
          <li>
            Stay away from wall mirrors. If harmed, you will be responsible for your injuries and may be fined for any damage.
          </li>

          <li>
            Avoid any kind of fighting. In case of any issue, immediately inform the Trainer or Owner.
          </li>

          <li>
            Intentional damage to any gym property will result in fines and strict action.
          </li>

          <li>No demo classes are offered.</li>

          <li>
            If you get injured during heavy lifting, you are responsible. Always consult a trainer or Head Coach before exercises like Squats, Bench Press, or Deadlift.
          </li>

          <li>
            Girls are not allowed in this gym as it is a unisex gym.
          </li>

          <li>
            Any kind of theft will lead to strict action. The entire gym is under CCTV surveillance.
          </li>

          {/* Added professional rules */}
          <li>
            Maintain discipline and respect other members and staff at all times.
          </li>

          <li>
            Use equipment properly and return it to its place after use.
          </li>
        </ul>

        <p style={{ marginTop: "30px", fontSize: "12px", color: "#94a3b8" }}>
          Last updated: {new Date().toLocaleDateString()}
        </p>
      </div>
    </div>
  );
}