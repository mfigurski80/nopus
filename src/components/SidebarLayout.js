import styled from 'styled-components'; // https://styled-components.com/

import Logo from 'components/Logo';

export default function SidebarLayout({contents, children}) {
    return (
        <Layout>
            <SidebarContainer>
                <Logo />
                {contents}
            </ SidebarContainer>
            <BodyContainer>
                {children}
            </ BodyContainer>
        </Layout>
    )
}

const Layout = styled.div`
    display: flex;
    height: 100vh;
`;

const SidebarContainer = styled.div`
    width: 300px;
    background: white;
    height: 100%;
`

const BodyContainer = styled.div`
    flex: 1;
`