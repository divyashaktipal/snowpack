import React from "react";

const CICD = () => {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", lineHeight: "1.6", padding: "50px" }}>
      <header style={{ textAlign: "center", marginBottom: "30px" }}>
        <h1 style={{ color: "#333" }}>CI/CD Using GitHub Actions</h1>
        <p style={{ color: "#777" }}>An introduction to automation, YAML essentials, and deployment workflows</p>
      </header>
      <main>
        <section style={{ marginBottom: "20px" }}>
          <h2>Why CI/CD is Required</h2>
          <p>CI/CD ensures automated testing, builds, and deployments, enhancing development speed and reducing errors.</p>
        </section>
        <section style={{ marginBottom: "20px" }}>
          <h2>Understanding YAML</h2>
          <p>
            YAML is a human-readable configuration format. It uses indentation for structure and is commonly used in CI/CD workflows.
          </p>
          <ul>
            <li><strong>Objects:</strong> Key-value pairs.</li>
            <li><strong>Comments:</strong> Use <code>#</code> for comments.</li>
            <li><strong>Array/List:</strong> Use <code>-</code> for items.</li>
          </ul>
          <p><b>Note:</b>Use a <a href="https://www.yamllint.com/" target="_blank" rel="noopener noreferrer">YAML Validator</a> to ensure syntax correctness.</p>
        </section>
        <section style={{ marginBottom: "20px" }}>
          <h2>GitHub Actions</h2>
          <p>
            GitHub Actions automates tasks using workflows defined in YAML. Workflows can include jobs for testing, building, and deployment.
          </p>
        </section>
        <section style={{ marginBottom: "20px" }}>
          <h2>Adding Version & Node.js</h2>
          <p>Define Node.js versions in your GitHub workflow for compatibility using <code>actions/setup-node</code>.</p>
        </section>
        <section style={{ marginBottom: "20px" }}>
          <h2>Build Repository & Deploy</h2>
          <p>Automate builds and deploy with platforms like Vercel. Use deployment jobs and ensure dependent jobs pass before execution.</p>
        </section>
      </main>
      <footer style={{ textAlign: "center", marginTop: "30px", color: "#777" }}>
        <p>&copy; 2025 | Hands-on CI/CD Learning</p>
      </footer>
    </div>
  );
};

export default CICD;