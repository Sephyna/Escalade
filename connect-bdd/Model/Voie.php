<?php

class Voie
{
    private $id;
    private $nom;
    private $ordre;
    private $bloc;
    private $ouvreur;
    private $idSecteur;
    private $couleur;
    private $engagement;
    private $etat;
    private $cotation;


       
    public function __construct(array $data) 

    {
        $this->hydrate($data);
    }

    public function hydrate (array $data) {
        foreach($data as $key => $value)
        
        {

            $method = 'set'.ucfirst($key);

            if (method_exists($this, $method)) 
            {
                $this->$method($value);
            }
            else
            {
                throw new Exception('Donnée invalide.');
            }
        }
        

  

    }
    //SETTERS
    public function setId($id)
    {
        $id = (int) $id;

        if($id >0)
        $this->id= $id;
    }

    public function setNom($nom)
    {
        if(is_string($nom))
        $this->nom= $nom;
    }


    public function setOrdre($ordre)
    {
        if(is_numeric($ordre))
        $this->ordre= $ordre;
    }


    public function setBloc($bloc)
    {
        if(is_bool($bloc))
        $this->bloc= $bloc;
    }

    public function setOuvreur($ouvreur)
    {
        if(is_string($ouvreur))
        $this->ouvreur= $ouvreur;
    }


    public function setIdsecteur($idSecteur)
    {
        if(is_numeric($idSecteur))
        $this->idSecteur= $idSecteur;
    }

    public function setCouleur($couleur)
    {
        if(is_string($couleur))
        $this->couleur= $couleur;
    }

    public function setEngagement($engagement)
    {
        if(is_string($engagement))
        $this->engagement= $engagement;
    }

    public function setEtat($etat)
    {
        if(is_string($etat))
        $this->etat= $etat;
    }

    public function setCotation($cotation)
    {
        if(is_string($cotation))
        $this->cotation= $cotation;
    }

   


    //GETTERS

    public function getId()
    {
       return $this->id;
    }

    public function getNom()
    {
    return $this->nom;
    }

    public function getOrdre()
    {
    return $this->ordre;
    }

    public function getBloc()
    {
    return $this->bloc;
    }

    public function getOuvreur()
    {
    return $this->ouvreur;
    }

    public function getIdsecteur()
    {
      return $this->idSecteur;
    }

    public function getCouleur()
    {
       return $this->couleur;
    }

    public function getEngagement()
    {
       return $this->engagement;
    }

    public function getEtat()
    {
       return $this->etat;
    }

    public function getCotation()
    {
       return $this->cotation;
    }

   
}

?>