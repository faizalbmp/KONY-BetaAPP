define(function() {
    var controller = require("barEditbarangdagang/barEditbarangdagang/userbarEditbarangdagangController");
    var actions = require("barEditbarangdagang/barEditbarangdagang/barEditbarangdagangControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    return controller;
});