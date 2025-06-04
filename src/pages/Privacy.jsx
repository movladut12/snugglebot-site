import { Link } from "react-router-dom";

export default function Privacy() {
  return (
    <div style={styles.container}>
      <h1>Privacy Policy</h1>
      <p>Last updated: June 3, 2025</p>
      <p>
        {/* Paste or write your full Privacy Policy text here. */}
        Privacy Policy
Effective Date: [Insert Date]
Website: www.snugglebot.com
Email: snugglebot.enterprise.com
Phone: +40 755 595 374
Address: Str. Scolii Nr. 27, Suceava, Romania

1. Who We Are
SnuggleBot.com is a digital service providing AI-generated virtual companion experiences. This Privacy Policy explains how we collect, use, store, and protect your data.

2. What Data We Collect
We may collect and process the following data:

Account info: username, email address, password (encrypted)

Usage data: interactions with the AI, chat logs (for quality improvements)

Payment info: handled securely via third-party processors (we don’t store card data)

Device info: IP address, browser type, location, cookies

3. Why We Collect Data
We collect data to:

Provide and improve our AI services

Personalize user experience

Process payments for premium features

Monitor and prevent abuse or misuse

Comply with legal requirements

4. Legal Basis for Processing (Under GDPR)
We collect and use your data based on:

Consent (when you create an account)

Contractual necessity (to provide the service)

Legitimate interest (to improve our services)

Legal obligation (for regulatory compliance)

5. Cookies
We use cookies to enhance your experience. Cookies help us remember your preferences and analyze how you use our site. You can disable cookies in your browser settings.

6. Third-Party Services
We may use trusted third-party services (e.g. payment processors, analytics tools) which may access limited user data. These providers are GDPR-compliant.

7. Data Security
We take appropriate security measures, including encryption and limited access control, to protect your data. However, no online service is 100% secure.

8. How Long We Keep Data
We retain your data as long as your account is active or as needed for legitimate purposes (support, legal, or operational).

You can request deletion at any time.

9. Your Rights (Under GDPR)
As a user in the EU (Romania), you have the right to:

Access your personal data

Request correction or deletion

Withdraw consent at any time

Object to processing

File a complaint with your local data authority (in Romania: ANSPDCP)

10. NSFW Content Warning
Some AI responses may include adult or erotic content. All content is fictional and AI-generated. No real individuals are involved. Users must be 18+ to use this site.

11. Children’s Privacy
We do not knowingly collect data from individuals under 18. If we become aware of such data, it will be deleted immediately.

12. Changes to This Policy
We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated date. Continued use of the site means you accept the revised terms.

13. Contact Us
For privacy-related questions, data requests, or concerns:

📧 Email: snugglebot.enterprise.com
📞 Phone: +40 755 595 374
🏠 Address: Str. Scolii Nr. 27, Suceava, Romania
      </p>
      <Link to="/home" style={styles.backLink}>&larr; Back to Home</Link>
    </div>
  );
}

const styles = {
  container: { padding: "2rem", maxWidth: "800px", margin: "0 auto" },
  backLink: { display: "block", marginTop: "2rem", color: "#6366F1", textDecoration: "none" },
};