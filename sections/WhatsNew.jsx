'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { staggerContainer, fadeIn, planetVariants } from '../utils/motion';
import { NewFeatures, TitleText, TypingText } from '../components';
import { newFeatures, newFeatures2 } from '../constants';

function WhatsNew() {
  return (
    <section className={`${styles.paddings} relative z-10`} id="prize">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex lg:flex-row  gap-8`}
      >
        <motion.div
          variants={fadeIn('right', 'tween', 0.2, 1)}
          className=""
        >
          <TypingText title="| Prizes" />
          <TitleText title={<>Prize Section🏆</>} />
          <div className="lg:mt-[48px] mt-[30px] text-xl lg:flex-row flex flex-wrap justify-between gap-[24px]">
            {newFeatures.map((feature) => (
              <NewFeatures key={feature.title} {...feature} />
            ))}
          </div>
        </motion.div>
        {/* <motion.div
          variants={planetVariants('right')}
          className={`flex-1 ${styles.flexCenter}`}
        >
          <img
            src="/revimage20.png"
            alt="whats-new"
            className="lg:w-[96%] lg:h-[96%] sm:w-[600px] sm:h-[900px] object-contain"
          /> 
        </motion.div> */}
      </motion.div>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col lg:gap-5 gap-0`}
      >
        <motion.div
          variants={planetVariants('left')}
          className={`shrink-0 ${styles.flexCenter} items-start`}
        >
          <img
            src="/revimage20(reverse).png"
            alt="whats-new"
            className="lg:w-[92%] w-[200px] lg:h-[92%]"
          />
        </motion.div>
        <motion.div
          variants={fadeIn('left', 'tween', 0.2, 1)}
          className="flex-[1] flex flex-col justify-start "
        >
          {/* <TitleText title={<>What's new about Hackstreet 2.0?</>} /> */}
          <div className="mt-[48px] lg:flex-col flex-row flex justify-evenly gap-5">
            {newFeatures2.map((feature) => (
              <NewFeatures key={feature.title} {...feature} />
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default WhatsNew;
