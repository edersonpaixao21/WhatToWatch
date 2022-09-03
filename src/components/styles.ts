import styled from "styled-components";

export const Container = styled.main`

    .all{
        position: absolute;
        z-index: 2;

        .logo-img {
            margin-top: 7.875rem;
            margin-left: 41.3rem;
            width: 5.453rem;
            height: 3.933rem;
        }

        .title {
            margin-left: 28.5rem;
            font-family: 'Poppins', sans-serif;
            font-weight: 700;
            font-size: 2.5rem;
            color: #fff;
        }

        .film {
            margin-bottom: 2rem;
            align-items: center;
            display: flex;

            .film-poster {
                margin-top: 1.5rem;
                margin-left: 25.375rem;
                width: 10.688rem;
            }

            .film-title {
                width: 23.063rem;
                margin-left: 1rem;
                font-family: 'Poppins', sans-serif;
                font-weight: 700;
                font-size: 1.25rem;
                color: #fff;
            }

            .film-description {
                width: 26.438rem;
                margin-top: 1rem;
                margin-left: 1rem;
                font-family: 'Poppins', sans-serif;
                font-weight: 300;
                font-size: 0.75rem;
                color: #fff;
            }

        }

        button {
            margin-left: 38.2rem;
            width: 11.311rem;
            height: 2.938rem;

            display: flex;
            align-items: center;
            justify-content: center;
            
            transition: filter 0.2s;

            &:hover {
                filter: brightness(0.9);
            }
            
            span {
                margin-left: 1rem;
                font-family: 'Poppins', sans-serif;
                font-weight: 700;
                font-size: 0.75rem;
                color: #000;
            }
        }

        .click {
            margin-top: 1rem;
            margin-left: 31.6rem;
            text-align: center;
            width: 23.813rem;
            font-family: 'Poppins', sans-serif;
            font-weight: 400;
            font-size: 0.875rem;
            color: #fff;
        }
    }

    .background-img {
        width: 84rem;
        position: absolute;
        z-index: 1;
    }
`