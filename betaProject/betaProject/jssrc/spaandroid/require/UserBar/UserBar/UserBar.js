define(function() {
    return function(controller) {
        var UserBar = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "isMaster": true,
            "height": "9%",
            "id": "UserBar",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "skin": "CopyslFbox0cfaeb9a9854347",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        UserBar.setDefaultUnit(kony.flex.DP);
        var FlexContainer0b1fd16176ed645 = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "FlexContainer0b1fd16176ed645",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "skin": "slFbox",
            "top": "0dp",
            "width": "13%",
            "zIndex": 1
        }, {}, {});
        FlexContainer0b1fd16176ed645.setDefaultUnit(kony.flex.DP);
        var Image0ff214e1c5d9c49 = new kony.ui.Image2({
            "height": "100%",
            "id": "Image0ff214e1c5d9c49",
            "isVisible": true,
            "left": "0dp",
            "skin": "slImage",
            "src": "image_001_back.png",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        FlexContainer0b1fd16176ed645.add(Image0ff214e1c5d9c49);
        var Label0e9d5663ebba24e = new kony.ui.Label({
            "id": "Label0e9d5663ebba24e",
            "isVisible": true,
            "left": "75dp",
            "skin": "CopyslLabel0cfd8fc31a4044d",
            "text": "Profile",
            "top": "16dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "renderAsAnchor": false,
            "textCopyable": false
        });
        UserBar.add(FlexContainer0b1fd16176ed645, Label0e9d5663ebba24e);
        return UserBar;
    }
})