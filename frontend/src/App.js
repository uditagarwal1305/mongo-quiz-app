import {BrowserRouter as Router,Route,Switch} from "react-router-dom";
import Navbar from "./components/NavBar";
import CreateQuiz from "./components/CreateQuiz";
import Quiz from "./components/Quiz";
import Showquiz from "./components/Showquiz";

function App() {
 return (
   
   <Router> 
     <div>
     <Navbar />

     <Switch>
     <Route  path="/" exact>
      <CreateQuiz />
    </Route>
     </Switch>

   <Switch>
    <Route  path="/show">
    <Quiz />
    </Route>
    </Switch>  

    <Switch>
    <Route  path="/quiz">
      <Showquiz/>
    </Route>
    </Switch>  
    
    </div>
   </Router>
   
  //<Navbar />
 )
}

export default App;
