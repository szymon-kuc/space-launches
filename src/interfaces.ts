export interface I_Launch {
    id: number,
    name: string,
    windowstart: string,
    net: string,
    wsstamp: number,
    westamp: number,
    netstamp: number,
    isostart: string,
    isoend: string,
    isonet: string,
    status: number,
    inhold: number,
    tbdtime: number,
    vidURLs: Array<string>,
    vidURL: string | any,
    infoURLs: Array<string | undefined >,
    infoURL: string | any,
    holdreason: any,
    failreason: any,
    tbdate: number,
    probability: number,
    location: Array<any>,
    rocket: Array<any>,
    missions: Array<any>,
    lsp: Array<any>
}

export interface I_Launches {
    launches: Array<I_Launch>
}
