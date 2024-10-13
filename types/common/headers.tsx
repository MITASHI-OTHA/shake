
export type listIconsType = {
    name: string,
    onpress: ()=> void
}

export type headerType  = {
    title?: string,
    action?: {
        onpress: ()=> void
    },
    icons: listIconsType[]
}