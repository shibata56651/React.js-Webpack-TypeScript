import Article from './components/article';
import InputText from './components/inputText';
import Counter from './components/count';
// import './App.css';

const App = () => (
  <div>
    <Article title={'テキストテキストてきすと'} content={'テキストテキストてきすと'} />
    <InputText />
    <Counter />
  </div>
)

export default App;
