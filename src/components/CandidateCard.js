import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { colors } from "../ui";
import CandidateShow from "./CandidateShow";
import { useState } from "react";
import { RiArrowDownSFill } from "react-icons/ri";

const Card = styled.div`
  display: flex;
  flex-direction:column;
  gap: 8px;
  padding: 8px;
  background: ${colors.white};
  border: 1px solid ${colors.gray4};
  box-sizing: border-box;
  box-shadow: 2px 2px 0px ${colors.gray4};
  border-radius: 8px;
  & .card-header{
    display:flex;
  }
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
  margin-left:10px;
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

const ButtonCard = styled.button`
  width:12px;
  heigth:6px;
  background-color:transparent;
  border:none;
  cursor:pointer;
  font-size:20px;
  margin:40px 0px 0px 40px;
  &:focus {
    outline:none;
  }
`


function CandidateCard({
   country = { name: "Peru", code: "pe" },
   name = "No name",
   profession = "No Profession",
   experience = [""],
   avatarUrl,
} ) {

  const [show,setShow] = useState(false);

  return (
    <Card>
      <div className="card-header">
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
        {!show &&
            <ButtonCard onClick={()=>setShow(true)}>
              <RiArrowDownSFill/>
            </ButtonCard>}
      </div>
      {show && 
      <div className="card-body">
        <CandidateShow  onclick={()=>setShow(false)}/>
      </div>}
    </Card>
  );
}

export default CandidateCard;
export { AvatarContainer };
