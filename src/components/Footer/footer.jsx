import React from "react";
import "./footer.css";

export default () => {
    const year = new Date().getFullYear();
    return <footer>
        <span className="footer__copy">©{year}</span>
        <span className="footer__text"> Made by Milatka</span>
    </footer>
}


//© => &copy;