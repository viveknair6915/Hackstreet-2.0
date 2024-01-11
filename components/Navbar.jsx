'use client';

import { motion } from 'framer-motion';

import Link from 'next/link';
import { HashLink } from 'react-router-hash-link';
import styles from '../styles';
import { navVariants } from '../utils/motion';
import './Navbar.css';

function Navbar() {
  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className={`${styles.xPaddings} py-8 relative`}
    >
      <div className="absolute w-[50%] inset-0 gradient-01" />
      <div className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}>
        <h2 className="font-extrabold text-[24px] leading-[30px] text-white w-[60%]">
          HACKSTREET 2.0
        </h2>
        <div className="NavBar-desc">
          <Link href="/">HOME</Link>
          <HashLink to="#about">ABOUT</HashLink>
          <HashLink to="#prize">PRIZE</HashLink>
          <HashLink to="#sponser">SPONSERS</HashLink>
          <HashLink to="#faq">FAQs</HashLink>
        </div>
        <button
          type="button"
          className="flex my-0 items-center h-fit py-3 px-5 bg-[#1E90FF] rounded-[32px] gap-[12px]"
        >
          <span className="font-normal text-[16px] text-white">
            <a href="https://youtu.be/dQw4w9WgXcQ?si=LEaggX_fLM_s3I1W">
              DEVFOLIO
            </a>
          </span>
        </button>
      </div>
    </motion.nav>
  );
}

export default Navbar;
