Coder Sandwich

Proyecto de eccomerce orientado a la venta de sanguches. La página está compuesta de un home que contiene un listado de productos y un navbar que te permite filtrar los mismos por categoría, iniciar sesión o ir al carrito. 
La tarjeta de cada producto contiene un botón de "ver más" que al clickearlo despliega una vista detallada del mismo. Desde aquí se puede modificar la cantidad de productos que se desea agregar al carrito. Una vez añadidos, se puede ir al carrito o seguir comprando. Al ingresar un ID inválido en el link se mostrará un mensaje indicando que el producto no existe.
Al ingresar al carrito se mostrará una tabla que contiene la cantidad de productos seleccionados con sus cantidades y precios correspondientes, además de botones para eliminar uno o todos los productos. Si el usuario no está logueado, se mostrará un formulario que pide nombre, email y teléfono para poder terminar la compra. Además, el email deberá repetirse para ser validado. Si el usuario está logueado, se mostrará un mensaje indicando el email al que se enviarán los datos de la compra así como el botón "terminar mi compra".
Por último, el botón "ingresar" conduce a un formulario de inicio de sesión, que pide email y contraseña. Si el usuario no tiene una cuenta, podrá registrarse haciendo click en el botón "registrarse", que lo redirecciona hacia un formulario que pide datos tales como: nombre de usuario, email y contraseña. Al registrarse se inicia sesión automáticamente y se redirige al inicio. Al tener la sesión iniciada, "Registrarse" se reemplaza por el nombre  de usuario, y al hacer click se activa un dropdown con información del mismo y el botón para cerrar sesión.
Tanto para el formulario del carrito como el de registro se implementó la dependencia react-hook-form.


Librerías utilizadas:

- @mui/icons-material: Librería de iconos de los cuales se utilizaron: El carrito para el cart, la bolsa que aparece en el modal y el icono del usuario.

- react-loader-spinner: Librería de la que se importó el spinner que se muestra al cargar la página.

- react-router-dom: Se utilizó la versión 5.3.0

- react-hook-form: Versión 7.22.0
