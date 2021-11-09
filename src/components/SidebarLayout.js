import styled from 'styled-components'; // https://styled-components.com/
import { Container } from '@material-ui/core';

export default function SidebarLayout({contents, children}) {
    return (
        <Layout>
            <SidebarContainer>
                <p>Sidebar</p>
                {contents}
            </SidebarContainer>
            <div>
                {children}
            </div>
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
    padding: 50px 30px;
`