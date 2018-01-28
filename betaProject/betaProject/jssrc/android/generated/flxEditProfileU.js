function addWidgetsflxEditProfileU() {
    flxEditProfileU.setDefaultUnit(kony.flex.DP);
    var FlexContainer0jbce64c3428947 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "FlexContainer0jbce64c3428947",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "CopyslFbox0ifef0efeab5549",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    FlexContainer0jbce64c3428947.setDefaultUnit(kony.flex.DP);
    var lblUsernameU = new kony.ui.Label({
        "id": "lblUsernameU",
        "isVisible": true,
        "left": "25dp",
        "skin": "CopyslLabel0c5057d2b96ae4a",
        "text": "Name",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "280dp",
        "width": "80%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var lblEmailU = new kony.ui.Label({
        "id": "lblEmailU",
        "isVisible": true,
        "left": "25dp",
        "skin": "CopyslLabel0c5057d2b96ae4a",
        "text": "Email",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "350dp",
        "width": "80%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var lblNotlpU = new kony.ui.Label({
        "id": "lblNotlpU",
        "isVisible": true,
        "left": "25dp",
        "skin": "CopyslLabel0c5057d2b96ae4a",
        "text": "Nomer Telefon",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "420dp",
        "width": "80%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var txbxUserU = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "height": "6%",
        "id": "txbxUserU",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "left": "25dp",
        "secureTextEntry": false,
        "skin": "CopyslTextBox0gaf1a15514ca45",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "top": "305dp",
        "width": "80%",
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
    var txbxEmailU = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "height": "6%",
        "id": "txbxEmailU",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "left": "25dp",
        "secureTextEntry": false,
        "skin": "CopyslTextBox0d192e5a28e0a4a",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "top": "375dp",
        "width": "80%",
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
    var txbxPhoneU = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "height": "7%",
        "id": "txbxPhoneU",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "left": "25dp",
        "secureTextEntry": false,
        "skin": "CopyslTextBox0gc704d000b8749",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "top": "445dp",
        "width": "80%",
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
    var btnSaveProfileU = new kony.ui.Button({
        "focusSkin": "CopyslButtonGlossRed0bf5368fd967244",
        "height": "5%",
        "id": "btnSaveProfileU",
        "isVisible": true,
        "left": "207dp",
        "skin": "CopyslButtonGlossBlue0c2da24b2dfbb42",
        "text": "Save",
        "top": "515dp",
        "width": "28%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var flxPicgantiU = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "10%",
        "id": "flxPicgantiU",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "220dp",
        "skin": "CopyslFbox0f5307442c08b42",
        "top": "200dp",
        "width": "17%",
        "zIndex": 1
    }, {}, {});
    flxPicgantiU.setDefaultUnit(kony.flex.DP);
    var Image0ec4b1bdbc9f245 = new kony.ui.Image2({
        "height": "54.05%",
        "id": "Image0ec4b1bdbc9f245",
        "isVisible": true,
        "left": "8dp",
        "skin": "slImage",
        "src": "picture_1.png",
        "top": "13dp",
        "width": "70%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxPicgantiU.add(Image0ec4b1bdbc9f245);
    var flxPicPenjualU = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "25%",
        "id": "flxPicPenjualU",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "110dp",
        "skin": "CopyslFbox0f87e8e8627e741",
        "top": "70dp",
        "width": "40%",
        "zIndex": 1
    }, {}, {});
    flxPicPenjualU.setDefaultUnit(kony.flex.DP);
    var Image0ee6bffcd8b3549 = new kony.ui.Image2({
        "height": "60.74%",
        "id": "Image0ee6bffcd8b3549",
        "isVisible": true,
        "left": "17dp",
        "skin": "slImage",
        "src": "picture_1.png",
        "top": "28dp",
        "width": "74.07%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxPicPenjualU.add(Image0ee6bffcd8b3549);
    var UserBar1 = new UserBar.UserBar({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "id": "UserBar1",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "masterType": constants.MASTER_TYPE_DEFAULT,
        "skin": "CopyslFbox0cfaeb9a9854347"
    }, {}, {});
    var btnGantiPasswordU = new kony.ui.Button({
        "centerX": "30.15%",
        "centerY": "86.18%",
        "focusSkin": "CopyslButtonGlossRed0bf5368fd967244",
        "height": "5%",
        "id": "btnGantiPasswordU",
        "isVisible": true,
        "left": 0,
        "onClick": AS_Button_h313ed117e4849f8bab6ecf6ea2c21eb,
        "skin": "CopyslButtonGlossBlue0c2da24b2dfbb42",
        "text": "Change Password",
        "top": 0,
        "width": "46.30%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    FlexContainer0jbce64c3428947.add(lblUsernameU, lblEmailU, lblNotlpU, txbxUserU, txbxEmailU, txbxPhoneU, btnSaveProfileU, flxPicgantiU, flxPicPenjualU, UserBar1, btnGantiPasswordU);
    flxEditProfileU.add(FlexContainer0jbce64c3428947);
};

function flxEditProfileUGlobals() {
    flxEditProfileU = new kony.ui.Form2({
        "addWidgets": addWidgetsflxEditProfileU,
        "enabledForIdleTimeout": false,
        "id": "flxEditProfileU",
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