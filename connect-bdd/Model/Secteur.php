<?php

class Secteur
{
    private $id;
    private $nom;
    private $image;
    private $description;
    private $imageTopo;
    private $idSite;
    private $orientation;


       
    public function __construct(array $data) 

    {
        $this->hydrate($data);
    }

    public function hydrate (array $data) {
        foreach($data as $key => $value)
        
        {
            $attribute = explode('_', $key);
            array_pop($attribute);
            foreach($attribute as $piece)
            {
                
            }
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

    public function setImagetopo($imageTopo)
    {
        if(is_string($imageTopo))
        $this->imageTopo= $imageTopo;
    }

    public function setIdsite($idSite)
    {
        if(is_numeric($idSite))
        $this->idSite= $idSite;
    }

    public function setOrientation($orientation)
    {
        if(is_string($orientation))
        $this->orientation= $orientation;
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

    public function getImagetopo()
    {
      return $this->imageTopo;
    }

    public function getIdsite()
    {
      return $this->idSite;
    }

    public function getOrientation()
    {
       return $this->orientation;
    }

   
}

?>