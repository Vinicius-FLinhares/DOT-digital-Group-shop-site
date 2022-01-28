import styled from 'styled-components';

export const CategoryItem = styled.div`
    display: flex;
    align-items: center;
    height: 34px;
    padding: 10px 5px;
    width: 100%;
    background-color: lightblue;
    margin: 10px;
    
    

    &:hover{
        background-color: blue;
        color: white;
        transition: 0.8s;
        zoom: 1.2;
    }

    a{ 
       font-size: 22px;
       color: black;
       text-decoration: none;
       font-weight: bold;
    }

    &: hover a{
        color: white;
    }
`;