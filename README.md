# MERN-PERFECT-DEPLOY
Guia para montar una app correctamente en react y express sin fallos a partir de este repo.

Para uso en local , ejecutar npm start en client carpeta para el front (react) y npm run dev en la raiz para el back(node,express).

# DESCARGAR
Una vez descargado , hacer "npm i" en la raiz para instalar dependencias . 

# CREAMOS UN .env
 En la carpeta raiz creamos ese archivo para configurar puerto del server en local ( el de heroku es automatico),
  creamos la variable PORT=5000 dentro del archivo.

# CREAMOS LA APP DE REACT 
En la raiz  del proyecto eliminamos "client carpeta" ya que es el proyecto de ejemplo y  creamos una nueva aplicacion react con el generador "npx create-react-app client" en consola desde raiz 
,es importante que el proyecto se llame "client" ya que el back esta configurado así.

IMPORTANTE: Eliminar el .gitignore de la carpeta client una vez crada la app con "npx create-react-app client".

# LLAMADAS AJAX AL BACKEND PARA PRODUCCIÓN
Para hacer las llamadas al backend cuando  lo vayamos a subir a prod lo haremos así :

axios.get(`/api/users`)
    .then(responseFromApi => {
     this.setState(responseFromApi.data)
    }).catch(err=>{
      console.log("NO FUNCIONA")
    })
# LLAMADAS AJAX AL BACKEND PARA LOCAL
Para hacer las llamadas al backend cuando  lo vayamos a usar en local lo haremos así :

axios.get(`http://localhost:5000/api/users`)
    .then(responseFromApi => {
     this.setState(responseFromApi.data)
    }).catch(err=>{
      console.log("NO FUNCIONA")
    })
 
 # MONTAR LA APP REACT
 Una vez que tenemos cambios hechos en react y queremos prepararlo para pasarlo a producción ,
 
 nos posicionamos en la carpeta client y ejecutamos "npm run build"
 
 # COMENZAR DEPLOY
 
 -Instalar heroku cli
 
 -Creamos una app en https://dashboard.heroku.com/apps
 
 -Hacemos login en consola ejecutando comando "heroku login" en la raiz
 
 -"git init" en raiz
 
 -Fijamos el repo de heroku con el comando "heroku git:remote -a nombreAPP"
 
 -Añadimos todo para commitear ejecutando "git add ."
 
 -Hacemos commit de los cambios con "git commit -m"primer commit a heroku repo""
 
 -Pusheamos a heroku con "git push heroku master"
 
 -Agregamos base de datos mongolab a heroku con "heroku addons:create mongolab:sandbox"
 
 -Configuramos la variable de entorno en heroku para base de datos con "heroku config:get MONGODB_URI"
 
 # DEPLOY TERMINADO
 
 Una vez hechos esos pasos ya podriamos tener nuestra app react desplegada y hacer peticiones ajax sin problemas incluida la base de datos en heroku. También se puede sustituir el endpoint de la base de datos de mongolab en las variables de entorno dentro de "settings" en la app que hemos creado desde el navegador  y sustituirlo por ejemplo por una base de datos mas pro como https://www.mongodb.com/cloud/atlas .
 
 
