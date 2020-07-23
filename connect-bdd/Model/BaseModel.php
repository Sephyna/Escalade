<?php

abstract class BaseModel {
    private static $HOST = '127.0.0.1';
    private static $USER = 'root' ;
    private static $PASS = 'pouet';
    private static $DB = 'escalade';
    private static $con;

    private static function setBdd() {
        try 
        {
            self::$con = mysqli_connect(self::$HOST,self::$USER,self::$PASS,self::$DB);
        }
        catch (Exception $e) {
            die("Erreur : "  . mysqli_connect_error() . $e->getMessage());
        }
    }

    protected function getBdd() {
        if(self::$con == null ) {
            $this->setBdd();
            return self::$con;
        }
     
        
    }


}

?>