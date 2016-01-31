## multi-tic-tac-toe
## v.0.2.0

### Juego 3 en raya(gato) multijugador, multilenguaje, multiplataforma.

#### Empezar
    - En tasks/gulp tenemos los siguientes comandos
        - gulp jade-styl-jquery-php => Compila jade, stylus, jQuery y copia php a _deploy
        - gulp jade-styl-vanillajs-php => Compila jade, stylus, vanillajs y copia php a _deploy

#### Guía
    - Carpetas que empiezan con _ se encuentran en desarrollo.
    - Estructura de carpetas de los proyectos y su versión (se pueden ver en el CHANGELOG)
	- Los lenguajes que no son nativos al browser necesitan compilarse mediante un automatizador de tareas.

### Estructura
    - _deploy => Lo compilado, preparo para desplegar.
    - _db => Bases de datos
        - _mongodb
        - _mysql

    - backend => Lenguajes de lado de servidor
        - _java
        - _nodejs
        - _python
        - _ruby
        - _tests => Tests TDD y BDD
        - php => *v.0.1.0*

    - design => Diseños y assets
        - assets => Imágenes del proyecto

    - frontend => Lenguajes de lado de cliente
        - _app => Aplicaciones
            _android =>
            _iOS => 
            _w10 =>

        - _tests => Tests TDD y BDD
        - css => Lenguajes y Frameworks
            - _framework => Frameworks
                - _bootstrap =>
                - _foundation =>
                - _material =>

            - code => Lenguajes
                - _less =>
                - _sass =>
                - stylus => *v.0.1.0*

        - html => Lenguajes
                - _haml =>
                - jade => *v.0.2.0*

        - js => Lenguajes, librerías y Frameworks
                - _angularjs1 =>
                - _angularjs2 =>
                - _backbone =>
                - _coffescript =>
                - _ember =>
                - _polymer =>
                - _react =>
                - _typescript =>
                - _vendor => Liberías de front
                - vanillajs => *v.0.2.0*
                - jQuery => *v.0.2.0* **jquery-2.2.0**

    - node_modules => Módulos necesarios en la raíz del proyecto
    - tasks => Automatizadores de tareas
        - _grunt =>
        - gulp => *v.0.2.0*