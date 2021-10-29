import styled from "styled-components";

export const Container = styled.form`
    h2 {
        color: var(--text-title);
        font-size: 1.5rem;
    }

    input {
        width: 100%;
        padding:  0 1.5rem;
        height: 4rem;
        border-radius: 0.25rem;

        border: 1px solid #fff;
        background: #FFF;

        font-weight: 400;
        font-size: 1rem;

        &:placeholder {
            color: var(--text-body);
        }

        & + input {
            margin-top: 1rem;
        }

        button[type="submit"] {
            width: 100%;
            padding: 0 1.5rem;
            height: 4rem;
            background: var(--green);
            color: #FFF;
            border-radius: 0.25rem;
            border: 0;
            font-size: 1rem;
            margin-top: 1.5rem;
            font-weight: 600;

            transition: filter 0.2;

            &:hover {
                filter: brigtness(0.9);
            }
        }
    }
    `;