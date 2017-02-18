# MLSearchAlerts
Esta app consistirá en hacer alertas de productos basados en terminos de busquedas y filtros en el api de mercadolibre

# Todo 
* **SearchForm** Este será en componente principal, contiene el logo de la app (por definir) una casilla de busqueda y un boton buscar

* **List** es una lista de 20 productos que tengan relación con el termino de busqueda, luego será infinite scrool

* **Filtrar** una vez que se realice la busqueda se le debe presentar al usuario la cantidad de resultados obtenidos y la posibilidad de filtrar segun los parametros que te permita el api de mercadolibre

* **Alertas** Los articulos filtrados se deben guardar en un cache, de manera que cada xx minutos se consulte a la api de mercadolibre y se cotejen los datos, se envia una push notification de los articulos nuevos en el filtro. 

* **Marcar y descartar Articulos** Los articulos vistos deberían marcarse, un simple cambio de color podría ser, debería haber una manera de eliminar articulos que no interesen de la lista de manera que desaparezcan y se tenga una lista mas limpia, evaluar tambien articulos favoritos de la lista (si fuera necesario).


La idea de esta app es que permita en principio usar los filtros de mercadolibre para definir unos parametros de busqueda y luego definir alertas basadas en estos parametros

 
[Ejemplo de uso del api de MercadoLibre](https://api.mercadolibre.com/sites/MLC/search?q=laptop%20mac&state=CL-RM&price=150000-250000&category=MLC1652)
