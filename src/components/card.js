import PropTypes from "prop-types"
import React from "react"

const handleClick = url => {
  window.open(url, "_blank")
}

const Card = ({ title, image, link }) => (
  <div class="card 1" onClick={() => handleClick(link)}>
    <div class="card_image">
      {" "}
      <img src={image} />{" "}
    </div>
    <div class="card_title title-white">
      <p>{title}</p>
    </div>
  </div>
)

Card.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  link: PropTypes.string,
}

Card.defaultProps = {
  title: ``,
  image: ``,
  link: ``,
}

export default Card
