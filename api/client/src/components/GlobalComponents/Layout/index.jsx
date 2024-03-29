import styled from "styled-components/dist/styled-components.js"


const LayoutContainer = styled.div`
    padding: 80px 0;
`

const Layout = ({children, className}) => {
    return (
        <LayoutContainer className = {className}>
            {children}
        </LayoutContainer>
    )
}

export default Layout
