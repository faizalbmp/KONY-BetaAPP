define(function() {
    var controller = require("barMenu/barMenu/userbarMenuController");
    var actions = require("barMenu/barMenu/barMenuControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    return controller;
});