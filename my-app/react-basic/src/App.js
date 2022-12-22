import Article from './components/article';
import InputText from './components/inputText';
import Counter from './components/count';
import GetData from './components/getData';
// import './App.css';

const App = () => (
  <div>
    <Article title={'テキストテキストてきすと'} content={'テキストテキストてきすと'} />
    <InputText />
    <Counter />
    <GetData />
  </div>
)

export default App;
