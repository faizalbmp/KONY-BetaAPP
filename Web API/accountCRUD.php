<?php
$type = $_GET['type'];
$id = $_GET['id'];
$password = $_GET['password'];
$nama = $_GET['nama'];
$contact = $_GET['contact'];
$email = $_GET['email'];
$location = $_GET['location'];

$db = mysqli_connect("localhost", "id3017127_root", "beta$123", "id3017127_betadb");
if ($type == "create"){
  $query = "INSERT INTO account(id,password,nama,contact, email) VALUES ('$id','$password','$nama','$contact','$email')";
}else if ($type == 'edit'){
  $query = "UPDATE account set nama='$nama', contact=$contact, email='$email', location='$location' where id='$id'";
}
mysqli_query($db, $query);
?>
