function addWidgetsflxListitem() {
    flxListitem.setDefaultUnit(kony.flex.DP);
    var FlexContainer0i51b6fef38cb40 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "FlexContainer0i51b6fef38cb40",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "CopyslFbox0be4f5f49b7ae47",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    FlexContainer0i51b6fef38cb40.setDefaultUnit(kony.flex.DP);
    var sgmtBarangjual = new kony.ui.SegmentedUI2({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "data": [{
            "Image0a117776515bd46": "picture_1.png",
            "Label0ga19872ce9734f": "Rp. 1.200.000",
            "Label0jabca0bb779345": "Keris Condong Campur"
        }, {
            "Image0a117776515bd46": "picture_1.png",
            "Label0ga19872ce9734f": "Rp. 1.800.000",
            "Label0jabca0bb779345": "Keris Jalak Sangu Tumpeng"
        }, {
            "Image0a117776515bd46": "picture_1.png",
            "Label0ga19872ce9734f": "Rp.900.000 ",
            "Label0jabca0bb779345": "Keris Kyai Yuyu Rumpung"
        }],
        "groupCells": false,
        "height": "75%",
        "id": "sgmtBarangjual",
        "isVisible": true,
        "left": "0dp",
        "needPageIndicator": true,
        "onRowClick": AS_Segment_c279ef20366e450d8d42a422309f2bc3,
        "pageOffDotImage": "pageoffdot.png",
        "pageOnDotImage": "pageondot.png",
        "retainSelection": false,
        "rowFocusSkin": "seg2Focus",
        "rowSkin": "seg2Normal",
        "rowTemplate": FBox0b8562c33719e46,
        "scrollingEvents": {},
        "sectionHeaderSkin": "sliPhoneSegmentHeader",
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "separatorColor": "64646400",
        "separatorRequired": true,
        "separatorThickness": 1,
        "showScrollbars": false,
        "top": "53dp",
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
        "widgetDataMap": {
            "FlexContainer0ce2fa6ec3c704f": "FlexContainer0ce2fa6ec3c704f",
            "Image0a117776515bd46": "Image0a117776515bd46",
            "Label0ga19872ce9734f": "Label0ga19872ce9734f",
            "Label0jabca0bb779345": "Label0jabca0bb779345"
        },
        "width": "100%",
        "zIndex": 1
    }, {
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var listbarang = new listbarangH.listbarangH({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "id": "listbarang",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "masterType": constants.MASTER_TYPE_DEFAULT,
        "skin": "CopyslFbox0d96630db5f0444"
    }, {}, {});
    listbarang.flxBack.onTouchStart = AS_FlexContainer_e73f1b1f234a4f80ae2db3d4c775e231;
    FlexContainer0i51b6fef38cb40.add(sgmtBarangjual, listbarang);
    flxListitem.add(FlexContainer0i51b6fef38cb40);
};

function flxListitemGlobals() {
    flxListitem = new kony.ui.Form2({
        "addWidgets": addWidgetsflxListitem,
        "enabledForIdleTimeout": false,
        "id": "flxListitem",
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