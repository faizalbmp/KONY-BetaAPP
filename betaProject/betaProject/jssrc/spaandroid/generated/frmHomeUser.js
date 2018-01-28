function addWidgetsfrmHomeUser() {
    frmHomeUser.setDefaultUnit(kony.flex.DP);
    var homeContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "homeContainer",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "skinContainer",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    homeContainer.setDefaultUnit(kony.flex.DP);
    var itemForSaleSegment = new kony.ui.SegmentedUI2({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50.03%",
        "data": [{
            "imageCategory1": "alatmusik.jpg",
            "imageCategoryLabel1": "Jual Beli Alat Musik Tradisional"
        }, {
            "imageCategory1": "rotibuaya.jpg",
            "imageCategoryLabel1": "Makanan Khas Indonesia"
        }, {
            "imageCategory1": "enggrang_500x3331.jpg",
            "imageCategoryLabel1": "Permainan Tradisional"
        }],
        "groupCells": false,
        "height": "30.35%",
        "id": "itemForSaleSegment",
        "isVisible": true,
        "needPageIndicator": true,
        "pageOffDotImage": "pageoffdot.png",
        "pageOnDotImage": "pageondot.png",
        "retainSelection": false,
        "rowFocusSkin": "seg2Focus",
        "rowSkin": "Copyseg0hce43876d11e44",
        "rowTemplate": FBox0d077fbe3626e40,
        "scrollingEvents": {},
        "sectionHeaderSkin": "sliPhoneSegmentHeader",
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "separatorColor": "64646400",
        "separatorRequired": true,
        "separatorThickness": 1,
        "showScrollbars": false,
        "top": "11.38%",
        "viewType": constants.SEGUI_VIEW_TYPE_PAGEVIEW,
        "widgetDataMap": {
            "imageCategory1": "imageCategory1",
            "imageCategoryLabel1": "imageCategoryLabel1"
        },
        "width": "95%",
        "zIndex": 1
    }, {
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var categorySegment = new kony.ui.SegmentedUI2({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "data": [{
            "categoryImage1": "kerajinan_tangan_perak.jpg",
            "categoryImage2": "gambar_topeng.jpg"
        }, {
            "categoryImage1": "noken_indonesia.jpg",
            "categoryImage2": "barang_antik.JPG"
        }, {
            "categoryImage1": "membatik.jpg",
            "categoryImage2": ""
        }],
        "groupCells": false,
        "height": "60%",
        "id": "categorySegment",
        "isVisible": true,
        "left": "0dp",
        "needPageIndicator": true,
        "onRowClick": AS_Segment_g6d1b8e6ba764c86997ee98e7690176f,
        "pageOffDotImage": "pageoffdot.png",
        "pageOnDotImage": "pageondot.png",
        "retainSelection": false,
        "rowSkin": "seg2Normal",
        "rowTemplate": FBox0i57abcacb6f944,
        "scrollingEvents": {},
        "sectionHeaderSkin": "sliPhoneSegmentHeader",
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "separatorRequired": false,
        "separatorThickness": 0,
        "showScrollbars": false,
        "top": "47%",
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
        "widgetDataMap": {
            "categoryImage1": "categoryImage1",
            "categoryImage2": "categoryImage2"
        },
        "width": "100%",
        "zIndex": 2
    }, {
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var barMenu0 = new barMenu.barMenu({
        "clipBounds": true,
        "id": "barMenu0",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "masterType": constants.MASTER_TYPE_DEFAULT,
        "skin": "slFbox"
    }, {}, {});
    homeContainer.add(itemForSaleSegment, categorySegment, barMenu0);
    var flxAkunU = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": 330,
        "clipBounds": true,
        "height": "9%",
        "id": "flxAkunU",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": 0,
        "onTouchStart": AS_FlexContainer_h800a63d19f54f29ab6f1f8717332940,
        "skin": "slFbox",
        "top": 0,
        "width": "15.74%",
        "zIndex": 1
    }, {}, {});
    flxAkunU.setDefaultUnit(kony.flex.DP);
    var Image0d7127d12c55b4c = new kony.ui.Image2({
        "centerX": "47.26%",
        "centerY": "41.97%",
        "height": "66.27%",
        "id": "Image0d7127d12c55b4c",
        "isVisible": true,
        "left": "0dp",
        "skin": "slImage",
        "src": "avatar_putih.png",
        "top": "0dp",
        "width": "64.71%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxAkunU.add(Image0d7127d12c55b4c);
    frmHomeUser.add(homeContainer, flxAkunU);
};

function frmHomeUserGlobals() {
    frmHomeUser = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmHomeUser,
        "enabledForIdleTimeout": false,
        "id": "frmHomeUser",
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": true,
        "skin": "CopyslForm0ab673de46fd042"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "layoutType": kony.flex.FREE_FORM,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "retainScrollPosition": false
    });
};