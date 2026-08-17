# React.js Cheat Sheet

React is a JavaScript library for building user interfaces using reusable components.

## Components

A React component is a reusable piece of UI.

```jsx
function Welcome() {
  return <h1>Hello, React!</h1>;
}

export default Welcome;
````

Components can be used inside other components:

```jsx
function App() {
  return (
    <div>
      <Welcome />
    </div>
  );
}
```

## useState

`useState` is a React Hook that allows a component to store and update state.

```jsx
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
}
```

Here:

* `count` is the current state.
* `setCount` updates the state.
* `useState(0)` sets the initial value to `0`.

## useEffect

`useEffect` allows you to perform side effects in a component, such as fetching data or interacting with an external system.

```jsx
import { useEffect } from "react";

function Example() {
  useEffect(() => {
    console.log("Component mounted");

    return () => {
      console.log("Component unmounted");
    };
  }, []);

  return <h1>Hello React</h1>;
}
```

The empty dependency array `[]` means the effect runs after the component mounts.

## Quick Reference

| Concept     | Purpose                    |
| ----------- | -------------------------- |
| Component   | Reusable UI building block |
| `useState`  | Manages component state    |
| `useEffect` | Handles side effects       |

## Resources

* [React Documentation](https://react.dev/)

