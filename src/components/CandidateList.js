import styled from "@emotion/styled";
import CandidateCard from "./CandidateCard";

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 12px;
`;

function CandidateList({ candidates }) {
  return (
    <ListContainer>
      {candidates.map((candidate) => (
        <CandidateCard key={candidate.id} {...candidate} />
      ))}
    </ListContainer>
  );
}

export default CandidateList;
