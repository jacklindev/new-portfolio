'use client';

import React, { useState, useMemo } from 'react';
import { skillsData } from '@/common/lib/data';
import { useSectionInView } from '@/common/lib/hooks';
import { motion } from 'framer-motion';
import Image from 'next/image';
import SectionHeading from '@/common/components/shared/section-heading';
import SectionDivider from '@/common/components/shared/section-divider';

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

const skillCategories = Object.keys(skillsData);

export default function Skills() {
  const { ref } = useSectionInView('skills');
  const [category, setCategory] = useState(skillCategories[0]);

  const skills = useMemo(() => (skillsData as any)[category], [category]);

  return (
    <section
      id="skills"
      ref={ref}
      className="flex w-full flex-col items-center justify-center py-24 pb-[150px] text-center dark:bg-darkBg dark:text-white sm:pb-40"
    >
      <SectionHeading>My skills</SectionHeading>
      <div>
        <nav className="flex h-12 px-2 py-2 sm:h-[initial] sm:py-0 rounded-none border border-[#f4f3ee] border-opacity-40 bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] md:rounded-full">
          <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-2 text-[0.9rem] font-medium transition-colors sm:w-[initial] sm:flex-nowrap sm:gap-5">
            {skillCategories.map((cat, index) => (
              <motion.li
                className="relative flex h-3/4 items-center justify-center text-black dark:text-white"
                key={`${index}-${cat}`}
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
              >
                <motion.div
                  className="flex w-full items-center justify-center px-3 py-3 uppercase transition hover:cursor-pointer"
                  onClick={(e) => {
                    setCategory(cat);
                  }}
                >
                  {cat}

                  {cat === category && (
                    <motion.span
                      className="absolute inset-0 -z-10 rounded-full bg-[#ffcbb4] dark:bg-[#ddbea9]"
                      transition={{
                        type: 'spring',
                        stiffness: 300,
                        damping: 30,
                      }}
                    ></motion.span>
                  )}
                </motion.div>
              </motion.li>
            ))}
          </ul>
        </nav>
        <ul className="pt-8 my-26 mb-[150px] flex max-w-[53rem] flex-wrap items-center justify-start gap-2 text-lg text-gray-800">
          {skills.map((skill: any, index: number) => (
            <motion.li
              className="borderBlack flex items-center justify-center rounded-xl bg-gray-200 px-5 py-3 dark:bg-white/10 dark:text-white/80"
              key={index}
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: true,
              }}
              custom={index}
            >
              <Image
                src={skill[1]}
                alt={skill[0]}
                width={24}
                height={24}
                className="mr-2 inline h-6 w-6"
              />
              {skill[0]}
            </motion.li>
          ))}
        </ul>
      </div>
      <div className="flex w-full justify-center dark:bg-darkBg">
        <SectionDivider />
      </div>
    </section>
  );
}
