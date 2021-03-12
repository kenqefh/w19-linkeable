import Steps from "../components/Steps";
import { RiCloseCircleLine } from "react-icons/ri";
import { InputText, Select } from "../components/Inputs";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import Button from "../components/Button";
import { useReducer, useState } from "react";
import { AvatarContainer } from "../components/CandidateCard";
import { useHistory } from "react-router";
import formReducer from "../reducers/formReducer";

const stepsData = ["Personal Information", "Avatar uploading"];

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  & > h2,
  svg {
    font-family: Inter;
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
  }
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 8px;
`;

const SmallContent = styled.p`
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 15px;
`;

const fieldsStep1 = (state, handleChange) => {
  return (
    <>
      <InputText
        label="Name"
        placeholder="John Doe"
        name="name"
        value={state.name}
        onChange={handleChange}
      />
      <Select
        label="Nationality"
        placeholder="Select an option"
        name="country"
        value={state.country.code}
        onChange={handleChange}
        options={[
          { value: "pe", text: "Peru" },
          { value: "ve", text: "Venezuela" },
          { value: "mx", text: "Mexico" },
        ]}
      />
      <InputText
        label="Profession"
        placeholder="Software Engineer"
        name="profession"
        value={state.profession}
        onChange={handleChange}
      />
      <InputText
        label="Experience"
        placeholder="0"
        name="experience"
        value={state.experience}
        onChange={handleChange}
      />
    </>
  );
};

const fieldsStep2 = (state, handleChange) => {
  return (
    <>
      <InputText
        label="Avatar URL"
        placeholder="https://..."
        name="avatarUrl"
        value={state.avatarUrl}
        onChange={handleChange}
      />
      <SmallContent>Preview:</SmallContent>
      <AvatarContainer
        cssProp={css`
          width: 90px;
          height: 90px;
          margin: 8px auto;
        `}
        avatarUrl={state.avatarUrl}
      />
    </>
  );
};

function MultiFrom({ onFormSubmit }) {
  const history = useHistory();
  const [currentStep, setCurrentStep] = useState(1);
  const [state, dispatch] = useReducer(formReducer, {
    name: "",
    country: { code: "" },
    profession: "",
    experience: "",
    avatarUrl: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch({ type: "CHANGE_FIELD", payload: { name, value } });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onFormSubmit(state);
    history.push("/search");
  };

  const handleCancel = () => {
    dispatch({ type: "RESET" });
    history.push("/search");
  };

  return (
    <Container>
      <Header>
        <h2>Create a new Candidate</h2>
        <RiCloseCircleLine
          style={{ cursor: "pointer" }}
          onClick={handleCancel}
        />
      </Header>
      <Steps steps={stepsData} currentStep={currentStep} />
      <form onSubmit={handleSubmit}>
        {currentStep === 1 && fieldsStep1(state, handleChange)}
        {currentStep === 2 && fieldsStep2(state, handleChange)}
      </form>

      {currentStep === 1 && (
        <Button size="large" onClick={() => setCurrentStep(currentStep + 1)}>
          Next
        </Button>
      )}
      {currentStep === stepsData.length && (
        <ButtonContainer>
          <Button size="large" onClick={() => setCurrentStep(currentStep - 1)}>
            Previous
          </Button>
          <Button size="large" onClick={handleSubmit}>
            Finish
          </Button>
        </ButtonContainer>
      )}
      {currentStep > 1 && currentStep < stepsData.length && (
        <ButtonContainer>
          <Button size="large" onClick={() => setCurrentStep(currentStep - 1)}>
            Previous
          </Button>
          <Button size="large" onClick={() => setCurrentStep(currentStep + 1)}>
            Next
          </Button>
        </ButtonContainer>
      )}
    </Container>
  );
}

export default MultiFrom;
