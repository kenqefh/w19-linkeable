import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { colors } from "../ui";
import { RiArrowUpSFill } from "react-icons/ri";

const ShowCard = styled.div`
display: flex;
flex-direction: column;
padding: 8px;

position: static;
width: 304px;
height: 368px;
left: 12px;
top: 100px;

background: #FFFFFF;
border: 1px solid #BDBDBD;
box-sizing: border-box;

/* Card Shadow */
box-shadow: 2px 2px 0px #BDBDBD;
border-radius: 8px;

& h2 {
    font-family: Inter;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
    color : #000000;
    margin-top:16px;
}
`;

const ShowSeccion = styled.div`
margin-top: 18px;
display : flex;
gap:26px;
&  .show-bio {
      width: 180px;
      height: 90;
      margin-left:24px;
}   
`

const ShowFooter = styled.div`
& .footer1{
    display:flex;
    justify-content:space-between;
}
& h2{
    font-family: Inter;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
    color:#000000;
    margin: 16px 0px 8px 0px;
    }
`

const LabelShow = styled.h3`
font-family: Inter;
font-style: normal;
font-weight: 600;
font-size: 12px;
line-height: 15px;
color: ${colors.gray2}
`;

const ParagraphShow = styled.p`
font-family: Inter;
font-style: normal;
font-weight: normal;
font-size: 12px;
line-height: 15px;
color: ${colors.gray3};
`;

const ButtonShow = styled.button`
  width:12px;
  heigth:6px;
  background-color:transparent;
  border:none;
  cursor:pointer;
  font-size:20px;
  margin:40px 0px 0px 250px;
  &:focus {
    outline:none;
  }
`

function Experience ({ocupation,company,startDate,endDate}){
    return(
        <div className="footer1">
        <div>
            <LabelShow>{ocupation}</LabelShow>
            <ParagraphShow>{company}</ParagraphShow>
            <ParagraphShow>{startDate}</ParagraphShow>
            <ParagraphShow>{endDate}</ParagraphShow>
        </div>

        <div>
            <LabelShow>0</LabelShow>
        </div>
    </div>
    )
}

function CandidateShow({
//   country,
//   name,
  onclick,
  ocupation = "no profession",
  experience = [],
//  avatarUrl,
  male = "Undefine",
  phone = "123",
  birthday = "00/00/00",
  bio = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque interdum rutrum sodales. Nullam mattis fermentum libero, non volutpat",
  company = "no company",
  startDate = "2000-05-01",
  endDate = "2000-05-01"
}) {

//   const date = (startDate,endDate) => {
//       let newdate = new Date(startDate);
//       let newdate2 = new Date(endDate);
//       let result = newdate2 - newdate;
//       return result;
//   }
  return (
    
    <div>

        {/* <div>
            <CandidateCard country={country} 
            name = {name} 
            profession = {profession} 
            experience = {experience} 
            avatarUrl = {avatarUrl}/>
        </div> */}

        <ShowSeccion>
            <div>
                <LabelShow>Gender</LabelShow>
                <ParagraphShow>{male}</ParagraphShow>

                <LabelShow>Phone</LabelShow>
                <ParagraphShow>{phone}</ParagraphShow>

                <LabelShow>Birthday</LabelShow>
                <ParagraphShow>{birthday}</ParagraphShow>
            </div>

            <div className="show-bio">
                <LabelShow>Bio</LabelShow>
                <ParagraphShow>{bio}</ParagraphShow>
            </div>
        </ShowSeccion>

        <ShowFooter>

            <h2>Job Experience</h2>

            <div> 
             {experience.map((exp)=> 
               <Experience ocupation={exp.ocupation} company = {exp.company} startDate = {exp.startDate} endDate={exp.endDate} experience={experience}/> 
             )}
            </div>
        </ShowFooter>
        <ButtonShow onClick={onclick}>
            <RiArrowUpSFill/>
        </ButtonShow>
    </div>

  );
}

export default CandidateShow;
