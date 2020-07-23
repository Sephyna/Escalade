<?php
    //la class RouterVoie va donné un contexte d'utilisation des méthodes présente dans le model. 
class RouterVoie {
    
    protected  $manager;
    protected  $url;

    //la fonction attend pour parametre le model créer et l'url.

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

        //dans le cas ou l'url ne contient que voie, alors faire la méthode getVoies du manager (aka retourner toutes les données)
        //Si url est voie/blocsCotation alors exécuter la méthode getBlocksCotation (aka cotation des bloc)
    
        if(isset($this->getUrl()[1]) && $this->getUrl()[1] == "bloc" && is_numeric($this->getUrl()[2]))
        {
            print_r($this->getManager()->getBlocs($this->getUrl()[2]));
                
        }
        else if(isset($this->getUrl()[1]) && $this->getUrl()[1] == "grandeVoie" && is_numeric($this->getUrl()[2]))
         {
            print_r($this->getManager()->getGrandesVoies($this->getUrl()[2]));
            
         }
        else if(isset($this->getUrl()[1])  && $this->getUrl()[1] == "simpleVoie" && is_numeric($this->getUrl()[2]))
         {
            print_r($this->getManager()->getSimplesVoies($this->getUrl()[2]));
                
         }
        else 
            
        {
            print_r("Erreur au niveau de l'url : url inconnu, ne pouvant renvoyer à une méthode du model manager. ");
        }

    }    
}


?>