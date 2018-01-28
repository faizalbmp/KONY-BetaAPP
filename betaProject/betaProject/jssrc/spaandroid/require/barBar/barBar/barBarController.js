define(function() {
    var controller = require("barBar/barBar/userbarBarController");
    var actions = require("barBar/barBar/barBarControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    return controller;
});