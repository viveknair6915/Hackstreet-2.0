/* eslint-disable no-unused-vars */

'use client';

import { motion } from 'framer-motion';

import Link from 'next/link';
import { HashLink } from 'react-router-hash-link';
// import styles from '../styles';
// import { navVariants } from '../utils/motion';
import './Navbar.css';

function Navbar() {
  return (
    <div className="nav">
      <div className="heading">
        <h2>HACKSTREET 2.0</h2>
      </div>
      <div className="NavBar-desc">
        <Link href="/">HOME</Link>
        <HashLink to="#about">ABOUT</HashLink>
        <HashLink to="#prize">PRIZE</HashLink>
        <HashLink to="#sponser">SPONSERS</HashLink>
        <HashLink to="#faq">FAQs</HashLink>
        <button
          type="button"
          className="devfolio"
        >
          <span>
            <a href="https://youtu.be/dQw4w9WgXcQ?si=LEaggX_fLM_s3I1W">
              DEVFOLIO
            </a>
          </span>
        </button>
      </div>
    </div>
  );
}

export default Navbar;
