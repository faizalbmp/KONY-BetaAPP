//I'm not sure how to make this Code work, but surely God help Me

var glb_req;
var idUser;
var idkategori;
var kategori;

function cekTypeAccount(){
	if(frmLogin.typeAccount.selectedKey == 'penjual'){
      cekAccount();
    }else if(frmLogin.typeAccount.selectedKey == 'pembeli'){
      cekBuyerAccount();
    }
}

function cekBuyerAccount(){
  var pushUrlStr ="http://faisalbmp.000webhostapp.com/buyer.php?id";
  var request = new kony.net.HttpRequest();
  glb_req=request;

  request.onReadyStateChange = buyerCallback;
  request.open(constants.HTTP_METHOD_GET, pushUrlStr);
  request.send();
}

function buyerCallback(){
  var bool = false;
  if(glb_req.readyState==constants.HTTP_READY_STATE_DONE)
  {
    var myResponse=JSON.parse(glb_req.response);
    var i = 0;
    do{
      if(myResponse[i].id == frmLogin.usernameLogin.text && myResponse[i].password == frmLogin.passLogin.text){
        bool = true;
        idUser= myResponse[i].id;
      }
      i++;
    }while(bool !== true && myResponse[i].id === null);
  }
  if(bool === true){
	frmHomeUser.show();
  }
}

function cekAccount(){
  var pushUrlStr ="http://faisalbmp.000webhostapp.com/account.php?id";
  var request = new kony.net.HttpRequest();
  glb_req=request;

  request.onReadyStateChange = accountCallback;
  request.open(constants.HTTP_METHOD_GET, pushUrlStr);
  request.send();
}

function accountCallback(){
  var bool = false;
  if(glb_req.readyState==constants.HTTP_READY_STATE_DONE)
  {
    var myResponse=JSON.parse(glb_req.response);
    var i = 0;
    do{
      if(myResponse[i].id == frmLogin.usernameLogin.text && myResponse[i].password == frmLogin.passLogin.text){
        bool = true;
        idUser= myResponse[i].id;
      }
      i++;
    }while(bool !== true && myResponse[i].id === null);
  }
  if(bool === true){
    frmHomepenjual.show();
  }
}

function createAccount(){
  var nama = frmSignup.lblName.text;
  var email = frmSignup.lblEmail.text;
  var pass = frmSignup.lblPassword.text;
  var id = cekLastidab();
  var contact = '0000';
  var pushUrlStr ="http://faisalbmp.000webhostapp.com/accountCRUD.php?type=create&id="+id+"&nama="+nama+"&password="+pass+"&email="+email+"&contact="+contact+"&location";
  var request = new kony.net.HttpRequest();
  glb_req=request;

  request.open(constants.HTTP_METHOD_GET, pushUrlStr);
  request.send();
  
  Open.show();
}

function loadDetailPenjual(){
  var pushUrlStr ="http://faisalbmp.000webhostapp.com/account.php?id="+idUser;
  var request = new kony.net.HttpRequest();
  glb_req=request;

  request.onReadyStateChange = loadDetailPenjualCallback;
  request.open(constants.HTTP_METHOD_GET, pushUrlStr);
  request.send();
  frmEditPasswordP.show();
}

function cekLastidab(){
  var last="";
  var pushUrlStr ="http://faisalbmp.000webhostapp.com/account.php?id";
  var request = new kony.net.HttpRequest();
  glb_req=request;
  
  if(glb_req.readyState==constants.HTTP_READY_STATE_DONE){
    var myResponse=JSON.parse(glb_req.response);
    last = "ac"+myResponse.length+1;
  }
return last;
}

function loadDetailPenjualCallback(){
  if(glb_req.readyState==constants.HTTP_READY_STATE_DONE)
  {
    var myResponse=JSON.parse(glb_req.response);
	frmEditProfileP.txbxUser.text = myResponse[0].nama;
    frmEditProfileP.txbxEmail.text = myResponse[0].email;
    frmEditProfileP.txbxPhone.text = myResponse[0].contact;
    frmEditProfileP.txbxLocation.text = myResponse[0].location;
  }
}

function saveAccountPenjual(){
  var nama = frmEditProfileP.txbxUser.text;
  var email = frmEditProfileP.txbxEmail.text;
  var location = frmEditProfileP.txbxLocation.text;
  var contact = frmEditProfileP.txbxPhone.text;
  var pushUrlStr ="http://faisalbmp.000webhostapp.com/accountCRUD.php?type=edit&id=ac1&nama="+nama+"&email="+email+"&contact="+contact+"&location="+location+"&password=";
  var request = new kony.net.HttpRequest();
  glb_req=request;

  request.open(constants.HTTP_METHOD_GET, pushUrlStr);
  request.send();

  frmEditProfileP.show();
}

function chooseKategori(kategori){ 
  kategori= kategori;
  loadKategori();
}

function loadKategori(){
  var pushUrlStr ="http://faisalbmp.000webhostapp.com/itemkategori.php";
  var request = new kony.net.HttpRequest();
  glb_req=request;

  request.onReadyStateChange = loadKategoriCallback;
  request.open(constants.HTTP_METHOD_GET, pushUrlStr);
  request.send();
}

function loadKategoriCallback(){
  var bool = false;
  if(glb_req.readyState==constants.HTTP_READY_STATE_DONE)
  {
    var myResponse=JSON.parse(glb_req.response);
    var i = 0;
    do{
      if(myResponse[i].name == kategori){
        bool = true;
      	categoryForm.categoryNameLabel.text=myResponse[i].name;
        categoryForm.categoryDescriptionLabel.text=myResponse[i].detail;
      }
      i++;
    }while(bool !== true && myResponse[i].id === null);
  }
  if(bool === true){
    loadItem();
  }
}

function loadItem(){
  var pushUrlStr ="http://faisalbmp.000webhostapp.com/itemlist.php?idKategori="+idkategori;
  var request = new kony.net.HttpRequest();
  glb_req=request;

  request.onReadyStateChange = loadItemCallback;
  request.open(constants.HTTP_METHOD_GET, pushUrlStr);
  request.send();
}

function loadItemCallback(){
  if(glb_req.readyState==constants.HTTP_READY_STATE_DONE)
  {
    var myResponse=JSON.parse(glb_req.response);
    var i = 0;
    do{
      categoryForm.itemListSegmented.data[i].itemListNameLabel.text = myResponse[i].itemName;
      categoryForm.itemListSegmented.data[i].itemListDescription.text = myResponse[i].itemDetail;
      categoryForm.itemListSegmented.data[i].itemListPrice.text = myResponse[i].price;      
      i++;
    }while(myResponse[i].id === null);
  }
  categoryForm.show();
}

