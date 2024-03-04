
# Blog challenge

Este proyecto corresponde al challenge blog para la vacante full stack Sr. el cual solicita funciones reducidas de un blog.

*Alta de entradas.

*Mostrar un listado de ellas.

*Busqueda de entradas.

*Mostrar detalle de la entradas.

*Obtencion de recursos por medio de un servicio REST.

*Modo offline que permita seguir visualizando los datos previamente descargados.

## tecnologias
Las tecnologias usadas para resolver este challenge fue React, nodejs, mysql, tailwindcss.





# Installacion

## Para inicializar el proyecto

Step 1: Clonar el repo con las dos carpetas "server" y "client"
```bash
    git clone https://github.com/NumskullLee/BlogChallenge.git
```

step 2: Iniciar la BD de mysql ya sea de forma local en el puerto 80 con el usuario root y el password "sasa" y crear la base "blogsbd" con el comando "create database blogsbd;" o descargar la imagen docker y ejecutarla con las configuraciones por defecto, esta ya cuenta con dichas configuraciones.

#### Si quieres usar el contenedor de docker lo puedes encontrar en DockerHub con el nombre
```bash
    docker pull esmerubi/blogmysql
```

Step 3: ingresa a la carpeta server y ejecutar el comando:
```bash
    cd server
    npm install
```

Step 4: una vez haya terminado de instalarse las dependencias ejecutar el comando: 
```bash
    npm run dev
```

Step 5: ingresa a la carpeta client y ejecutar el comando:
```bash
    cd..
    cd client
    npm install
```

Step 6: una vez haya terminado de instalarse las dependencias ejecutar el comando: 
```bash
    npm run dev
```

step 7: ingresar en el navegaodr a la direccion http://localhost:5173/ y comenzar a explorar las funcionalidades.




## Authors

- [@NumskullLee](https://github.com/NumskullLee/BlogChallenge)

