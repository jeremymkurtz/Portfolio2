"use client"
import { FlipWords } from "@/components/text/FlipWords";
import PageWrapper from "@/components/PageWrapper";
import ShinyButton from "@/components/ui/button/ShinyButton";
import LinkUnderline from "@/components/text/LinkUnderline";
import { SlArrowRightCircle } from "react-icons/sl";
import { useAuroraContext } from "@/contexts/AuroraContext";
import Sparkle from "@/components/home/sparkle";
import {useTheme} from "next-themes";

const RightArrow = <SlArrowRightCircle className="inline" />


export default function Home() {
  const roles = ["Front End", "Back End", "Designer"];

  const {toggleAurora} = useAuroraContext();
    const {setTheme, resolvedTheme} = useTheme();

    const handleAuroraClick = () => {
        toggleAurora();
        setTheme('dark');
    }
  return (
    <>
        <PageWrapper >
      
   <div className="text-left font-black font-Anybody uppercase flex flex-col gap-4 justify-center sm:items-center">
      <div className="justify-center items-center text-3xl sm:text-4xl md:text-5xl">
        <h1 className="text-balance flex hover:cursor-pointer" onClick={handleAuroraClick}> Hey my name is Jeremy <Sparkle>,</Sparkle></h1>
        <div className="mx-auto">
            I am a

          <FlipWords words={roles} className="pl-2 md:pl-3 w-fit"/>
        </div>
       
        <div className="flex flex-row gap-4 text-sm sm:text-md md:text-lg">
          <LinkUnderline href="/projects" cn="font-jakarta">{RightArrow} See my work</LinkUnderline>
          <LinkUnderline href="/about" cn="font-jakarta">{RightArrow} More about me</LinkUnderline>
       </div>
      </div>
       
       
      <ShinyButton onClick = {toggleAurora} className="w-fit font-jakarta"><h3>I dont do anything yet</h3></ShinyButton>
   </div>
   
   </PageWrapper>
    </>
  );
}
