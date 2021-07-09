import './componentes/css/styles.css';
import { BrowserRouter as Router,Route,Switch} from "react-router-dom";
import 'bootstrap';
import '@fortawesome/fontawesome-free/css/all.min.css'
import ContenerdorTodos from './componentes/ContenerdorTodos';
import ContenerdorVideos from './componentes/ContenerdorVideos';

function App() {

  var navbarShrink = function () {
    const navbarCollapsible = document.body.querySelector('#mainNav');
    if (!navbarCollapsible) {
        return;
    }
    if (window.scrollY === 0) {
        navbarCollapsible.classList.remove('navbar-shrink')
    } else {
        navbarCollapsible.classList.add('navbar-shrink')
    }

};

// Shrink the navbar 
navbarShrink();

// Shrink the navbar when page is scrolled
document.addEventListener('scroll', navbarShrink);

// Activate Bootstrap scrollspy on the main nav element
const mainNav = document.body.querySelector('#mainNav');
if (mainNav) {

};

  
  return (
    <Router>
      <Switch>
        <Route exact path={"/"} component={ContenerdorTodos}/>
        <Route exact path={"/videos"} component={ContenerdorVideos}/>
      </Switch>
    </Router>
  );
}

export default App;
