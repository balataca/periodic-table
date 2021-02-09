import PropTypes from 'prop-types'

export const items = PropTypes.arrayOf(
  PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.array
    ])
  ).isRequired
).isRequired

export default {
  items
}
