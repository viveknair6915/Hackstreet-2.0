'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { fadeIn, staggerContainer, zoomIn } from '../utils/motion';

function Feedback() {
  return (
    <section className={`${styles.paddings} relative z-10`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-6`}
      >
        <motion.div
          variants={fadeIn('right', 'tween', 0.2, 1)}
          className="flex-[0.5] lg:max-w-1500 flex justify-end flex-col gradient-05 sm:p-99 p-56 rounded-[32px] border-[1px] border-[#6a6a6a] relative"
        >
          <div className="feedback-gradient" />
          <div>
            <h4 className="font-bold sm:text-[32px] text-[26px] sm:leading-[40px] leading-[36px] text-white">
              Sponsors and Partners
            </h4>
            <p className="mt-[8px] font-normal sm:text-[18px] text-[12px] sm:leading-[22px] leading-[16px] text-white">
              IEEE | Hackstreet 2.0
            </p>
          </div>

          <p className="mt-[24px] font-normal sm:text-[24px] text-[18px] sm:leading-[45px] leading-[39px] text-white">
            “Special Thanks to”
          </p>

          <motion.div
            variants={zoomIn(0.4, 1)}
            className="lg:block hidden absolute -left-[-1%] top-[1%]"
          >
            <img
              src="/logo_hack.png"
              alt="stamp"
              className="w-[125px] h-[125px] object-contain"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Feedback;
