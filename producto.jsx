import React from 'react'

class Producto extends React.Component {
  render() {
  	return (
      
        <img className="media-object"  src={'.imagenesBase/{this.props.foto}'} />
      
    )
  }
}

export default Producto
