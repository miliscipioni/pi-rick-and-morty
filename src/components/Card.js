
function Card(props) {
    return (
<body>
     <div>

 <div class="contenedor">
    	<div class="contenedor-cards"> 
		    <div class="contenedor-card-item">
		      	<div class="contenedor-card-item-wrapper">
		        	<img src={""+props.datos.image+""} alt=""/>

		        	<div class="contenedor-info">
		          		<div class="info">
                        <p class="titulo">{""+props.datos.name+""}</p>
		            	<span class="categoria">{props.datos.status} - {props.datos.species}</span>
		          		</div>
		        	</div>
					<div class="fondo"></div>
		      	</div>
		    </div> 
		</div>
		</div>

	</div> 
</body>
    )};
export default Card;