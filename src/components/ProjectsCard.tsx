import { cn } from "@/lib/utils";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import FramerWrapper from "./animation/FramerWrapper";
import { ArrowUpRight } from "lucide-react";


interface ProjectCardProps {
  value: any;
  num: number;
}

const ProjectCards: React.FC<ProjectCardProps> = ({ value, num }) => {
  return (
    <FramerWrapper
      className="max-w-[32%] min-h-[345px] max-lg:max-w-full"
      y={0}
      scale={0.8}
      delay={num / 4}
      duration={0.15}
    >
      <Card className="w-full h-full transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:shadow-gray-400">
        <CardHeader>
          <CardTitle>{value.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-base font-poppins">{value.description}</p>
          <div className="w-full h-fit flex mt-2 flex-wrap gap-3 justify-center">
            {value.tags.map((itm: string, indx: number) => (
              <span
                key={indx}
                className={`inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium ${
                  itm === "Nextjs"
                    ? "bg-teal-100 text-teal-800"
                    : itm === "Nodejs"
                    ? "bg-yellow-100 text-yellow-800"
                    : itm === "Shadcn Ui"
                    ? "bg-blue-100 text-blue-800"
                    : itm === "Typescript"
                    ? "bg-red-100 text-red-800"
                     : itm === "Reactjs"
                    ? "bg-green-100 text-blue-800"
                    : "bg-gray-100 text-gray-800"
                }`}
              >
                {itm}
              </span>
            ))}
          </div>
        </CardContent>
        <CardFooter className="items-center justify-center flex">
          <Link
            href={value.link}
            target="_blank"
            className={cn(
              buttonVariants({ variant: "default", size: "lg" }),
              "flex"
            )}
          >
            Visit Project <ArrowUpRight className="h-5 w-5 ml-1" />
          </Link>
        </CardFooter>
      </Card>
    </FramerWrapper>
  );
};

export default ProjectCards;
