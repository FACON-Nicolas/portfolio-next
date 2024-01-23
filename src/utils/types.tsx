import {IHobby, IProject, SkillType} from "@/data";
import {ISkill} from "@/data/skills";

export type CardDataType = "project" | "hobby" | "skill";

export const getCardDataType = (item: IProject | IHobby | SkillType): CardDataType => {
    if (typeof item === "string") return "skill";
    if ("year" in item) return "project";
    return "hobby";
}