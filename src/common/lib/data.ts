import React from 'react';

import campwithusImg from '@/../public/images/camp-with-us.png';
import carcatalogImg from '@/../public/images/car-catalog.png';
import pypestreamImg from '@/../public/images/pypestream.webp';
import projectmanagementImg from '@/../public/images/project-management.png';
import reactfoodImg from '@/../public/images/react-food.png';
import surgeImg from '@/../public/images/surge.png';
import spinsciImg from '@/../public/images/spinsci.webp';
import auditMasterImg from '@/../public/images/audit-master.png';
import { BookIcon, BriefcaseBusinessIcon } from 'lucide-react';

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
  pypestreamImg,
  projectmanagementImg,
  reactfoodImg,
};

export const allProjects = {
  'React.js': [
    {
      title: 'AI chatbots & Microapps',
      description:
        'Deliver a seamless, app-like experience with the convenience of a self-service conversation that drives adoption and delights customers',
      tags: [
        'React',
        'TypeScript',
        'Next.js',
        'XState',
        'RxJS',
        'React-Flow',
        'GraphQL',
        'Datadog',
        'Cypress',
        'i18n',
      ],
      imageUrl: pypestreamImg,
      link: '',
    },
    {
      title: 'Patient Engagement Software',
      description: `A Healthcare platform that enables a Total Care Experience for connected and compassionate care across the full patient journey`,
      tags: [
        'React',
        'Redux',
        'TypeScript',
        'Formik',
        'Jest',
        'Cypress',
        'Mirth Connect',
        'HL7 Standards',
        'AWS',
      ],
      imageUrl: spinsciImg,
      link: '',
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
      link: '',
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
      link: '',
    },
  ],
  'Node.js': [
    {
      title: 'CampWithUs',
      description:
        'A platform to find and book campsites, featuring a well-designed backend and seamless client-server communication.',
      tags: ['Node.js', 'Express.js', 'MongoDB', 'Cloudinary', 'EJS'],
      imageUrl: campwithusImg,
      link: '',
    },
  ],
  Python: [
    {
      title: 'AI chatbots & Microapps',
      description:
        'Deliver a seamless, app-like experience with the convenience of a self-service conversation that drives adoption and delights customers',
      tags: [
        'React',
        'TypeScript',
        'Next.js',
        'XState',
        'RxJS',
        'React-Flow',
        'GraphQL',
        'Datadog',
        'Cypress',
        'i18n',
      ],
      imageUrl: pypestreamImg,
      link: '',
    },
  ],
};

export const skillsData = {
  Languages: [
    ['HTML', '/svgs/file-type-html.svg'],
    ['CSS', '/svgs/file-type-css.svg'],
    ['Sass', '/svgs/Sass.svg'],
    ['JavaScript', '/svgs/javascript-js.svg'],
    ['TypeScript', '/svgs/typescript-icon.svg'],
  ],
  'Front-end': [
    ['React', '/svgs/react.svg'],
    ['React Native', '/svgs/react.svg'],
    ['Next.js', '/svgs/nextjs.svg'],
    ['Redux', '/svgs/redux-original.svg'],
    ['Tailwind', '/svgs/tailwind-css.svg'],
    ['Framer', '/svgs/framer.svg'],
    ['Headless', '/svgs/brand-headlessui.svg'],
    ['Axios', '/svgs/axios.svg'],
  ],
  'Back-end': [
    ['Node.js', '/svgs/node-js.svg'],
    ['Express', '/svgs/express-original.svg'],
    ['Python', '/images/python.png'],
    ['Django', '/images/python.png'],
    ['Flask', '/images/flask.png'],
    ['GraphQL', '/svgs/graphql.svg'],
    ['Firebase', '/images/firebase.png'],
    ['Docker', '/svgs/Docker.svg'],
    ['RabbitMQ', '/svgs/rabbitmq.svg'],
    ['Tornado', '/svgs/tornado.svg'],
    ['Pyramid', '/svgs/pyramid.svg'],
    ['Prisma', '/svgs/file-type-light-prisma.svg'],
  ],
  Database: [
    ['MongoDB', '/svgs/mongoDB.svg'],
    ['PostgreSQL', '/svgs/postgresql.svg'],
    ['MySQL', '/svgs/MySQL.svg'],
  ],
  TDD: [
    ['Jest', '/images/jest.png'],
    ['Mocha', '/images/mocha.png'],
    ['Chai', '/images/chai.png'],
    ['Cypress', '/svgs/cypress.svg'],
    ['Playwright', '/svgs/playwright.svg'],
    ['Karma', '/images/karma.png'],
  ],
  'Debugging & Monitoring': [
    ['Git', '/svgs/git.svg'],
    ['GitHub', '/svgs/github.svg'],
    ['Datadog', '/svgs/datadog.svg'],
    ['SonarQube', '/images/sonarqube.png'],
    ['Sentry', '/images/sentry.png'],
  ],
} as const;
