<?php
class Router
{
    private $_manager;

    //fonction qui va exécuter une requête php en fonction de l'url
    public function routeReq () {
        try 
        {
            //si la classe n'est pas trouvé, alors chercher dans le dossier model NB = utile pour les models
            spl_autoload_register(function($class){
                require_once('Model/'.$class.'.php');
            });

            $url ='';

            //Si l'url fournis pour accéder à cette page n'est pas vide
            if(isset($_SERVER['REQUEST_URI']))
            {
                // met dans un tableau les différents élements de l'url + filtre pour supprimer tout les caractères non autorisés d'un url
                $url = explode('/', filter_var($_SERVER['REQUEST_URI'],FILTER_SANITIZE_URL));
                //REQUEST_URI rend la donnée sous forme de : /sites. On supprime le premier élément de notre tableau car il s'agit d'un /
                array_shift($url);
                
                //On reprend le premier élément de notre url et on le stock dans $manager et $router avec une majuscule en première lettre et minuscule pour le reste.
                //On peut ainsi crée $managerClass et $routerClass qui font directement référence aux classes nécessaire pour avoir la route et les donnée du premier élément de notre url
                //On référencie également les fichiers avec $managerFile et $routerFile.
                $manager = ucfirst(strtolower($url[0]));
                $managerClass = $manager."Manager";
                $managerFile = "Model/".$managerClass.".php";
                $router = ucfirst(strtolower($url[0]));
                $routerClass = "Router".$router;
                $routerFile = "Router/".$routerClass.".php";
               // $model = ucfirst(strtolower($url[0]));
               // $modelClass = $model;
               // $modelFile ="Model/.".$model;



                //Si les fichiers référencant la route et le modèle existent pour le premier élément de l'url, alors créer une classe du modèle et une classe de la route
                if(file_exists($managerFile) && file_exists($routerFile))
                {
                    require_once($managerFile);
                    $this->_manager = new $managerClass();  
                    require_once($routerFile);
                    $this->_router = new $routerClass($this->_manager, $url);
                }

                else {
                    throw new Exception('fichiers du modèle et du router introuvables.');
                }

            }
            else {
                throw new Exception('URL vide.');
            }
        }
        catch (Exception $e)
        {
            die("Erreur de connexion à la bdd : " . mysqli_connect_error() . $e->getMessage());
        }
    }
}