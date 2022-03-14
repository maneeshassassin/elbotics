import React from 'react';


const Dom = () => {
    React.useEffect(() => {
      window.addEventListener('click', () => {
        document.getElementById("demo").style.color="red";
      });
    }, []);
  
    return (
      <div className='container'>
        <h1 id='demo'>Welcome to the Keydown Listening Component</h1>
      </div>
    );
  };
  export default Dom;