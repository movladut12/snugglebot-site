import { Link } from "react-router-dom";

export default function Terms() {
  return (
    <div style={styles.container}>
      <h1>Terms of Service</h1>
      <p>Last updated: June 3, 2025</p>
      <p>
        {/* Paste or write your full Terms of Service text here. */}
        Terms of Service
Effective Date: 03.06.2025
Website: www.snugglebot.com
Company Contact Email: snugglebot.enterprise.com
Phone Number: +40 755 595 374
Address: Str. Scolii Nr. 27, Suceava, Romania

1. Acceptance of Terms
By accessing or using SnuggleBot.com, you agree to be bound by these Terms of Service and our Privacy Policy. If you do not agree, please do not use our site or services.

2. Services Provided
SnuggleBot.com provides AI-powered virtual companions capable of engaging in conversations, including romantic or adult-themed interactions. These are purely fictional and for entertainment purposes only.

3. Age Restriction
You must be at least 18 years old to use this service. By using this website, you confirm that you are 18+ and legally permitted to access adult content in your jurisdiction.

4. Account Registration
You may need to create an account to access some features. You are responsible for maintaining the confidentiality of your login information and for all activity under your account.

5. User Conduct
You agree not to:

Violate any local, national, or international law.

Use the platform to promote hate, abuse, violence, or illegal behavior.

Attempt to reverse-engineer, replicate, or hack the AI system.

6. Content Disclaimer
SnuggleBot is an AI simulation. Any conversations or responses are generated algorithmically and do not reflect the opinions or actions of real individuals. All interactions are fictional.

7. Payments and Refunds
Access to premium features may require payment. All charges are clearly listed at checkout. Refunds are generally not provided once premium access has been granted, except in cases of billing errors.

8. Modifications to the Service
We may update or change our services at any time without prior notice. We are not liable for any discontinuation or modification of the service.

9. Termination
We reserve the right to suspend or delete your account if you violate our terms or misuse the service in any way.

10. Limitation of Liability
To the maximum extent permitted by law, SnuggleBot.com shall not be liable for any direct or indirect damages arising from the use of this service.

11. Governing Law
These terms are governed by the laws of Romania, with jurisdiction in Suceava County. Any disputes shall be resolved in the appropriate Romanian courts.

12. Contact Information
If you have questions about these Terms, please contact us:
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