

declare interface x {
    x: number
}
declare interface y {
    y: number
}
declare interface z {
    z?: number
}


declare type pos = x & y & z;


declare interface vx {
    vx: number
}
declare interface vy {
    vy: number
}
declare interface vz {
    vz?: number
}

declare type vel = vx & vy & vz;



declare interface color {
    color: [number, number, number];
}


