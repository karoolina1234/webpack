import styled from "styled-components";

export const DetailHero = styled.div`
    width: 70%;
    margin: 1rem auto;
    @media (max-width: 790px) {
        width: 100%;
     }
 
`

export const AreaGrid = styled.div`
    display: grid;
    grid-template-columns: 20rem 1fr;

    @media (max-width: 790px) {
        grid-template-columns: 10rem 1fr;
     }

    margin-top: 4rem;

    .areaImg{
        margin: 0.5rem;
        border-radius: 0.5rem;
        border: 1px solid #B4B4B4;
        img{
            width: 100%;
            object-fit: cover;
            height: 100%;
        }
    }

    .description{
        margin: 0.5rem;
        border-radius: 0.5rem;
        border: 1px solid #B4B4B4;
        background-color: #F4F6F8;

        padding: 0.5rem;

        .title{
            font-weight: bold;
        }
        p{
            line-height: 1.4rem;
            word-wrap: break-word;
            word-break: break-all;
            @media (max-width: 600px) {
                word-wrap: break-word;
                word-break: break-all;
                font-size: 0.6rem;
                line-height: normal;
            }
            @media (max-width: 400px) {
                word-wrap: break-word;
                word-break: break-all;
                font-size: 0.5rem;
                line-height: normal;
            }
        }
    }
`
export const AreaBtn = styled.div`
text-align: end;
padding: 0.5rem;

    button{
        border: none;
        color: #FFF;
        background-color: #ff0017;
        width: 8rem;
        padding: 0.2rem;
        border-radius: 0.2rem;
        cursor: pointer;
        font-weight: bold;
    }
`

export const AreaImgs = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    margin-top: 1rem;

   div{
    margin: 0.5rem;
    img{
        width: 100%;
        object-fit: cover;
        height: 100%;
        border-radius: 0.5rem;
    }

   }
`