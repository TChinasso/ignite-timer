import styled from "styled-components";


export const HomeContainer = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  form{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3.5rem;
  }
`

export const FormContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 0.35rem;
  color: ${props => props.theme["gray-100"]};
  font-size: 1.125rem;
  font-weight: bold;
  flex-wrap: wrap;
`
const BaseInput = styled.input`
  background-color: transparent;
  height: 2.5rem;
  border: 0;
  border-bottom: 2px solid ${props => props.theme["gray-500"]};
  font-weight: bold;
  font-size: 1.125rem;
  padding: 0 0.5rem;
  color: ${props => props.theme["gray-100"]};;
  &::placeholder{
    color: ${props => props.theme["gray-500"]};
  }
  &:focus{
    box-shadow: none;
    border-color: ${props => props.theme["green-500"]};

  }
`

export const TaskInput = styled(BaseInput)`
  flex: 1;
  &::-webkit-calendar-picker-indicator {
    display: none !important;
  }
`
export const MinutesAmmountInput = styled(BaseInput)`
  width: 4rem;
`

export const CountDownCOntainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  span{
    font-family: 'Roboto mono', sans-serif;
    font-weight: bold;
    font-size: 10rem;
    color: white;
    background-color: ${props => props.theme["gray-700"]};
    border-radius: 8px;
    padding: 2rem 1rem;
    &:nth-of-type(3){
      background-color: unset;
      color: ${props => props.theme["green-500"]};
      display: flex;
      align-items: center;
    }
  }
`

export const ButtonContainer = styled.button`
  width: 100%;
  height: 4rem;
  background-color: ${props => props.theme["green-500"]};
  border-radius: 8px;
  outline: 0px;
  border: 0px;
  font-weight: bold;
  color: ${props => props.theme.white};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  cursor: pointer;
  transition: background 0.2s ease;
  &:not(:disabled):hover{
    background-color: ${props => props.theme["green-700"]};
  }
  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`