function initializeFBox0d077fbe3626e40() {
    FBox0d077fbe3626e40 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": false,
        "height": "100%",
        "id": "FBox0d077fbe3626e40",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "width": "100%"
    }, {
        "containerWeight": 100
    }, {});
    FBox0d077fbe3626e40.setDefaultUnit(kony.flex.DP);
    var imageCategory1 = new kony.ui.Image2({
        "centerX": "50%",
        "centerY": "50%",
        "id": "imageCategory1",
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
    var imageCategoryLabel1 = new kony.ui.Label({
        "bottom": "5%",
        "height": "10.73%",
        "id": "imageCategoryLabel1",
        "isVisible": true,
        "maxNumberOfLines": 28,
        "skin": "CopyslLabel0eb1e9c48c66d4c",
        "text": "Label",
        "width": "70.03%",
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
    FBox0d077fbe3626e40.add(imageCategory1, imageCategoryLabel1);
}