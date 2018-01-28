define(function() {
    return function(controller) {
        var barEditbarangdagang = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "isMaster": true,
            "height": "9%",
            "id": "barEditbarangdagang",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "skin": "CopyslFbox0fea7761b46484b",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        barEditbarangdagang.setDefaultUnit(kony.flex.DP);
        var FlexContainer0a6dce3e5a94543 = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "FlexContainer0a6dce3e5a94543",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "skin": "slFbox",
            "top": "0dp",
            "width": "13%",
            "zIndex": 1
        }, {}, {});
        FlexContainer0a6dce3e5a94543.setDefaultUnit(kony.flex.DP);
        var Image0ae6ccd9d21c84d = new kony.ui.Image2({
            "height": "100%",
            "id": "Image0ae6ccd9d21c84d",
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
        FlexContainer0a6dce3e5a94543.add(Image0ae6ccd9d21c84d);
        var Label0a29ed324e16840 = new kony.ui.Label({
            "id": "Label0a29ed324e16840",
            "isVisible": true,
            "left": "80dp",
            "skin": "CopyslLabel0cd1edda7c74946",
            "text": "Edit Item",
            "top": "17dp",
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
        barEditbarangdagang.add(FlexContainer0a6dce3e5a94543, Label0a29ed324e16840);
        return barEditbarangdagang;
    }
})