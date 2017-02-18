# MLSearchAlerts
Esta app consistirá en hacer alertas de productos basados en terminos de busquedas y filtros en el api de mercadolibre

# Todo 
* **SearchForm**, Este será en componente principal, contiene el logo de la app (por definir) una casilla de busqueda y un boton buscar
* **List**, es una lista de 20 productos que tengan relación con el termino de busqueda, luego será infinite scrool
* **Filtrar**, una vez que se realice la busqueda se le debe presentar al usuario la cantidad de resultados obtenidos y la posibilidad de filtrar segun los parametros que te permita el api de mercadolibre


La idea de esta app es que permita en principio usar los filtros de mercadolibre para definir unos parametros de busqueda y luego definir alertas basadas en estos parametros
ejemplo de uso del api: https://api.mercadolibre.com/sites/MLC/search?q=laptop%20mac&state=CL-RM&price=150000-250000&category=MLC1652
