function addWidgetsfrmHomepenjual() {
    frmHomepenjual.setDefaultUnit(kony.flex.DP);
    var FlexContainer0b50922856d594d = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "FlexContainer0b50922856d594d",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "CopyslFbox0b22a08983edf43",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    FlexContainer0b50922856d594d.setDefaultUnit(kony.flex.DP);
    var Image0g720d109fe5047 = new kony.ui.Image2({
        "height": "100%",
        "id": "Image0g720d109fe5047",
        "isVisible": true,
        "left": "0dp",
        "skin": "slImage",
        "src": "open2.png",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var flxUser = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "20%",
        "id": "flxUser",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "220dp",
        "onTouchStart": AS_FlexContainer_ic5d3d9e7acb4c9facdf13575a6fb032,
        "skin": "CopyslFbox0aa156e0ddf994e",
        "top": "117dp",
        "width": "35%",
        "zIndex": 1
    }, {}, {});
    flxUser.setDefaultUnit(kony.flex.DP);
    var Image0ea9b6dcd146d49 = new kony.ui.Image2({
        "centerX": "50%",
        "centerY": "50%",
        "height": "60%",
        "id": "Image0ea9b6dcd146d49",
        "isVisible": true,
        "left": "0dp",
        "skin": "slImage",
        "src": "avatar_item64.png",
        "top": "0dp",
        "width": "60%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxUser.add(Image0ea9b6dcd146d49);
    var flxUpload = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "20%",
        "id": "flxUpload",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "17dp",
        "onTouchStart": AS_FlexContainer_ea6da7e801874cc79131656beb197a82,
        "skin": "CopyslFbox0aa156e0ddf994e",
        "top": "357dp",
        "width": "35%",
        "zIndex": 1
    }, {}, {});
    flxUpload.setDefaultUnit(kony.flex.DP);
    var Image0da665b313f9442 = new kony.ui.Image2({
        "height": "51.49%",
        "id": "Image0da665b313f9442",
        "isVisible": true,
        "left": "30dp",
        "skin": "slImage",
        "src": "upload_1.png",
        "top": "27dp",
        "width": "50.35%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxUpload.add(Image0da665b313f9442);
    var flxList = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "20%",
        "id": "flxList",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "117dp",
        "onTouchStart": AS_FlexContainer_feea453ece8e416cb586f97959ec73c7,
        "skin": "CopyslFbox0aa156e0ddf994e",
        "top": "230dp",
        "width": "35%",
        "zIndex": 1
    }, {}, {});
    flxList.setDefaultUnit(kony.flex.DP);
    var Image0e3bcdd4e03cc44 = new kony.ui.Image2({
        "height": "62.69%",
        "id": "Image0e3bcdd4e03cc44",
        "isVisible": true,
        "left": "27dp",
        "skin": "slImage",
        "src": "list_4.png",
        "top": "20dp",
        "width": "58.20%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxList.add(Image0e3bcdd4e03cc44);
    FlexContainer0b50922856d594d.add(Image0g720d109fe5047, flxUser, flxUpload, flxList);
    frmHomepenjual.add(FlexContainer0b50922856d594d);
};

function frmHomepenjualGlobals() {
    frmHomepenjual = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmHomepenjual,
        "enabledForIdleTimeout": false,
        "id": "frmHomepenjual",
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": true,
        "skin": "CopyslForm0f0cc11789a154a"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "layoutType": kony.flex.FREE_FORM,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "retainScrollPosition": false
    });
};