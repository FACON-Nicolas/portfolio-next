import {IHobby, IProject, IJob, SkillType} from "@/data";

export type CardDataType = "project" | "hobby" | "skill" | "job";

export const getCardDataType = (item: IProject | IHobby | SkillType | IJob): CardDataType => {
    if (typeof item === "string") return "skill";
    else if ("year" in item) return "project";
    else if ("company" in item) return "job";
    return "hobby";
}