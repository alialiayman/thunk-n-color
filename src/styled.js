import styled from 'styled-components';

const S  = {};

S.Header = styled.header`
    display: flex;
    justify-content: center;
    gap: 1rem;
    padding: 1rem;

    button {
        background-color: hsl(58,100%,50%);
        color: hsl(58,100%,25%);
        border-radius: 8px;
        padding: 1rem;
        font-size: 2rem;
    }

`

S.Container = styled.div`
    width: 100%;
    display: flex;
    height: 100vh;
`

S.Box1 = styled.div`
    background-color: hsl(${props => props.hue},${props => props.sat}%,${props => props.lum}%);
    width: 50%;
    font-size: 2rem;
    padding: 2rem;

    p:nth-child(1) {
        color: hsl(${props => props.hue},${props => props.sat}%,20%);
    }

    p:nth-child(2) {
        color: hsl(${props => props.hue},${props => props.sat}%,75%);
    }
`;

S.Box2 = styled.div`
    background-color: hsl(${props => props.hue},100%,50%);
    width: 50%;
    font-size: 2rem;
    padding: 2rem;

    p:nth-child(1) {
        color: hsl(${props => props.hue},100%,20%);
    }

    p:nth-child(2) {
        color: hsl(${props => props.hue},100%,75%);
    }
`;


export default S;