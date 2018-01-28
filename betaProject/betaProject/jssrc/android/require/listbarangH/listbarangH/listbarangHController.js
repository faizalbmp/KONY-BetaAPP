define(function() {
    var controller = require("listbarangH/listbarangH/userlistbarangHController");
    var actions = require("listbarangH/listbarangH/listbarangHControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    return controller;
});