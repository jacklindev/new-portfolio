'use client';

import React, { useState, useMemo } from 'react';
import { useSectionInView } from '@/common/lib/hooks';
import { allProjects } from '@/common/lib/data';
import Project from './_components/project';
import { motion } from 'framer-motion';
import SectionHeading from '@/common/components/shared/section-heading';
import SectionDivider from '@/common/components/shared/section-divider';

const projectCategories = ['All', ...Object.keys(allProjects)];

export default function Projects() {
  const { ref } = useSectionInView('projects', 0.25);
  const [category, setCategory] = useState(projectCategories[0]);

  const projectsData = useMemo(() => {
    if (category === 'All') {
      return Object.values(allProjects).reduce(
        (res, item) => [...res, ...item],
        [],
      );
    }
    return (allProjects as any)[category];
  }, [category]);

  return (
    <section
      className="flex min-h-screen w-full scroll-mt-28 flex-col items-center justify-center dark:bg-darkBg dark:text-white"
      id="projects"
      ref={ref}
    >
      <SectionHeading>Projects</SectionHeading>
      <div className="my-24 flex flex-col items-center">
        <nav className="w-fit flex h-12 mb-8 px-2 py-2 sm:h-[initial] sm:py-0 rounded-none border border-[#f4f3ee] border-opacity-40 bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] md:rounded-full">
          <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-2 text-[0.9rem] font-medium transition-colors sm:w-[initial] sm:flex-nowrap sm:gap-5">
            {projectCategories.map((cat, index) => (
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
        {projectsData.map((project: any, index: number) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
      <SectionDivider />
    </section>
  );
}
