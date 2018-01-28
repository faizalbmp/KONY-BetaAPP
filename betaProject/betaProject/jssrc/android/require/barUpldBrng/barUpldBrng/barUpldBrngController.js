define(function() {
    var controller = require("barUpldBrng/barUpldBrng/userbarUpldBrngController");
    var actions = require("barUpldBrng/barUpldBrng/barUpldBrngControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    return controller;
});