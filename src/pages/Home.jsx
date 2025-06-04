import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div style={styles.container}>
      <h1>Welcome to AI GF Site 🎉</h1>
      <p>Select an option from below:</p>
      <nav style={styles.nav}>
        <Link to="/terms" style={styles.link}>Terms of Service</Link>
        <Link to="/privacy" style={styles.link}>Privacy Policy</Link>
        {/* Later: Add link to “Chat with AI” */}
      </nav>
    </div>
  );
}

const styles = {
  container: {
    padding: "2rem",
    textAlign: "center",
  },
  nav: {
    display: "flex",
    justifyContent: "center",
    gap: "2rem",
    marginTop: "1rem",
  },
  link: {
    textDecoration: "none",
    color: "#6366F1",
    fontWeight: "bold",
  },
};
