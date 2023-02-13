import { useEffect, useRef, useState } from "react";

function App() {
  const [name, setName] = useState("");

  const renders = useRef(0);
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    renders.current = renders.current + 1;
  });

  console.log(inputRef.current)

  const focusInput = () => {
    if(!inputRef.current) return
    inputRef.current.focus();
  }

  const previousName = useRef<string | undefined>();

  useEffect(() => {
    previousName.current = name;
  }, [name])

  return (
    <div>
      <input
        ref={inputRef}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p>Hello! My name is {name}</p>
      <p>Renders: {renders.current}</p>
      <button onClick={focusInput}>Focus Input</button>
      <p>And my name was {previousName.current}</p>
    </div>
  );
}

export default App;
