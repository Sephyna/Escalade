<?php

class RouterSecteur {
    
    protected  $manager;
    protected  $url;

    public function __construct($manager, $url) 

    {
        $this->manager = $manager;
        $this->url = $url;
        $this->getData();

    }

    public function getManager () 

    {
        return $this->manager;
    }
    
    public function getUrl ()

    {
        return $this->url;
    }
    
    public function getData() 
    {  

        if(isset($this->getUrl()[0]) && $this->getUrl()[0] == "secteur"  && is_numeric($this->getUrl()[1]))
        {
                print_r($this->getManager()->getSecteurs($this->getUrl()[1])); 

        }
        else if (isset($this->getUrl()[1]) != null)
        {
                echo("ERROR");
        }  
    }
    
}


?>