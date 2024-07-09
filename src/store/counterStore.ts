import { create } from "zustand";

interface Post {
  id: number;
  title: string;
  body: string;
}

interface CounterSate {
  count: number;
  title: string;
  posts: Post[];
  increment: (value: number) => void;
  getPosts: () => Promise<void>;
}

export const useCounterStore = create<CounterSate>((set) => ({
  count: 20,
  title: "Some Title",
  posts: [],
  increment: (value) =>
    set((state) => ({
      count: state.count + value,
    })),
  getPosts: async () => {
    // const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    // const posts = await res.json();
    // console.log(posts);

    const posts = await (
      await fetch("https://jsonplaceholder.typicode.com/posts")
    ).json();
    console.log(posts);

    set((state) => ({
      ...state,
      posts,
    }));
  },
}));
