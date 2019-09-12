import React, { FunctionComponent, useState, useEffect, SyntheticEvent, FormEvent } from 'react';
import styled from 'styled-components';

type ButtonState = {
    readonly isExpand: boolean
}

const ButtonContainer = styled.div<ButtonState>`
    margin-top:16px;
    align-self: flex-end;
    width:${props => !props.isExpand ? "40px" : "240px"};
    height:${props => !props.isExpand ? "40px" : "100px"};
    background-color:${props => props.theme.colors.white};
    border:${props => props.theme.border.bold};
    box-shadow:${props => !props.isExpand ? props.theme.shadow.normal : props.theme.shadow.big};
    padding:${props => !props.isExpand ? "0px" : "10px"};
    transition:600ms;
    &:hover{
        box-shadow:${props => props.theme.shadow.pressed};
    }
`;
const Plus = styled.div`
    font-size:48px;
    color:${props => props.theme.colors.black};
    font-weight:${props => props.theme.fontWeight.bold};
    vertical-align:middle;
    text-align:center;
    line-height:40px;
    cursor: pointer;
`;
const FormContainer = styled.form`
    display:flex;
    flex-direction:column;
`;
const FormInput = styled.input`
  border-top: none !important;
  border-left: none !important;
  border-right: none !important;
  border-bottom: 1px solid ${props => props.theme.colors.black};
  padding-bottom: 2px;
  margin-bottom: 20px;
  border-radius: 0;
  -webkit-appearance: none;
  color:${props => props.theme.colors.black};
  font-weight:${props => props.theme.fontWeight.bold};
  font-size: ${props => props.theme.fontSize.body};
  outline: none;
  background: transparent;
  :focus,
  :visited,
  :active & {
    outline: none;
  }
`;
const FormButtonContainer = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:flex-end;
    margin:20px 0px;
`;

const FormSubmit = styled.input`
  border: none;
  font-weight:${props => props.theme.fontWeight.bold};
  font-size: ${props => props.theme.fontSize.info};
  outline: none;
  background: transparent;
  color:${props => props.theme.colors.black};
  cursor: pointer;
  &:hover {
    border-bottom: 1px solid ${props => props.theme.colors.black};
  }
`;

const FormButton = styled.button`
  border: none;
  font-weight:${props => props.theme.fontWeight.bold};
  font-size: ${props => props.theme.fontSize.info};
  outline: none;
  background: transparent;
  color:${props => props.theme.colors.red};
  cursor: pointer;
  &:hover {
    border-bottom: 1px solid ${props => props.theme.colors.red};
  }
`;


export const AddButton: FunctionComponent = ({ }) => {
    const [expand, setExpand] = useState(false);
    const [name, setName] = useState('');
    const [link, setLink] = useState('');

    const _onSubmit = (event: SyntheticEvent) => {
        event.preventDefault()
        console.log(name, link)
        setExpand(!expand);
        setName('');
        setLink('');
    }
    const _onChangeName = (event: FormEvent<HTMLInputElement>) => {
        setName(event.currentTarget.value);
    }
    const _onChangeLink = (event: FormEvent<HTMLInputElement>) => {
        setLink(event.currentTarget.value);
    }
    const handleCancel = () => {
        setExpand(!expand);
        setName('');
        setLink('');
    }

    const innerElement = (s: boolean) => {
        return s ?
            (
                <FormContainer onSubmit={_onSubmit}>
                    <FormInput required={true} name="name" type="text" value={name} onChange={_onChangeName} placeholder="name" />
                    <FormInput required={true} name="link" type="text" value={link} onChange={_onChangeLink} placeholder="link" />
                    <FormButtonContainer>
                        <FormButton onClick={handleCancel} >CANCEL</FormButton>
                        <FormSubmit type="submit" value="SUBMIT" />
                    </FormButtonContainer>
                </FormContainer>
            ) : <Plus onClick={() => { setExpand(!expand) }} >+</Plus>
    }

    return (
        <ButtonContainer isExpand={expand} >{innerElement(expand)}</ButtonContainer>
    )


}