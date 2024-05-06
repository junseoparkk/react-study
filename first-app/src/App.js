import './App.css';

const Header = (props) => {
  return (
    <header>
      <h1 ><a href="/">{props.title}</a></h1>
    </header>
  )
}

const Nav = (props) => {
  const list = []
  for (let i = 0; i < props.topics.length; i++) {
    let topic = props.topics[i];
    list.push(<li key={topic.id}><a href={`/read/${topic.id}`}>{topic.title}</a></li>);
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
      <Header title="Title"></Header>
      <Nav topics={topics}></Nav>
      <Article title="Welcome" body="Hello, WEB~"></Article>
    </div>
  );
}

export default App;
