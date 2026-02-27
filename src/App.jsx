import { Routes, Route, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import React from "react";
import { useLocation } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const [q1, setQ1] = React.useState("");
const [q2, setQ2] = React.useState("");
const [q3, setQ3] = React.useState("");

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h1>BondMetrics™</h1>
        <p>Advanced Friendship Compatibility Analysis</p>
  
        <div style={{ marginTop: "20px" }}>
          <label>Response Consistency</label>
          <select
  style={styles.select}
  value={q1}
  onChange={(e) => setQ1(e.target.value)}
>
            <option value="0">Select</option>
            <option value="1">Inconsistent</option>
            <option value="2">Moderate</option>
            <option value="3">Highly Reliable</option>
          </select>
        </div>
  
        <div style={{ marginTop: "20px" }}>
          <label>Loyalty Factor</label>
          <select
            style={styles.select}
            value={q2}
            onChange={(e) =>
              setQ2(e.target.value)
            }
          >
            <option value="0">Select</option>
            <option value="1">Questionable</option>
            <option value="2">Stable</option>
            <option value="3">Unbreakable</option>
          </select>
        </div>
  
        <div style={{ marginTop: "20px" }}>
          <label>Emotional Support Index</label>
          <select
            style={styles.select}
            value={q3}
            onChange={(e) =>
              setQ3(e.target.value)
            }
          >
            <option value="0">Select</option>
            <option value="1">Rare</option>
            <option value="2">Sometimes</option>
            <option value="3">Always</option>
          </select>
        </div>
  
        <button
  style={{
    ...styles.button,
    opacity: q1 && q2 && q3 ? 1 : 0.5,
    cursor: q1 && q2 && q3 ? "pointer" : "not-allowed",
  }}
  disabled={!q1 || !q2 || !q3}
  onClick={() =>
    navigate("/result", {
      state: { q1, q2, q3 }
    })
  }
>
          Run Compatibility Analysis
        </button>
      </div>
    </div>
  );
}

function Result() {
  const location = useLocation();
const { q1, q2, q3 } = location.state || {};
  const [showMessage, setShowMessage] = React.useState(false);
  const [showVideo, setShowVideo] = React.useState(false);
  const [flash, setFlash] = React.useState(false);

  React.useEffect(() => {
    const loaderTimer = setTimeout(() => {
      setShowVideo(true);
    }, 6000); // 6 sec loading screen
  
    return () => clearTimeout(loaderTimer);
  }, []);

  return (
    <div style={{ position: "relative", width: "100%", height: "100vh" }}>
<motion.div
  animate={{
    opacity: flash ? 1 : 0,
    scale: flash ? 1.05 : 1,
  }}
  transition={{ duration: 0.08 }}
  style={{
    position: "absolute",
    width: "100%",
    height: "100%",
    background: "radial-gradient(circle, white 40%, #ffe9a3 70%, transparent 100%)",
    pointerEvents: "none",
    zIndex: 10,
  }}
/>
{!showVideo && (
  <div
    style={{
      position: "absolute",
      width: "100%",
      height: "100%",
      background: "#0f172a",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      color: "white",
      zIndex: 5,
    }}
  >
    <div style={{ marginBottom: "30px", textAlign: "left" }}>
  <p><strong>Response Consistency:</strong> {q1}</p>
  <p><strong>Loyalty Factor:</strong> {q2}</p>
  <p><strong>Emotional Support Index:</strong> {q3}</p>
</div>
    <h1 style={{ fontSize: "32px", marginBottom: "20px" }}>
      Analyzing Friendship...
    </h1>
    <div
      style={{
        width: "200px",
        height: "6px",
        background: "#1e293b",
        borderRadius: "10px",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#4f46e5",
          animation: "load 6s linear forwards",
        }}
      />
    </div>
  </div>
)}

{showVideo && !showMessage && (
  <video
    src="/mememe.mp4"
    autoPlay
    playsInline
    onEnded={() => {
      setFlash(true);
    
      setTimeout(() => {
        setFlash(false);
      }, 100);
    
      setTimeout(() => {
        setShowMessage(true);
      }, 200);
    }}
    style={{
      width: "75%",
      height: "75%",
      objectFit: "center",
    }}
  />
)}

      {showMessage && (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1.3, opacity: 1 }}
          transition={{ duration: 0.7, type: "spring" }}
          style={styles.boomCard}
        >
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            style={styles.explosionText}
          >
            You have been pranked look camera above your screen....🦍🦍
            {/* LADLE photoshoot kb krega😂😂 */}
            {/* or BSDK kb milega....salle score check kr ra h😂😂 */}
          </motion.h1>
        </motion.div>
      )}

    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/result" element={<Result />} />
    </Routes>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "radial-gradient(circle at top left, #1e293b, #0f172a 70%)",
    color: "white",
    padding: "20px",
  },
  card: {
    background: "#1e293b",
    padding: "50px",
    borderRadius: "20px",
    textAlign: "center",
    boxShadow: "0 20px 50px rgba(0,0,0,0.6)",
  },
  button: {
    marginTop: "20px",
    padding: "12px 25px",
    border: "none",
    borderRadius: "10px",
    background: "#4f46e5",
    color: "white",
    cursor: "pointer",
    fontSize: "16px",
  },
  boomCard: {
    background: "#111827",
    padding: "80px",
    borderRadius: "25px",
    textAlign: "center",
    boxShadow: "0 40px 100px rgba(0,0,0,0.8)",
  },
  
  explosionText: {
    fontSize: "40px",
    background: "linear-gradient(90deg, #facc15, #f97316)",
    WebkitBackgroundClip: "text",
    color: "transparent",
  },
  select: {
    width: "100%",
    padding: "10px",
    marginTop: "8px",
    borderRadius: "8px",
    border: "none",
  }
};

export default App;