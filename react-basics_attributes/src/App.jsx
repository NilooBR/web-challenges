import "./styles.css";

function Article() {
  return (
    <article className="article">
      <h2 className="article__title">Learn About React</h2>
      <label htmlFor="topicInput">Topic: </label>
      <input id="topicInput" type="text" placeholder="Enter a topic" />
      <a
        className="article__link"
        href="https://en.wikipedia.org/wiki/React_(JavaScript_library)"
      >
        Learn more on Wikipedia
      </a>
    </article>
  );
}

export default function App() {
  return <Article />;
}