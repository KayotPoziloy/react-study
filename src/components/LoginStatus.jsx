export default function LoginStatus({ isLoggedIn }) {
  return (
    <>
      {isLoggedIn ? (
        <p>Добро пожаловать</p>
      ) : (
        <p>Пожалуйста, войдите в систему</p>
      )}
    </>
  )
}
