import { Outlet } from 'react-router-dom'
import InternalNav from 'components/InternalNav'
import { Container } from '@material-ui/core';
import styled from 'styled-components'; // https://styled-components.com/

export default function InternalWrapper() {
    return (
        <>
            <InternalNav />
            <Container style={container}>
            </Container>
            <OutletContainer>
              <Outlet />
            </OutletContainer>
        </>
    );
}

const OutletContainer = styled(Container)`
    margin-left: 250px;
    margin-top: 50px;
`;

const container = {
  display: 'flex',
  flexDirection: 'row',
  padding: 0,
  backgroundColor: 'white',
  borderColor: 'black'
};
