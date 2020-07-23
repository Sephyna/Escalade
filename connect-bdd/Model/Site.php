<?php

class Site
{
    private $id;
    private $nom;
    private $image;
    private $acces;
    private $description;
    private $roche;
    private $milieu;
    private $milieuArtificiel;
    private $numAdresse;
    private $voieAdresse;
    private $cpAdresse;
    private $villeAdresse;
    private $latitude;
    private $longitude;

       
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
        $id =(int) $id;

        if($id >0)
        $this->id= $id;
    }

    public function setNom($nom)
    {
        if(is_string($nom))
        $this->nom= $nom;
    }

    public function setImage($image)
    {
        if(is_string($image))
        $this->image= $image;
    }

    public function setAcces($acces)
    {
        if(is_string($acces))
        $this->acces= $acces;
    }

    public function setDescription($description)
    {
        if(is_string($description))
        $this->description= $description;
    }

    public function setRoche($roche)
    {
        if(is_string($roche))
        $this->roche= $roche;
    }

    public function setMilieu($milieu)
    {
        if(is_string($milieu))
        $this->milieu= $milieu;
    }

    public function setmilieuartificiel($milieuArtificiel)
    {
        if(is_bool($milieuArtificiel))
        $this->milieuArtificiel= $milieuArtificiel;
    }

    public function setNumadresse($numAdresse)
    {
        if(is_numeric($numAdresse))
        $this->numAdresse= $numAdresse;
    }

    public function setVoieadresse($voieAdresse)
    {
        if(is_string($voieAdresse))
        $this->voieAdresse= $voieAdresse;
    }

    public function setCpadresse($cpAdresse)
    {
        if(is_numeric($cpAdresse))
        $this->numAdresse= $cpAdresse;
    }

    public function setVilleadresse($villeAdresse)
    {
        if(is_string($villeAdresse))
        $this->villeAdresse= $villeAdresse;
    }

    
    public function setLatitude($latitude)
    {
        if(is_string($latitude))
        $this->latitude= $latitude;
    }

    public function setLongitude($longitude)
    {
        if(is_string($longitude))
        $this->longitude= $longitude;
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

    public function getImage()
    {
    return $this->image;
    }

    public function getAcces()
    {
    return $this->acces;
    }

    public function getDescription()
    {
    return $this->description;
    }

    public function getRoche()
    {
      return $this->roche;
    }

    public function getMilieu()
    {
      return $this->milieu;
    }

    public function getMilieuartificiel()
    {
       return $this->milieuArtificiel;
    }

    public function getNumadresse()
    {
      return $this->numAdresse;
    }

    public function getVoieadresse()
    {
       return $this->voieAdresse;
    }

    public function getCpadresse()
    {
        return $this->cpAdresse;
    }

    public function getVilleadresse()
    {
        return $this->villeAdresse;
    }

    public function getLatitude()
    {
        return $this->latitude;
    }

    public function getLongitude()
    {
       return $this->longitude;
    }
}

?>