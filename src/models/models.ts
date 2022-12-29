import {ReactNode} from "react";

export interface IBenefit {
    title: (() => ReactNode) | string,
    icon: string,
    id: string,
}

export interface IHeadline {
    title: string
    description?: string
    line?: boolean
    lineOrange?: boolean
}
