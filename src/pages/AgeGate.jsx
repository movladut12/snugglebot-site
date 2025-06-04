import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AgeGate() {
  const [isChecked, setIsChecked] = useState(false);
  const navigate = useNavigate();

  function handleEnterClick(e) {
    e.preventDefault();
    if (isChecked) {
      // allow them to proceed
      navigate("/home");
    } else {
      alert("You must confirm you are 18+ to enter.");
    }
  }

  return (
    <div style={styles.container}>
      <h1>⚠️ Adult Content Ahead</h1>
      <p>You must be 18 years or older to proceed.</p>
      <label style={styles.label}>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={(e) => setIsChecked(e.target.checked)}
        />{" "}
        I am 18 or older
      </label>
      <button style={styles.button} onClick={handleEnterClick}>
        Enter Site
      </button>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    textAlign: "center",
  },
  label: { margin: "1rem 0" },
  button: {
    padding: "0.5rem 1rem",
    fontSize: "1rem",
    cursor: "pointer",
  },
};
