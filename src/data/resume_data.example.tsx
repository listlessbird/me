// import { Icon } from "@iconlib/icon"

export const RESUME_DATA = {
  name: "Yuki Nagato",
  initials: "YN",
  location: "North High School",
  locationLink: "https://www.example.com/north-high-school",
  about:
    "Data Entity assigned to observe Haruhi Suzumiya and ensure the stability of the world",
  summary: `I have been observing Haruhi Suzumiya and her activities for an extended period of time. My expertise lies in data analysis and manipulation, as well as maintaining the stability of the world. I am proficient in various programming languages and frameworks, including React and TypeScript. I have a deep understanding of complex systems and enjoy solving intricate problems. I am constantly updating my knowledge and staying up-to-date with the latest technologies and advancements in the field.`,

  avatarUrl: "https://example.com/yuki-avatar.jpg",
  personalWebsiteUrl: "https://example.com/yuki",
  contact: {
    email: "yuki.nagato@example.com",
    tel: "+1 987-654-3210",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/yukinagato",
        // icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/yukinagato",
        // icon: LinkedInIcon,
      },
    ],
  },
  education: [
    {
      school: "North High School",
      degree: "Data Analysis and Manipulation",
      start: "2006",
      end: "Present",
    },
  ],
  work: [],
  skills: [
    "Data Analysis",
    "Data Manipulation",
    "React",
    "TypeScript",
    "Python",
    "Java",
    "C++",
  ],
  projects: [
    {
      title: "Observation System",
      techStack: ["Data Analysis", "React", "TypeScript", "Python"],
      description:
        "A system designed to observe and analyze Haruhi Suzumiya's activities and maintain world stability.",
      // logo: ObservationSystemIcon,
    },
  ],
} as const
