import React from "react";

function Footer() {
    let currentYear = new Date().getFullYear();

  return (
    <section className="footer-container">
      <p>&copy; Hailey Thomas ({currentYear}).</p>
      <br />
      <p>
        Created using React.js and PokeAPI{" "}
        <a
          href="https://github.com/HaileyThomas/react-pokedex"
          target="blank"
          rel="noopener norferrer"
          className="footer-link"
        >
          click here
        </a>{" "}
        to view the source code.
      </p>
    </section>
  );
}

export default Footer;
