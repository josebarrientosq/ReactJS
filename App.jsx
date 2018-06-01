import React from 'react';
import data from './data.json';


class App extends React.Component{
	
	verimagen(imageUrl) {
    return (
      <div>
        <img src={imageUrl} />
      </div>
    );
  }

    render(){
        return(
            
        
          data.map(function(movie){

         

            return ( <div class="col s4">
				  		<div class="row">
					        <div class="col s12 ">
					          	<div class="card">
						            <div class="card-image">
						            <img src={require('./imagesBase/aguacate.jpg')}
						            </div>
						            <div class="card-content">
						              	<h5> {movie.title}</h5>
									  	<p> {movie.id} </p>
									    <p> Unidades disponibles : 46 </p>
									    <div class="row">
									    	<div class="col s5">
									    		<a class="waves-effect waves-light btn-small light-blue darken-3">Ver Mas</a>
									    	</div>
									    	<div class="col s4 ">
									    		<a class="waves-effect waves-light btn-small amber darken-1">Añadir</a>
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
