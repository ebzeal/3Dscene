import styled from 'styled-components';

const FormDiv = styled.div`
  background-color: #fbfbfb;
  padding: 20px;
  box-shadow: -1px 1px #ccc, -1px 1px #ccc, -1px 1px #ccc, -1px 1px #ccc, -1px 1px #ccc;
  min-width: 100%;

  @media (max-width: 800px){  
    margin-top: 40px
  }
 
  label {
    font-size:13px;
    color: #383636;
    margin-bottom: 8px;
    display:block;
  }

  input {
    font-size:13px;
    color: #fbfbfb;
    margin-bottom: 15px;
    display:block;
    width:300px;
    height:20px;
    border: none;
    border-radius:5px;
    background: #636363;
    padding: 5px;
  }

  button {
    display: block;
    cursor: pointer;
    background-color: #E3E8F0;
    border: 1px;
    border-radius: 4px;
    padding:10px 18px;

    &:hover {
      background-color: #636363;
      color: #E3E8F0;
    }
  }

  span {
    font-size:13px;
    color: #e03838;
    margin-bottom: 15px;
    display:block;
  }
`;

export { FormDiv };
