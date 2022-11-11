import styled from 'styled-components'

const StyledButtonAdding = styled.button`
  border: 0;
  font-size: 30px;
  cursor: pointer;
  padding: 12px 98px;
  border-radius: 100px;
  color: rgba(2, 2, 2, 0.7);
  background-color: ${(props) => props.theme.buttonColor};
  transition: 0.4s;
  :hover {
    background-color: ${(props) => props.theme.secondary};
  }
  @media (max-width: 400px) {
    width: 250px;
    font-size: 20px;
    padding: 12px 50px;
  }
`

const ButtonAdding = ({ children, loading, disabled, ...props }) => {
  return (
    <StyledButtonAdding disabled={disabled || loading} {...props}>
      {loading && (
        <>
          <p>{children}</p>
        </>
      )}
      {!loading && children}
    </StyledButtonAdding>
  )
}

export default ButtonAdding
