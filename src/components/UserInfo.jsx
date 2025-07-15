export default function UserInfo({ isAdmin }) {
  return <p>{isAdmin ? "Администратор" : "Обычный пользователь"}</p>;
}
