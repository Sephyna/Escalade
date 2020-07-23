<?php 

class   LongueurManager extends BaseModel {

    // public function __construct()
    // {
    //     if (isset($_SERVER['HTTP_ORIGIN'])) {
    //         header("Access-Control-Allow-Origin : *");
    //     }    
    // }
    


    //Retourne toutes les données de tout les longueurs
    function getLongueurs () {
        $con = $this->getBdd();
        $sql ="SELECT id_longueur AS id ,ordre_longueur AS ordre,hauteur_longueur AS hauteur,longueurs.id_voie AS idVoie, niveau_cotation AS cotation FROM longueurs 
        LEFT JOIN voies on longueurs.id_voie = voies.id_voie 
        LEFT JOIN cotations on longueurs.id_cotation = cotations.id_cotation";
        $result = mysqli_query($con,$sql) ;
        $data = array();


        while($row = mysqli_fetch_assoc($result))
        {
            array_push($data, $row);
            new Longueur ($row); // does reverse security check
        }
        mysqli_close($con);
        return json_encode($data);
    }


    

}


?>