import React from "react";

export type Justify = "start" | "center" | "end" | "around" | "between" | "evenly"
export type Items = Extract<Justify, "start" | "center" | "end">
export type TailwindValues =
    | "0"   | "px"      | "0.5"
    | "1"   | "1.5"     | "2"
    | "2.5" | "3"       | "3.5"
    | "4"   | "5"       | "6"
    | "7"   | "8"       | "9"
    | "10"  | "11"      | "12"
    | "14"  | "16"      | "20"
    | "24"  | "28"      | "32"
    | "36"  | "40"      | "44"
    | "48"  | "52"      | "56"
    | "60"  | "64"      | "72"
    | "80"  | "96";

export type SizeValues =
    | "auto"    | "1/2"     | "1/3"
    | "2/3"     | "1/4"     | "2/4"
    | "3/4"     | "1/5"     | "2/5"
    | "3/5"     | "4/5"     | "1/6"
    | "2/6"     | "3/6"     | "4/6"
    | "5/6"     | "full"    | "screen"
    | "min"     | "max"     | "fit"

export type Spacing = TailwindValues
export type Size = TailwindValues | SizeValues
export type Height = Size
export type Width = Size

export type StackProps = {
    children: React.ReactNode
    justify?: Justify
    items?: Items
    spacing?: Spacing
    width?: Width
    height?: Height
    className?: string
}

export {default as VStack} from './VStack'
export {default as HStack} from './HStack'
