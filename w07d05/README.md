# W07D05 - Custom Hooks

### To Do
- [x] Custom Hooks
- [x] `useDocumentTitle`
- [x] `useMousePosition` (tests)
- [x] `useInput` (tests)
- [x] `useLocationData`
- [x] `useRequest`
- [x] `useKeyPress`

### Custom Hook
* is a helper function that uses a hook internally
* remove business logic from the presentation


```js  
useEffect(() => {
  const interval = setInterval(() => setDebounced(input), ms);
  setInterval(interval);
  
  clearTimeout(timeout);
  return cleanup;
}, [input, ms]);
```


why do we need ‘return’ for the clean up function?
why do we put the clean up function inside an anonymous arrow function?
what happens if i just do clearTimeout(timeout) without return or arrow function?





```js
import React, { useState, useEffect } from "react";import ReactDOM from "react-dom";

import "./styles.scss";

import Broken from "./components/Broken";
import Fixed from "./components/Fixed";

function Application() {
  const [likes, setLikes] = useState(0);
  useEffect(() => {
    if (likes > 0) {
      const timeout = setTimeout(() => setLikes((prev) => prev - 1), 1000);
      return () => clearTimeout(timeout); // clears the timer set above
      //if i didn't have return, the count down doesn't go down.
    }
  }, [likes]);

  return (
    <div onClick={() => setLikes(likes + 1)}>
      {likes > 0 ? <Fixed>{likes}</Fixed> : <Broken />}
    </div>
  );
}

ReactDOM.render(<Application />, document.getElementById("root"));


cosnt returnVal = callback();
if (timeToCleanup) {
  returnVal();
}
```






