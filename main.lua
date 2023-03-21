local ____lualib = require("lualib_bundle")
local __TS__SourceMapTraceBack = ____lualib.__TS__SourceMapTraceBack
__TS__SourceMapTraceBack(debug.getinfo(1).short_src, {["5"] = 2,["6"] = 6,["7"] = 15,["8"] = 17,["9"] = 20,["10"] = 23,["11"] = 23,["12"] = 23,["14"] = 27,["15"] = 31,["16"] = 32,["17"] = 31,["18"] = 36,["19"] = 37,["20"] = 38,["21"] = 36,["22"] = 45,["23"] = 50,["24"] = 56,["25"] = 57,["26"] = 58,["27"] = 59,["28"] = 60,["29"] = 61,["30"] = 56});
local ____exports = {}
require("components")
local u = {x = 10, y = 10, color = {1, 2, 3}}
local __TS__SourceMapTraceBack
local ____ = __TS__SourceMapTraceBack.get
local v = {}
local ____client_send_result_0 = client
if ____client_send_result_0 ~= nil then
    ____client_send_result_0 = ____client_send_result_0.send("abc", 1, 2, 3)
end
local y = 10
love.draw = function()
    love.graphics.circle("fill", 100, y, 50)
end
love.update = function(dt)
    local t = love.timer.getTime() * 2
    y = 100 + 50 * math.cos(t)
end
umg.call("a", "b")
local x
local function init(self, ent, x, y)
    local e = ent
    e.x = x
    e.y = y
    e.z = 0
    e.color = {0, 0, 0}
end
return ____exports
