import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import StudentForm from "../components/StudentForm";

function EditStudent() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [student, setStudent] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5115/api/Student`)
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((s) => s.id === id);
        if (found) {
          setStudent({
            id: found.id,
            namaDepan: found.namaLengkap.split(" ")[0],
            namaBelakang: found.namaLengkap.split(" ").slice(1).join(" "),
            tanggalLahir: new Date().getFullYear() - found.usia + "-01-01", // perkiraan tanggal
          });
        }
      });
  }, [id]);

  const handleSubmit = async (updatedData) => {
    await fetch(`http://localhost:5115/api/Student/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedData),
    });
    navigate("/");
  };

  if (!student) return <p>Loading...</p>;

  return (
    <div>
      <h2>Edit Mahasiswa</h2>
      <StudentForm initialData={student} onSubmit={handleSubmit} />
    </div>
  );
}

export default EditStudent;
