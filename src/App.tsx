import { useEffect } from "react";
import { useCounterStore } from "./store/counterStore";
import { shallow } from "zustand/shallow";

function App() {
  const { count, title, posts } = useCounterStore(
    (state) => ({
      count: state.count,
      title: state.title,
      posts: state.posts,
    }),
    shallow
  );

  const { increment, getPosts } = useCounterStore();

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div>
      <h1>
        {title}: {count}
      </h1>
      <button onClick={() => increment(10)}>Increment by 10 </button>
      <hr />
      {JSON.stringify(posts)}
    </div>
  );
}

export default App;
