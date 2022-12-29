import {ReactNode} from "react";

export interface IBenefit {
    title: (() => ReactNode) | string,
    icon: string,
    id: string,
}
