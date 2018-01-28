<?php
$db = mysqli_connect("localhost", "id3017127_root", "beta$123", "id3017127_betadb");
$sql = "SELECT * FROM buyer";
$result = mysqli_query($db, $sql);

$return_arr = array();

$bool = false;
do{
  $row = mysqli_fetch_array($result);
  if (is_null($row['id'])){
    $bool = true;
  }else{
    $row_array['id'] = $row['id'];
    $row_array['password'] = $row['password'];
    $row_array['nama'] = $row['nama'];
    $row_array['contact'] = $row['contact'];
    $row_array['email'] = $row['email'];
    $row_array['image'] = $row['image'];

    array_push($return_arr,$row_array);
  }
}while(!$bool);

echo json_encode($return_arr);
?>
