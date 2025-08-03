import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./styles.css"; // pastikan ini sesuai dengan lokasi file css

function StudentList() {
  const [students, setStudents] = useState([]);
  const navigate = useNavigate();

  const fetchStudents = async () => {
    const res = await fetch("http://localhost:5115/api/Student");
    const data = await res.json();
    setStudents(data);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Apakah kamu yakin ingin menghapus data ini?")) {
      await fetch(`http://localhost:5115/api/Student/${id}`, {
        method: "DELETE",
      });
      await fetchStudents();
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  return (
    <div className="container">
      <div className="header">
        <h1>Daftar Mahasiswa</h1>
        <Link to="/add" className="add-button">
          Tambah Mahasiswa
        </Link>
      </div>

      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>NIM</th>
              <th>Nama Lengkap</th>
              <th>Usia</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {students.map((s) => (
              <tr key={s.id}>
                <td>{s.id}</td>
                <td>{s.namaLengkap}</td>
                <td>{s.usia} tahun</td>
                <td className="actions">
                  <Link to={`/edit/${s.id}`} className="button-edit">
                    Edit
                  </Link>
                  <button
                    onClick={() => handleDelete(s.id)}
                    className="button-delete"
                  >
                    Hapus
                  </button>
                </td>
              </tr>
            ))}
            {students.length === 0 && (
              <tr>
                <td colSpan="4" className="no-data">
                  Tidak ada data mahasiswa.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default StudentList;
