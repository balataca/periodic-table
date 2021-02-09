import PropTypes from 'prop-types'

export default {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  column: PropTypes.number,
  row: PropTypes.number,
  backgroundColor: PropTypes.string
}
