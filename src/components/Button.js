import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { colors } from "../ui";

const paddings = {
  large: "8px 12px",
  medium: "4px 12px",
  small: "2px 8px",
};

const StyledButton = styled.button(
  (props) => css`
    padding: ${paddings[props.size]};
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    border: 1px solid transparent;
    gap: 4px;
    background-color: ${colors.gray2};
    color: ${colors.white};
    font-size: ${props.size === "large" ? "14px" : "12px"};
    line-height: ${props.size === "large" ? "17px" : "15px"};
    cursor: pointer;
    &:hover {
      background: ${colors.gray4};
    }
    &:active {
      background: ${colors.gray1};
    }
    &:focus {
      outline: none;
    }
    transition: all 300ms;
  `
);

function Button({ children, size = "medium", onClick }) {
  return (
    <StyledButton size={size} onClick={onClick}>
      {children}
    </StyledButton>
  );
}

export default Button;
