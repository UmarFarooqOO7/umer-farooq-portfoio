import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Umar",
  lastName: "Farooq",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Full-Stack Engineer",
  avatar: "/images/avatar.jpg",
  location: "Asia/Karachi", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Urdu"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about software engineering, technology, and share thoughts on
      building scalable systems and AI-assisted development.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/UmarFarooqOO7",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/umar-farooq-dw",
  },
  {
    name: "X",
    icon: "x",
    link: "",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:umarfarooq12650@gmail.com",
  },
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Full-Stack Engineer & Team Lead</>,
  subline: (
    <>
      I'm Umar, a full-stack engineer with <InlineCode>8+ years</InlineCode> of experience
      specializing in PHP, Laravel, and modern JavaScript frameworks — building scalable
      systems that handle millions of records.
    </>
  ),
};

const about = {
  label: "About",
  title: "About me",
  description: `Meet ${person.name}, ${person.role} from Lahore, Pakistan`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Umar is a Lahore-based full-stack engineer with 8+ years of professional experience,
        specializing in PHP, Laravel, and modern JavaScript frameworks. He has a proven track
        record of maintaining 2M+ lines of code, handling 10M+ data rows with optimized
        database performance, leading teams of 10+ developers, and delivering measurable
        business impact using AI-assisted development tools.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Accrisoft Corporation",
        timeframe: "April 2025 – Present",
        role: "PHP Developer",
        achievements: [
          <>
            Maintain and extend features for a legacy enterprise software platform founded in
            1995, comprising 2+ million lines of code across 100+ modules.
          </>,
          <>
            Participated in consolidation effort for new growth product, reducing 100+ modules
            to 15 modules, cutting codebase by 65% and achieving 2X application performance.
          </>,
          <>
            Leveraged AI-assisted development tools (Cursor, Claude Code) to accelerate code
            splitting and modernization efforts.
          </>,
          <>
            Write unit and integration tests to ensure code reliability and reduce regression
            bugs; participate in CI/CD pipelines and release management processes.
          </>,
        ],
        images: [],
      },
      {
        company: "IT Pro Miami",
        timeframe: "February 2021 – January 2025",
        role: "Full Stack Engineer",
        achievements: [
          <>
            Built from scratch a high-usage internal management system serving 10M+ data rows.
          </>,
          <>
            Developed and delivered multiple web applications including events management
            system, car rental system, smart cards management system, submission portal, and
            personal finance management system.
          </>,
          <>
            Built full-stack solutions using PHP, Laravel, MySQL, VueJs, Livewire, Filament
            PHP, and ReactJs; integrated Google Cloud APIs for cloud-based features.
          </>,
          <>
            Led a team of 10 developers, managing tasks and sprints using JIRA; conducted
            code reviews and maintained collaborative workflows using GitHub.
          </>,
        ],
        images: [],
      },
      {
        company: "Dhump Waterfitz Solutions LLC",
        timeframe: "September 2018 – January 2021",
        role: "Full Stack Developer",
        achievements: [
          <>
            Built full-stack web applications using PHP, Laravel, ReactJs, TypeScript, and
            Tailwind CSS.
          </>,
          <>
            Designed and optimized databases using MongoDB, MySQL, and PostgreSQL; developed
            real-time web applications with live data synchronization.
          </>,
          <>
            Collaborated in an Agile team environment and maintained version control workflows
            using Git.
          </>,
        ],
        images: [],
      },
      {
        company: "Dhump Waterfitz Solutions LLC",
        timeframe: "June 2017 – August 2018",
        role: "Junior Web Developer",
        achievements: [
          <>
            Developed front-end components using HTML, CSS, and JavaScript.
          </>,
          <>
            Assisted in back-end development with PHP and database management; participated in
            agile development processes and sprint planning.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "GC University, Faisalabad",
        description: (
          <>
            Bachelor of Science in Electrical Engineering | 2014 – 2018 | CGPA: 3.52 / 4.0
          </>
        ),
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Backend",
        description: (
          <>PHP • Laravel • Ruby on Rails • REST APIs • CI/CD</>
        ),
        images: [],
      },
      {
        title: "Frontend",
        description: (
          <>ReactJs • NextJs • VueJs • Livewire • AlpineJs • HTMX • TypeScript • JavaScript • HTML • CSS • Tailwind CSS</>
        ),
        images: [],
      },
      {
        title: "Databases",
        description: (
          <>MySQL • PostgreSQL • MongoDB</>
        ),
        images: [],
      },
      {
        title: "Tools & Platforms",
        description: (
          <>Git • GitHub • JIRA • Google Cloud APIs • Filament PHP • Agile • AI-Assisted Development • Cursor • Claude Code • Prompt Engineering • Flutter</>
        ),
        images: [],
      },
    ],
  },
};

const blog = {
  label: "Blog",
  title: "Writing about engineering and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: "Work",
  title: "My projects",
  description: `Full-stack projects and engineering work by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/work/projects
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  label: "Gallery",
  title: "My photo gallery",
  description: `A photo collection by ${person.name}`,
  // Images from https://pexels.com
  images: [
    {
      src: "/images/gallery/img-01.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-02.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-03.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-04.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-05.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-06.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-07.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-08.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-09.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-10.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-11.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-12.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-13.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-14.jpg",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
