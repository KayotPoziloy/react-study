import "./App.css";
import Button from "./components/Button/Button";
import Greeting from "./components/Greeting";
import LoginStatus from "./components/LoginStatus";
import UserProfile from "./components/UserProfile";

function App() {
  const users = [
    { id: 0, name: "Катя", age: 21 },
    { id: 1, name: "Карина", age: 20 },
    { id: 2, name: "Арина", age: 24 },
  ];

  return (
    <>
      <Greeting name="Петр" />
      <Greeting name="Павел" />
      {users.map((user) => (
        <UserProfile key={user.id} name={user.name} age={user.age} />
      ))}
      <LoginStatus isLoggedIn={false} />
      <Button />
    </>
  );
}

export default App;
