local ____lualib = require("lualib_bundle")
local __TS__Class = ____lualib.__TS__Class
local __TS__SourceMapTraceBack = ____lualib.__TS__SourceMapTraceBack
__TS__SourceMapTraceBack(debug.getinfo(1).short_src, {["5"] = 4,["6"] = 7,["7"] = 8,["9"] = 12,["10"] = 12,["12"] = 14,["13"] = 18,["14"] = 18,["16"] = 23,["17"] = 22});
local t = nil
if love.math.random() < 0.5 then
    t = 10
end
if not t then
    error("?")
end
t = t + 1
local Test = __TS__Class()
Test.name = "Test"
function Test.prototype.____constructor(self)
    self.x = 1
end
