import React from 'react';
import { InputContainer, InputText, InputDropdown, InputTitle } from './InputElements';

const Input = (props) => {

    if(props.elType == 'Dropdown'){
        return (
            <InputContainer>
              <InputTitle>{props.title}:</InputTitle>
              <InputDropdown
                name={props.name}
                // className={classes.SelectInput}
                type={props.type}
                placeholder={props.placeholder}
                value={props.value}
                onChange={props.onInput}
              >
                <option name="county" id="option" value="" disabled selected>
                  {props.placeholder}
                </option>
                {props.list.map((m) => (
                  <option>{m.name}</option>
                ))}
              </InputDropdown>
            </InputContainer>
          );
    }

    if(props.elType == 'text'){
        return (
          <InputContainer>
            <InputTitle>{props.title}:</InputTitle>
            <InputText type="text" placeholder={props.title} />
          </InputContainer>
        );

    }
   

    
}
 
export default Input;