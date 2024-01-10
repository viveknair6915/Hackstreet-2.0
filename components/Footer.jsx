'use client';

import { motion } from 'framer-motion';
import { socials } from '../constants';
import './Footer.css';

import styles from '../styles';
import { footerVariants } from '../utils/motion';

function Footer() {
  return (
    <motion.footer
      variants={footerVariants}
      initial="hidden"
      whileInView="show"
      className={`${styles.paddings} py-8 relative`}
    >
      <div className="footer-gradient" />

      <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
        <div className="flex items-center justify-between flex-wrap gap-5">
          <h4 className="font-bold md:text-[64px] text-[44px] text-white">
            Enter the InCognito Realm
          </h4>
          {/* <button type='button' className='flex items-center h-fit py-4 px-6 bg-[#25618b] rounded-[32px] gap-[12px]'>
          <img src='/headset.svg' alt='headset' className='w-[24px] h-[24px] object-contain' />
          <span className='font-normal text-[16px] text-white'>ENTER REALM</span>
        </button> */}
        </div>

        <div className="flex flex-col">
          <div className="mb-[50px] h-[2px] bg-white opacity-10" />
          <div className="flex items-center justify-between flex-wrap gap-4">
            <h4 className="font-extrabold text-[24px] text-white">
              HACKSTREET 2.0
            </h4>
            <p className="font-bold text-[18px] text-white opacity-50">
              Contact Us:{' '}
              <a href="mailto:ieeesbjiit@gmail.com" id="gmail">
                ieeesbjiit@gmail.com
              </a>
            </p>
            <div className="flex gap-4">
              {socials.map((social) => (
                // eslint-disable-next-line react/button-has-type
                <button className="social-btn">
                  <a href={social.href} target="_main">
                    <img
                      key={social.name}
                      src={social.url}
                      alt={social.name}
                      className="w-[24px] h-[24px] object-contain cursor-pointer"
                    />
                  </a>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}

export default Footer;
