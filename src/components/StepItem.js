import styled from 'styled-components'; // https://styled-components.com/

export default function StepItem({number, active, children, ...params}) {
    return(
        <Item {...params} active={active}>
            <Number>{number}</Number>
            {children}
        </Item>
    )
}

const Item = styled.div`
    padding: 15px 30px;
    color: var(--color-text-superlight);
    font-weight: bold;
    cursor: pointer;
    ${props => props.active && `
        color: var(--color-primary);
    `}
`;

const Number = styled.p`
    display: inline-block;
    padding: 4px 10px;
    margin: 5px 10px;
    color: inherit;
    border: 2px solid;
    border-radius: 50%;
    font-weight: bold;
`;