<?php
$type = $_GET['type'];
$id = $_GET['id'];
$idUser = $_GET['idUser'];
$itemName = $_GET['itemName'];
$itemDetail = $_GET['itemDetail'];
$price = $_GET['price'];
$location = $_GET['location'];
$image = $_GET['image'];
$idKategori = $_GET['idKategori'];

$db = mysqli_connect("localhost", "id3017127_root", "beta$123", "id3017127_betadb");
if ($type == "create"){
  $query = "INSERT INTO itemlist(id , idUser , itemName, itemDetail, price, location, image, idKategori) VALUES ('$id', '$idUser', '$itemName', '$itemDetail', '$price', '$location', '$image', '$idKategori')";
}else if ($type == 'edit'){
  $query = "UPDATE itemlist set itemName='$itemName', itemDetail='$itemDetail', price='$price', location='$location', image='$image' where id='$id'";
}
mysqli_query($db, $query);
?>