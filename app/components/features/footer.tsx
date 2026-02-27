import React = require("react");

export default function Footer() {
  return (
    <footer>
      <div id="social-icons">
        <p>&copy; {new Date().getFullYear()} Syntropy Engineering Services. All rights reserved.</p>
      </div>
    </footer>
  );
}
