import React from 'react';
import data from './data.json';
import Producto from './Producto.jsx'
import Modal from './Modal.jsx'


class App extends React.Component{

	 	
    render(){
        return(
             
        
          data.map(function(productos){

         

            return ( <div class="col s4">
				  		<div class="row">
					        <div class="col s12 ">
					          	<div class="card">
						            <div class="card-image">
						           		<Producto foto={productos.title} />
						            	
						            </div>
						            <div class="card-content">
						              	<h5>{productos.title}</h5>
									  	<p> Precio : S/.{productos.precio} </p>
									    <p> Unidades disponibles : {productos.stock} </p>
									    <div class="row">
									    	<div class="col s5">

									    		<a class="waves-effect waves-light btn modal-trigger" href={'#'+productos.title}>Ver Mas</a>

									    		<Modal idmodal={productos.title} precio={productos.precio}/>

									    		
									    	</div>

									    	


									    	<div class="col s4 ">
									    		<button class="agregar waves-effect waves-light btn-small amber darken-1"  >Añadir</button>
									    	</div>
									    	<div class="col s3">
									    		<input class="cantidad" type="number" min="1" max="9" step="1" value="1"/>
									    	</div>
									    </div>
						            </div>
						        </div>
		        			</div>
		        		</div> 
		        	</div>);  
		        	
          })
        
        
        );
    }
}


module.exports = App;
