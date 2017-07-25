import styled from 'styled-components'

const ImageBg = styled.div`
  background-image: url(${props => props.src});
`

export default ImageBg