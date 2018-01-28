function addWidgetsfrmShowDetailItemU() {
    frmShowDetailItemU.setDefaultUnit(kony.flex.DP);
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
    var txtShowLocationBrgU = new kony.ui.TextArea2({
        "autoCapitalize": constants.TEXTAREA_AUTO_CAPITALIZE_NONE,
        "height": "10%",
        "id": "txtShowLocationBrgU",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTAREA_KEY_BOARD_STYLE_DEFAULT,
        "left": "13dp",
        "numberOfVisibleLines": 3,
        "skin": "CopyslTextArea0efe426e36b7945",
        "text": "Location\n",
        "textInputMode": constants.TEXTAREA_INPUT_MODE_ANY,
        "top": "545dp",
        "width": "93%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "padding": [2, 2, 2, 2],
        "paddingInPixel": false
    }, {
        "autoCorrect": false
    });
    var lblShowLocationBrngU = new kony.ui.Label({
        "id": "lblShowLocationBrngU",
        "isVisible": true,
        "left": "13dp",
        "skin": "CopyslLabel0ce1f6d4b496745",
        "text": "Location",
        "top": "520dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    var lblNamaBrng = new kony.ui.Label({
        "height": "5%",
        "id": "lblNamaBrng",
        "isVisible": true,
        "left": "13dp",
        "skin": "CopyslLabel0c170ad0b05fc41",
        "text": "Name Item",
        "top": "224dp",
        "width": "90%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    var lblCategoryBrng = new kony.ui.Label({
        "height": "5%",
        "id": "lblCategoryBrng",
        "isVisible": true,
        "left": "12dp",
        "skin": "CopyslLabel0eb6c7a0ef10849",
        "text": "Category",
        "top": "301dp",
        "width": "90%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    var lblSDescriptionBrngU = new kony.ui.Label({
        "height": "5%",
        "id": "lblSDescriptionBrngU",
        "isVisible": true,
        "left": "12dp",
        "skin": "CopyslLabel0aa5e6283648a40",
        "text": "Description",
        "top": "368dp",
        "width": "90%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    var txtDescriptionBrng = new kony.ui.TextArea2({
        "autoCapitalize": constants.TEXTAREA_AUTO_CAPITALIZE_NONE,
        "height": "20%",
        "id": "txtDescriptionBrng",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTAREA_KEY_BOARD_STYLE_DEFAULT,
        "left": "13dp",
        "numberOfVisibleLines": 3,
        "skin": "CopyslTextArea0c0ade5ff147144",
        "text": "Description",
        "textInputMode": constants.TEXTAREA_INPUT_MODE_ANY,
        "top": "395dp",
        "width": "93%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "padding": [2, 2, 2, 2],
        "paddingInPixel": false
    }, {
        "autoCorrect": false
    });
    var txtSNamaBrngU = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "height": "7%",
        "id": "txtSNamaBrngU",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "left": "13dp",
        "secureTextEntry": false,
        "skin": "CopyslTextBox0abc02b43fb204d",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "top": "251dp",
        "width": "93%",
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
    var flxShowGmbrBrng1 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "23.85%",
        "id": "flxShowGmbrBrng1",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": 0,
        "skin": "CopyslFbox0db0ab3f9d59c42",
        "top": 0,
        "width": "45.37%",
        "zIndex": 1
    }, {}, {});
    flxShowGmbrBrng1.setDefaultUnit(kony.flex.DP);
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
    flxShowGmbrBrng1.add(imgGmbrBrng1);
    var txtPhoneNumer = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "height": "7%",
        "id": "txtPhoneNumer",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "left": "13dp",
        "secureTextEntry": false,
        "skin": "CopyslTextBox0abc02b43fb204d",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "top": "633dp",
        "width": "93%",
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
    var txtSCategoryU = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "height": "7%",
        "id": "txtSCategoryU",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "left": "15dp",
        "secureTextEntry": false,
        "skin": "CopyslTextBox0abc02b43fb204d",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "top": "329dp",
        "width": "93%",
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
    var barBar = new barBar.barBar({
        "clipBounds": true,
        "id": "barBar",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "masterType": constants.MASTER_TYPE_DEFAULT,
        "skin": "slFbox",
        "top": "0dp"
    }, {}, {});
    barBar.left = "0dp";
    barBar.top = "0dp";
    var lblnoTlp = new kony.ui.Label({
        "height": "5%",
        "id": "lblnoTlp",
        "isVisible": true,
        "left": "18dp",
        "skin": "CopyslLabel0eb6c7a0ef10849",
        "text": "Phone Number",
        "top": "607dp",
        "width": "90%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    var Label0h6c79681ff2a4b = new kony.ui.Label({
        "id": "Label0h6c79681ff2a4b",
        "isVisible": true,
        "left": "53dp",
        "skin": "CopyslLabel0fc38f01a4e114a",
        "text": "Item",
        "top": "13dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    FlexScrollContainer0j0519c54dcbd43.add(txtShowLocationBrgU, lblShowLocationBrngU, lblNamaBrng, lblCategoryBrng, lblSDescriptionBrngU, txtDescriptionBrng, txtSNamaBrngU, flxShowGmbrBrng1, txtPhoneNumer, txtSCategoryU, barBar, lblnoTlp, Label0h6c79681ff2a4b);
    frmShowDetailItemU.add(FlexScrollContainer0j0519c54dcbd43);
};

function frmShowDetailItemUGlobals() {
    frmShowDetailItemU = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmShowDetailItemU,
        "enabledForIdleTimeout": false,
        "id": "frmShowDetailItemU",
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