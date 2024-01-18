import {IProject} from "@/data";

import {ProjectLarge} from "./ProjectLarge";
import {ProjectMobile} from "./ProjectMobile";

export type ProjectProps = {
    project: IProject
    index: number
}

export const ProjectView = (props: ProjectProps) => {
    return (
        <>
            <ProjectLarge {...props} />
            <ProjectMobile {...props} />
        </>
    )
}
