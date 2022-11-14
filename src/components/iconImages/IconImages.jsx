/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

export default function IconImages({ imageName, type }) {
  return <img src={`images/${imageName}.${type}`} />
}
