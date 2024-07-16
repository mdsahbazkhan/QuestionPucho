import React, { useEffect ,useState} from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import Navbar from "./components/Navbar/Navbar.jsx";
import AllRoutes from "./AllRoutes.jsx";
import { fetchAllQuestions } from "./actions/question.js";
import { fetchAllUsers } from "./actions/users";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllQuestions());
    dispatch(fetchAllUsers());
  }, [dispatch]);

  const [slidein, setslidein] = useState(true);

  useEffect(() => {
    if (window.innerWidth <= 760) {
      setslidein(false);
    }
  }, []);

  const handleslidein = () => {
    if (window.innerWidth <= 760) {
      setslidein((state) => !state);
    }
  };

  return (
    <div className="App">
      <Router>
        <Navbar handleslidein={handleslidein}/>
        <AllRoutes slidein={slidein} handleslidein={handleslidein} />
      </Router>
    </div>
  );
}

export default App;
