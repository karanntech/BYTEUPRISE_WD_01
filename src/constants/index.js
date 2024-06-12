import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I'm a backend developer proficient in Node.js, Express.js, and MongoDB, with a keen interest in backend architecture and optimization. While my frontend skills are evolving, I'm committed to bridging the gap between frontend and backend technologies. Currently, I'm immersing myself in DevOps practices, aiming to enhance software delivery efficiency. With a problem-solving mindset, I excel in crafting scalable and efficient backend systems`;

export const ABOUT_TEXT = `I'm an aspiring backend developer eager to embark on my journey in crafting efficient and scalable web solutions. While I'm new to the field, I'm passionate about learning and diving into backend technologies like Node.js and databases such as MongoDB. My fascination with technology and problem-solving led me to pursue a career in backend development, where I'm excited to explore and grow. I thrive in collaborative environments, ready to tackle challenges head-on and deliver innovative solutions. Outside of coding, I enjoy staying updated on the latest industry trends, experimenting with new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2023-Present",
    role: "Web Developer Intern",
    company: "Byte Uprise",
    description: `During my internship , I have learned ReactJs and created the tasks that are given in which I have created a Portfolio and a Landing Page using ReactJS.`,
    technologies: ["Javascript", "React.js", "Tailwind Css"],
  }];

export const PROJECTS = [
  {
    title: "Expense-Tracker Website",
    image: project1,
    description:
      "A functional Expense-Tracker website with features like tracking the incomes and expenses for an individual.",
    technologies: ["React", "Node.js", "Express.js" ,"MongoDB"],
  },
  {
    title: "Voting API",
    image: project2,
    description:
      "An API that is used for voting, where an user can register using the credentials and give vote to a particular party created by an admin.",
    technologies: ["Node.js", "Express.js", "MongoDB", "Postman"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
  {
    title: "MetaWorlds",
    image: project4,
    description:
      "A Landing page for a Virtual reality company metaworlds ahowing its workflow and testimonials and plan pricing.",
    technologies: ["HTML", "CSS", "React.js"],
  },
];

export const CONTACT = {
  phoneNo: "+91 96085-16015 ",
  email: "karannzk09@gmail.com",
};
