function addWidgetsfrmEditbarang() {
    frmEditbarang.setDefaultUnit(kony.flex.DP);
    var FlexScrollContainer0h41a714eb79a40 = new kony.ui.FlexScrollContainer({
        "allowHorizontalBounce": false,
        "allowVerticalBounce": true,
        "bounces": true,
        "clipBounds": true,
        "enableScrolling": true,
        "height": "100%",
        "horizontalScrollIndicator": true,
        "id": "FlexScrollContainer0h41a714eb79a40",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "pagingEnabled": false,
        "scrollDirection": kony.flex.SCROLL_VERTICAL,
        "skin": "CopyslFSbox0gcb3a6285ef042",
        "top": "-1dp",
        "verticalScrollIndicator": true,
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    FlexScrollContainer0h41a714eb79a40.setDefaultUnit(kony.flex.DP);
    var flxGambarjualan = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "33.33%",
        "id": "flxGambarjualan",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "20dp",
        "skin": "CopyslFbox0e5ddb4cb5b2b4f",
        "top": "77dp",
        "width": "88%",
        "zIndex": 1
    }, {}, {});
    flxGambarjualan.setDefaultUnit(kony.flex.DP);
    flxGambarjualan.add();
    var btnGanti = new kony.ui.Button({
        "focusSkin": "CopyslButtonGlossRed0b1f5cbb96f8b4f",
        "height": "5.42%",
        "id": "btnGanti",
        "isVisible": true,
        "left": "234dp",
        "skin": "CopyslButtonGlossBlue0a0ffadf0b52f46",
        "text": "Edit",
        "top": "287dp",
        "width": "28.70%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var txtNameEdit = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "height": "6.50%",
        "id": "txtNameEdit",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "left": "20dp",
        "secureTextEntry": false,
        "skin": "CopyslTextBox0jc636ca9558747",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "top": "341dp",
        "width": "88%",
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
    var txbxHargaedit = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "height": "6%",
        "id": "txbxHargaedit",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "left": "20dp",
        "placeholder": "ex Rp. 150.000",
        "secureTextEntry": false,
        "skin": "CopyslTextBox0i7f76f8a6aa34b",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "top": "401dp",
        "width": "88%",
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
    var txarDeskripsiedit = new kony.ui.TextArea2({
        "autoCapitalize": constants.TEXTAREA_AUTO_CAPITALIZE_NONE,
        "height": "21%",
        "id": "txarDeskripsiedit",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTAREA_KEY_BOARD_STYLE_DEFAULT,
        "left": "20dp",
        "numberOfVisibleLines": 3,
        "placeholder": "Description",
        "skin": "CopyslTextArea0h8dbeed8c6014b",
        "textInputMode": constants.TEXTAREA_INPUT_MODE_ANY,
        "top": "458dp",
        "width": "88%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "padding": [2, 2, 2, 2],
        "paddingInPixel": false
    }, {});
    var txarAlamat = new kony.ui.TextArea2({
        "autoCapitalize": constants.TEXTAREA_AUTO_CAPITALIZE_NONE,
        "height": "21%",
        "id": "txarAlamat",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTAREA_KEY_BOARD_STYLE_DEFAULT,
        "left": "20dp",
        "numberOfVisibleLines": 3,
        "placeholder": "Address",
        "skin": "CopyslTextArea0jdf60115bed14c",
        "textInputMode": constants.TEXTAREA_INPUT_MODE_ANY,
        "top": "668dp",
        "width": "88%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "padding": [2, 2, 2, 2],
        "paddingInPixel": false
    }, {});
    var listKategori = new kony.ui.ListBox({
        "height": "40dp",
        "id": "listKategori",
        "isVisible": true,
        "left": "20dp",
        "masterData": [
            ["lb1", "Pakaian"],
            ["lb2", "Lukisan"],
            ["lb3", "Pahatan"]
        ],
        "skin": "CopyslListBox0a341e5f636034f",
        "top": "608dp",
        "width": "88%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "applySkinsToPopup": true,
        "viewType": constants.LISTBOX_VIEW_TYPE_LISTVIEW
    });
    var btnSaveEdit = new kony.ui.Button({
        "focusSkin": "CopyslButtonGlossRed0i0445cb9c3ec43",
        "height": "6%",
        "id": "btnSaveEdit",
        "isVisible": true,
        "left": "157dp",
        "skin": "CopyslButtonGlossBlue0a4505dc9e0024b",
        "text": "Save",
        "top": "867dp",
        "width": "50%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lblName = new kony.ui.Label({
        "id": "lblName",
        "isVisible": true,
        "left": "20dp",
        "skin": "CopyslLabel0hf8a0ef8498640",
        "text": "Name ",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "320dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var lblHarga = new kony.ui.Label({
        "id": "lblHarga",
        "isVisible": true,
        "left": "20dp",
        "skin": "CopyslLabel0ga40b63594a74e",
        "text": "Price",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "381dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var lblDeskripsi = new kony.ui.Label({
        "id": "lblDeskripsi",
        "isVisible": true,
        "left": "20dp",
        "skin": "CopyslLabel0b1376297b64247",
        "text": "Descreption",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "438dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var lblCategory = new kony.ui.Label({
        "id": "lblCategory",
        "isVisible": true,
        "left": "20dp",
        "skin": "CopyslLabel0f38b61535a3d49",
        "text": "Category",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "588dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var lblAddress = new kony.ui.Label({
        "id": "lblAddress",
        "isVisible": true,
        "left": "20dp",
        "skin": "CopyslLabel0c27fdc60460d4c",
        "text": "Address",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "648dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var lblPhonenumber = new kony.ui.Label({
        "id": "lblPhonenumber",
        "isVisible": true,
        "left": "18dp",
        "skin": "CopyslLabel0f67eb3bac0ba47",
        "text": "Phone Number",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "797dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var txbxNohp = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "height": "6%",
        "id": "txbxNohp",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "left": "18dp",
        "secureTextEntry": false,
        "skin": "CopyslTextBox0g43bfc6e346a44",
        "text": "08123456xxxxxx",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "top": "817dp",
        "width": "88%",
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
    var Editbarangdagang = new barEditbarangdagang.barEditbarangdagang({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "id": "Editbarangdagang",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "masterType": constants.MASTER_TYPE_DEFAULT,
        "skin": "CopyslFbox0fea7761b46484b",
        "top": "0dp"
    }, {}, {});
    Editbarangdagang.top = "0dp";
    FlexScrollContainer0h41a714eb79a40.add(flxGambarjualan, btnGanti, txtNameEdit, txbxHargaedit, txarDeskripsiedit, txarAlamat, listKategori, btnSaveEdit, lblName, lblHarga, lblDeskripsi, lblCategory, lblAddress, lblPhonenumber, txbxNohp, Editbarangdagang);
    frmEditbarang.add(FlexScrollContainer0h41a714eb79a40);
};

function frmEditbarangGlobals() {
    frmEditbarang = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmEditbarang,
        "enabledForIdleTimeout": false,
        "id": "frmEditbarang",
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