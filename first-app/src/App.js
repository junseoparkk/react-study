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

const Create = (props) => {
  return (
    <article>
      <h2>Create</h2>
      <form onSubmit={event => {
        event.preventDefault();
        const title = event.target.title.value;
        const body = event.target.body.value;
        props.onCreate(title, body);
      }}>
        <p><input type='text' name='title' placeholder='title'></input></p>
        <p><textarea name='body' placeholder='body'></textarea></p>
        <p><input type='submit' value='Create'></input></p>
      </form>
    </article>
  )
}

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
