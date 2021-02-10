import PropTypes from 'prop-types';

const sizes = {
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large',
};

const params = {
  [sizes.SMALL]: {
    width: 20,
    height: 20,
  },
  [sizes.MEDIUM]: {
    width: 30,
    height: 30,
  },
  [sizes.LARGE]: {
    width: 40,
    height: 40,
  },
};

const SvgSprite = ({ icon = 'cloud', size = 'small' }) => {
  return (
    <svg
      className="svg-sprite"
      width={params[size].width}
      height={params[size].height}
    >
      <use xlinkHref={`/svg/sprite.svg#${icon}`}></use>
    </svg>
  );
};

SvgSprite.propTypes = {
  icon: PropTypes.string,
  size: PropTypes.oneOf([sizes.SMALL, sizes.MEDIUM, sizes.LARGE]),
};

export default SvgSprite;
