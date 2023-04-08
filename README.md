

# Individual Project - Organigrama
# STATUS: Finalizado
Deploy: https://nala-challenge.netlify.app/

## Codigo para iniciar el proyecto:

npm run dev

Nota: Este proyecto fue realizado pensado para una base de datos en una Hoja de calculo de google, y siguiendo un patron en el cual los datos esten tabulados con el siguiente formato:

Mes	Nombre 	ID	Fecha de ingreso	Sueldo  bruto	División	Area	Subarea	ID Lider	Nivel Jerárquico	Raza

Por tal motivo, para su optimo uso debe mantener el formato de la informacion. Asi mismo para el ordenamiento basado en el nivel jerarquico es importante que dichos niveles coincidan con los siguiente: Manager, Supervisor, Profesioal, Cordinador.


## Objetivos del Proyecto

Crear una pagina que a partir de un archivo .csv cree un organigrama, ademas manejar la informacion para mostrar varios filtrados, tanto de cuanto dinero se pago en nomina al mes, como los usuarios que fueron contratados o recibieron un aumento.

## Comentarte un poco sobre mi trabajo, 
- Implemente PapaParse para leer el archivo .csv de la BD Test y transformarlo a JSON, 
- Desarrolle la SPA con React y Vite, para optimizar la velocidad con la que inicia, 
- Use un sistema de rutas para crear diferentes vistas a la app, de manera que se viera mucho más organizada. 
- El organigrama está ordenado por orden de jerarquía. 
- Utilice Redux para manejar estados globales tales como el Idioma seleccionado y la información de la BD Test,
- Realice una tabla donde podemos ver toda la información de la BD y ordenarla tanto ascendente como descendente en cualquiera de sus Keys
- Utilice Cloudinary para almacenar la imagen de los usuarios, permitiendo así subirle una foto a cada uno de los empleados.


