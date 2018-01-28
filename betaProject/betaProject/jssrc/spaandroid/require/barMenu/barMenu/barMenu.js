define(function() {
    return function(controller) {
        var barMenu = new kony.ui.FlexContainer({
            "clipBounds": true,
            "isMaster": true,
            "height": "100%",
            "id": "barMenu",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        barMenu.setDefaultUnit(kony.flex.DP);
        var homeSearchContainer = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "9%",
            "id": "homeSearchContainer",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "skin": "CopyslFbox0icbaba40c58a4d",
            "top": "0dp",
            "width": "100%",
            "zIndex": 2
        }, {}, {});
        homeSearchContainer.setDefaultUnit(kony.flex.DP);
        var flxSearch = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "72.00%",
            "id": "flxSearch",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "315dp",
            "skin": "slFbox",
            "top": "10dp",
            "width": "11.95%",
            "zIndex": 1
        }, {}, {});
        flxSearch.setDefaultUnit(kony.flex.DP);
        var Image0e890d2776a3c48 = new kony.ui.Image2({
            "id": "Image0e890d2776a3c48",
            "isVisible": true,
            "skin": "slImage",
            "src": "search.png",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxSearch.add(Image0e890d2776a3c48);
        var flxBalik = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "66.13%",
            "id": "flxBalik",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "15dp",
            "skin": "slFbox",
            "top": "10dp",
            "width": "12.32%",
            "zIndex": 1
        }, {}, {});
        flxBalik.setDefaultUnit(kony.flex.DP);
        var Image0ad25e1db309b46 = new kony.ui.Image2({
            "height": "100%",
            "id": "Image0ad25e1db309b46",
            "isVisible": true,
            "left": "0dp",
            "skin": "slImage",
            "src": "image_001_back.png",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxBalik.add(Image0ad25e1db309b46);
        var txbxSearch = new kony.ui.TextBox2({
            "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
            "height": "59.85%",
            "id": "txbxSearch",
            "isVisible": true,
            "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
            "left": "80dp",
            "secureTextEntry": false,
            "skin": "CopyslTextBox0h57c4cb5541446",
            "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
            "top": "13dp",
            "width": "60%",
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
        homeSearchContainer.add(flxSearch, flxBalik, txbxSearch);
        var homeBarContainer = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "7%",
            "id": "homeBarContainer",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "skin": "CopyslFbox0icbaba40c58a4d",
            "top": "10%",
            "width": "100%",
            "zIndex": 2
        }, {}, {});
        homeBarContainer.setDefaultUnit(kony.flex.DP);
        var homeButton = new kony.ui.Button({
            "focusSkin": "CopyslButtonGlossRed0a7e80d11ec4644",
            "height": "100%",
            "id": "homeButton",
            "isVisible": true,
            "left": "0%",
            "onClick": controller.AS_Button_c2a792b5f50f4b69a7ecb248708d4d98,
            "skin": "CopyslButtonGlossBlue0ddf894da43b643",
            "text": "Beranda",
            "top": "0%",
            "width": "33.33%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var orderButton = new kony.ui.Button({
            "centerX": "50%",
            "focusSkin": "CopyslButtonGlossRed0db3f4c1dd8f143",
            "height": "100%",
            "id": "orderButton",
            "isVisible": true,
            "skin": "CopyslButtonGlossBlue0g76045a1d1bc41",
            "text": "Order",
            "top": "0dp",
            "width": "33.33%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var akunButton = new kony.ui.Button({
            "focusSkin": "CopyslButtonGlossRed0a91b86ef4e7240",
            "height": "100%",
            "id": "akunButton",
            "isVisible": true,
            "onClick": controller.AS_Button_b6101f9d675a43cd8a0d5d59b286ea45,
            "right": "0dp",
            "skin": "CopyslButtonGlossBlue0dd1d808ba5ce46",
            "text": "Akun",
            "top": "0dp",
            "width": "33.33%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        homeBarContainer.add(homeButton, orderButton, akunButton);
        barMenu.add(homeSearchContainer, homeBarContainer);
        return barMenu;
    }
})