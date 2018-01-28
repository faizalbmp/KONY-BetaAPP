define(function() {
    var controller = require("UserBar/UserBar/userUserBarController");
    var actions = require("UserBar/UserBar/UserBarControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    return controller;
});