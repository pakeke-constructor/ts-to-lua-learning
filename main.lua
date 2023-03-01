--[[ Generated with https://github.com/TypeScriptToLua/TypeScriptToLua ]]
local ____exports = {}
require("components")
local u = {x = 10, y = 10, color = {1, 2, 3}}
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
