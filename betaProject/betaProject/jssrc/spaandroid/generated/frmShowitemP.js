function addWidgetsfrmShowitemP() {
    frmShowitemP.setDefaultUnit(kony.flex.DP);
    var FlexScrollContainer0bf91f4777a7f4a = new kony.ui.FlexScrollContainer({
        "allowHorizontalBounce": false,
        "allowVerticalBounce": true,
        "bounces": true,
        "clipBounds": true,
        "enableScrolling": true,
        "height": "100.02%",
        "horizontalScrollIndicator": true,
        "id": "FlexScrollContainer0bf91f4777a7f4a",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "pagingEnabled": false,
        "scrollDirection": kony.flex.SCROLL_VERTICAL,
        "skin": "CopyslFSbox0iac0d005f08f4d",
        "top": "0dp",
        "verticalScrollIndicator": true,
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    FlexScrollContainer0bf91f4777a7f4a.setDefaultUnit(kony.flex.DP);
    var barBar3 = new barBar.barBar({
        "clipBounds": true,
        "id": "barBar3",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "masterType": constants.MASTER_TYPE_DEFAULT,
        "skin": "slFbox"
    }, {}, {});
    var flxEditItemShow = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "8.13%",
        "id": "flxEditItemShow",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "287dp",
        "onTouchStart": AS_FlexContainer_hcfd197f0b084ea382fad511b4144fd9,
        "skin": "slFbox",
        "top": "1dp",
        "width": "17.53%",
        "zIndex": 1
    }, {}, {});
    flxEditItemShow.setDefaultUnit(kony.flex.DP);
    var imgEditItemShow = new kony.ui.Image2({
        "height": "100%",
        "id": "imgEditItemShow",
        "isVisible": true,
        "left": "0dp",
        "skin": "slImage",
        "src": "settings_white.png",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxEditItemShow.add(imgEditItemShow);
    var txtNameShow = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "height": "6.50%",
        "id": "txtNameShow",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "left": "23dp",
        "secureTextEntry": false,
        "skin": "CopyslTextBox0jc636ca9558747",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "top": "271dp",
        "width": "88%",
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
    var txbxHargaShow = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "height": "6%",
        "id": "txbxHargaShow",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "left": "23dp",
        "placeholder": "ex Rp. 150.000",
        "secureTextEntry": false,
        "skin": "CopyslTextBox0i7f76f8a6aa34b",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "top": "331dp",
        "width": "88%",
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
    var txarDeskripsiShow = new kony.ui.TextArea2({
        "autoCapitalize": constants.TEXTAREA_AUTO_CAPITALIZE_NONE,
        "height": "21%",
        "id": "txarDeskripsiShow",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTAREA_KEY_BOARD_STYLE_DEFAULT,
        "left": "23dp",
        "numberOfVisibleLines": 3,
        "placeholder": "Description",
        "skin": "CopyslTextArea0h8dbeed8c6014b",
        "textInputMode": constants.TEXTAREA_INPUT_MODE_ANY,
        "top": "388dp",
        "width": "88%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "padding": [2, 2, 2, 2],
        "paddingInPixel": false
    }, {
        "autoCorrect": false
    });
    var lblHarga = new kony.ui.Label({
        "id": "lblHarga",
        "isVisible": true,
        "left": "23dp",
        "skin": "CopyslLabel0ga40b63594a74e",
        "text": "Price",
        "top": "311dp",
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
    var lblDeskripsi = new kony.ui.Label({
        "id": "lblDeskripsi",
        "isVisible": true,
        "left": "23dp",
        "skin": "CopyslLabel0b1376297b64247",
        "text": "Descreption",
        "top": "368dp",
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
    var lblCategory = new kony.ui.Label({
        "id": "lblCategory",
        "isVisible": true,
        "left": "23dp",
        "skin": "CopyslLabel0f38b61535a3d49",
        "text": "Category",
        "top": "518dp",
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
    var lblName = new kony.ui.Label({
        "id": "lblName",
        "isVisible": true,
        "left": "23dp",
        "skin": "CopyslLabel0hf8a0ef8498640",
        "text": "Name ",
        "top": "250dp",
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
    var txtCategoryShow = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "height": "6.50%",
        "id": "txtCategoryShow",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "left": "23dp",
        "secureTextEntry": false,
        "skin": "CopyslTextBox0jc636ca9558747",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "top": "540dp",
        "width": "88%",
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
    FlexScrollContainer0bf91f4777a7f4a.add(barBar3, flxEditItemShow, txtNameShow, txbxHargaShow, txarDeskripsiShow, lblHarga, lblDeskripsi, lblCategory, lblName, txtCategoryShow);
    var fxlImageDagang = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "33%",
        "id": "fxlImageDagang",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "20dp",
        "skin": "CopyslFbox0b38d1ad3dced4e",
        "top": "77dp",
        "width": "88%",
        "zIndex": 1
    }, {}, {});
    fxlImageDagang.setDefaultUnit(kony.flex.DP);
    var sgmntImageDagang = new kony.ui.SegmentedUI2({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "data": [{
            "ImageDagang": "picture_1.png"
        }, {
            "ImageDagang": "picture_1.png"
        }, {
            "ImageDagang": "picture_1.png"
        }],
        "groupCells": false,
        "height": "78.13%",
        "id": "sgmntImageDagang",
        "isVisible": true,
        "left": "0dp",
        "needPageIndicator": true,
        "pageOffDotImage": "pageoffdot.png",
        "pageOnDotImage": "pageondot.png",
        "retainSelection": false,
        "rowFocusSkin": "seg2Focus",
        "rowSkin": "seg2Normal",
        "rowTemplate": FBox0f0b2edee038f43,
        "scrollingEvents": {},
        "sectionHeaderSkin": "sliPhoneSegmentHeader",
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "separatorColor": "64646400",
        "separatorRequired": true,
        "separatorThickness": 1,
        "showScrollbars": false,
        "top": "0dp",
        "viewType": constants.SEGUI_VIEW_TYPE_PAGEVIEW,
        "widgetDataMap": {
            "ImageDagang": "ImageDagang"
        },
        "width": "100%",
        "zIndex": 1
    }, {
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    fxlImageDagang.add(sgmntImageDagang);
    frmShowitemP.add(FlexScrollContainer0bf91f4777a7f4a, fxlImageDagang);
};

function frmShowitemPGlobals() {
    frmShowitemP = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmShowitemP,
        "enabledForIdleTimeout": false,
        "id": "frmShowitemP",
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