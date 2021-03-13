import { useEffect, useState, useReducer } from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import Button from "../components/Button";
import { InputNumberMinMax, InputText } from "../components/Inputs";
import CandidateList from "../components/CandidateList";
import CircleButton from "../components/CircleButton";
import { RiHome2Line } from "react-icons/ri";
import {
  RiArrowDownSFill,
  RiArrowUpSFill,
  RiSearch2Line,
} from "react-icons/ri";
import { colors } from "../ui";
import { useHistory } from "react-router";
import AuthenticationSearch from "../components/AuthenticationSearch";
import queryReducer from "../reducers/queryReducer";

const SearchForm = styled.form`
  width: 296px;
`;

const MainSearch = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 8px;
  height: fit-content;

  & input {
    flex-grow: 10;
  }
`;

const AdvanceSearch = styled.div(
  ({ isOpen }) => `
  flex-direction: column;
  gap: 4px;
  display: ${isOpen ? "flex" : "none"};
`
);

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  position: absolute;
  left: 32px;
  right: 32px;
  bottom: 16px;
`;

const FiltersContainer = styled.div`
  margin-top: 16px;
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 14px;
  line-height: 17px;
  cursor: pointer;
  color: ${colors.gray3};
`;

function Search({ candidates }) {
  const history = useHistory();
  const [state, dispatch] = useReducer(queryReducer, {
    queryName: "",
    queryCompany: "",
    queryMinExp: "",
    queryMaxExp: "",
    queryCountry: ["Peru", "Mexico"],
    queryMinAge: "",
    queryMaxAge: "",
    queryGender: "",
  });
  const [filteredCandidates, setFilteredCandidates] = useState(null);
  const [advancedOpen, setAdvancedOpen] = useState(false);

  const handleHomeClick = () => {
    history.push("/");
  };

  const handleAddClick = () => {
    history.push("/multiform");
  };

  const handleQueryChange = (e) => {
    const { name, value } = e.target;
    dispatch({ type: "CHANGE_FIELD", payload: { name, value } });
  };

  const handleCountryChange = (e) => {
    const { value } = e.target;
    dispatch({ type: "ADD_COUNTRY", payload: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const nameRegex = new RegExp(state.queryName, "i");
    const companyRegex = new RegExp(state.queryCompany, "i");

    function getExperienceCompanies(candidate) {
      return candidate.experience.map(({ company }) => company).join("\n");
    }

    function getExperienceTime(candidate) {
      let accTime = 0;
      candidate.experience.map(({ startDate, endDate }) => {
        const start = new Date(startDate);
        const end = new Date(endDate);
        accTime += end - start || 0;
      });
      return Math.floor(accTime / 31556952000);
    }

    const filtered = candidates.filter((candidate) => {
      let yearOfExperience = getExperienceTime(candidate);
      let companies = getExperienceCompanies(candidate);

      return (
        nameRegex.test(candidate.name) &&
        companyRegex.test(companies) &&
        yearOfExperience >= state.queryMinExp &&
        yearOfExperience <= state.queryMaxExp
      );
    });
    setFilteredCandidates(filtered);
  };

  useEffect(() => {
    if (!state.queryName) setFilteredCandidates(null);
  }, [state.queryName]);

  const moreFilter = () => {
    if (advancedOpen)
      return (
        <>
          <p>Less filters</p>
          <RiArrowUpSFill />
        </>
      );
    return (
      <>
        <p>More filters</p>
        <RiArrowDownSFill />
      </>
    );
  };

  return (
    <div style={{ width: "100%" }}>
      <SearchForm onSubmit={handleSubmit}>
        <MainSearch>
          <InputText
            label="Search for candidates"
            placeholder="John Doe"
            name="queryName"
            value={state.queryName}
            onChange={handleQueryChange}
            cssProp={css`
              width: 100%;
            `}
          />
          <Button size="medium">Search</Button>
        </MainSearch>
        <FiltersContainer onClick={() => setAdvancedOpen(!advancedOpen)}>
          {moreFilter()}
        </FiltersContainer>

        <AdvanceSearch isOpen={advancedOpen}>
          <InputText
            label="Company"
            placeholder="query"
            name="queryCompany"
            value={state.queryCompany}
            onChange={handleQueryChange}
            icon={<RiSearch2Line />}
          />

          <InputNumberMinMax
            label="Years of experience:"
            min={{
              label: "Min",
              placeholder: "0",
              name: "queryMinExp",
              value: state.queryMinExp,
              onChange: handleQueryChange,
            }}
            max={{
              label: "Max",
              placeholder: "0",
              name: "queryMaxExp",
              value: state.queryMaxExp,
              onChange: handleQueryChange,
            }}
          />

          {/*            
          <div>
            <p>Years of experience:</p>
            <div
              style={{
                display: "flex",
                width: "100%",
                gap: "4px",
                marginTop: "4px",
              }}
            >
              <InputText
                label="min"
                placeholder="0"
                name="queryMinExp"
                value={state.queryMinExp}
                onChange={handleQueryChange}
                cssProp={css`
                  flex-direction: row;
                  align-items: center;
                  width: 100px;
                `}
              />
              <InputText
                label="max"
                placeholder="0"
                name="queryMaxExp"
                value={state.queryMaxExp}
                onChange={handleQueryChange}
                cssProp={css`
                  flex-direction: row;
                  align-items: center;
                  width: 100px;
                `}
              />
            </div>
            <select onChange={handleCountryChange}>
              <option value="">Select an option</option>
              <option value="Peru">Peru</option>
              <option value="Mexico">Mexico</option>
              <option value="Venezuela">Venezuela</option>
            </select>
            <span>Selected:</span>
            {state.queryCountry.map((c, i) => (
              <span
                key={i}
                onClick={() =>
                  dispatch({
                    type: "REMOVE_COUNTRY",
                    payload: { removeCountry: c },
                  })
                }
              >
                {c}
              </span>
            ))}
          </div>
          */}
        </AdvanceSearch>
      </SearchForm>

      <CandidateList candidates={filteredCandidates || candidates} />

      <ButtonContainer>
        <CircleButton onClick={handleHomeClick}>
          <RiHome2Line />
        </CircleButton>
        <AuthenticationSearch />
      </ButtonContainer>
    </div>
  );
}

export default Search;
