import React from "react";
import Carousel from "./Carousel";
import SkillsPage from "./SkillsPage";
import Projects from "./ProjectContent";
import EducationPage from "./EducationPage/EducationPage";
import HomeSection from "./HomeSection";

function HomePage() {
    return (
        <>
            <HomeSection />
            <section className="mt-16">

                <Carousel />
            </section>
            <section id="projects" className="mt-16 md:mt-32 pb-10 min-h-screen">
                <Projects />
            </section>
            <section id="skills" className=" mt-16 md:mt-32 pb-10 min-h-screen ">
                <SkillsPage />
            </section >
            <section id="education" className=" mt-16 md:mt-32 min-h-screen">
                <EducationPage />
            </section >
        </>
    );
}

export default HomePage;
