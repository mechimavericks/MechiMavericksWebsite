import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Mechi",
  lastName: "Mavericks",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Tech Community",
  avatar: "/logo.svg",
  location: "Bhadrapur, Jhapa",
  languages: ["English", "Nepali"],
};

const newsletter = {
  display: true,
  title: <>Join Mechi Mavericks Community</>,
  description: (
    <>
      Stay updated with our latest events, hackathons, and tech community
      activities!
    </>
  ),
};

const social = [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/mechimavericks",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/company/mechimavericks",
  },
  {
    name: "X",
    icon: "x",
    link: "https://twitter.com/mechimavericks",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:mechimavericks@gmail.com",
  },
];

const home = {
  label: "Home",
  title: `${person.name} - Tech Community`,
  description: `Empowering the tech community at Mechi Multiple Campus through events, hackathons, and knowledge sharing`,
  headline: <>Mechi Mavericks</>,
  subline: (
    <>
      Empowering the next generation of tech leaders at Mechi Multiple Campus
      <br />
      Through events, hackathons, and community building
    </>
  ),
};

const about = {
  label: "About",
  title: "About Mechi Mavericks",
  description: `Learn about our mission to enhance the tech community at Mechi Multiple Campus`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com/mechimavericks",
  },
  intro: {
    display: true,
    title: "Our Mission",
    description: (
      <>
        Mechi Mavericks is a dynamic tech community at Mechi Multiple Campus
        dedicated to fostering innovation, knowledge sharing, and professional
        growth. We organize events, participate in hackathons, and create
        opportunities for students to enhance their technical skills and network
        with industry professionals.
      </>
    ),
  },
  work: {
    display: true,
    title: "Our Activities",
    experiences: [
      {
        company: "Tech Events",
        timeframe: "2023 - Present",
        role: "Community Events",
        achievements: [
          <>
            Organizing regular tech workshops, seminars, and networking events
            for students.
          </>,
          <>Hosting industry expert talks and hands-on coding sessions.</>,
        ],
        images: [],
      },
      {
        company: "Hackathons",
        timeframe: "2023 - Present",
        role: "Competition Participation",
        achievements: [
          <>Participating in national and international hackathons.</>,
          <>Organizing campus-level hackathons to promote innovation.</>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true,
    title: "Community Impact",
    institutions: [
      {
        name: "Knowledge Sharing",
        description: (
          <>Regular tech workshops and knowledge sharing sessions.</>
        ),
      },
      {
        name: "Skill Development",
        description: (
          <>
            Hands-on training in various technologies and programming languages.
          </>
        ),
      },
    ],
  },
  technical: {
    display: true,
    title: "Our Focus Areas",
    skills: [
      {
        title: "Web Development",
        description: <>Training in modern web technologies and frameworks.</>,
        images: [],
      },
      {
        title: "Mobile Development",
        description: <>Mobile app development workshops and projects.</>,
        images: [],
      },
      {
        title: "AI & Machine Learning",
        description: <>Introduction to AI and ML concepts and applications.</>,
        images: [],
      },
    ],
  },
};

const blog = {
  label: "Events",
  title: "Upcoming and Past Events",
  description: `Stay updated with Mechi Mavericks' latest events and activities`,
};

const work = {
  label: "Projects",
  title: "Our Projects",
  description: `Explore the innovative projects and hackathon solutions by Mechi Mavericks`,
};

const gallery = {
  label: "Gallery",
  title: "Event Gallery",
  description: `Photos from our events, workshops, and hackathons`,
  images: [],
};

export { person, social, newsletter, home, about, blog, work, gallery };
