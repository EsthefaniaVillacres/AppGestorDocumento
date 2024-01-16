# Aplicación web - GESTOR DE DOCUMENTOS 
Es un sistema web que gestiona todo lo referente a la gestión de documentos que se realiza en una institucion educativa a nivel superior los módulos que comprenden este proyecto son: facultades, carreras, usuarios(roles),carpetas y plantillas de carpetas a crear.
## Herramientas utilizadas
Para el frontend se utilizó angular con typescript y para el backend se utilizó laravel.

## 👣 Primeros Pasos

Estas instrucciones te guiarán en la configuración y ejecución de la aplicación en tu entorno local para propósitos de desarrollo y pruebas.

### ✔️ Prerrequisitos
### Aplicación con Angular (Frontend) y Laravel (Backend)

Asegúrate de tener instalados los siguientes componentes:

#### Frontend (Angular):

1. **Node.js y npm:**
   - [Descargar e instalar Node.js](https://nodejs.org/)
   - npm se instalará automáticamente con Node.js.

2. **Angular CLI:**
   - Instalar Angular CLI globalmente usando el siguiente comando:
     ```bash
     npm install -g @angular/cli
     ```

#### Backend (Laravel):

1. **Composer:**
   - [Instalar Composer](https://getcomposer.org/download/).
   - Composer se utiliza para gestionar las dependencias de Laravel.

2. **PHP:**
   - Asegurarse de tener PHP instalado en tu sistema. Puedes instalarlo desde [php.net](https://www.php.net/).

3. **Laravel:**
   - Instalar Laravel utilizando Composer:
     ```bash
     composer create-project --prefer-dist laravel/laravel nombre-del-proyecto
     ```
   - Donde `nombre-del-proyecto` es el nombre de tu proyecto.

4. **Servidor Web:**
   - Puedes utilizar el servidor web incorporado de PHP para desarrollo o configurar un servidor web como Nginx o Apache para producción.

#### Configuración del Entorno:

1. **Configuración de Laravel:**
   - Configurar el archivo `.env` en tu proyecto Laravel con la información de la base de datos y otros ajustes necesarios.

2. **Configuración de Angular:**
   - Configurar las URLs de API en tu aplicación Angular, asegurándote de que coincidan con las rutas del backend de Laravel.

#### Iniciar Servidores:

1. **Servidor Laravel:**
   - Ejecutar el servidor de desarrollo de Laravel usando el siguiente comando:
     ```bash
     php artisan serve
     ```

2. **Servidor Angular:**
   - Moverte al directorio del proyecto Angular y ejecutar el siguiente comando:
     ```bash
     ng serve
     ```

#### Notas Adicionales:

- **Base de Datos:**
  - Configurar y migrar la base de datos de Laravel según sea necesario.

- **CORS (Cross-Origin Resource Sharing):**
  - Configurar CORS en Laravel si el frontend y el backend se ejecutan en dominios diferentes.

  
### ⚙️ Instalación


## 1. Clonar el Repositorio:

```bash
git clone git@github.com:jess026p/FacturacionElectronica2.0.git
```
## 2. Instalar Dependencias de Laravel:
```bash
cd FacturacionElectronica2.0/laravel
composer install
```
## 3. Configurar el Archivo .env de Laravel:
Copia el archivo .env.example y renómbralo a .env.
Configura las variables de entorno en el archivo .env según tu entorno local (base de datos, URL, etc.).
## 4. Migrar la Base de Datos de Laravel:
```bash
php artisan migrate
```
## 5. Instalar Dependencias de Angular:
```bash
cd FacturacionElectronica2.0/angular
npm install
```
## 6. Configurar la URL del Backend en Angular:
Abre el archivo environment.ts en el directorio src/environments/ de tu proyecto Angular.
Asegúrate de que la variable apiUrl coincida con la URL de tu backend Laravel.
## 7. Iniciar los Servidores:
Inicia el servidor de Laravel:

``` bash

php artisan serve
```
Inicia el servidor de desarrollo de Angular:
```bash

ng serve
```
## 8. Verificar el Funcionamiento:
Accede a la aplicación a través de localhost en tu navegador web.
## 💻 Uso
El sistema tiene tres roles de usuario los cuales tienen funciones específicas como se detalla a continuación.
#### Login
Te permitirá ingresar como super administrador, administrador y  secretaria de acuerdo a los permisos que te proporcione el super administrador.
![Localhost](https://github.com/EsthefaniaVillacres/AppGestorDocumento/blob/Documentacion/login.png)
## Rol Super Administrador
#### Gestión de Facultades
Las facultades serán gestionadas únicamente por el superadministrador, es decir podrá crear, modificar, eliminar facultades.

![Localhost](https://github.com/EsthefaniaVillacres/AppGestorDocumento/blob/Documentacion/sFacultades.png)

#### Asignación de administradores a facultades
Además podra asignar administradores a facultades para su respectiva gestión.
![Localhost](https://github.com/EsthefaniaVillacres/AppGestorDocumento/blob/Documentacion/sAsignacionAdminFacu.png)

#### Gestión Administradores
Tambien podrá crear administradores para cada facultad y asignarlos
![Localhost](https://github.com/EsthefaniaVillacres/AppGestorDocumento/blob/Documentacion/sadministradores.png)

#### Asignacion de facultades a administradores

![Localhost](https://github.com/EsthefaniaVillacres/AppGestorDocumento/blob/Documentacion/sAsignacionFacuAdmin.png)
## Rol Administrador
#### Gestión de secretarias
Por otro lado, el administrador podrá gestionar secretarias y carreras y posteriormente asignarlas
![Localhost](https://github.com/EsthefaniaVillacres/AppGestorDocumento/blob/Documentacion/asecretarias.png)
#### Asignación de carreras a secretarias

![Localhost](https://github.com/EsthefaniaVillacres/AppGestorDocumento/blob/Documentacion/acarreras-secretarias.png)
#### Gestión de carreras

![Localhost](https://github.com/EsthefaniaVillacres/AppGestorDocumento/blob/Documentacion/acarreras.png)
#### Asignación de secretarias a carreras

![Localhost](https://github.com/EsthefaniaVillacres/AppGestorDocumento/blob/Documentacion/asecretarias-carreras.png)
#### Asignación de plantillas a carreras
Con las plantillas el admistrador podra crear una base de carpetas según sea necesario para cada carrera.
![Localhost](https://github.com/EsthefaniaVillacres/AppGestorDocumento/blob/Documentacion/aplantillas-carreras.png)
#### Gestión de plantillas

![Localhost](https://github.com/EsthefaniaVillacres/AppGestorDocumento/blob/Documentacion/aplantillas.png)
##  Rol Secretaria
#### Gestión de estudiantes
Permitirá gestionar a los estudiantes asi como asignar a cada uno de ellos carreras siempre y cuando tengan asignadas las facultades a las que pertenecene sas carreras.
![Localhost](https://github.com/EsthefaniaVillacres/AppGestorDocumento/blob/Documentacion/sestudiantes.png)
#### Asignación de carreras a estudiantes

![Localhost](https://github.com/EsthefaniaVillacres/AppGestorDocumento/blob/Documentacion/scarreras-estudiantes.png)

## 🤝 Contribución
Si deseas contribuir a este proyecto, sigue los siguientes pasos:

1. Haz un fork del repositorio.
2. Crea una nueva rama:
```bash
git checkout -b nombre-de-la-rama
```
3. Realiza los cambios y haz commit:
```bash
git commit -m "Descripción de los cambios"
```
4. Envía los cambios a tu fork:
```bash
git push origin nombre-de-la-rama
```
5. Crea una pull request en este repositorio.

## ©️ Licencia
Este proyecto académico no tiene una licencia específica asignada. Todos los derechos de autor pertenecen a los miembros del equipo de desarrollo. Ten en cuenta que esto significa que no se otorgan permisos explícitos para utilizar, modificar o distribuir el código fuente o los archivos relacionados. Cualquier uso, reproducción o distribución del proyecto debe obtener permiso previo.
## 📧 Contacto
Si tienes alguna pregunta o comentario, puedes contactarte con los miembros del equipo de desarrollo:

* svillacres6104@uta.edu.ec
  


