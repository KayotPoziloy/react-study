export default function TaskList({ tasks }) {
  return (
    <ul>
      {tasks.map((task) => (
        <li>{task}</li>
      ))}
    </ul>
  );
}
