function initializeFBox0b8562c33719e46() {
    FBox0b8562c33719e46 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": false,
        "height": "100dp",
        "id": "FBox0b8562c33719e46",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "width": "100%"
    }, {
        "containerWeight": 100
    }, {});
    FBox0b8562c33719e46.setDefaultUnit(kony.flex.DP);
    var Label0jabca0bb779345 = new kony.ui.Label({
        "id": "Label0jabca0bb779345",
        "isVisible": true,
        "left": "7dp",
        "skin": "CopyslLabel0b680c7869c464c",
        "text": "Label",
        "top": "17dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    var Label0ga19872ce9734f = new kony.ui.Label({
        "id": "Label0ga19872ce9734f",
        "isVisible": true,
        "left": "7dp",
        "skin": "CopyslLabel0dc3292857c5842",
        "text": "Label",
        "top": "44dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    var FlexContainer0ce2fa6ec3c704f = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "83%",
        "id": "FlexContainer0ce2fa6ec3c704f",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "247dp",
        "skin": "slFbox",
        "top": "11dp",
        "width": "29.63%",
        "zIndex": 1
    }, {
        "containerWeight": 100
    }, {});
    FlexContainer0ce2fa6ec3c704f.setDefaultUnit(kony.flex.DP);
    var Image0a117776515bd46 = new kony.ui.Image2({
        "height": "100%",
        "id": "Image0a117776515bd46",
        "imageWhenFailed": "picture.png",
        "isVisible": true,
        "left": "0dp",
        "skin": "slImage",
        "src": "imagedrag.png",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "containerWeight": 100,
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    FlexContainer0ce2fa6ec3c704f.add(Image0a117776515bd46);
    FBox0b8562c33719e46.add(Label0jabca0bb779345, Label0ga19872ce9734f, FlexContainer0ce2fa6ec3c704f);
}