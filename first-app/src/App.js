import './App.css';
import {useState} from 'react';
import Header from './components/Header';
import Nav from './components/Nav';
import Article from './components/Article';
import Create from './components/Create';

const App = () => {
  const [mode, setMode] = useState('WELCOME');
  const [_id, setId] = useState(null);
  const [topics, setTopics] = useState([
    {id:1, title:'html', body:'html is ...'},
    {id:2, title:'css', body:'css is ...'},
    {id:3, title:'javascript', body:'javascript is ...'},
  ])
  const [nextId, setNextId] = useState(4);

  let content = null;

  if (mode === 'WELCOME') {
    content = <Article title='Welcome' body='Hello, Web'></Article>
  } else if (mode === 'READ') {
    let title, body = null;
    for (let i = 0; i < topics.length; i++) {
      if (topics[i].id === _id) {
        title = topics[i].title;
        body = topics[i].body;
      }
    }
    content = <Article title={title} body={body}></Article>
  } else if (mode === 'CREATE') {
      content = <Create onCreate={(_title, _body) => {
        const newTopic = {id:nextId, title:_title, body:_body};
        const newTopics = [...topics];
        newTopics.push(newTopic);
        setTopics(newTopics);
        setMode('READ');
        setId(nextId);
        setNextId(nextId + 1);
      }}>
      </Create>
  }

  return (
    <div>
      <Header title="Title" onChangeMode={() => {
        setMode('WELCOME');
      }}></Header>
      <Nav topics={topics} onChangeMode={(_id) => {
        setMode('READ');
        setId(_id);
      }}></Nav>
      {content}
      <a href='create' onClick={event => {
        event.preventDefault();
        setMode('CREATE');
      }}>Create</a>
    </div>
  );
}

export default App;
