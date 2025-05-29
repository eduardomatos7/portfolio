export interface propsProject {
    technologies: {
        id: string;
        tech: string;
        alt: string;
        width: number;
    }[],
    title: string,
    description: string,
    srcImage: string,
    github: string,
    deploy: string,
    platforms: string
}
