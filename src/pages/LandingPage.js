import styled from 'styled-components'; // https://styled-components.com/
import { Container } from '@material-ui/core';

export default function LandingPage() {
    return (
        <VerticalCenterContainer>
            <section>
                <Header> Scheduling made easy.</Header>
                <Description>Nopus is the solution to all of your add-
                drop-swap problems. Tell us your major and graduation date,
                and we’ll take care of the rest.</Description>
            </section>
            <BackgroundImage src={`${process.env.PUBLIC_URL}/landingimage.png`}/>
        </VerticalCenterContainer>
    )
}

const VerticalCenterContainer = styled(Container)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 80vh;
    & > section {
        position: relative;
        z-index: 1;
    }
`;

const Header = styled.h1`
    width: 450px;
    font-family: 'Gothic A1';
    font-style: normal;
    font-weight: 600;
    font-size: 55px;
    color: #222222;
`;
  
const Description = styled.p`
    width: 350px;
    font-family: 'Lato';
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
`;
  
const BackgroundImage = styled.img`
    position: absolute;
    width: 1000px;
    height: 690px;
    right: 0;
`;