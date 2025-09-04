import type { ReactNode } from "react";

export type Routes = {
    key : string,
    path : string,
    element : ReactNode
}

export type RoutesT = Routes[];