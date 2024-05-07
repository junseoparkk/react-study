import './App.css';
import {useState} from 'react';

const Header = (props) => {
  return (
    <header>
      <h1 ><a href="/" onClick={(event) => {
        event.preventDefault();
        props.onChangeMode();
      }}>{props.title}</a></h1>
    </header>
  )
}

const Nav = (props) => {
  const list = []
  for (let i = 0; i < props.topics.length; i++) {
    let topic = props.topics[i];
    list.push(<li key={topic.id}>
      <a id={topic.id} href={`/read/${topic.id}`} onClick={event => {
        event.preventDefault();
        props.onChangeMode(Number(event.target.id));
    }}>{topic.title}</a></li>);
  }

  return (
    <nav>
      <ol>
        {list}
      </ol>
    </nav>
  )
}

const Article = ({ title, body }) => {
  return (
    <article>
      <h2>{title}</h2>
      {body}
    </article>
  )
}

const App = () => {
  const [mode, setMode] = useState('WELCOME');
  const [_id, setId] = useState(null);

  let content = null;
  const topics = [
    {id:1, title:'html', body:'html is ...'},
    {id:2, title:'css', body:'css is ...'},
    {id:3, title:'javascript', body:'javascript is ...'},
  ]

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
    </div>
  );
}

export default App;
