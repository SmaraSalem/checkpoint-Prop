
import phpro from "./profile/phpro.jpg";
import ProfileComponent from "./profile/ProfileComponent";

function App() {
  let object = {
    FuullName: "Salem smara",
    bio: "I am a student of go my code ",
    profession: "development web (full stack)",
  };


  let handleName = (name) => alert("hello my name is " +name);
  let style = { width: "200px" };


  return (
    <div >
      <div className="App-header">
        <ProfileComponent obj={object} handel={handleName} >
          {<img src={phpro} style={style} alt="ici un img" />}
        </ProfileComponent>

      </div>
    </div>
  );
}


export default App;
