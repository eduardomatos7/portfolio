export interface buttonInputs {
    children: React.ReactNode,
    certificate?: boolean,
    certificateLink?: string
}

export interface educationInfo {
    educationInfo: {
        logo: string
        alt: string
        titleAcademic: string
        educationalInstitution: string
        startDate: string
        endDate: string
        location: string
        resume: string,
        pageLink: string
        certificateLink?: string
    },
    certificate?: boolean 
}