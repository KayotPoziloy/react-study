import "./App.css";
import Button from "./components/Button/Button";
import Greeting from "./components/Greeting";
import LoginStatus from "./components/LoginStatus";
import UserProfile from "./components/UserProfile";
import Notification from "./components/Notification/Notification";
import UserInfo from "./components/UserInfo";
import TaskList from "./components/TaskList";

function App() {
  const users = [
    { id: 0, name: "Катя", age: 21 },
    { id: 1, name: "Карина", age: 20 },
    { id: 2, name: "Арина", age: 24 },
    { id: 3, name: "Раф Крутой", age: 21 },
  ];

  const tasks = ["Learn JSX", "Build a React app", "Explore hooks"];

  return (
    <>
      <Greeting name="Петр" />
      <Greeting name="Павел" />
      {users.map((user) => (
        <UserProfile key={user.id} name={user.name} age={user.age} />
      ))}
      <LoginStatus isLoggedIn={false} />
      <Button />
      <Notification type="success" text="Успешно" />
      <Notification type="error" text="Ошибка" />
      <Notification type="warning" text="Проверьте данные" />
      <UserInfo isAdmin={true} />
      <UserInfo isAdmin={false} />
      <TaskList tasks={tasks} />
    </>
  );
}

export default App;
