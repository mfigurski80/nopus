import styled from 'styled-components'; // https://styled-components.com/

export default function LandingPage() {
    return (
        <div>
            <BackgroundImage src={`${process.env.PUBLIC_URL}/landingimage.png`}/>
            <Header> Scheduling made easy.</Header>
            <Description>Nopus is the solution to all of your add-
            drop-swap problems. Tell us your major and graduation date,
            and we’ll take care of the rest.</Description>
        </div>
    )
}

const Header = styled.h1`
    position: absolute;
    left: 121px;
    top: 350px;
    width: 450px;
    font-family: 'Gothic A1';
    font-style: normal;
    font-weight: 600;
    font-size: 55px;
    color: #222222;
`;
  
const Description = styled.p`
    position: absolute;
    left: 121px;
    top: 500px;
    width: 350px;
    font-family: 'Lato';
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
`;
  
const BackgroundImage = styled.img`
    width: 1000px;
    height: 690px;
    position: absolute;
    left: 440px;
`;