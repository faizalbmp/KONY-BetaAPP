function initializeFBox0f0b2edee038f43() {
    FBox0f0b2edee038f43 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": false,
        "height": "100%",
        "id": "FBox0f0b2edee038f43",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "width": "100%"
    }, {
        "containerWeight": 100
    }, {});
    FBox0f0b2edee038f43.setDefaultUnit(kony.flex.DP);
    var ImageDagang = new kony.ui.Image2({
        "centerX": "50%",
        "height": "100%",
        "id": "ImageDagang",
        "isVisible": true,
        "left": 0,
        "onDownloadComplete": AS_Image_cbba12effa97468585274415d067e326,
        "skin": "slImage",
        "src": "imagedrag.png",
        "top": 0,
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
    FBox0f0b2edee038f43.add(ImageDagang);
}