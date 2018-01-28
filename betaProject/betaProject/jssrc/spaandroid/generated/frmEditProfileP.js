function addWidgetsfrmEditProfileP() {
    frmEditProfileP.setDefaultUnit(kony.flex.DP);
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
    var lblUsername = new kony.ui.Label({
        "id": "lblUsername",
        "isVisible": true,
        "left": "25dp",
        "skin": "CopyslLabel0c5057d2b96ae4a",
        "text": "Name",
        "top": "280dp",
        "width": "80%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    var lblEmail = new kony.ui.Label({
        "id": "lblEmail",
        "isVisible": true,
        "left": "25dp",
        "skin": "CopyslLabel0c5057d2b96ae4a",
        "text": "Email",
        "top": "350dp",
        "width": "80%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    var lblNotlp = new kony.ui.Label({
        "id": "lblNotlp",
        "isVisible": true,
        "left": "25dp",
        "skin": "CopyslLabel0c5057d2b96ae4a",
        "text": "Nomer Telefon",
        "top": "420dp",
        "width": "80%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    var lblLokasi = new kony.ui.Label({
        "height": "6%",
        "id": "lblLokasi",
        "isVisible": true,
        "left": "25dp",
        "skin": "CopyslLabel0c5057d2b96ae4a",
        "text": "Location",
        "top": "485dp",
        "width": "80%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    var txbxUser = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "height": "6%",
        "id": "txbxUser",
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
        "autoComplete": false,
        "autoCorrect": false
    });
    var txbxEmail = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "height": "6%",
        "id": "txbxEmail",
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
        "autoComplete": false,
        "autoCorrect": false
    });
    var txbxPhone = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "height": "7%",
        "id": "txbxPhone",
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
        "autoComplete": false,
        "autoCorrect": false
    });
    var txbxLocation = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "height": "6%",
        "id": "txbxLocation",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "left": "25dp",
        "secureTextEntry": false,
        "skin": "CopyslTextBox0effcc2b4ebeb48",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "top": "515dp",
        "width": "80%",
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
    var btnSave = new kony.ui.Button({
        "focusSkin": "CopyslButtonGlossRed0bf5368fd967244",
        "height": "5%",
        "id": "btnSave",
        "isVisible": true,
        "left": "220dp",
        "onClick": AS_Button_dc78ede927134bb291d9e8e810a066d6,
        "skin": "CopyslButtonGlossBlue0c2da24b2dfbb42",
        "text": "Save",
        "top": "568dp",
        "width": "28%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var flxPicganti = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "10%",
        "id": "flxPicganti",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "220dp",
        "skin": "CopyslFbox0f5307442c08b42",
        "top": "200dp",
        "width": "17%",
        "zIndex": 1
    }, {}, {});
    flxPicganti.setDefaultUnit(kony.flex.DP);
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
    flxPicganti.add(Image0ec4b1bdbc9f245);
    var flxPicPenjual = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "25%",
        "id": "flxPicPenjual",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "110dp",
        "skin": "CopyslFbox0f87e8e8627e741",
        "top": "70dp",
        "width": "40%",
        "zIndex": 1
    }, {}, {});
    flxPicPenjual.setDefaultUnit(kony.flex.DP);
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
    flxPicPenjual.add(Image0ee6bffcd8b3549);
    var UserBar1 = new UserBar.UserBar({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "id": "UserBar1",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "masterType": constants.MASTER_TYPE_DEFAULT,
        "skin": "CopyslFbox0cfaeb9a9854347"
    }, {}, {});
    var btnGantiPasswordP = new kony.ui.Button({
        "centerX": "30.15%",
        "centerY": "94.85%",
        "focusSkin": "CopyslButtonGlossRed0bf5368fd967244",
        "height": "5%",
        "id": "btnGantiPasswordP",
        "isVisible": true,
        "left": 0,
        "onClick": AS_Button_d68697d7c8f6491d86b901620046bf91,
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
    FlexContainer0jbce64c3428947.add(lblUsername, lblEmail, lblNotlp, lblLokasi, txbxUser, txbxEmail, txbxPhone, txbxLocation, btnSave, flxPicganti, flxPicPenjual, UserBar1, btnGantiPasswordP);
    frmEditProfileP.add(FlexContainer0jbce64c3428947);
};

function frmEditProfilePGlobals() {
    frmEditProfileP = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmEditProfileP,
        "enabledForIdleTimeout": false,
        "id": "frmEditProfileP",
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": true,
        "skin": "slForm"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "layoutType": kony.flex.FREE_FORM,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "retainScrollPosition": false
    });
};