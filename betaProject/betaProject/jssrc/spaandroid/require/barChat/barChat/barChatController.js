define(function() {
    var controller = require("barChat/barChat/userbarChatController");
    var actions = require("barChat/barChat/barChatControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    return controller;
});