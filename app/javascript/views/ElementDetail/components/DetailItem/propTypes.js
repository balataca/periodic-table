import PropTypes from 'prop-types'

export const item = PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.number,
  PropTypes.array
])

export default {
  item
}