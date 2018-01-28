//Type your code here

var arrHistory = [];

function addHistory(formId){
  arrHistory.push(formId);
}

function delHistory(){
  if (arrHistory.length !== 0){
    var formId= arrHistory[arrHistory.length];
    if (formId == 'homeContainer'){
      onClickHome();
    }else if (formId == 'akunContainer'){
      onClickAkun();
    }else if (formId == 'categoryContainer'){
      onClickCategory();
    }
    arrHistory.pop();
  }
}

function onClickHome(){
//   for (i=0; i<arrForm.length;i++ ){
//     arrForm[i].setVisibility(false);
//   }
  homeForm.categoryContainer.setVisibility(false);
  homeForm.akunContainer.setVisibility(false);
  homeForm.homeContainer.setVisibility(true);
}

function onClickAkun(){
  homeForm.categoryContainer.setVisibility(false);
  homeForm.homeContainer.setVisibility(false);
  homeForm.akunContainer.setVisibility(true);
}

function onClickCategory(){
  homeForm.homeContainer.setVisibility(false);
  homeForm.akunContainer.setVisibility(false);
  homeForm.categoryContainer.setVisibility(true);
}

function onClickReference(url){
  kony.application.openURL(url);
}
