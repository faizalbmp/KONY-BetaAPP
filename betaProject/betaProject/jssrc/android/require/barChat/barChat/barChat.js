define(function() {
    return function(controller) {
        var barChat = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "isMaster": true,
            "height": "9%",
            "id": "barChat",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "skin": "CopyslFbox0f5cb1ebc445a4b",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        barChat.setDefaultUnit(kony.flex.DP);
        var FlexContainer0b376ddb899914e = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "FlexContainer0b376ddb899914e",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "skin": "slFbox",
            "top": "0dp",
            "width": "13%",
            "zIndex": 1
        }, {}, {});
        FlexContainer0b376ddb899914e.setDefaultUnit(kony.flex.DP);
        var Image0e0209c69989745 = new kony.ui.Image2({
            "height": "100%",
            "id": "Image0e0209c69989745",
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
        FlexContainer0b376ddb899914e.add(Image0e0209c69989745);
        var Label0a1274e27eed64e = new kony.ui.Label({
            "id": "Label0a1274e27eed64e",
            "isVisible": true,
            "left": "70dp",
            "skin": "CopyslLabel0ceef95c9be4f45",
            "text": "Chating",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "17dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        barChat.add(FlexContainer0b376ddb899914e, Label0a1274e27eed64e);
        return barChat;
    }
})