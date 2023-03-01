
import "components";
//import * as umg from "umg"


let u = {
    x: 10,
    y: 10,
    color: [1,2,3]
} as x&y&color;


let v = {} as LuaMap<number, number>;


client?.send("abc", 1,2,3)


// hello 123
let y: number = 10;



love.draw = function() {
    love.graphics.circle("fill", 100, y, 50)
}


love.update = function(dt: number) {
    let t = love.timer.getTime() * 2;
    y = 100 + 50 * math.cos(t)
}





umg.call("a","b");




let x: Entity;





function init(ent: Entity, x: number, y: number) {
    let e = ent as Entity & x & y & z & color;
    e.x = x;
    e.y = y;
    e.z = 0;
    e.color = [0,0,0];
}


