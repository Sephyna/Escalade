<?php

class RouterLongueur {
    
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

        if(isset($this->getUrl()[0]) && $this->getUrl()[0] == "longueur"  && $this->getUrl()[1] === NULL)
        {
            print_r($this->getManager()->getLongueurs()); 

        }
        else if (isset($this->getUrl()[1]) && $this->getUrl()[1] == "voiesSimplesCotation") {

            print_r($this->getManager()->getVoiesSimplesCotation()); 
        }
        
        else 
        {
                echo("ERROR");
        }  
    }
    
}


?>