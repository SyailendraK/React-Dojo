const Home = () => {

  const handleClick = (e) => {
    console.log('Clicked',e)
  }

  const handleClickAgain = (name, e) => {
    console.log('Clicked by' + name, e.target)
  }

  return ( 
    <div className="home">
      <h2>Homepage</h2>
      <button onClick={handleClick}>Click me</button>
      <button onClick={(e) => handleClickAgain('marhio',e)}>Click me again</button>
    </div>
   );
}
 
export default Home ;