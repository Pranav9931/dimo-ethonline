import styled from "styled-components";

export const ServicesSectionContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    align-self: flex-start;
`

export const ServiceContainerPrimary = styled.div`
    backdrop-filter: blur(20px) saturate(180%);
    -webkit-backdrop-filter: blur(20px) saturate(180%);
    background-color: rgba(255, 255, 255, 0.32);
    border-radius: 20px;
    border: 1px solid rgba(209, 213, 219, 0.3);
    min-width: 400px;
    box-shadow: 0 0 50px rgba(0, 0, 0, 0.05);
    padding: 30px 20px;
`

export const SmartAssitantContainer = styled.div`
    background: #FFFFFF50;
    border-radius: 10px;
    border: 0.1px solid #00000010;
    height: 40px;
    padding: 10px;
    display: flex;
    gap: 10px;
`

export const TextFieldStyles = {
    flex: 1,
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        border: 'none',
        height: '40px',
      },
      '&:hover fieldset': {
        border: 'none',
      },
      '&.Mui-focused fieldset': {
        border: 'none',
      },
    },
    '& .MuiInputBase-input': {
      border: 'none',
      outline: 'none',
      height: '40px',
      fontFamily: 'var(--main-font-reg)',
    },
    '& .MuiOutlinedInput-input': {
      padding: '0',
    },
    '& .MuiOutlinedInput-notchedOutline': {
      border: 'none',
    },
  };