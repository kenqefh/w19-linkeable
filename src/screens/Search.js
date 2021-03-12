import { useEffect, useState, useReducer } from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import Button from "../components/Button";
import { InputText } from "../components/Inputs";
import CandidateList from "../components/CandidateList";
import CircleButton from "../components/CircleButton";
import { RiAddLine } from "react-icons/ri";
import { RiHome2Line } from "react-icons/ri";
import { RiArrowDownSFill, RiSearch2Line } from "react-icons/ri";
import { colors } from "../ui";
import { useHistory } from "react-router";
import queryReducer from "../reducers/queryReducer";

const SearchForm = styled.form``;

const MainSearch = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 8px;
  height: fit-content;
`;

const AdvanceSearch = styled.div(
  ({ isOpen }) => `
  flex-direction: column;
  gap: 8px;
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
  display: flex;
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
    queryProfession: "",
    queryMinExp: "",
    queryMaxExp: "",
    queryCountry: ["Peru", "Mexico"],
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
    const professionRegex = new RegExp(state.queryProfession, "i");
    const filtered = candidates.filter(
      (candidate) =>
        nameRegex.test(candidate.name) &&
        professionRegex.test(candidate.profession) &&
        parseInt(candidate.experience) >= state.queryMinExp &&
        parseInt(candidate.experience) <= (state.queryMaxExp || Infinity) &&
        state.queryCountry.includes(candidate.country.name)
    );
    setFilteredCandidates(filtered);
  };

  useEffect(() => {
    if (!state.queryName) setFilteredCandidates(null);
  }, [state.queryName]);

  return (
    <div>
      <SearchForm onSubmit={handleSubmit}>
        <MainSearch>
          <InputText
            label="Search for candidates"
            placeholder="John Doe"
            name="queryName"
            value={state.queryName}
            onChange={handleQueryChange}
          />
          <Button size="medium">Search</Button>
        </MainSearch>
        <FiltersContainer onClick={() => setAdvancedOpen(!advancedOpen)}>
          <p>More filters</p>
          <RiArrowDownSFill />
        </FiltersContainer>
        <AdvanceSearch isOpen={advancedOpen}>
          <InputText
            label="Profession"
            placeholder="query"
            name="queryProfession"
            value={state.queryProfession}
            onChange={handleQueryChange}
            icon={<RiSearch2Line />}
          />
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
        </AdvanceSearch>
      </SearchForm>
      <CandidateList candidates={filteredCandidates || candidates} />
      <ButtonContainer>
        <CircleButton onClick={handleHomeClick}>
          <RiHome2Line />
        </CircleButton>
        <CircleButton>
          <RiAddLine onClick={handleAddClick} />
        </CircleButton>
      </ButtonContainer>
    </div>
  );
}

export default Search;
