define(function() {
    return function(controller) {
        var listbarangH = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "isMaster": true,
            "height": "9%",
            "id": "listbarangH",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "skin": "CopyslFbox0d96630db5f0444",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        listbarangH.setDefaultUnit(kony.flex.DP);
        var flxBack = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxBack",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "skin": "slFbox",
            "top": "0dp",
            "width": "13%",
            "zIndex": 1
        }, {}, {});
        flxBack.setDefaultUnit(kony.flex.DP);
        var Image0a1b8804a6ba140 = new kony.ui.Image2({
            "height": "100%",
            "id": "Image0a1b8804a6ba140",
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
        flxBack.add(Image0a1b8804a6ba140);
        var Label0c25b37882d9049 = new kony.ui.Label({
            "id": "Label0c25b37882d9049",
            "isVisible": true,
            "left": "50dp",
            "skin": "CopyslLabel0beca45ac7be846",
            "text": "List Of Price",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "17dp",
            "width": "70.67%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        listbarangH.add(flxBack, Label0c25b37882d9049);
        return listbarangH;
    }
})