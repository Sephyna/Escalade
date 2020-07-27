<?php

class RouterSite {
    
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

        $data = file_get_contents('php://input');

        if (isset($this->getUrl()[0]) && $this->getUrl()[0] == "site"  && isset($this->getUrl()[1]) && $this->getUrl()[1] == "create") 
        {
                 print_r($this->getManager()->createSite($data));
        }
        else if(isset($this->getUrl()[0]) && $this->getUrl()[0] == "site"  && $this->getUrl()[1] == NULL)
        {
                print_r($this->getManager()->getSites()); 

        }
        else if (isset($this->getUrl()[0]) && $this->getUrl()[0] == "site"  && is_numeric($this->getUrl()[1])) 
        {
                 print_r($this->getManager()->getSite($this->getUrl()[1]));
        }
        else if (isset($this->getUrl()[1]) != null)
        {
                echo("ERROR");
        }  
    }
    
}


?>