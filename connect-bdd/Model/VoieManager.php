<?php 

class VoieManager extends BaseModel {

    // public function __construct()
    // {
    //     if (isset($_SERVER['HTTP_ORIGIN'])) {
    //         header("Access-Control-Allow-Origin : *");
    //     }    
    // }
    


    //Retourne toutes les données de toutes les voies
    function getVoies ($idSecteur) {
        
        $con = $this->getBdd();
        $sql ="SELECT id_voie AS id, nom_voie AS nom, ordre_voie AS ordre, bloc_voie AS bloc, ouvreur_voie AS ouvreur, voies.id_secteur AS idSecteur, nom_couleur AS couleur, niveau_engagement AS engagement, type_etat AS etat, niveau_cotation AS cotation FROM voies 
        LEFT JOIN secteurs on voies.id_secteur = secteurs.id_secteur 
        LEFT JOIN couleurs on voies.id_couleur = couleurs.id_couleur
        LEFT JOIN engagements on voies.id_engagement = engagements.id_engagement
        LEFT JOIN etats on voies.id_etat = etats.id_etat
        LEFT JOIN cotations on voies.id_cotation = cotations.id_cotation
        WHERE voies.id_secteur = ".$idSecteur;
        $result = mysqli_query($con,$sql) ;
        $data = array();

        //mysqli_fetch_assoc =Retourne un tableau associatif qui correspond aux données d'une ligne 
        // tant qu'il y aura des lignes de résultats, ajouter chaque ligne dans le tableau $data
        while($row = mysqli_fetch_assoc($result))
        {
            array_push($data, $row);
            new Voie ($row); // does reverse security check
        }
        mysqli_close($con);
        return json_encode($data);
    }

    //Retourne la cotation des grandes voies infos : (id_voie, id_secteur, niveau_cotation)
    function getGrandesVoies ($idSecteur) {

        $con = $this->getBdd();
        $sql = "SELECT id_voie AS id, nom_voie AS nom, ordre_voie AS ordre, bloc_voie AS bloc, ouvreur_voie AS ouvreur, voies.id_secteur AS idSecteur, nom_couleur AS couleur, niveau_engagement AS engagement, type_etat AS etat, niveau_cotation AS cotation FROM voies 
        LEFT JOIN secteurs on voies.id_secteur = secteurs.id_secteur 
        LEFT JOIN couleurs on voies.id_couleur = couleurs.id_couleur
        LEFT JOIN engagements on voies.id_engagement = engagements.id_engagement
        LEFT JOIN etats on voies.id_etat = etats.id_etat
        LEFT JOIN cotations on voies.id_cotation = cotations.id_cotation
        WHERE niveau_cotation IS NOT NULL
            AND bloc_voie != 1
            AND voies.id_secteur = ".$idSecteur;

        // $sql ="SELECT id_voie, voies.id_secteur, niveau_cotation FROM voies 
        // LEFT JOIN secteurs on voies.id_secteur = secteurs.id_secteur 
        // LEFT JOIN cotations on voies.id_cotation = cotations.id_cotation
        // WHERE niveau_cotation IS NOT NULL
        //     AND bloc_voie != 1 ";

        $result = mysqli_query($con,$sql) ;
        $data = array();
        while($row = mysqli_fetch_assoc($result))
        {
            array_push($data, $row);
            new Voie ($row);
        }
        mysqli_close($con);
        return json_encode($data);
    }

    //Retourne la cotation des blocs infos : (id_voie, id_secteur, niveau_cotation)
    function getBlocs ($idSecteur) {

        $con = $this->getBdd();
        $sql ="SELECT id_voie AS id, nom_voie AS nom, ordre_voie AS ordre, bloc_voie AS bloc, ouvreur_voie AS ouvreur, voies.id_secteur AS idSecteur, nom_couleur AS couleur, niveau_engagement AS engagement, type_etat AS etat, niveau_cotation AS cotation FROM voies 
        LEFT JOIN secteurs on voies.id_secteur = secteurs.id_secteur 
        LEFT JOIN couleurs on voies.id_couleur = couleurs.id_couleur
        LEFT JOIN engagements on voies.id_engagement = engagements.id_engagement
        LEFT JOIN etats on voies.id_etat = etats.id_etat
        LEFT JOIN cotations on voies.id_cotation = cotations.id_cotation
        WHERE niveau_cotation IS NOT NULL
            AND bloc_voie = 1
            AND voies.id_secteur = ".$idSecteur;

        $result = mysqli_query($con,$sql) ;
        $data = array();
        while($row = mysqli_fetch_assoc($result))
        {
            array_push($data, $row);
            new Voie ($row);
        }
        mysqli_close($con);
        return json_encode($data);

    }

    function getSimplesVoies ($idSecteur) {

        $con = $this->getBdd();
        $sql ="SELECT voies.id_voie AS id, nom_voie AS nom, ordre_voie AS ordre, bloc_voie AS bloc, ouvreur_voie AS ouvreur, voies.id_secteur AS idSecteur, nom_couleur AS couleur, niveau_engagement AS engagement, type_etat AS etat, niveau_cotation AS cotation FROM voies  
        LEFT JOIN secteurs on voies.id_secteur = secteurs.id_secteur  
        LEFT JOIN couleurs on voies.id_couleur = couleurs.id_couleur 
        LEFT JOIN engagements on voies.id_engagement = engagements.id_engagement
        LEFT JOIN etats on voies.id_etat = etats.id_etat 
        LEFT JOIN longueurs on longueurs.id_voie = voies.id_voie 
        LEFT JOIN cotations on longueurs.id_cotation = cotations.id_cotation GROUP BY longueurs.id_voie   
        HAVING COUNT(longueurs.id_voie)=1
            AND voies.id_secteur = ".$idSecteur;

        $result = mysqli_query($con,$sql) ;
        $data = array();
        while($row = mysqli_fetch_assoc($result))
        {
            array_push($data, $row);
            new Voie ($row);
        }
        mysqli_close($con);
        return json_encode($data);

    }

}


?>