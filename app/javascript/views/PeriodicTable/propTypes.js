import PropTypes from 'prop-types'

export const elements = PropTypes.shape({
  order: PropTypes.arrayOf(PropTypes.string)
})

export default {
  elements
}
