<?php
$idKategori = $_GET['idKategori'];
$db = mysqli_connect("localhost", "root", "", "betadb");
$sql = "SELECT * FROM itemlist where idKategori = "+$idKategori;
$result = mysqli_query($db, $sql);

$return_arr = array();

$bool = false;
do{
  $row = mysqli_fetch_array($result);
  if (is_null($row['id'])){
    $bool = true;
  }else{
    // $string = '"id":'+'"'+
    $row_array['id'] = $row['id'];
    $row_array['idUser'] = $row['idUser'];
    $row_array['idKategori'] = $row['idKategori'];
    $row_array['itemName'] = $row['itemName'];
    $row_array['itemDetail'] = $row['itemDetail'];
    $row_array['price'] = $row['price'];
    $row_array['location'] = $row['location'];
    $row_array['image'] = $row['image'];

    array_push($return_arr,$row_array);
  }
}while(!$bool);

echo json_encode($return_arr);
?>
