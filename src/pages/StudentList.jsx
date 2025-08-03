import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

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
      await fetchStudents(); // tunggu fetch selesai
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Daftar Mahasiswa</h1>
        <Link
          to="/add"
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
        >
          Tambah Mahasiswa
        </Link>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border border-gray-300 text-sm text-left">
          <thead className="bg-gray-200">
            <tr>
              <th className="py-2 px-4 border">NIM</th>
              <th className="py-2 px-4 border">Nama Lengkap</th>
              <th className="py-2 px-4 border">Usia</th>
              <th className="py-2 px-4 border">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {students.map((s) => (
              <tr key={s.id} className="border-t">
                <td className="py-2 px-4 border">{s.id}</td>
                <td className="py-2 px-4 border">{s.namaLengkap}</td>
                <td className="py-2 px-4 border">{s.usia} tahun</td>
                <td className="py-2 px-4 border flex gap-2">
                  <Link
                    to={`/edit/${s.id}`}
                    className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => handleDelete(s.id)}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                  >
                    Hapus
                  </button>
                </td>
              </tr>
            ))}
            {students.length === 0 && (
              <tr>
                <td colSpan="4" className="text-center py-4 text-gray-500">
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
