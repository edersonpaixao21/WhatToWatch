import styled from "styled-components";

export const Container = styled.main`
    text-align: center;
        display: flex;
        justify-content: center;



    .all{
        position: absolute;
        z-index: 2;

        .logo-img {
            
            width: 180px;
        }

        .title {
            font-family: 'Poppins', sans-serif;
            font-weight: 700;
            font-size: 2.5rem;
            color: #fff;
        }

        .film {
            margin-bottom: 32px;
            align-items: center;
            display: flex;

            .film-poster {
                margin-top: 16px;
                width: 171px;
            }

            .film-title {
                width: 369px;
                margin-left: 16px;
                font-family: 'Poppins', sans-serif;
                font-weight: 700;
                font-size: 1.25rem;
                color: #fff;
            }

            .film-description {
                width: 423px;
                margin-top: 16px;
                margin-left: 20px;
                text-align: left;
                font-family: 'Poppins', sans-serif;
                font-weight: 400;
                font-size: 0.75rem;
                color: #fff;
            }

        }

        button {
            width: 181px;
            height: 47px;
            align-items: center;
            justify-content: center;
            background: red;
            border: none;
            border-radius: 5px;
            
            span {
                
                font-family: 'Poppins', sans-serif;
                font-weight: 700;
                font-size: 1rem;
                color: #fff;
            }
        }

        .click {
            margin-top: 10px;
            font-family: 'Poppins', sans-serif;
            font-weight: 400;
            font-size: 0.875rem;
            color: #fff;
        }
    }

    .background-img {
        width: 1440px;
        height: 100vh;
        position: absolute;
        z-index: 1;
    }
`