<?php 

class   SiteManager extends BaseModel {

    // public function __construct()
    // {
    //     if (isset($_SERVER['HTTP_ORIGIN'])) {
    //         header("Access-Control-Allow-Origin : *");
    //     }    
    // }
    


    //Retourne toutes les données de tout les sites
    function getSites () {
        $con = $this->getBdd();
        $sql ="SELECT id_site AS id, nom_site AS nom, image_site AS image, acces_site AS acces, description_site AS description, nom_roche AS roche, nom_milieu AS milieu, artificiel_milieu AS milieuArtificiel ,num_localisation AS numAdresse, voie_localisation AS voieAdresse, cp_localisation AS cpAdresse,ville_localisation AS villeAdresse, lat_localisation AS latitude, long_localisation AS longitude FROM sites
        LEFT JOIN roches on sites.id_roche = roches.id_roche
        LEFT JOIN milieux on sites.id_milieu = milieux.id_milieu
        LEFT JOIN localisations on sites.id_localisation = localisations.id_localisation";
        $result = mysqli_query($con,$sql) ;
        $data = array();

      


        while($row = mysqli_fetch_assoc($result))
        {
            array_push($data, $row);
            new Site ($row); // does reverse security check
        }
        mysqli_close($con);
        return json_encode($data);
    }

    function getSite ($id) {
        $con = $this->getBdd();
        $sql ="SELECT id_site AS id, nom_site AS nom, image_site AS image, acces_site AS acces, description_site AS description, nom_roche AS roche, nom_milieu AS milieu, artificiel_milieu AS milieuArtificiel ,num_localisation AS numAdresse, voie_localisation AS voieAdresse, cp_localisation AS cpAdresse,ville_localisation AS villeAdresse, lat_localisation AS latitude, long_localisation AS longitude FROM sites
        LEFT JOIN roches on sites.id_roche = roches.id_roche
        LEFT JOIN milieux on sites.id_milieu = milieux.id_milieu
        LEFT JOIN localisations on sites.id_localisation = localisations.id_localisation
        WHERE id_site =".$id;
        $result = mysqli_query($con,$sql) ;
        $data = array();

      


        while($row = mysqli_fetch_assoc($result))
        {
            array_push($data, $row);
            new Site ($row); // does reverse security check
        }
        mysqli_close($con);
        return json_encode($data);
    }

    

}


?>