import React, { useState, useEffect } from 'react'
const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [])
    return (
        <div className={`outer-nav ${scrolled ? "scrolled" : ""}`}>
            <div className="navbar container">
                <img src='https://www.saveetha.ac.in/images/WEB_LOGO-01.png' alt="logo" />
                <nav>
                    <a className="active" href="#Home">Home</a>
                    <a href="#Services">Events</a>
                    <a href="#Contact">Departments</a>
                    <a href="#About">About</a>
                </nav>
                <button><span>Register</span></button>
            </div>
        </div>
    )
}

export default Navbar