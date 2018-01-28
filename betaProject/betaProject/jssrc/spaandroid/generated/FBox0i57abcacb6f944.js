function initializeFBox0i57abcacb6f944() {
    FBox0i57abcacb6f944 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": false,
        "height": "35%",
        "id": "FBox0i57abcacb6f944",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "width": "100%"
    }, {
        "containerWeight": 100
    }, {});
    FBox0i57abcacb6f944.setDefaultUnit(kony.flex.DP);
    var categoryImage1 = new kony.ui.Image2({
        "centerX": "25%",
        "centerY": "50%",
        "height": "82.69%",
        "id": "categoryImage1",
        "isVisible": true,
        "onDownloadComplete": AS_Image_b021a53ab77f4a7fbd4b52fc04bc7f84,
        "skin": "slImage",
        "src": "imagedrag.png",
        "width": "41.17%",
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
    var categoryImage2 = new kony.ui.Image2({
        "centerX": "75%",
        "centerY": "50%",
        "height": "77.86%",
        "id": "categoryImage2",
        "isVisible": true,
        "skin": "slImage",
        "src": "imagedrag.png",
        "width": "46.30%",
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
    FBox0i57abcacb6f944.add(categoryImage1, categoryImage2);
}