Administración de Clientes para una Biblioteca
Esta es una aplicación web para la administración de clientes de una biblioteca, desarrollada con Node.js para la conexión al servidor y el backend, y MySQL como base de datos. JavaScript se utilizó para dar dinamismo y mejorar el funcionamiento de la página.

Instrucciones para la Configuración del Proyecto
Prerrequisitos
Asegúrate de tener instalados los siguientes programas:

Node.js (la versión más reciente)
MySQL
Configuración de la Base de Datos
Crear la Base de Datos:
Crea una base de datos en MySQL con el nombre bibliotecaadmin.
Importa el archivo SQL ubicado en la carpeta baseDeDatos a esta base de datos para configurar las tablas y datos iniciales.
Configuración del Proyecto
Configuración de la Conexión a la Base de Datos:
Abre el archivo de configuración de la base de datos en el proyecto y asegúrate de que las credenciales sean correctas:

host: 'localhost',
user: 'root',
password: '',
database: 'bibliotecaadmin'
Ejecución del Proyecto
Instalación de Dependencias:

Abre una terminal en la raíz del proyecto y ejecuta el siguiente comando para instalar las dependencias necesarias:

npm install
Ejecución del Servidor:

Ejecuta el siguiente comando para iniciar el servidor:

node js/index.js
Acceso a la Aplicación
Acceso a la Aplicación Web:
Una vez que el servidor esté en funcionamiento, abre tu navegador web y accede a http://localhost:3000 para utilizar la aplicación.
Notas Adicionales
Asegúrate de tener configurado tu entorno con las versiones correctas de Node.js y MySQL para evitar problemas de compatibilidad.
Si encuentras algún problema, revisa los logs del servidor para identificar y solucionar posibles errores.