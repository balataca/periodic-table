import React from 'react'

const linkParser = (detail) => {
  const startsWithHttp = /^http/

  return startsWithHttp.test(detail) && <a href={detail}>{detail}</a>
}

const arrayParser = (detail) => Array.isArray(detail) && detail.join(', ')

export const parseDetail = (detail) => {
  const parsers = [arrayParser, linkParser]

  for (let parser of parsers) {
    let result

    if (typeof parser === 'function') {
      result = parser(detail)
    }
    
    if (result) return result
  }

  return detail
}

export default parseDetail
