import { useNavigate } from "react-router-dom";
import StudentForm from "../components/StudentForm";

function AddStudent() {
  const navigate = useNavigate();

  const handleSubmit = async (data) => {
    await fetch("http://localhost:5115/api/Student", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    navigate("/");
  };

  return (
    <div>
      <h2>Tambah Mahasiswa</h2>
      <StudentForm onSubmit={handleSubmit} />
    </div>
  );
}

export default AddStudent;