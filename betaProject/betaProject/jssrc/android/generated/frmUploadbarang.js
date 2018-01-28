function addWidgetsfrmUploadbarang() {
    frmUploadbarang.setDefaultUnit(kony.flex.DP);
    var FlexScrollContainer0j0519c54dcbd43 = new kony.ui.FlexScrollContainer({
        "allowHorizontalBounce": false,
        "allowVerticalBounce": true,
        "bounces": true,
        "clipBounds": true,
        "enableScrolling": true,
        "height": "100%",
        "horizontalScrollIndicator": true,
        "id": "FlexScrollContainer0j0519c54dcbd43",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "pagingEnabled": false,
        "scrollDirection": kony.flex.SCROLL_VERTICAL,
        "skin": "CopyslFSbox0i02ebb88dd3944",
        "top": "0dp",
        "verticalScrollIndicator": true,
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    FlexScrollContainer0j0519c54dcbd43.setDefaultUnit(kony.flex.DP);
    var txtLocationBrg = new kony.ui.TextArea2({
        "autoCapitalize": constants.TEXTAREA_AUTO_CAPITALIZE_NONE,
        "height": "10%",
        "id": "txtLocationBrg",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTAREA_KEY_BOARD_STYLE_DEFAULT,
        "left": "13dp",
        "numberOfVisibleLines": 3,
        "placeholder": "Location",
        "skin": "CopyslTextArea0efe426e36b7945",
        "textInputMode": constants.TEXTAREA_INPUT_MODE_ANY,
        "top": "545dp",
        "width": "93%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "padding": [2, 2, 2, 2],
        "paddingInPixel": false
    }, {});
    var lblLocationBrng = new kony.ui.Label({
        "id": "lblLocationBrng",
        "isVisible": true,
        "left": "13dp",
        "skin": "CopyslLabel0ce1f6d4b496745",
        "text": "Location",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "520dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var btnUploadBrng = new kony.ui.Button({
        "focusSkin": "CopyslButtonGlossRed0aa762b6256f04c",
        "height": "6%",
        "id": "btnUploadBrng",
        "isVisible": true,
        "left": "72dp",
        "skin": "CopyslButtonGlossBlue0f45b1f2a34d449",
        "text": "Upload",
        "top": "783dp",
        "width": "60%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lblNamaBrng = new kony.ui.Label({
        "height": "5%",
        "id": "lblNamaBrng",
        "isVisible": true,
        "left": "13dp",
        "skin": "CopyslLabel0c170ad0b05fc41",
        "text": "Name Item",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "224dp",
        "width": "90%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var lblCategoryBrng = new kony.ui.Label({
        "height": "5%",
        "id": "lblCategoryBrng",
        "isVisible": true,
        "left": "12dp",
        "skin": "CopyslLabel0eb6c7a0ef10849",
        "text": "Category",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "301dp",
        "width": "90%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var lblDescriptionBrng = new kony.ui.Label({
        "height": "5%",
        "id": "lblDescriptionBrng",
        "isVisible": true,
        "left": "12dp",
        "skin": "CopyslLabel0aa5e6283648a40",
        "text": "Description",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "368dp",
        "width": "90%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var listCategoryBrng = new kony.ui.ListBox({
        "height": "5%",
        "id": "listCategoryBrng",
        "isVisible": true,
        "left": "13dp",
        "masterData": [
            ["lb1", "Pakaian"],
            ["lb2", "Kerajinan Tangan"],
            ["lb3", "Mainan Tradisional"],
            ["lb4", "Kain"],
            ["lb5", "Tas"]
        ],
        "skin": "CopyslListBox0e20acd88f04c4c",
        "top": "332dp",
        "width": "80%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "applySkinsToPopup": true,
        "viewType": constants.LISTBOX_VIEW_TYPE_LISTVIEW
    });
    var txtDescriptionBrng = new kony.ui.TextArea2({
        "autoCapitalize": constants.TEXTAREA_AUTO_CAPITALIZE_NONE,
        "height": "20%",
        "id": "txtDescriptionBrng",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTAREA_KEY_BOARD_STYLE_DEFAULT,
        "left": "13dp",
        "numberOfVisibleLines": 3,
        "placeholder": "Description",
        "skin": "CopyslTextArea0c0ade5ff147144",
        "textInputMode": constants.TEXTAREA_INPUT_MODE_ANY,
        "top": "395dp",
        "width": "93%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "padding": [2, 2, 2, 2],
        "paddingInPixel": false
    }, {});
    var txtNamaBrng = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "height": "7%",
        "id": "txtNamaBrng",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "secureTextEntry": false,
        "skin": "CopyslTextBox0abc02b43fb204d",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "width": "93%",
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
    var flxUploadGmbrBrng1 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "24.07%",
        "centerY": "22.74%",
        "clipBounds": true,
        "height": "18.57%",
        "id": "flxUploadGmbrBrng1",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": 0,
        "skin": "CopyslFbox0db0ab3f9d59c42",
        "top": 0,
        "width": "34.26%",
        "zIndex": 1
    }, {}, {});
    flxUploadGmbrBrng1.setDefaultUnit(kony.flex.DP);
    var imgGmbrBrng1 = new kony.ui.Image2({
        "height": "100%",
        "id": "imgGmbrBrng1",
        "isVisible": true,
        "left": "0dp",
        "skin": "slImage",
        "src": "picture_1.png",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxUploadGmbrBrng1.add(imgGmbrBrng1);
    var flxUpladGmbrBrng2 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "75%",
        "centerY": "22.74%",
        "clipBounds": true,
        "height": "18.57%",
        "id": "flxUpladGmbrBrng2",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": 0,
        "skin": "CopyslFbox0db0ab3f9d59c42",
        "top": 0,
        "width": "34.26%",
        "zIndex": 1
    }, {}, {});
    flxUpladGmbrBrng2.setDefaultUnit(kony.flex.DP);
    var imgGmbrBrng2 = new kony.ui.Image2({
        "height": "100%",
        "id": "imgGmbrBrng2",
        "isVisible": true,
        "left": "0dp",
        "skin": "slImage",
        "src": "picture_1.png",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxUpladGmbrBrng2.add(imgGmbrBrng2);
    var barUpld = new barUpldBrng.barUpldBrng({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "id": "barUpld",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "masterType": constants.MASTER_TYPE_DEFAULT,
        "skin": "CopyslFbox0c944e4d566a24f"
    }, {}, {});
    var txtNotlpDagag = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "height": "7%",
        "id": "txtNotlpDagag",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "left": "14dp",
        "secureTextEntry": false,
        "skin": "CopyslTextBox0abc02b43fb204d",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "top": "723dp",
        "width": "93%",
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
    var PhoneNumber = new kony.ui.Label({
        "id": "PhoneNumber",
        "isVisible": true,
        "left": "14dp",
        "skin": "CopyslLabel0ce1f6d4b496745",
        "text": "Phone Number",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "693dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var txtHargaDagang = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "height": "7%",
        "id": "txtHargaDagang",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "left": "13dp",
        "placeholder": "ex Rp. 1.000.000",
        "secureTextEntry": false,
        "skin": "CopyslTextBox0abc02b43fb204d",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "top": "638dp",
        "width": "93%",
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
    var price = new kony.ui.Label({
        "id": "price",
        "isVisible": true,
        "left": "14dp",
        "skin": "CopyslLabel0ce1f6d4b496745",
        "text": "Price",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "613dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    FlexScrollContainer0j0519c54dcbd43.add(txtLocationBrg, lblLocationBrng, btnUploadBrng, lblNamaBrng, lblCategoryBrng, lblDescriptionBrng, listCategoryBrng, txtDescriptionBrng, txtNamaBrng, flxUploadGmbrBrng1, flxUpladGmbrBrng2, barUpld, txtNotlpDagag, PhoneNumber, txtHargaDagang, price);
    frmUploadbarang.add(FlexScrollContainer0j0519c54dcbd43);
};

function frmUploadbarangGlobals() {
    frmUploadbarang = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmUploadbarang,
        "enabledForIdleTimeout": false,
        "id": "frmUploadbarang",
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