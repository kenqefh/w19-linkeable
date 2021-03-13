import Welcome from "./screens/Welcome";
import Search from "./screens/Search";
import MultiForm from "./screens/MultiForm";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useState } from "react";

const initialCandidates = [
  {
    id: 161,
    name: "Jimon Jimonez",
    phone: "",
    gender: "male",
    birthday: "1980-12-31",
    nationality: { name: "Peru", code: "pe" },
    bio: "",
    profession: "",
    experience: [
      {
        ocupation: "Developer",
        company: "Google",
        startDate: "2019-05-01",
        endDate: "2019-08-01",
      },
      {
        ocupation: "Developer",
        company: "Google",
        startDate: "2019-05-01",
        endDate: "",
      },
    ],
    avatarUrl: "/assets/avatars/avatar.png",
  },
  {
    id: 172,
    name: "Xu Xiao",
    phone: "",
    gender: "female",
    birthday: "1990-12-31",
    nationality: { name: "Colombia", code: "co" },
    bio: "",
    profession: "",
    experience: [
      {
        ocupation: "QA engineer",
        company: "Alibaba",
        startDate: "2015-01-01",
        endDate: "2021-02-01",
      },
    ],
    avatarUrl: "/assets/avatars/avatar.png",
  },
  {
    id: 183,
    name: "Juan Lucas",
    phone: "",
    gender: "other",
    birthday: "2000-12-31",
    nationality: { name: "Peru", code: "pe" },
    bio: "",
    profession: "",
    experience: [
      {
        ocupation: "Developer engineer",
        company: "Youtube",
        startDate: "2019-05-01",
        endDate: "2020-08-01",
      },
    ],
    avatarUrl: "/assets/avatars/avatar.png",
  },
  {
    id: 194,
    name: "Zilla Mendieta",
    phone: "",
    gender: "female",
    birthday: "1998-03-04",
    nationality: { name: "Peru", code: "pe" },
    bio: "",
    profession: "",
    experience: [
      {
        ocupation: "Designer",
        company: "Doritos",
        startDate: "2019-05-01",
        endDate: "2019-12-01",
      },
      {
        ocupation: "Designer",
        company: "facebook",
        startDate: "2020-02-01",
        endDate: "2021-01-01",
      },
    ],
    avatarUrl: "/assets/avatars/avatar.png",
  },
  {
    id: 205,
    name: "Jamon Jamones",
    phone: "",
    gender: "male",
    birthday: "1879-12-31",
    nationality: { name: "Peru", code: "pe" },
    bio: "",
    profession: "",
    experience: [
      {
        ocupation: "Artist",
        company: "Wikipedia",
        startDate: "2000-05-01",
        endDate: "2010-08-01",
      },
      {
        ocupation: "Designer",
        company: "youtube",
        startDate: "2010-09-01",
        endDate: "2015-01-01",
      },
      {
        ocupation: "Designer",
        company: "facebook",
        startDate: "2015-01-01",
        endDate: "2021-01-01",
      },
    ],
    avatarUrl: "/assets/avatars/avatar.png",
  },
];

function App() {
  const [candidates, setCandidates] = useState(initialCandidates);

  const handleAddCandidate = (newCandidate) => {
    setCandidates([...candidates, newCandidate]);
  };

  return (
    <Router>
      <Switch>
        <Route path="/search">
          <Search candidates={candidates} />
        </Route>
        <Route path="/multiform">
          <MultiForm onFormSubmit={handleAddCandidate} />
        </Route>
        <Route path="/" component={Welcome} />
      </Switch>
    </Router>
  );
}

export default App;
