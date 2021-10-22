import styled  from "styled-components";

export const Container = styled.header`
    background: var(--blue)
`;

export const Content = styled.div`
    max-width: 1120px;
    margin: 0 auto;

    padding: 2rem 1rem 12rem;
    display: felx;
    align-items: center;
    justify-content: space-between;

    button {
        font-size: 1rem;
        color: #FFF;
        background: var(--blue-light);
        border: 0;
        padding: 0 2rem;
        border-radious: 0.25rem;
        height: 3rem;

        transition: filter 0.2s;

        &:hover {
            filter: brigtness(0.9)
        }
    }
`;