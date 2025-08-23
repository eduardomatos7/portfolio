import React from "react";
import Carousel from "./Carousel";
import SkillsPage from "./SkillsPage";
import Projects from "./ProjectContent";
import EducationPage from "./EducationPage/EducationPage";
import HomeSection from "./HomeSection";
import ResumePage from "./resume/page";
import CarouselSwiper from "./CarouselSwiper";

function HomePage() {
    return (
        <>
            <HomeSection />
            <section className="mt-16 md:mt-10">
                <CarouselSwiper/>
            </section>
            <section id="projects" className="mt-16 md:mt-32 pb-10 xl:min-h-screen scroll-mt-16">
                <Projects />
            </section>
            <section id="skills" className=" mt-16 md:mt-32 pb-10 xl:min-h-screen scroll-mt-16">
                <SkillsPage />
            </section >
            <section id="resume" >
                <ResumePage />
            </section>
            <section id="education" className=" mt-16 md:mt-32 min-h-screen scroll-mt-6">
                <EducationPage />
            </section >
        </>
    );
}

export default HomePage;
