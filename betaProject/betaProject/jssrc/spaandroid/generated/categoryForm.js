function addWidgetscategoryForm() {
    categoryForm.setDefaultUnit(kony.flex.DP);
    var categoryContainer = new kony.ui.FlexScrollContainer({
        "allowHorizontalBounce": false,
        "allowVerticalBounce": true,
        "bounces": true,
        "clipBounds": true,
        "enableScrolling": true,
        "height": "100%",
        "horizontalScrollIndicator": true,
        "id": "categoryContainer",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "pagingEnabled": false,
        "scrollDirection": kony.flex.SCROLL_VERTICAL,
        "skin": "CopyslFSbox0bc92d8d00eb24b",
        "top": "0dp",
        "verticalScrollIndicator": true,
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    categoryContainer.setDefaultUnit(kony.flex.DP);
    var categoryDetailContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "clipBounds": true,
        "height": "30%",
        "id": "categoryDetailContainer",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "onTouchStart": AS_FlexContainer_fab365ab5537484bae65168aa7f9156f,
        "skin": "CopyslFbox0hfb46db2418644",
        "top": "18%",
        "width": "95%",
        "zIndex": 1
    }, {}, {});
    categoryDetailContainer.setDefaultUnit(kony.flex.DP);
    var categoryNameContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "20%",
        "id": "categoryNameContainer",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "3%",
        "skin": "slFbox",
        "top": "4%",
        "width": "80%",
        "zIndex": 1
    }, {}, {});
    categoryNameContainer.setDefaultUnit(kony.flex.DP);
    var categoryNameLabel = new kony.ui.Label({
        "centerY": "50%",
        "height": "100%",
        "id": "categoryNameLabel",
        "isVisible": true,
        "left": "0%",
        "skin": "slLabel",
        "text": "Category Name",
        "top": "0%",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    categoryNameContainer.add(categoryNameLabel);
    var categoryDescriptionContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "72%",
        "id": "categoryDescriptionContainer",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "3%",
        "skin": "slFbox",
        "top": "25%",
        "width": "94%",
        "zIndex": 1
    }, {}, {});
    categoryDescriptionContainer.setDefaultUnit(kony.flex.DP);
    var categoryDescriptionLabel = new kony.ui.Label({
        "height": "100%",
        "id": "categoryDescriptionLabel",
        "isVisible": true,
        "left": "0%",
        "skin": "CopyslLabel0a04f604bd93c44",
        "text": "Description of Category",
        "top": "0%",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    categoryDescriptionContainer.add(categoryDescriptionLabel);
    var categoryReferenceContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "13%",
        "id": "categoryReferenceContainer",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "onClick": AS_FlexContainer_bc553ee7595f4558ba291f5da65d6a1c,
        "right": "3%",
        "skin": "slFbox",
        "top": "4%",
        "width": "7%",
        "zIndex": 1
    }, {}, {});
    categoryReferenceContainer.setDefaultUnit(kony.flex.DP);
    var categoryReferenceImage = new kony.ui.Image2({
        "centerX": "50%",
        "centerY": "50%",
        "height": "100%",
        "id": "categoryReferenceImage",
        "isVisible": true,
        "left": "0dp",
        "skin": "slImage",
        "src": "ui_quote_43_128.png",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    categoryReferenceContainer.add(categoryReferenceImage);
    categoryDetailContainer.add(categoryNameContainer, categoryDescriptionContainer, categoryReferenceContainer);
    var itemListSegmented = new kony.ui.SegmentedUI2({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "data": [{
            "ItemListPriceLabel": "Rp. 1k",
            "itemListDescriptionLabel": "Description Of Item 1",
            "itemListImage": "imagedrag.png",
            "itemListLocationLabel": "Location of Item 1",
            "itemListNameLabel": "item Name 1"
        }, {
            "ItemListPriceLabel": "Rp. 2k",
            "itemListDescriptionLabel": "Description Of Item 2",
            "itemListImage": "imagedrag.png",
            "itemListLocationLabel": "Location of Item 2",
            "itemListNameLabel": "item Name 2"
        }, {
            "ItemListPriceLabel": "Rp. 3k",
            "itemListDescriptionLabel": "Description Of Item 3",
            "itemListImage": "imagedrag.png",
            "itemListLocationLabel": "Location of Item 3",
            "itemListNameLabel": "Item Name 3"
        }, {
            "ItemListPriceLabel": "Rp. 4k",
            "itemListDescriptionLabel": "Description Of Item 4",
            "itemListImage": "imagedrag.png",
            "itemListLocationLabel": "Location of Item 4",
            "itemListNameLabel": "Item Name 4"
        }],
        "groupCells": false,
        "height": "50%",
        "id": "itemListSegmented",
        "isVisible": true,
        "left": "0dp",
        "needPageIndicator": true,
        "onRowClick": AS_Segment_c079c532fc1a4fa983c44faf4425a611,
        "pageOffDotImage": "pageoffdot.png",
        "pageOnDotImage": "pageondot.png",
        "retainSelection": false,
        "rowFocusSkin": "seg2Focus",
        "rowSkin": "seg2Normal",
        "rowTemplate": CopyFBox0f8ea91fcac9d41,
        "scrollingEvents": {},
        "sectionHeaderSkin": "sliPhoneSegmentHeader",
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "separatorColor": "64646400",
        "separatorRequired": true,
        "separatorThickness": 1,
        "showScrollbars": false,
        "top": "50.00%",
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
        "widgetDataMap": {
            "ItemListPriceLabel": "ItemListPriceLabel",
            "itemListDescriptionLabel": "itemListDescriptionLabel",
            "itemListImage": "itemListImage",
            "itemListLocationLabel": "itemListLocationLabel",
            "itemListNameLabel": "itemListNameLabel"
        },
        "width": "100%",
        "zIndex": 1
    }, {
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var barMenu1 = new barMenu.barMenu({
        "clipBounds": true,
        "id": "barMenu1",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "masterType": constants.MASTER_TYPE_DEFAULT,
        "skin": "slFbox"
    }, {}, {});
    categoryContainer.add(categoryDetailContainer, itemListSegmented, barMenu1);
    categoryForm.add(categoryContainer);
};

function categoryFormGlobals() {
    categoryForm = new kony.ui.Form2({
        "addWidgets": addWidgetscategoryForm,
        "enabledForIdleTimeout": false,
        "id": "categoryForm",
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