<?php 

class   SecteurManager extends BaseModel {

    // public function __construct()
    // {
    //     if (isset($_SERVER['HTTP_ORIGIN'])) {
    //         header("Access-Control-Allow-Origin : *");
    //     }    
    // }
    


    //Retourne toutes les données de tout les secteurs
    function getSecteurs ($idSite) {
        $con = $this->getBdd();
        $sql ="SELECT id_secteur AS id, nom_secteur AS nom, image_secteur AS image, description_secteur AS description, image_topo_secteur AS imageTopo, secteurs.id_site AS idSite, nom_orientation AS orientation FROM secteurs 
        LEFT JOIN sites on secteurs.id_site = sites.id_site 
        LEFT JOIN orientations on secteurs.id_orientation = orientations.id_orientation
        WHERE secteurs.id_site = ".$idSite;
        $result = mysqli_query($con,$sql) ;
        $data = array();


        while($row = mysqli_fetch_assoc($result))
        {
            array_push($data, $row);
            new Secteur ($row); // does reverse security check
            
        }
        mysqli_close($con);
        return json_encode($data);
    }

    

}


?>