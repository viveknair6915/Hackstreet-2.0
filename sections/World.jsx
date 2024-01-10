'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { staggerContainer, fadeIn } from '../utils/motion';
import { TitleText, TypingText } from '../components';

function World() {
  return (
    <section className={`${styles.paddings} relative z-10`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TypingText title="| People on the World" textStyles="text-center" />
        <TitleText
          title={(
            <>
              Make interesting projects with your friends and win exciting prizes
            </>
        )}
          textStyles="text-center"
        />

        <motion.div
          variants={fadeIn('up', 'tween', 0.1, 1)}
          className="relative mt-[68px] flex w-full h-[1000px]"
        >
          <img
            src="/image5.jpg"
            alt="image5"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}

export default World;
