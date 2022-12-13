 
import styled from 'styled-components';
import logo from '../../imagens/logo.svg'
 
const LogoContainer = styled.div`
display: flex;
font-size: 30px;
`

const LogoImage = styled.img`
margin-right: .4em;
`

function Logo () { 
    return ( 
        <LogoContainer> 
            <LogoImage src={logo}   alt='logo'/> 
            <p> <strong> Alura  </strong> books </p>
          </LogoContainer>
    )
}

export default Logo;