import { useState } from "react";
import useTaskStore from "../store/useTaskStore";

function TaskForm() {
  const addTask = useTaskStore((state) => state.addTask);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [priority, setPriority] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!title.trim()) {
      setError("Title is required");
      return;
    }
    addTask({ title, description, category, priority, dueDate });
    setTitle("");
    setDescription("");
    setDueDate("");
    setError("");
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        {" "}
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Task Title"
        />
        {error && <p>{error}</p>}
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
        />
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">Work</option>
          <option value="">Personal</option>
          <option value="">Study</option>
        </select>
        <select value={priority} onChange={(e) => setPriority(e.target.value)}>
          <option value="">Low</option>
          <option value="">Medium</option>
          <option value="">High</option>
          <option value="">Urgent</option>
        </select>
        <input
          type="text"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
        />
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
}

export default TaskForm;
