import styled from 'styled-components';

export const Table = styled.table`
    width: 100%;
    background: #FFF;
    padding: 10px;
    border-radius: 10px;
    margin: 10px 0;
`;
export const THead = styled.thead`
    background: rgb(255, 130, 13);
    text-align: left;
    padding: 22px;
    border-radius: 5px;
`;
export const TH = styled.th`
    background: rgb(255, 130, 13);
    text-align: left;
    padding: 12px;
    border-bottom: 1px solid #eee;
    border-radius: 5px;
`;
export const TBody = styled.tbody`
td{
    padding: 12px;
    border-bottom: 1px solid black;
    border-top: 1px solid rgb(255, 130, 13);
    }
`;

export const CardImage = styled.img`
    height: 100px;
`;