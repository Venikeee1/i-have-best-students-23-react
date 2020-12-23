import React from 'react'
import PropTypes from 'prop-types'

const CardImg = ({ src, alt, width, height }) => {
  return (
    <img
      className="card-image"
      src={src}
      alt={alt}
      width={width}
      height={height}
    />
  )
}

CardImg.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
}

export default CardImg
