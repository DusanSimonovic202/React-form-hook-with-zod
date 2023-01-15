import "./App.css";
import UserForm from "./UserForm";

function App() {
  const user = {
    name: "",
    email: "",
    proffesion: "",
    country: "",
  };

  const handleSave = (values) => {
    console.log({ values });
  };

  return (
    <div className="App">
      <h1>React Form</h1>
      <div className="form">
        <UserForm onSave={handleSave} {...{ user }} />
      </div>
    </div>
  );
}

export default App;
