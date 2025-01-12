import FramerWrapper from "@/components/animation/FramerWrapper";
import Heading from "@/components/Heading";
import { Badge } from "@/components/ui/badge";
import { Briefcase } from "lucide-react";


const educationPage = () => {
  return (
    // ABOUT PAGE
    <div className="h-full w-full relative flex flex-col items-start gap-5 overflow-hidden">
      <Badge className="gap-2">
        <Briefcase className="h-5 w-5" />
        Education
      </Badge>
      <div className="flex flex-col gap-3">
        <Heading>My Education</Heading>
      </div>
      <div className="w-full h-fit flex flex-col">
        {/* First Education */}
        <div className="w-full h-fit flex">
          <FramerWrapper
            y={0}
            x={-100}
            delay={0.35}
            className="w-1/4 font-rubik flex items-center justify-evenly text-lg max-sm:text-base"
          >
            July 2023 - 2026
          </FramerWrapper>
          <FramerWrapper
            y={0}
            x={100}
            delay={0.35}
            className="relative w-3/4 border-l-4 border-l-[#3c3c3c] p-4 gap-3 education_point"
          >
            <div className="text-2xl font-rubik max-sm:text-xl">
              Bachelor of Computer Application, <br /> Cameroon University
              Yaoundé
            </div>
            <p className="font-poppins text-base w-full text-primary max-sm:text-xs">
              I am currently studying Bachelor of Computer Application from
              Vishoka College Cameroon, a government college of Cameroon. The
              program has provided me with a well-rounded education, covering
              both theoretical foundations and practical applications of
              computer science.
            </p>
          </FramerWrapper>
        </div>

        {/* Second Education */}
        <div className="w-full h-fit flex">
          <FramerWrapper
            y={0}
            x={-100}
            delay={0.5}
            className="w-1/4 font-rubik flex items-center justify-evenly text-lg max-sm:text-base"
          >
            March 2020 - June 2023
          </FramerWrapper>
          <FramerWrapper
            y={0}
            x={100}
            delay={0.5}
            className="relative w-3/4 border-l-4 border-l-[#3c3c3c] p-4 gap-3 education_point"
          >
            <div className="text-2xl font-rubik max-sm:text-xl">
              High School Diploma, <br /> ABC High School, Douala
            </div>
            <p className="font-poppins text-base w-full text-primary max-sm:text-xs">
              Completed my high school education with a focus on science and
              mathematics. Actively participated in extracurricular activities
              and programming clubs.
            </p>
          </FramerWrapper>
        </div>

        {/* Third Education */}
        <div className="w-full h-fit flex">
          <FramerWrapper
            y={0}
            x={-100}
            delay={0.65}
            className="w-1/4 font-rubik flex items-center justify-evenly text-lg max-sm:text-base"
          >
            August 2017 - February 2020
          </FramerWrapper>
          <FramerWrapper
            y={0}
            x={100}
            delay={0.65}
            className="relative w-3/4 border-l-4 border-l-[#3c3c3c] p-4 gap-3 education_point"
          >
            <div className="text-2xl font-rubik max-sm:text-xl">
              Secondary School Certificate, <br /> XYZ Secondary School, Buea
            </div>
            <p className="font-poppins text-base w-full text-primary max-sm:text-xs">
              Successfully completed my secondary school education, excelling
              in computer science and participating in various coding
              competitions.
            </p>
          </FramerWrapper>
        </div>
      </div>
    </div>
  );
};

export default educationPage;
