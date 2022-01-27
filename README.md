# Evaluación Final Módulo 3

El ejercicio consiste en desarrollar una página web con un listado de personajes de Harry Potter, que
podemos filtrar por el nombre del personaje. Vamos a usar React para realizarlo.

## Para trabajar sobre este ejercicio se necesita Starter Kit de React.

1. Listado de personajes.

   En primer lugar, vamos a realizar una web con el listado de personajes de Harry Potter. Para eso, vamos a
   utilizar el servicio de https://hp-api.herokuapp.com/ que nos devuelve información sobre los personajes de
   Harry Potter filtrados por la casa a la que pertenece. Sobre cada uno, vamos a pintar al menos:

   - Foto
   - Nombre
   - Especie

2. Imágenes.

Algunas de los personajes que devuelve el API no tienen imagen. En ese caso hay que mostrar una imagen de relleno. Podemos
crear una imagen de relleno con el servicio de placeholder.com donde en la propia URL indicamos el
tamaño, colores, texto: https://via.placeholder.com/210x295/ffffff/666666/?text=HarryPotter, o puedes usar
tu creatividad...

3.  Filtrado de personajes.

    Esta parte consiste en poder buscarlos por nombre. Para eso, añadimos un input a la interfaz, de forma que al ir escribiendo un nombre queden
    en la interfaz solo los personajes cuyo nombre contiene las letras escritas. En el pantallazo de arriba, al escribir 'h' aparecen personajes cuyo nombre completo contiene esas letras en ese orden.

4.  Filtrado por casa.

    La siguiente parte consiste en poder buscarlos por casa. Para eso, añadimos un select a la interfaz, de forma que al seleccionar una
    casa queden en la interfaz solo los personajes cuya casa es la seleccionada.

    - Nota: Por defecto, cuando carga la página debe aparecer la casa Gryffindor.

5.  El listado debe tener los siguientes componentes como mínimo:

- Componente para el filtro de nombre.
- Componente para el listado.
- Componente para la tarjeta de cada personaje del listado.
- Componente para el detalle de cada personaje.

6. Detalle de personajes

Vamos a implementar una nueva funcionalidad: al hacer clic sobre la tarjeta de un personaje, su información aparecerá a pantalla completa. Para hacer esto usaremos rutas y React Router DOM. En la pantalla de detalle aparecerá además de la foto, nombre, la casa a la que pertenece , si está vivo o muerto, género, especie y los nombres alternativos en caso de que los tenga.

7. Detallitos de calidad

- El campo de texto debe estar recubierto por una etiqueta form.
- Si estando en el campo de filtrado pulsamos intro debéis impedir que el navegador navegue o cambie la ruta sin querer.
- Si se busca por un texto por ejemplo "XXX" y no hay ningún personaje que coincida con dicho texto se debe mostrar un mensaje del tipo "No hay ningún personaje que coincida con la palabra XXX".
- El filtro debe filtrar independientemente de que la usuaria introduzca el texto en mayúsuclas o minúsculas.
- Al entrar en el detalle de un personaje y a continuación pulsar atrás, el campo de texto debe mostrar el texto que tenía anteriormente.

### BONUS

1. Mejoras visuales.

Realizar algunas mejoras visuales del ejercicio. Por ejemplo:

- En el detalle del personaje mostrar la casa con su respectivo emblema y si un personaje está vivo o muerto con su respectivo icono.
- Usar algún sistema de grid para pintar el listado de personajes.
- Que funcione bien el responsive en dispositivos pequeños.

2. URL compartible.

La URL del detalle de personaje sea compatible, es decir, que si visitamos esa URL directamente en el navegador se vea el detalle del personaje. Si refescamos el navegador en el detalle de un personaje debe volver a mostrar el detalle del personaje.
Y en el caso de que el usuario navegue a una URL inexistente debemos mostrar un mensaje.

3. Ordenación
   Ordenar el listado de personajes alfabéticamente por nombre.

4. Más filtros
   Añadir más filtros para filtrar, por ejemplo por género. Se ha añadido además filtrado por especie.

5. Boton Reset
   Añadir un boton de reset para que la página vuelva a su listado principal.
