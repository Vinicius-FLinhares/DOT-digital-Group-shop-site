import styled from 'styled-components';

export const InputText = styled.input`
    height: 24px;
    border-radius: 5px;
    outline: none;
    border: solid 1px ${(props) => props.errorMessage ? '#dc3545' : '##ced4da' };
    padding: 5px 10px;

    &:focus{
        border-color: rgb(255, 130, 13);
    }
`;
export const ContainerInput = styled.div`
    display: flex;
    flex-direction: column;
`;
export const DescriptionInput = styled.label`
    font-weight: bold;
    font-size: 14px;
    margin-bottom: 5px;
    color: #212529;
`;
export const ErrorMessage = styled.div`
    color #dc3545;
    font-size: 11px; 
    margin-top: 2px;
`;