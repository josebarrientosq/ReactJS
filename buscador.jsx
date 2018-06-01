import React from 'react';

class buscador extends React.Component{
    render(){
        return(
        	 <div class="row">
					<div class="col s4">
						<h4> Catálogo de productos </h4>
					</div>
					<div class="input-field col s3 offset-s5">
						<label for="first_name">¿Qué estas buscando?</label>
				        <input placeholder="Buscar producto" id="first_name" type="text" class="validate"/>
 		    		</div>
				</div>
            );
    }
}

export default buscador;
