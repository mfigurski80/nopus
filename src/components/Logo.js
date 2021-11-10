import styled from 'styled-components'; // https://styled-components.com/

export default function Logo(params) {
    return (
        <Center {...params}>
            <img src={`${process.env.PUBLIC_URL}/logo.png`} alt="logo" width="39px" height="30px"/>
            <h2 style={{fontWeight: 'normal'}}>nopus</h2>
        </Center>
    )
}

const Center = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    padding: 25px;
`;