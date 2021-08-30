import styled from 'styled-components';

export const Button = styled.button`
    text-transform:capitalize;
    font-size: 1.43rem;
    background: transparent;
    border: 0.05em solid var(--lightBlue);
    color: ${props => props.cart ?"var(--mainYellow)":"var(--lightBlue)"};
    border-radius: 0.5rem;
    padding: 0.2rem 0.5rem;
    cursor: pointer;
    margin: 0.2rem 0.5rem 0.2rem 0;
    transition: all 0.5s ease-in-out;
    &:hover {
        background: var(--lightBlue);
        color: var(--mainBlue);
    }
    &:focus {
        outline: none;
    }
`;