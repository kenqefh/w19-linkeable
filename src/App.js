import Welcome from "./screens/Welcome";
import Search from "./screens/Search";
import MultiForm from "./screens/MultiForm";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useState } from "react";

const initialCandidates = [
  {
    country: { name: "Peru", code: "pe" },
    name: "Jimon Simenez",
    profession: "Developer",
    experience: "2",
    avatarUrl: "/assets/avatars/avatar.png",
  },
  {
    country: { name: "Mexico", code: "mx" },
    name: "Jamon Ramonez",
    profession: "Developer as well",
    experience: "5",
    avatarUrl: "/assets/avatars/avatar.png",
  },
  {
    country: { name: "Venezuela", code: "ve" },
    name: "Francisco Gaviria",
    profession: "Speaker",
    experience: "10",
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
