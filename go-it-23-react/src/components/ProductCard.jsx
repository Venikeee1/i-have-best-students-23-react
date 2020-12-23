import React from 'react'
import PropTypes from 'prop-types'
import Card from './UI/card'
import CardTitle from './UI/card/CardTitle'
import CardImg from './UI/card/CardImg'

const ProductCard = ({ imgSrc }) => {
  return (
    <Card>
      <CardTitle>Tacos With Lime</CardTitle>
      <CardImg src={imgSrc} alt="sadasd" />
    </Card>
  )
}

ProductCard.defaultProps = {
  imgSrc:
    'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640',
}

ProductCard.propTypes = {
  imgSrc: PropTypes.string,
}

export default ProductCard
