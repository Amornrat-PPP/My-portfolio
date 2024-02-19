// Skills icons - https://icon-sets.iconify.design/
import { Icon } from "@iconify/react";

// Projects Images (add your images to the images directory and import below)
import Logo from "./images/sport-app-logo.jpg";

// Hero Images (add your images to the /images directory with the same names)
import HeroLight from "./images/hero-light.jpg";
import HeroDark from "./images/hero-dark.jpg";
// If you change the import names above then you need to change the export names below
export { HeroLight as Light };
export { HeroDark as Dark };

/* START HERE
 **************************************************************
  GitHub username.
*/
export const githubUsername = "Amornrat-PPP";

// Navbar Logo image
export const navLogo = undefined;

// Blog link icon - https://icon-sets.iconify.design/
export const Blog = <Icon icon="fa:linkedin-square" />;

/* About Me
 **************************************************************
  Add a second paragraph for the about me section.
*/
export const moreInfo =
  "I love delving into the fascinating world of technology and utilizing its capabilities to enrich the lives of others, fostering productivity and efficiency. " + 
  "Whether it is mastering new concepts or assisting individuals in harnessing technology's potential, I find fulfillment in every opportunity to contribute positively to the community. " +
  "As an aspiring software developer, I am driven by a deep-seated dedication and ambition to carve out a rewarding career path in this dynamic field. " +
  "My innate ability to grasp new concepts rapidly, coupled with a growth mindset and a fervent passion for solving complex problems, positions me as a valuable asset to any team. " +
  "With my unwavering can-do attitude and commitment to continuous learning and improvement, I am eager to bring my unique blend of skills and enthusiasm to your esteemed organization. " +
  "I am confident that I can make meaningful contributions while embracing new challenges and evolving as a professional.";

/* Skills
 ************************************************************** 
  Add or remove skills in the SAME format below, choose icons here - https://icon-sets.iconify.design/
*/
export const skillData = [
  {
    id: 1,
    skill: <Icon icon="mdi:language-html5" className="display-4" />,
    name: "HTML5",
  },
  {
    id: 2,
    skill: <Icon icon="ion:logo-css3" className="display-4" />,
    name: "CSS3",
  },
  {
    id: 3,
    skill: <Icon icon="fa6-brands:js" className="display-4" />,
    name: "JavaScript",
  },
  {
    id: 4,
    skill: <Icon icon="mdi:react" className="display-4" />,
    name: "React",
  },
  {
    id: 5,
    skill: <Icon icon="devicon-plain:nodejs-wordmark" className="display-4" />,
    name: "Nodejs",
  },
  {
    id: 6,
    skill: <Icon icon="simple-icons:mongodb" className="display-4" />,
    name: "MongoDB",
  },
  {
    id: 7,
    skill: <Icon icon="devicon-plain:sqlite" className="display-4" />,
    name: "Sqlite",
  },
  {
    id: 8,
    skill: <Icon icon="bi:git" className="display-4" />,
    name: "Git",
  },
  {
    id: 9,
    skill: <Icon icon="fa6-brands:square-github" className="display-4" />,
    name: "GitHub",
  },
];

// Resume link (string - "https://YourResumeUrl") - I am using CloudFront to share my resume (https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Introduction.html)
export const resume = "https://drive.google.com/file/d/1y2aBgYJh_0JQZVBdFbLn1K4NFhm4fHnx/view?usp=sharing";

/* Projects
 ************************************************************** 
  List the repo names (string - "your-repo-name") you want to include (they will be sorted alphabetically). If empty, only the first 3 will be included.
*/
export const filteredProjects = ["sport-app"];

// Replace the defualt GitHub image for matching repos below (images imported above - lines 7-8)
export const projectCardImages = [
  {
    name: "sport-app-logo",
    image: Logo,
  },
];

/* Contact Info
 ************************************************************** 
  Add formspree endpoint.
*/
export const formspreeUrl = "https://formspree.io/f/mgegkrzn";
