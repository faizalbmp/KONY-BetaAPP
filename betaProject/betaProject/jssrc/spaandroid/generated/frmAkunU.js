function addWidgetsfrmAkunU() {
    frmAkunU.setDefaultUnit(kony.flex.DP);
    var akunContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "akunContainer",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "skinContainer",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    akunContainer.setDefaultUnit(kony.flex.DP);
    var akunSubContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "80%",
        "id": "akunSubContainer",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "CopyslFbox0e07fdf7b39dd4f",
        "top": "9.03%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    akunSubContainer.setDefaultUnit(kony.flex.DP);
    var akunImage = new kony.ui.Image2({
        "centerX": "50.05%",
        "height": "30%",
        "id": "akunImage",
        "isVisible": true,
        "skin": "slImage",
        "src": "picture_1.png",
        "top": "10.16%",
        "width": "40%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var akunProfilContainer = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "220dp",
        "id": "akunProfilContainer",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "CopyslFbox0f353980960934d",
        "top": "49.66%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    akunProfilContainer.setDefaultUnit(kony.flex.DP);
    var akunNameLabel = new kony.ui.Label({
        "height": "15%",
        "id": "akunNameLabel",
        "isVisible": true,
        "left": "2%",
        "skin": "CopyslLabel0b6fabbb8e4d24f",
        "text": "Nama",
        "top": "0dp",
        "width": "25%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    var akunEmailLabel = new kony.ui.Label({
        "height": "15%",
        "id": "akunEmailLabel",
        "isVisible": true,
        "left": "2%",
        "skin": "CopyslLabel0f0078a35e3fa4d",
        "text": "Email",
        "top": "37%",
        "width": "25%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    var akunName = new kony.ui.Label({
        "height": "35%",
        "id": "akunName",
        "isVisible": true,
        "left": "27%",
        "skin": "CopyslLabel0icc24ab4f3fb43",
        "text": "Akun",
        "top": "0%",
        "width": "70%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    var akunEmail = new kony.ui.Label({
        "height": "35%",
        "id": "akunEmail",
        "isVisible": true,
        "left": "27%",
        "skin": "CopyslLabel0i0b74bf0ddb349",
        "text": "email@mail.com",
        "top": "37%",
        "width": "70%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    var akunContactLabel = new kony.ui.Label({
        "height": "15%",
        "id": "akunContactLabel",
        "isVisible": true,
        "left": "2%",
        "skin": "CopyslLabel0g3cb6f6d224d43",
        "text": "Contact",
        "top": "74%",
        "width": "25%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    var akunContact = new kony.ui.Label({
        "height": "20%",
        "id": "akunContact",
        "isVisible": true,
        "left": "27%",
        "skin": "CopyslLabel0a9a01a1a8a5a4b",
        "text": "08xxxxxxxxxx",
        "top": "74%",
        "width": "70%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    akunProfilContainer.add(akunNameLabel, akunEmailLabel, akunName, akunEmail, akunContactLabel, akunContact);
    akunSubContainer.add(akunImage, akunProfilContainer);
    akunContainer.add(akunSubContainer);
    var barBar3 = new barBar.barBar({
        "clipBounds": true,
        "id": "barBar3",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "masterType": constants.MASTER_TYPE_DEFAULT,
        "skin": "slFbox"
    }, {}, {});
    var Label0f2184960c40343 = new kony.ui.Label({
        "height": "6.50%",
        "id": "Label0f2184960c40343",
        "isVisible": true,
        "left": 63,
        "skin": "CopyslLabel0e7e8b1c6b12944",
        "text": "Profile",
        "top": 3,
        "width": "58.33%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    var FlexContainer0ac4cc009c98840 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "89.75%",
        "centerY": "3.9400000000000004%",
        "clipBounds": true,
        "height": "9%",
        "id": "FlexContainer0ac4cc009c98840",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": 0,
        "onTouchStart": AS_FlexContainer_fa6221acdcaf495bb2969b812a4a7665,
        "skin": "slFbox",
        "top": 0,
        "width": "20.52%",
        "zIndex": 1
    }, {}, {});
    FlexContainer0ac4cc009c98840.setDefaultUnit(kony.flex.DP);
    var Image0h0835074775c4b = new kony.ui.Image2({
        "height": "100%",
        "id": "Image0h0835074775c4b",
        "isVisible": true,
        "left": "0dp",
        "skin": "slImage",
        "src": "settings_white.png",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    FlexContainer0ac4cc009c98840.add(Image0h0835074775c4b);
    frmAkunU.add(akunContainer, barBar3, Label0f2184960c40343, FlexContainer0ac4cc009c98840);
};

function frmAkunUGlobals() {
    frmAkunU = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmAkunU,
        "enabledForIdleTimeout": false,
        "id": "frmAkunU",
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": true,
        "skin": "slForm"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "layoutType": kony.flex.FREE_FORM,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "retainScrollPosition": false
    });
};