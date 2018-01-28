function addWidgetsfrmEditPasswordP() {
    frmEditPasswordP.setDefaultUnit(kony.flex.DP);
    var flxEditAkunP = new kony.ui.FlexScrollContainer({
        "allowHorizontalBounce": false,
        "allowVerticalBounce": true,
        "bounces": true,
        "clipBounds": true,
        "enableScrolling": true,
        "height": "100%",
        "horizontalScrollIndicator": true,
        "id": "flxEditAkunP",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "pagingEnabled": false,
        "scrollDirection": kony.flex.SCROLL_VERTICAL,
        "skin": "CopyslFSbox0d90ed6920e5e4a",
        "top": "0dp",
        "verticalScrollIndicator": true,
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxEditAkunP.setDefaultUnit(kony.flex.DP);
    var lblChangePassP = new kony.ui.Label({
        "centerX": "50%",
        "centerY": "10%",
        "id": "lblChangePassP",
        "isVisible": true,
        "left": 0,
        "skin": "CopyslLabel0d7c436f6d9734c",
        "text": "Change Your Password",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": 0,
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var btnOKChangePassP = new kony.ui.Button({
        "focusSkin": "CopyslButtonGlossRed0b73ad72574cc4a",
        "height": "50dp",
        "id": "btnOKChangePassP",
        "isVisible": true,
        "left": "43dp",
        "onClick": AS_Button_e414300cd27644828586bff25dd4b982,
        "skin": "CopyslButtonGlossBlue0ba50ae1082054d",
        "text": "OK",
        "top": "316dp",
        "width": "260dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var flxChangePassP = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50.06%",
        "centerY": "30%",
        "clipBounds": true,
        "height": "10%",
        "id": "flxChangePassP",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "CopyslFbox0ce67757a14b741",
        "top": 0,
        "width": "90%",
        "zIndex": 1
    }, {}, {});
    flxChangePassP.setDefaultUnit(kony.flex.DP);
    var txtPassLamaU = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "height": "100%",
        "id": "txtPassLamaU",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "left": 0,
        "placeholder": "Password",
        "secureTextEntry": false,
        "skin": "slTextBox",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "top": 0,
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
    flxChangePassP.add(txtPassLamaU);
    var flxNewChangePassP = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "centerY": "41%",
        "clipBounds": true,
        "height": "10%",
        "id": "flxNewChangePassP",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": 0,
        "skin": "CopyslFbox0d4fe6a57036142",
        "top": 0,
        "width": "90%",
        "zIndex": 1
    }, {}, {});
    flxNewChangePassP.setDefaultUnit(kony.flex.DP);
    var txtPassBaruU = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "height": "100%",
        "id": "txtPassBaruU",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "left": "0dp",
        "placeholder": "New Password",
        "secureTextEntry": false,
        "skin": "slTextBox",
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
    flxNewChangePassP.add(txtPassBaruU);
    flxEditAkunP.add(lblChangePassP, btnOKChangePassP, flxChangePassP, flxNewChangePassP);
    frmEditPasswordP.add(flxEditAkunP);
};

function frmEditPasswordPGlobals() {
    frmEditPasswordP = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmEditPasswordP,
        "enabledForIdleTimeout": false,
        "id": "frmEditPasswordP",
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": true,
        "skin": "slForm"
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
        "titleBarSkin": "slTitleBar",
        "windowSoftInputMode": constants.FORM_ADJUST_PAN
    });
};