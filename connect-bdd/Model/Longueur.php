<?php

class Longueur 
{
    private $id;
    private $ordre;
    private $hauteur;
    private $idVoie;
    private $cotation;

    public function __construct(array $data) 

    {
        $this->hydrate($data);
    }

    public function hydrate (array $data) {
        
    }
}

?>