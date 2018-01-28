define(function() {
    return function(controller) {
        var barUpldBrng = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "isMaster": true,
            "height": "9%",
            "id": "barUpldBrng",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "skin": "CopyslFbox0c944e4d566a24f",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        barUpldBrng.setDefaultUnit(kony.flex.DP);
        var FlexContainer0cafbc6a84a8f40 = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "FlexContainer0cafbc6a84a8f40",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "skin": "slFbox",
            "top": "0dp",
            "width": "13%",
            "zIndex": 1
        }, {}, {});
        FlexContainer0cafbc6a84a8f40.setDefaultUnit(kony.flex.DP);
        var Image0ibec41a928d04f = new kony.ui.Image2({
            "height": "100%",
            "id": "Image0ibec41a928d04f",
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
        FlexContainer0cafbc6a84a8f40.add(Image0ibec41a928d04f);
        var Label0d821e569503c4f = new kony.ui.Label({
            "id": "Label0d821e569503c4f",
            "isVisible": true,
            "left": "80dp",
            "skin": "CopyslLabel0e1a54e4bbe3245",
            "text": "Upload Item",
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
        barUpldBrng.add(FlexContainer0cafbc6a84a8f40, Label0d821e569503c4f);
        return barUpldBrng;
    }
})