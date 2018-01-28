define(function() {
    return function(controller) {
        var barBar = new kony.ui.FlexContainer({
            "clipBounds": true,
            "isMaster": true,
            "height": "100%",
            "id": "barBar",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        barBar.setDefaultUnit(kony.flex.DP);
        var FlexContainer0cafdb3217ecc45 = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "9%",
            "id": "FlexContainer0cafdb3217ecc45",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "skin": "CopyslFbox0adb274cb163c4a",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        FlexContainer0cafdb3217ecc45.setDefaultUnit(kony.flex.DP);
        var FlexContainer0cc2445edeb3c4d = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "FlexContainer0cc2445edeb3c4d",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "skin": "slFbox",
            "top": "0dp",
            "width": "13%",
            "zIndex": 1
        }, {}, {});
        FlexContainer0cc2445edeb3c4d.setDefaultUnit(kony.flex.DP);
        var Image0i5e1d9f610ac42 = new kony.ui.Image2({
            "height": "100%",
            "id": "Image0i5e1d9f610ac42",
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
        FlexContainer0cc2445edeb3c4d.add(Image0i5e1d9f610ac42);
        FlexContainer0cafdb3217ecc45.add(FlexContainer0cc2445edeb3c4d);
        barBar.add(FlexContainer0cafdb3217ecc45);
        return barBar;
    }
})