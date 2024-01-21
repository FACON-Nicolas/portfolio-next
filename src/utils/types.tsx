import {IHobby, IProject} from "@/data";

export type CardDataType = "project" | "hobby"

export const getCardDataType = (item: IProject | IHobby): CardDataType => {
    return "year" in item ? "project" : "hobby"
}