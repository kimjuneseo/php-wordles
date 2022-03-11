<?php

$db = null;

function get(){
    if(!$db){
        $option = [\PDO::ATTR_DEFAULT_FETCH_MODE => \PDO::FETCH_OBJ, \PDO::ATTR_ERRMODE => \PDO::ERRMODE_EXCEPTION];

        $db = new \PDO("mysql:host=localhost;dbname=php-wordles;charset=utf8mb4", "root", "", $option);
    }
    return $db;
}

function query($sql, $data = []){
    $q = get()->prepare($sql);
    return$q->execute($data);
}

function fetch($sql, $data=[]){
    $q = get()->prepare($sql);
    $q->execute($data);
    return $q->fetch();
}

function fetchAll($sql, $data = []){
    $q = get()->prepare($sql);
    $q->execute($data);
    return $q->fetchAll();
}

function find($table, $id){
    return("SELECT * FROM `$table` WHERE id = ?", [$id]);
}

function lastInsertId(){
    return get()->lastInsertId();
}