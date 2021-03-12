import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { colors } from "../ui";

const Card = styled.div`
  display: flex;
  gap: 8px;
  padding: 8px;
  background: ${colors.white};
  border: 1px solid ${colors.gray4};
  box-sizing: border-box;
  box-shadow: 2px 2px 0px ${colors.gray4};
  border-radius: 8px;
`;

const AvatarContainer = styled.div(
  ({ avatarUrl, cssProp }) => css`
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background-image: url(${avatarUrl});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-color: ${colors.gray6};
    border: 1px solid ${colors.gray4};
    ${cssProp}
  `
);

const Information = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  & > h4,
  span {
    font-size: 12px;
    line-height: 15px;
    font-weight: 400;
  }
`;

const InfoHeader = styled.div`
  display: flex;
  gap: 4px;
  & > h3 {
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
  }
`;

function CandidateCard({
  country = { name: "Peru", code: "pe" },
  name = "No name",
  profession = "No Profession",
  experience = 0,
  avatarUrl,
}) {
  return (
    <Card>
      <AvatarContainer avatarUrl={avatarUrl}></AvatarContainer>
      <Information>
        <InfoHeader>
          <img
            src={`/assets/32x32/${country.code}.png`}
            width="14px"
            alt="flag"
          />
          <h3>{name}</h3>
        </InfoHeader>
        <h4>{profession}</h4>
        <span>{`${experience} years of experience`}</span>
      </Information>
    </Card>
  );
}

export default CandidateCard;
export { AvatarContainer };
