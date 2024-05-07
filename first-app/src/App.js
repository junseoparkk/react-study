import './App.css';

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
        props.onChangeMode(event.target.id);
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
  const topics = [
    {id:1, title:'html', body:'html is ...'},
    {id:2, title:'css', body:'css is ...'},
    {id:3, title:'javascript', body:'javascript is ...'},
  ]

  return (
    <div>
      <Header title="Title" onChangeMode={() => {
        alert('Header!');
      }}></Header>
      <Nav topics={topics} onChangeMode={(id) => {
        alert(id);
      }}></Nav>
      <Article title="Welcome" body="Hello, WEB~"></Article>
    </div>
  );
}

export default App;
