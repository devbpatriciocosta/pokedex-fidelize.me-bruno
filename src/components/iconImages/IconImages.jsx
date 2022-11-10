// eslint-disable-next-line no-unused-vars
export default function IconImages({ imageName, type, ...props }) {
  // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
  return <img src={`images/${imageName}.${type}`} />
}
