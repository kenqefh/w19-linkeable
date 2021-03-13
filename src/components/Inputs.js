import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { colors } from "../ui";

const StyledInput = styled.input`
  width: 100%;
  border: none;
  color: ${colors.gray2};
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: ${colors.gray5};
  }
`;

const StyledSelect = styled.select`
  border: none;
  width: 100%;
  color: ${colors.gray2};
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: ${colors.gray5};
  }
  option:first-of-type {
    color: red;
  }
`;

const Container = styled.div(
  (props) => css`
    width: 100%;
    display: flex;
    align-items: center;
    padding: 4px 12px;
    background: ${colors.white};
    border: ${`1px solid ${props.error ? colors.red : colors.gray6}`};
    box-sizing: border-box;
    border-radius: 8px;
    gap: 4px;
    height: fit-content;
    &:hover {
      border: ${`1px solid ${colors.gray4}`};
    }
    &:focus-within {
      border: ${`1px solid ${colors.gray3}`};
      box-shadow: ${`0px 0px 4px ${colors.gray3}`};
    }
  `
);

const FieldContainer = styled.div(
  ({ cssProp }) => css`
    display: flex;
    flex-direction: column;
    gap: 2px;
    ${cssProp}
  `
);

const InputLabel = styled.label`
  font-size: 14px;
  line-height: 17px;
`;

const Caption = styled.span(
  (props) => css`
    font-size: 14px;
    line-height: 17px;
    color: ${props.error ? colors.red : colors.gray4};
  `
);

function Input({
  label = "",
  caption = "",
  icon,
  error = false,
  placeholder = "",
  name = "",
  value = "",
  type = "text",
  onChange,
  cssProp,
  ...inputProps
}) {
  return (
    <FieldContainer cssProp={cssProp}>
      {label && <InputLabel htmlFor={name}>{label}</InputLabel>}
      <Container error={error}>
        <StyledInput
          type={type}
          value={value}
          name={name}
          placeholder={placeholder}
          id={name}
          onChange={onChange}
          {...inputProps}
        />
        {icon}
      </Container>
      {caption && <Caption error={error}>Caption test</Caption>}
    </FieldContainer>
  );
}

function InputText(props) {
  return <Input {...props} type="text" />;
}

function InputDate(props) {
  const now = new Date();
  const maxDate = now.toISOString().substring(0, 10);

  return <Input {...props} type="date" max={maxDate} />;
}

const StyledInputNumberMinMax = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const MinMaxInputs = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
`;

function InputNumberMinMax({ label, min, max }) {
  const cssProp = css`
    flex-direction: row;
    gap: 4px;
  `;

  return (
    <StyledInputNumberMinMax>
      <InputLabel>{label}</InputLabel>
      <MinMaxInputs>
        <Input {...min} type="number" cssProp={cssProp} min={0} max={1_000} />
        <Input {...max} type="number" cssProp={cssProp} min={0} max={1_000} />
      </MinMaxInputs>
    </StyledInputNumberMinMax>
  );
}

function Select({
  label = "",
  caption = "",
  icon,
  error = false,
  placeholder = "",
  name = "",
  value,
  options = [],
  onChange,
}) {
  return (
    <FieldContainer>
      {label && <InputLabel htmlFor={name}>{label}</InputLabel>}
      <Container error={error}>
        <StyledSelect
          type="select"
          value={value}
          name={name}
          placeholder={placeholder}
          id={name}
          onChange={onChange}
        >
          <option disabled value="">
            {placeholder}
          </option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.text}
            </option>
          ))}
        </StyledSelect>
        {icon}
      </Container>
      {caption && <Caption error={error}>Caption test</Caption>}
    </FieldContainer>
  );
}

export { InputText, Select, InputDate, InputNumberMinMax };
