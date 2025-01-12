import FramerWrapper from "@/components/animation/FramerWrapper";
import Heading from "@/components/Heading";
import ProjectCards from "@/components/ProjectsCard";
import { Badge } from "@/components/ui/badge";
import { Layers } from "lucide-react";

const projectsPage = () => {
  
  const Projects = [
    {
      title: "CodeConnect - A Collaborative Coding Platform",
      description:
        "CodeConnect is a platform for developers to collaborate, share ideas, and work on projects together in real-time.",
      tags: ["Reactjs", "Nodejs", "MongoDB", "TailwindcSS"],
      link: "https://codeconnect.example.com",
    },
    {
      title: "LinkBridge - Manage Your Online Presence",
      description:
        "LinkBridge allows users to create a personalized landing page to showcase all their important links in one place.",
      tags: ["Nextjs", "TypeScript", "TailwindcSS"],
      link: "https://linkbridge.example.com",
    },
    {
      title: "GitStatz - Visualize Your GitHub Statistics",
      description:
        "GitStatz helps you analyze and visualize your GitHub statistics, including contributions, repositories, and followers.",
      tags: ["Vuejs", "D3js", "GitHub API"],
      link: "https://gitstatz.example.com",
    },
    {
      title: "CompLib - A Component Library for React",
      description:
        "CompLib offers a collection of reusable React components to speed up development and maintain consistent UI designs.",
      tags: ["Reactjs", "Styled Components", "Storybook", "Shadcn Ui"],
      link: "https://complib.example.com",
    },
    {
      title: "PriceTrackr - Price History and Deal Finder",
      description:
        "PriceTrackr is a tool to check price history charts and find the best deals on popular e-commerce platforms.",
      tags: ["Angular", "Firebase", "Material UI"],
      link: "https://pricetrackr.example.com",
    },
    {
      title: "Formify - Effortless Form Builder",
      description:
        "Formify lets you create forms with real-time validation using React Hook Form and custom styling options.",
      tags: ["Reactjs", "Zod", "React Hook Form"],
      link: "https://formify.example.com",
    },
    {
      title: "CryptoLearn - Master Cryptocurrency Trading",
      description:
        "CryptoLearn is a comprehensive platform for learning cryptocurrency trading with tutorials, tools, and resources.",
      tags: ["Reactjs", "Redux", "Firebase", "Shadcn Ui"],
      link: "https://cryptolearn.example.com",
    },
    {
      title: "SocialSphere - A Modern Social Media App",
      description:
        "SocialSphere is a modern social media platform with features like posting, commenting, and user interactions.",
      tags: ["Reactjs", "Nodejs", "GraphQL", "Shadcn Ui"],
      link: "https://socialsphere.example.com",
    },
    {
      title: "InstaClone - A Photo Sharing App",
      description:
        "InstaClone is a feature-rich photo-sharing app that lets users upload, edit, and share photos with their friends.",
      tags: ["React Native", "JavaScript", "Firebase"],
      link: "https://instaclone.example.com",
    },
    {
      title: "TechDigest - Developer Newsletter Platform",
      description:
        "TechDigest allows users to subscribe to newsletters tailored to their technology preferences.",
      tags: ["Nextjs", "TailwindcSS", "Shadcn Ui"],
      link: "https://techdigest.example.com",
    },
    {
      title: "CarouselCraft - Build Custom Carousels",
      description:
        "CarouselCraft is an app with pre-built carousel templates that users can customize and export in various formats.",
      tags: ["Vuejs", "html2canvas", "jsPDF"],
      link: "https://carouselcraft.example.com",
    },
  ];
  

  

  return (
    // PROJECT PAGE
    <div className="h-full w-full relative flex flex-col items-start gap-5 overflow-hidden">
      <Badge className=" gap-2">
        <Layers className="h-5 w-5" />
        Projects
      </Badge>
      <div className="flex flex-col gap-3">
        <Heading>My Projects</Heading>
        <FramerWrapper y={0} x={200}>
          <p className=" font-poppins text-lg w-full text-primary max-sm:text-base">
            I love to Build Cool Projects. Here, you&#x27;ll find a curated
            collection of my creative endeavors and technical projects. Each
            piece represents a journey of innovation, problem-solving, and
            continuous learning. Feel free to explore this showcase of my
            passion and expertise in action.
          </p>
        </FramerWrapper>
      </div>

      <div className=" w-full flex flex-row flex-wrap gap-3 max-lg:flex-col">
        {Projects.map((val, indx) => {
          return <ProjectCards key={indx} value={val} num={indx} />;
        })}
      </div>
    </div>
  );
};

export default projectsPage;
