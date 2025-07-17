import "./App.css";
import Button from "./components/Button/Button";
import Greeting from "./components/Greeting";
import LoginStatus from "./components/LoginStatus";
import UserProfile from "./components/UserProfile";
import Notification from "./components/Notification/Notification";
import UserInfo from "./components/UserInfo";
import TaskList from "./components/TaskList";
import Article from "./components/Article";
import ColoredText from "./components/ColoredText/ColoredText";
import SimpleList from "./components/SimpleList";
import { Header, Footer } from "./components/Header";
import UserCard from "./components/UserCard";

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
      <Header />
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
      <div>
        <Article
          title="JSX Overview"
          content="JSX is a syntax extension for JavaScript."
        />
        <Article
          title="React Components"
          content="React components let you split the UI into independent parts."
        />
      </div>
      <ColoredText color="blue" />
      <ColoredText color="red" />
      <ColoredText color="green" />
      <SimpleList items={["Apple", "Banana", "Cherry"]} />
      <UserCard name="Давид" age={21} />
      <Footer />
    </>
  );
}

export default App;
