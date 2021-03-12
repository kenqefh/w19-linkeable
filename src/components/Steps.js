import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { colors } from "../ui";
import { RiCheckFill } from "react-icons/ri";

const StepContainer = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 4px;
  gap: 4px;
  width: 100px;
`;

const numberBorder = {
  progress: "1px solid transparent",
  waiting: `1px solid ${colors.gray4}`,
  finished: `1px solid ${colors.green}`,
};

const numberBackground = {
  progress: colors.blue,
  waiting: colors.white,
  finished: colors.white,
};

const numberColor = {
  progress: colors.white,
  waiting: colors.gray4,
  finished: colors.green,
};

const StepNumber = styled.div(
  ({ status }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background-color: ${numberBackground[status]};
    border: ${numberBorder[status]};
    font-size: 16px;
    line-height: 19px;
    text-align: center;
    color: ${numberColor[status]};
    flex: none;
  `
);

const StepInfo = styled.div(
  ({ status }) => css`
    display: flex;
    flex-direction: column;
    gap: 2px;
    & > h4 {
      font-family: Inter;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 17px;
      color: ${status === "waiting" ? colors.gray4 : colors.gray2};
      text-transform: capitalize;
    }

    & > p {
      font-family: Inter;
      font-style: normal;
      font-weight: normal;
      font-size: 10px;
      line-height: 12px;
      color: ${status === "progress" ? colors.gray2 : colors.gray4};
    }
  `
);

function Step({ stepNumber, description, status }) {
  return (
    <StepContainer>
      <StepNumber status={status}>
        {status === "finished" ? <RiCheckFill /> : stepNumber}
      </StepNumber>
      <StepInfo status={status}>
        <h4>{status}</h4>
        <p>{description}</p>
      </StepInfo>
    </StepContainer>
  );
}

const getStatus = (stepNumber, currentNumber) => {
  if (stepNumber < currentNumber) {
    return "finished";
  } else if (stepNumber === currentNumber) {
    return "progress";
  } else {
    return "waiting";
  }
};

const StepsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
`;

function Steps({ steps = [], currentStep = 1 }) {
  return (
    <StepsContainer>
      {steps.map((step, index) => (
        <Step
          key={index}
          stepNumber={index + 1}
          description={step}
          status={getStatus(index + 1, currentStep)}
        />
      ))}
    </StepsContainer>
  );
}

export default Steps;
