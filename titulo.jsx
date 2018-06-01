import React from 'react';

class titulo extends React.Component{
    render(){
        return(
            <div class="row">
		  	
				<nav>
				  <div class="nav-wrapper">
				    <a href="" class="brand-logo">La Bodega</a>
				    <ul id="nav-mobile" class="right hide-on-med-and-down">
				      <li><a href=""><i class="material-icons">apps</i></a></li>
				      <li><a href=""> <i class="material-icons notif">local_grocery_store</i> <small class="notification-badge">5</small></a></li>

				      <li><a href=""><i class="material-icons">local_post_office</i> </a></li>
				      <li><a href=""><i class="material-icons">label_outline</i></a></li>
				    </ul>
				  </div>
				</nav>

					
			</div>
            );
    }
}

export default titulo;
