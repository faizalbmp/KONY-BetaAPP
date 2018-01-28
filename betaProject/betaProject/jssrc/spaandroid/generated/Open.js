function addWidgetsOpen() {
    Open.setDefaultUnit(kony.flex.DP);
    var FlexContainer0a29cd7ca283744 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "FlexContainer0a29cd7ca283744",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "CopyslFbox0hfdb60ea469f47",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    FlexContainer0a29cd7ca283744.setDefaultUnit(kony.flex.DP);
    var btnLogin = new kony.ui.Button({
        "focusSkin": "CopyslButtonGlossRed0dda70d2bb1a948",
        "height": "5.96%",
        "id": "btnLogin",
        "isVisible": true,
        "left": "13.15%",
        "onClick": AS_Button_h8629da02bf44081b4c8710a8915a7f1,
        "skin": "CopyslButtonGlossBlue0bb2154a71b584f",
        "text": "Login",
        "top": "59.33%",
        "width": "72.22%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var btnSignup = new kony.ui.Button({
        "focusSkin": "CopyslButtonGlossRed0cc52f3c82be043",
        "height": "5.89%",
        "id": "btnSignup",
        "isVisible": true,
        "left": "47dp",
        "onClick": AS_Button_fb9a4d164ed74372805022cace9721f0,
        "skin": "CopyslButtonGlossBlue0c4356feba55f45",
        "text": "Sign Up",
        "top": "433dp",
        "width": "72.10%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    FlexContainer0a29cd7ca283744.add(btnLogin, btnSignup);
    var FlexContainer0efc067febdb842 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "35.23%",
        "id": "FlexContainer0efc067febdb842",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "42dp",
        "onTouchStart": AS_FlexContainer_ae94516d9b9e4da98f87d0401a45e0e9,
        "skin": "slFbox",
        "top": "47dp",
        "width": "76.82%",
        "zIndex": 1
    }, {}, {});
    FlexContainer0efc067febdb842.setDefaultUnit(kony.flex.DP);
    var Image0c1d8ccb9b0eb4b = new kony.ui.Image2({
        "height": "100%",
        "id": "Image0c1d8ccb9b0eb4b",
        "isVisible": true,
        "left": "0dp",
        "skin": "slImage",
        "src": "logobeta_1.png",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    FlexContainer0efc067febdb842.add(Image0c1d8ccb9b0eb4b);
    Open.add(FlexContainer0a29cd7ca283744, FlexContainer0efc067febdb842);
};

function OpenGlobals() {
    Open = new kony.ui.Form2({
        "addWidgets": addWidgetsOpen,
        "enabledForIdleTimeout": false,
        "id": "Open",
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": true
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "layoutType": kony.flex.FREE_FORM,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "retainScrollPosition": false
    });
};