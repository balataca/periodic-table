
export const categories = {
  DIATOMIC_NONMETAL: 'diatomic nonmetal',
  POLYATOMIC_NONMETAL: 'polyatomic nonmetal',
  NOBLE_GAS: 'noble gas',
  ALKALI_METAL: 'alkali metal',
  ALKALI_EARTH_METAL: 'alkaline earth metal',
  METALLOID: 'metalloid',
  POST_TRANSITION_METAL: 'post-transition metal',
  TRANSITION_METAL: 'transition metal',
  LANTHANIDE: 'lanthanide',
  ACTINIDE: 'actinide',
}

export const getColor = (category) => {
  switch(category) {
    case categories.DIATOMIC_NONMETAL:
      return '#3e6418'
    case categories.POLYATOMIC_NONMETAL:
      return '#455A64'
    case categories.NOBLE_GAS:
      return '#3a2151'
    case categories.ALKALI_METAL:
      return '#6c3b01'
    case categories.ALKALI_EARTH_METAL:
      return '#846011'
    case categories.METALLOID:
      return '#015146'
    case categories.POST_TRANSITION_METAL:
      return '#003666'
    case categories.TRANSITION_METAL:
      return '#711019'
    case categories.LANTHANIDE:
      return '#402c17'
    case categories.ACTINIDE:
      return '#732e4c'
    default:
      return '#222222'
  }
}