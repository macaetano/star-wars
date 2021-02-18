import React, { HtmlHTMLAttributes, InputHTMLAttributes } from "react";
import styled from "styled-components";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  actionLabel: string;
  action: () => void;
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  h3 {
    margin-bottom: 16px;
    color: #ddd;
    @media (max-width: 480px) {
      font-size: 18px;
    }
  }
  div {
    display: flex;
    flex-direction: row;
    height: 48px;

    input {
      background-color: #ddd;
      color: #141414;
      outline: none;
    }
    button {
      padding: 4px 16px;
      background-color: #edec51;
      outline: none;
      color: #141414;
      cursor: pointer;
      text-transform: uppercase;
    }
  }

  @media (max-width: 480px) {
    align-items: center;
  }
`;

const InputGroup: React.FC<Props> = ({
  label,
  actionLabel,
  action,
  ...inputProps
}) => (
  <Wrapper>
    <h3>{label}</h3>
    <div>
      <input {...inputProps} />
      <button onClick={action}>{actionLabel}</button>
    </div>
  </Wrapper>
);

export default InputGroup;
