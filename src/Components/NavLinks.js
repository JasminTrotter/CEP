import React from 'react';
// eslint-disable-next-line 
import { HashRouter as Router, Route, Link } from 'react-router-dom';

export default function NavLinks(props) {

    const links= [ 
        {link: "/", label: "Home"},
        {link: "/about", label: "About"},
        {link: "/services", label: "Services"},
        {link: "/testimonials", label: "Testimonials"},
        {link: "/contact", label: "Contact"}
    ];

    const navLinks = links.map((link) => {
        return <div><Link to={link.link} className="navlink" onClick={() => props.closeHamburger()}>{link.label}</Link></div>
    });

    return(
        <div>
            {navLinks}
        </div>
    );
}