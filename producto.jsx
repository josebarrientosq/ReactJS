import React from 'react'

class Producto extends React.Component {
  render() {
  	return (
      
        <img className="media-object"  src={'http://localhost:8080/imagenesBase/${this.props.foto}'}/>
      
    )
  }
}

export default Producto
