function initializeCopyFBox0f8ea91fcac9d41() {
    CopyFBox0f8ea91fcac9d41 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": false,
        "height": "40%",
        "id": "CopyFBox0f8ea91fcac9d41",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "width": "100%"
    }, {
        "containerWeight": 100
    }, {});
    CopyFBox0f8ea91fcac9d41.setDefaultUnit(kony.flex.DP);
    var itemListImage = new kony.ui.Image2({
        "centerY": "50%",
        "height": "75%",
        "id": "itemListImage",
        "isVisible": true,
        "left": "0dp",
        "skin": "slImage",
        "src": "imagedrag.png",
        "top": "0dp",
        "width": "25%",
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
    var itemListNameLabel = new kony.ui.Label({
        "height": "30%",
        "id": "itemListNameLabel",
        "isVisible": true,
        "left": "28%",
        "skin": "CopyslLabel0a7375ede7f7641",
        "text": "Label",
        "top": "2%",
        "width": "55%",
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
    var itemListDescriptionLabel = new kony.ui.Label({
        "height": "45%",
        "id": "itemListDescriptionLabel",
        "isVisible": true,
        "left": "28%",
        "skin": "CopyslLabel0jeb9a6138f204f",
        "text": "Label",
        "top": "31%",
        "width": "55%",
        "zIndex": 1
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
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
    var itemListLocationLabel = new kony.ui.Label({
        "height": "25%",
        "id": "itemListLocationLabel",
        "isVisible": true,
        "left": "28%",
        "skin": "CopyslLabel0c905c63088d948",
        "text": "Label",
        "top": "72%",
        "width": "55%",
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
    var ItemListPriceLabel = new kony.ui.Label({
        "height": "30%",
        "id": "ItemListPriceLabel",
        "isVisible": true,
        "left": "80%",
        "skin": "CopyslLabel0df1990f4b7b241",
        "text": "Label",
        "top": "2%",
        "width": "18%",
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
    CopyFBox0f8ea91fcac9d41.add(itemListImage, itemListNameLabel, itemListDescriptionLabel, itemListLocationLabel, ItemListPriceLabel);
}