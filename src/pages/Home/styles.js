import styled from "styled-components";

export const DivMain = styled.div`
text-align: center;
padding: 2rem 10rem;

@media (max-width: 790px) {
    padding: 2rem 0rem;
  }
`
export const Pagination = styled.div`
    margin-top: 2rem;

    .active{
        background-color: red;
        color: #FFF;
    }
    button{
        cursor: pointer;
        border: none;
        margin: 0.5rem;
        border-radius: 1rem;
        padding: 0.2rem;
        width: 2rem;
    }
`
export const Table = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;

    p{
        font-weight: bold;
    }
`
export const TableItem = styled.div`
        cursor: pointer;
        display: grid;
        grid-template-columns: 5rem 1fr 1fr 1fr;
        background-color: #F4F6F8;
        margin: 1rem 0rem;
        height: 8rem;
        max-height: 8rem;
        min-height: 8rem;
        padding: 0rem 3rem;
        align-items: center;
        overflow: hidden;
        border-radius: 0.5rem;

        div{
            overflow: hidden;
        }

        .description{
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        img{
            max-width: 100%;
            height: auto;
            border-radius: 1rem;
            object-fit: contain;
        }
`