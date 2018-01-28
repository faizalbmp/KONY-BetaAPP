function initializeUserWidgets() {
    kony.mvc.registry.add("barBar.barBar", "barBar", "barBarController");
    kony.application.registerMaster({
        "namespace": "barBar",
        "classname": "barBar",
        "name": "barBar.barBar"
    });
    kony.mvc.registry.add("barChat.barChat", "barChat", "barChatController");
    kony.application.registerMaster({
        "namespace": "barChat",
        "classname": "barChat",
        "name": "barChat.barChat"
    });
    kony.mvc.registry.add("barEditbarangdagang.barEditbarangdagang", "barEditbarangdagang", "barEditbarangdagangController");
    kony.application.registerMaster({
        "namespace": "barEditbarangdagang",
        "classname": "barEditbarangdagang",
        "name": "barEditbarangdagang.barEditbarangdagang"
    });
    kony.mvc.registry.add("barMenu.barMenu", "barMenu", "barMenuController");
    kony.application.registerMaster({
        "namespace": "barMenu",
        "classname": "barMenu",
        "name": "barMenu.barMenu"
    });
    kony.mvc.registry.add("barUpldBrng.barUpldBrng", "barUpldBrng", "barUpldBrngController");
    kony.application.registerMaster({
        "namespace": "barUpldBrng",
        "classname": "barUpldBrng",
        "name": "barUpldBrng.barUpldBrng"
    });
    kony.mvc.registry.add("listbarangH.listbarangH", "listbarangH", "listbarangHController");
    kony.application.registerMaster({
        "namespace": "listbarangH",
        "classname": "listbarangH",
        "name": "listbarangH.listbarangH"
    });
    kony.mvc.registry.add("UserBar.UserBar", "UserBar", "UserBarController");
    kony.application.registerMaster({
        "namespace": "UserBar",
        "classname": "UserBar",
        "name": "UserBar.UserBar"
    });
}