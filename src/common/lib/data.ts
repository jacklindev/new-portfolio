import React from 'react';

import campwithusImg from '@/../public/images/camp-with-us.png';
import carcatalogImg from '@/../public/images/car-catalog.png';
import filedriveImg from '@/../public/images/file-drive.png';
import projectmanagementImg from '@/../public/images/project-management.png';
import reactfoodImg from '@/../public/images/react-food.png';
import surgeImg from '@/../public/images/surge.png';
import portfolioImg from '@/../public/images/portfolio.png';
import auditMasterImg from '@/../public/images/audit-master.png';
import {
  BookIcon,
  BriefcaseBusinessIcon,
  LaptopMinimalIcon,
} from 'lucide-react';

export const links = [
  {
    name: 'Home',
    id: 'home',
  },
  {
    name: 'About',
    id: 'about',
  },
  {
    name: 'Projects',
    id: 'projects',
  },
  {
    name: 'Experience',
    id: 'experience',
  },
  {
    name: 'Skills',
    id: 'skills',
  },
  {
    name: 'Contact',
    id: 'contact',
  },
] as const;

export const experiencesData = [
  {
    title: 'Full Stack Team Lead - React, Node.js, Python',
    location: 'Groundswell',
    description: `Led Cross-functional teams, Architected Scalable Solutions, Mentorship, Client Collaboration, Drive Continuous Improvement`,
    icon: React.createElement(BriefcaseBusinessIcon),
    date: 'Jun 2021 - Aug 2024',
  },
  {
    title: 'Senior Full Stack Developer - React, Python',
    location: 'Pypestream',
    description: `Created AI chatbots that deliver a seamless, app-like experience with the convenience of a self-service conversation that drives adoption and delights customers.`,
    icon: React.createElement(BriefcaseBusinessIcon),
    date: 'Mar 2018 - May 2021',
  },
  {
    title: 'FULL STACK DEVELOPER - REACT, MIRTH CONNECT',
    location: 'SpinSci Technologies LLC',
    description: `Worked on Patient Engagement team to allow patients to perform self-service operations to take control and manage their own healthcare workflows.`,
    icon: React.createElement(BriefcaseBusinessIcon),
    date: 'Jul 2015 - Feb 2018',
  },
  {
    title: 'SOFTWARE ENGINEER',
    location: 'TeraThink Corporation',
    description: `Responsive web design, API Integration and Development, Cross-team Collaboration`,
    icon: React.createElement(BriefcaseBusinessIcon),
    date: 'Feb 2012 - Jun 2015',
  },
  {
    title: 'Holy Names University',
    location: '',
    description: `Bachelor of Science in Computer Science`,
    icon: React.createElement(BookIcon),
    date: '2007 - 2012',
  },
] as const;

export const images = {
  campwithusImg,
  carcatalogImg,
  filedriveImg,
  projectmanagementImg,
  reactfoodImg,
};

export const projectsData = [
  {
    title: 'FileDrive',
    description:
      'A platform for decentralized file storage with robust user management.',
    tags: [
      'React',
      'TypeScript',
      'Next.js',
      'Convex',
      'Clerk',
      'Shadcn',
      'Tailwind',
    ],
    imageUrl: filedriveImg,
    link: 'https://github.com/bbyc4kes/file-drive',
  },
  {
    title: 'Portfolio',
    description: `Portfolio that you're currently viewing! This project showcases my work and provides information about me.`,
    tags: [
      'React',
      'TypeScript',
      'Next.js',
      'Framer Motion',
      'Cloudinary',
      'React Email',
      'Tailwind',
    ],
    imageUrl: portfolioImg,
    link: 'https://github.com/bbyc4kes/portfolio',
  },
  {
    title: 'Audit Master',
    description: `Audit Master is a platform that streamlines the process of obtaining legal expertise and resources. It automates tasks like GAP Analysis, GAP Reporting, and Due Diligence.`,
    tags: [
      'React',
      'TypeScript',
      'Next.js',
      'Tailwind',
      'OpenAI',
      'SCRUM Methodology',
      'End-to-End Development',
    ],
    imageUrl: auditMasterImg,
    link: 'https://auditmaster.ai/',
  },
  {
    title: 'Surge',
    description:
      'Welcome Surge! A SaaS Website Builder - service that allows users to build and manage their own websites with integrated payment processing.',
    tags: [
      'React',
      'TypeScript',
      'Next.js',
      'MySQL',
      'Clerk',
      'Stripe Connect',
      'Shadcn',
      'Tailwind',
    ],
    imageUrl: surgeImg,
    link: 'https://github.com/bbyc4kes/surge',
  },
  {
    title: 'CampWithUs',
    description:
      'A platform to find and book campsites, featuring a well-designed backend and seamless client-server communication.',
    tags: ['JavaScript', 'Express.js', 'MongoDB', 'Cloudinary', 'EJS'],
    imageUrl: campwithusImg,
    link: 'https://github.com/bbyc4kes/campwithus',
  },
] as const;

export const skillsData = [
  ['JavaScript', '/svgs/javascript-js.svg'],
  ['TypeScript', '/svgs/typescript-icon.svg'],
  ['React', '/svgs/react.svg'],
  ['Next.js', '/svgs/nextjs.svg'],
  ['Node.js', '/svgs/node-js.svg'],
  ['Express', '/svgs/express-original.svg'],
  ['Tailwind', '/svgs/tailwind-css.svg'],
  ['Framer', '/svgs/framer.svg'],
  ['Shadcn', '/svgs/shadcnui.svg'],
  ['Headless', '/svgs/brand-headlessui.svg'],
  ['Redux', '/svgs/redux-original.svg'],
  ['Prisma', '/svgs/file-type-light-prisma.svg'],
  ['MongoDB', '/svgs/mongodb-original.svg'],
  ['PostgreSQL', '/svgs/postgresql.svg'],
  ['MySQL', '/svgs/MySQL.svg'],
  ['Tanstack Query', '/svgs/react-query-seeklogo.svg'],
  ['Tanstack Table', '/svgs/db-table-svgrepo-com.svg'],
  ['Cloudinary', '/svgs/cloudinary.svg'],
  ['Docker', '/svgs/Docker.svg'],
  ['Clerk', '/svgs/clerk.svg'],
  ['Axios', '/svgs/axios.svg'],
  ['HTML', '/svgs/file-type-html.svg'],
  ['CSS', '/svgs/file-type-css.svg'],
  ['Sass', '/svgs/Sass.svg'],
  ['Git', '/svgs/git.svg'],
  ['GitHub', '/svgs/github.svg'],
  ['', '/svgs/etc.svg'],
] as const;
