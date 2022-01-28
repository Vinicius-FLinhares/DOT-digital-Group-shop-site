import {
    ContainerInput,
    DescriptionInput,
    InputTextArea,
    ErrorMessage
} from './style';

function TextArea({label,errorMessage,rows='5', ...otherProps}){
    return(
    <ContainerInput>
        <DescriptionInput>
            {label}:
        </DescriptionInput>
        <InputTextArea
        { ...otherProps}
        errorMessage={errorMessage}
        rows={rows}
        />
        <ErrorMessage>{errorMessage}</ErrorMessage>
    </ContainerInput>
    )
}
export default TextArea;