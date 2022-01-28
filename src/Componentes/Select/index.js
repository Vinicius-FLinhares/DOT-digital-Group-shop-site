import { 
    ContainerSelect,
    DescriptionSelect,
    List
 } from './style';

function Select({label,options, ...otherProps}){
    return(
        <ContainerSelect>
            <DescriptionSelect>{label}</DescriptionSelect>
            <List  {...otherProps}>
                {options.map(opt =>{
                 return   <option 
                            value={opt.value}
                            key={opt.value}
                            >{opt.label}
                            </option>
                })}
            </List>
        </ContainerSelect>
    )
}
export default Select;