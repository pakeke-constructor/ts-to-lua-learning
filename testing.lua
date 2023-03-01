local ____lualib = require("lualib_bundle")
local __TS__Class = ____lualib.__TS__Class
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
