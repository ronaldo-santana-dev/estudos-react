import React from 'react';

function App() {
  const [contar, setContar] = React.useState(0)

  const handleClick = () => {
    setContar(contar + 1)
  }

  React.useEffect(() => {
    document.title = "Total de cliques = " + contar
  }, [contar])
 
  return (
    <div className="App">
      <h1>{contar}</h1>
      <button onClick={handleClick}>Clique</button>
    </div>
  );
}
export default App;