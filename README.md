## multi-tic-tac-toe
## v.0.2.2 core
## v.0.1.1 app

### Juego 3 en raya(gato) multijugador, multilenguaje, multiplataforma.

#### Empezar
- Los npm install con sudo si estamos en unix
- npm install gulp -g
- En el raíz hacer npm install --save-dev babel-preset-es2015
- En tasks/gulp hacer npm install
- En tasks/gulp ejecutamos gulp run seguido de una serie de opciones:
    - *(ejemplo: gulp run --back=php --css=stylus --html=jade --js=jquery --transpiler=babeljs)*
    - *(Si se pone sólo gulp run toma los parámetros por defecto del ejemplo, localizados en tasks/gulp/tasks)*
    - --back=php
    - --css=stylus
    - --html=jade
    - --js=jquery --js=vanillajs
    - --transpiler=babeljs --transpiler=coffeescript --transpiler=typescript

#### Guía
- Carpetas que empiezan con _ se encuentran en desarrollo.
- Estructura de carpetas de los proyectos y su versión (se pueden ver en el CHANGELOG)
- Los lenguajes que no son nativos al browser necesitan compilarse mediante un automatizador de tareas.

### Estructura
- _deploy => Lo compilado, preparo para desplegar.
- _db => Bases de datos
    - _mongodb
    - _mysql

- **backend** => Lenguajes de lado de servidor
    - _java
    - _python
    - _ruby
    - _tests => Tests TDD y BDD
    - **nodejs** => *v.0.1.1*
    - **php** => *v.0.1.1*

- **design** => Diseños y assets
    - **assets** => Imágenes del proyecto

- **frontend** => Lenguajes de lado de cliente
    - _app => Aplicaciones
        - _android =>
            - _nativo
            - _nativeScript
            - _phoneGap

        - _iOS => 
            - _nativo
            - _nativeScript
            - _phoneGap

        - _w10 =>
            - _nativo
            - _nativeScript
            - _phoneGap

    - _tests => Tests TDD y BDD
    - **css** => Lenguajes y Frameworks
        - _framework => Frameworks
            - _bootstrap =>
            - _foundation =>
            - _material =>

        - **code** => Lenguajes
            - _less =>
            - _sass =>
            - **stylus** => *v.0.1.1*

    - **html** => Lenguajes
        - _haml =>
        - **jade** => *v.0.1.1*

    - **js** => Lenguajes, librerías y Frameworks
        - _vendor => Liberías de front
        - **babeljs**
            - _angular2 =>
            - _backbone =>
            - _ember =>
            - _react =>
            - **angularjs** => *v.0.1.1* *angularjs-1.4.9*
            - **jQuery** => *v.0.1.1* *jquery-2.2.0*
            - **polymer** => *v.0.1.1* *polimer-1.0*
            - **vanillajs** => *v.0.1.1*

        - **coffeescript**
            - _angular2 =>
            - _backbone =>
            - _ember =>
            - _react =>
            - **angularjs** => *v.0.1.1* *angularjs-1.4.9*
            - **jQuery** => *v.0.1.1* *jquery-2.2.0*
            - **polymer** => *v.0.1.1* *polimer-1.0*
            - **vanillajs** => *v.0.1.1*

        - **typescript**
            - _angular2 =>
            - _backbone =>
            - _ember =>
            - _react =>
            - **angularjs** => *v.0.1.1* *angularjs-1.4.9*
            - **jQuery** => *v.0.1.1* *jquery-2.2.0*
            - **polymer** => *v.0.1.1* *polimer-1.0*
            - **vanillajs** => *v.0.1.1*

- node_modules => Módulos necesarios en la raíz del proyecto
- **tasks** => Automatizadores de tareas
    - _grunt =>
    - **gulp** => *v.0.2.0*