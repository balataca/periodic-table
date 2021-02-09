import PropTypes from 'prop-types'

export const element = PropTypes.shape({
    name: PropTypes.string,
    appearance: PropTypes.string,
    atomic_mass: PropTypes.number,
    boil: PropTypes.number,
    category: PropTypes.string,
    color: PropTypes.string,
    density: PropTypes.number,
    discovered_by: PropTypes.string,
    melt: PropTypes.number,
    molar_heat: PropTypes.number,
    named_by: PropTypes.string,
    number: PropTypes.number,
    period: PropTypes.number,
    phase: PropTypes.string,
    source: PropTypes.string,
    spectral_img: PropTypes.string,
    summary: PropTypes.string,
    symbol: PropTypes.string,
    xpos: PropTypes.number,
    ypos: PropTypes.number,
    shells: PropTypes.arrayOf(PropTypes.number),
    electron_configuration: PropTypes.string,
    electron_configuration_semantic: PropTypes.string,
    electron_affinity: PropTypes.number,
    electronegativity_pauling: PropTypes.number,
    ionization_energies: PropTypes.arrayOf(PropTypes.number)
})

export default {
  element
}