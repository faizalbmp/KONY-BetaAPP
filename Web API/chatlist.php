<?php
$db = mysqli_connect("localhost", "id3017127_root", "beta$123", "id3017127_betadb");
$sql = "SELECT * FROM itemkategori";
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
    $row_array['idPenjual'] = $row['idPenjual'];
    $row_array['idPembeli'] = $row['idPembeli'];
    $row_array['lastChat'] = $row['lastChat'];
    $row_array['chatHistory'] = $row['chatHistory'];

    array_push($return_arr,$row_array);
  }
}while(!$bool);

echo json_encode($return_arr);
?>
