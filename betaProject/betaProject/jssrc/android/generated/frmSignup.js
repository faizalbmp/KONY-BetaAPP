function addWidgetsfrmSignup() {
    frmSignup.setDefaultUnit(kony.flex.DP);
    var FlexContainer0dc6f0e2ebc104d = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "FlexContainer0dc6f0e2ebc104d",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": 0,
        "skin": "CopyslFbox0aaddc370bf2548",
        "top": 0,
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    FlexContainer0dc6f0e2ebc104d.setDefaultUnit(kony.flex.DP);
    var btnSignupDone = new kony.ui.Button({
        "focusSkin": "CopyslButtonGlossRed0bb21b99f6bca46",
        "height": "50dp",
        "id": "btnSignupDone",
        "isVisible": true,
        "left": "56dp",
        "onClick": AS_Button_j865e97e668d4920841aa767a1e40c31,
        "skin": "CopyslButtonGlossBlue0gfc4bc9aaca742",
        "text": "Sign Up",
        "top": "450dp",
        "width": "260dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var flxEmail = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "7%",
        "id": "flxEmail",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "40dp",
        "skin": "CopyslFbox0e31e6071a7c448",
        "top": "160dp",
        "width": "80%",
        "zIndex": 1
    }, {}, {});
    flxEmail.setDefaultUnit(kony.flex.DP);
    var lblEmail = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "height": "100%",
        "id": "lblEmail",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "left": "0dp",
        "placeholder": "Email",
        "secureTextEntry": false,
        "skin": "CopyslTextBox0ac998766b6b04d",
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
        "autoFilter": false,
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
    });
    flxEmail.add(lblEmail);
    var flxNameSignup = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "7%",
        "id": "flxNameSignup",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "40dp",
        "skin": "CopyslFbox0b4610bcf025748",
        "top": "230dp",
        "width": "80%",
        "zIndex": 1
    }, {}, {});
    flxNameSignup.setDefaultUnit(kony.flex.DP);
    var lblName = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "height": "100%",
        "id": "lblName",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "left": "0dp",
        "placeholder": "Name",
        "secureTextEntry": false,
        "skin": "CopyslTextBox0ac998766b6b04d",
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
        "autoFilter": false,
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
    });
    flxNameSignup.add(lblName);
    var flxPasswordSignup = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "7%",
        "id": "flxPasswordSignup",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "40dp",
        "skin": "CopyslFbox0db49638da47944",
        "top": "300dp",
        "width": "80%",
        "zIndex": 1
    }, {}, {});
    flxPasswordSignup.setDefaultUnit(kony.flex.DP);
    var lblPassword = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "height": "100%",
        "id": "lblPassword",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "left": "0dp",
        "placeholder": "Password",
        "secureTextEntry": true,
        "skin": "CopyslTextBox0ac998766b6b04d",
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
        "autoFilter": false,
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
    });
    flxPasswordSignup.add(lblPassword);
    FlexContainer0dc6f0e2ebc104d.add(btnSignupDone, flxEmail, flxNameSignup, flxPasswordSignup);
    frmSignup.add(FlexContainer0dc6f0e2ebc104d);
};

function frmSignupGlobals() {
    frmSignup = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmSignup,
        "enabledForIdleTimeout": false,
        "id": "frmSignup",
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": true,
        "skin": "CopyslForm0a05b635534ee4b"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "layoutType": kony.flex.FREE_FORM,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "footerOverlap": false,
        "headerOverlap": false,
        "menuPosition": constants.FORM_MENU_POSITION_AFTER_APPMENU,
        "retainScrollPosition": false,
        "titleBar": true,
        "windowSoftInputMode": constants.FORM_ADJUST_PAN
    });
};