
export {};


type Source = import("love.audio").Source;
type Quad = import("love.graphics").Quad;
type Image = import("love.graphics").Image;



// Math overrides provided by UMG:
/** @NoSelf **/
declare module "math" {
    function normalize(x: number, y: number, z: number|undefined): LuaMultiReturn<[number, number, number|undefined]>
    function distance(x: number, y: number, z: number|undefined): number;
    function clamp(x: number, lower: number, upper: number): number;
    function round(x: number): number;
}


declare global {
    /** @noSelf **/
    namespace _clientAPI {        
        export function on(event: string, callback: (...args: unknown[]) => void): void;
        export function send(event: string, ...args: any[]): void;
        export function getUsername(): string;

        export const atlas: Atlas;

        export namespace assets {
            export const images: LuaMap<string, Quad>;
            export const sounds: LuaMap<string, Source>;
        }
    }

    /** @noSelf **/
    namespace _umgAPI {
        export function on(event: string, callback: (...args: unknown[]) => void): void;
        export function call(event: string, ...args: unknown[]): void;

        export function extend(parentEntityName: string, definition: LuaTable<String, unknown>): any;

        export function group<T>(...args: string[]): Group<T>;

        export function exists(ent: unknown): ent is Entity;

        export function save(fname: string, data: string): void;
        export function load(fname: string): string;

        export function expose(name: string, value: unknown): void;
        
        export function serialize(data: unknown): string;
        export function deserialize(data: string): LuaMultiReturn<[unknown|null, string?]>;

        export function register(resource: unknown, alias: string): void;
    }

    /** @noSelf **/
    namespace _serverAPI {
        export function on(event: string, callback: (...args: any[]) => void): void;
        export function broadcast(event: string, ...args: any[]): void;
        export function unicast(username: string, event: string, ...args: any[]): void;
        export function lazyBroadcast(event: string, ...args: any[]): void;
        export function lazyUnicast(username: string, event: string, ...args: any[]): void;

        export const entities: LuaMap<string, (...args: any[]) => Entity>;
    }

    /* */
    const client: (typeof _clientAPI) | undefined;
    const server: (typeof _serverAPI) | undefined;
    const umg: (typeof _umgAPI);
    // */

    interface Atlas {
        draw(quad: Quad, x: number, y: number, r: number|undefined, sx:number|undefined, sy:number|undefined, ox:number|undefined, oy:number|undefined, kx:number|undefined, ky:number|undefined): void;
        flush(): void;
        useBatch(use: boolean): void;
        add(image: Image): void;
    }

    interface Entity {
        readonly id: number;
        isRegular(componentName: string): boolean;
        isShared(componentName: string): boolean;
        hasComponent<T>(componentName: string): this is T;
        type(): string;
    }
    
    interface Group<T> {
        (this: Group<T>): LuaIterable<Entity & T>;
        // iteration, i.e. for [k,v] in group() {  }
        size(): number;
        has(ent: Entity): boolean;
        onAdded(callback: (entity: Entity & T) => void): void;
        onRemoved(callback: (entity: Entity & T) => void): void;
        deleteCallback(callback: (entity: Entity & T) => void): void;
    }
}


