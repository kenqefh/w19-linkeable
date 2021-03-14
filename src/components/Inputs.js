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

const StyledRadioGroup = styled.div`
  border: 1px solid #bdbdbd;
  height: 33px;
  display: flex;
  align-self: center;
  justify-content: center
  margin-bottom: 8px;
  margin-top: 4px;
`;

const StyledGroup = styled(StyledRadioGroup)`
  justify-content: flex-start;
`;

const LabelRadio = styled.label`
  color: ${colors.gray2};
  padding: 8px 12px;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
`;
const RadioButton = styled.div`
  background: ${colors.white};
  display: flex;
  color: ${colors.gray3};
  & input {
    display: none;
  }
  & input:checked + label {
    color: white;
    background: ${colors.gray3};
    border: none;
    transition: 350ms;
  }
`;

const StyledTextArea = styled.textarea`
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

const InputLabelGray = styled(InputLabel)`
  color: ${colors.gray4};
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
  name = "",
  value,
  options = [],
  onChange,
  placeholder,
  ...props
}) {
  return (
    <FieldContainer>
      {label && <InputLabel htmlFor={name}>{label}</InputLabel>}
      <Container error={error}>
        <StyledSelect
          type="select"
          name={name}
          id={name}
          onChange={onChange}
          {...props}
        >
          {placeholder && (
            <option disabled value="">
              {placeholder}
            </option>
          )}
          {options.map((option) => (
            <option key={option.text + option.value} value={option.value}>
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

function InputTextArea({
  label = "",
  caption = "",
  icon,
  error = false,
  placeholder = "",
  name = "",
  value = "",
  onChange,
  cssProp,
}) {
  return (
    <FieldContainer cssProp={cssProp}>
      {label && <InputLabel htmlFor={name}>{label}</InputLabel>}
      <Container error={error}>
        <StyledTextArea
          value={value}
          name={name}
          placeholder={placeholder}
          id={name}
          onChange={onChange}
        />
        {icon}
      </Container>
      {caption && <Caption error={error}>Caption test</Caption>}
    </FieldContainer>
  );
}

function InputRadioButton({
  label = "",
  value,
  role,
  name,
  id,
  options = [],
  onChange,
  cssProp,
}) {
  return (
    <FieldContainer cssProp={cssProp}>
      {label && <InputLabel htmlFor={name}>{label}</InputLabel>}
      <StyledRadioGroup
        value={value}
        role="group"
        name={name}
        id={name}
        onChange={onChange}
      >
        {options.map((option) => (
          <RadioButton key={option.value}>
            <input
              type="radio"
              id={option.value}
              name="gender"
              key={option.value}
              value={option.value}
            />
            <LabelRadio htmlFor={option.value}>{option.value}</LabelRadio>
          </RadioButton>
        ))}
      </StyledRadioGroup>
    </FieldContainer>
  );
}

function MultipleOptions({
  label = "",
  value,
  role,
  name,
  id,
  options = [],
  onChange,
  cssProp,
  ...inputProps
}) {
  return (
    <FieldContainer cssProp={cssProp}>
      {label && <InputLabel htmlFor={name}>{label}</InputLabel>}
      <div style={{ alignSelf: "start" }}>
        <StyledGroup>
          {options.map((option) => (
            <RadioButton key={option.value}>
              <input
                onChange={onChange}
                type="checkbox"
                id={option.value}
                name={name}
                key={option.value}
                value={option.value}
                {...inputProps}
              />
              <LabelRadio htmlFor={option.value}>{option.value}</LabelRadio>
            </RadioButton>
          ))}
        </StyledGroup>
      </div>
      <InputLabelGray>Chose one or more</InputLabelGray>
    </FieldContainer>
  );
}
export {
  InputText,
  Select,
  InputDate,
  InputTextArea,
  InputRadioButton,
  InputNumberMinMax,
  MultipleOptions,
};
