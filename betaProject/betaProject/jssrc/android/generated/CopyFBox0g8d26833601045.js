function initializeCopyFBox0g8d26833601045() {
    CopyFBox0g8d26833601045 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": false,
        "height": "100%",
        "id": "CopyFBox0g8d26833601045",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "width": "100%"
    }, {
        "containerWeight": 100
    }, {});
    CopyFBox0g8d26833601045.setDefaultUnit(kony.flex.DP);
    var promoteImage = new kony.ui.Image2({
        "centerX": "50%",
        "centerY": "50%",
        "height": "100%",
        "id": "promoteImage",
        "isVisible": true,
        "skin": "slImage",
        "src": "imagedrag.png",
        "width": "100%",
        "zIndex": 1
    }, {
        "containerWeight": 100,
        "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    CopyFBox0g8d26833601045.add(promoteImage);
}