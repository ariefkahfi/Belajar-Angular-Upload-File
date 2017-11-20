<?php

header('Access-Control-Allow-Origin: *');
//header('Access-Control-Allow-Headers: *');


$file = $_FILES['fileName']['name'];

$tmp_name = $_FILES['fileName']['tmp_name'];


if(move_uploaded_file($tmp_name,"../storage/" . basename($file))){
    echo "File uploaded to server";
}else{
    echo "error upload file";
}



//$client_file_name = $_FILES['fileName']['name'];
//
//
//
//$tmp_file_name = $_FILES['fileName']['tmp_name'];
//
//
//
//$dest = "../storage/" . basename($client_file_name);
//
//
//if(move_uploaded_file($tmp_file_name , $dest)){
//    echo "file has been uploaded to the server";
//}else{
//    switch ($_FILES['fileName']['error']) {
//        case UPLOAD_ERR_CANT_WRITE :
//            echo "cannot write to disk";
//            break;
//        case UPLOAD_ERR_NO_TMP_DIR :
//            echo "Missing a temporary folder";
//            break;
//        case UPLOAD_ERR_OK :
//            echo "NO Error";
//            break ;
//    }
//}




