import React, { useState, useEffect } from 'react';
import Image from './Image';

function Contador() {
  const [count, setCount] = useState(0);
  let urlUsers = 'https://reqres.in/api/users?page=2';

  const getUsers = (url) => {
    fetch(url)
    .then(response => response.json())
    .then(data => console.log(data.data))
  }


 // Similar a componentDidMount y componentDidUpdate:

 useEffect(() => {
    getUsers(urlUsers);
 }, [count]);


  return (
    <div>
      
        <h2>You clicked {count} times</h2>
      
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

export default Contador