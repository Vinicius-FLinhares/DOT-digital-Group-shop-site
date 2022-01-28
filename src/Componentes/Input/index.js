import {
    ContainerInput,
    DescriptionInput,
    InputText,
    ErrorMessage
} from './style';

function Input({label,errorMessage, ...otherProps}){
    return(
    <ContainerInput>
        <DescriptionInput>
            {label}:
        </DescriptionInput>
        <InputText
        { ...otherProps}
        errorMessage={errorMessage}
        />
        <ErrorMessage>{errorMessage}</ErrorMessage>
    </ContainerInput>
    )
}
export default Input;