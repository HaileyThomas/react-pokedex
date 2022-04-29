import React from "react";

function Footer() {
  return (
    <section className="footer-container">
      <p>&copy; Hailey Thomas .</p>
      <p>
        Created using React.js and PokeAPI{" "}
        <a
          href="https://github.com/HaileyThomas/react-pokedex"
          target="blank"
          rel="noopener norferrer"
        >
          click here
        </a>{" "}
        to view the source code.
      </p>
    </section>
  );
}

export default Footer;
