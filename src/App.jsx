import Header from './Header.jsx';import Footer from './Footer.jsx';import Quotes from './Quotes.jsx';
import Card from "./Card.jsx";
import Goenka from "./Goenka.jsx";
import Note from "./Note.jsx";
import List from './List.jsx';
import RotatingQuotes from "./RotatingQuotes.jsx";
function App() {
  return(<><Header /><Card></Card><Quotes /><Note name="S.N. Goenka" /><Goenka /> <hr /> <List /><hr /><br /><br /><RotatingQuotes /><Footer />
  </>);
}

export default App
