function addWidgetsfrmLogin() {
    frmLogin.setDefaultUnit(kony.flex.DP);
    var FlexContainer0cfc35eaf8d7f42 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "FlexContainer0cfc35eaf8d7f42",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": 0,
        "skin": "CopyslFbox0a06c658b3c774b",
        "top": 0,
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    FlexContainer0cfc35eaf8d7f42.setDefaultUnit(kony.flex.DP);
    var flxName = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "7%",
        "id": "flxName",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "40dp",
        "skin": "CopyslFbox0f592392a2ccb49",
        "top": "110dp",
        "width": "80%",
        "zIndex": 1
    }, {}, {});
    flxName.setDefaultUnit(kony.flex.DP);
    var TextField0ff9aac3b1ec540 = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "height": "100%",
        "id": "TextField0ff9aac3b1ec540",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "left": "0dp",
        "placeholder": "User Name",
        "secureTextEntry": false,
        "skin": "CopyslTextBox0e2cbc07900d043",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [3, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "autoComplete": false,
        "autoCorrect": false
    });
    flxName.add(TextField0ff9aac3b1ec540);
    var flxPassword = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "7%",
        "id": "flxPassword",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "40dp",
        "skin": "CopyslFbox0i493b137f1084d",
        "top": "175dp",
        "width": "80%",
        "zIndex": 1
    }, {}, {});
    flxPassword.setDefaultUnit(kony.flex.DP);
    var TextField0i15adbc654264a = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "height": "100%",
        "id": "TextField0i15adbc654264a",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "left": "4dp",
        "onTextChange": AS_TextField_f1399ec9302246f59d4ccca524afa289,
        "placeholder": "Password",
        "secureTextEntry": true,
        "skin": "CopyslTextBox0ed6f345b91e94c",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "top": "1dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [3, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "autoComplete": false,
        "autoCorrect": false
    });
    flxPassword.add(TextField0i15adbc654264a);
    var btnLogin = new kony.ui.Button({
        "focusSkin": "CopyslButtonGlossRed0eecac6acc6854b",
        "height": "7%",
        "id": "btnLogin",
        "isVisible": true,
        "left": "40dp",
        "onClick": AS_Button_e2fbc0bdd4e04829957979921d9523f0,
        "skin": "CopyslButtonGlossBlue0h6dcac1b767f43",
        "text": "Login",
        "top": "300dp",
        "width": "80%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lblForgotpassword = new kony.ui.Label({
        "height": "7%",
        "id": "lblForgotpassword",
        "isVisible": true,
        "left": "165dp",
        "skin": "CopyslLabel0i89675b24a6a47",
        "text": "Forgot Password?",
        "top": "240dp",
        "width": "45%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    var RadioButtonGroup0becca1fd870b44 = new kony.ui.RadioButtonGroup({
        "centerX": "26.08%",
        "centerY": "63.94%",
        "height": "9.76%",
        "id": "RadioButtonGroup0becca1fd870b44",
        "isVisible": true,
        "left": "0%",
        "masterData": [
            ["pembeli", "Buyer"],
            ["penjual", "Seller"]
        ],
        "selectedKey": "pembeli",
        "selectedKeyValue": ["pembeli", "Buyer"],
        "skin": "slRadioButtonGroup",
        "top": 370,
        "width": "30%",
        "zIndex": 1
    }, {
        "itemOrientation": constants.RADIOGROUP_ITEM_ORIENTATION_VERTICAL,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    FlexContainer0cfc35eaf8d7f42.add(flxName, flxPassword, btnLogin, lblForgotpassword, RadioButtonGroup0becca1fd870b44);
    frmLogin.add(FlexContainer0cfc35eaf8d7f42);
};

function frmLoginGlobals() {
    frmLogin = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmLogin,
        "enabledForIdleTimeout": false,
        "id": "frmLogin",
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