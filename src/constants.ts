// @unocss-include
import type { LabelItem, Stack } from '~/types'

const PROJECTS_CONST = ['personal-website', 'stage-two', 'sim-web'] as const

const HEADER: LabelItem[][][] = [
  [
    [
      {
        label: 'Sajid Ikhlas',
        type: 'label',
      },
      {
        label: 'Web Developer',
        type: 'label',
      },
    ],
    [
      {
        label: 'Yogyakarta, Indonesia',
        type: 'label',
      },
      {
        label: 'hello@sikhlas.com',
        type: 'link',
        href: 'mailto:hello@sikhlas.com',
      },
    ],
    [
      {
        label: 'About',
        type: 'link',
        href: '/about',
      },
      {
        label: 'Resume',
        type: 'link',
        href: '/resume',
      },
    ],
  ],
  [
    [
      {
        label: 'Instagram',
        type: 'link',
        href: 'https://www.instagram.com/say1ddd/',
      },
    ],
    [
      {
        label: 'LinkedIn',
        type: 'link',
        href: 'https://www.linkedin.com/in/sajid-ikhlas/',
      },
      {
        label: 'Github',
        type: 'link',
        href: 'https://www.github.com/say1ddd/',
      },
    ],
  ],
]

const WORKS: LabelItem[] = [
  {
    label: 'Personal Website',
    type: 'link',
    href: 'personal-website',
  },
  {
    label: 'Stage Two',
    type: 'link',
    href: 'stage-two',
  },
  {
    label: 'SIM Web',
    type: 'link',
    href: 'sim-web',
  },
]

const STACKS: Stack = {
  programmingLanguage: [
    {
      label: 'JavaScript',
      icon: 'i-simple-icons-javascript',
    },
    {
      label: 'TypeScript',
      icon: 'i-simple-icons-typescript',
    },
    {
      label: 'Python',
      icon: 'i-simple-icons-python',
    },
    {
      label: 'PHP',
      icon: 'i-simple-icons-php',
    },
    {
      label: 'Bash',
      icon: 'i-simple-icons-gnubash',
    },
  ],
  frameworkLibrary: [
    {
      label: 'Vue',
      icon: 'i-simple-icons-vuedotjs',
    },
    {
      label: 'Nuxt',
      icon: 'i-simple-icons-nuxtdotjs',
    },
    {
      label: 'React JS',
      icon: 'i-simple-icons-react',
    },
    {
      label: 'Next',
      icon: 'i-simple-icons-nextdotjs',
    },
    {
      label: 'Laravel',
      icon: 'i-simple-icons-laravel',
    },
    {
      label: 'Express',
      icon: 'i-simple-icons-express',
    },
    {
      label: 'Tailwind CSS',
      icon: 'i-simple-icons-tailwindcss',
    },
    {
      label: 'Pinia',
      icon: 'i-simple-icons-pinia',
    },
    {
      label: 'Chart JS',
      icon: 'i-simple-icons-chartdotjs',
    },
    {
      label: 'Prisma',
      icon: 'i-simple-icons-prisma',
    },
    {
      label: 'Konva',
      icon: 'i-simple-icons-konva',
    },
  ],
  toolSoftware: [
    {
      label: 'Git',
      icon: 'i-simple-icons-git',
    },
    {
      label: 'Docker',
      icon: 'i-simple-icons-docker',
    },
    {
      label: 'Postman',
      icon: 'i-simple-icons-postman',
    },
    {
      label: 'Figma',
      icon: 'i-simple-icons-figma',
    },
    {
      label: 'Photoshop',
      icon: 'i-simple-icons-adobe',
    },
  ],
  database: [
    {
      label: 'MySQL',
      icon: 'i-simple-icons-mysql',
    },
    {
      label: 'PostgreSQL',
      icon: 'i-simple-icons-postgresql',
    },
    {
      label: 'SQLite',
      icon: 'i-simple-icons-sqlite',
    },
    {
      label: 'MongoDB',
      icon: 'i-simple-icons-mongodb',
    },
  ],
}

export {
  HEADER,
  PROJECTS_CONST,
  STACKS,
  WORKS,
}
