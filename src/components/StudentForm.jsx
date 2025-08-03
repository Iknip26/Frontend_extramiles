import { useState } from "react";

function StudentForm({ onSubmit, initialData = {} }) {
  const [formData, setFormData] = useState({
    id: initialData.id || "",
    namaDepan: initialData.namaDepan || "",
    namaBelakang: initialData.namaBelakang || "",
    tanggalLahir: initialData.tanggalLahir || "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-lg"
    >
      <div className="mb-4">
        <label htmlFor="id" className="block font-medium mb-1">
          Nomor Induk Mahasiswa
        </label>
        <input
          type="text"
          name="id"
          id="id"
          value={formData.id}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="namaDepan" className="block font-medium mb-1">
          Nama Depan
        </label>
        <input
          type="text"
          name="namaDepan"
          id="namaDepan"
          value={formData.namaDepan}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="namaBelakang" className="block font-medium mb-1">
          Nama Belakang (Opsional)
        </label>
        <input
          type="text"
          name="namaBelakang"
          id="namaBelakang"
          value={formData.namaBelakang}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="tanggalLahir" className="block font-medium mb-1">
          Tanggal Lahir
        </label>
        <input
          type="date"
          name="tanggalLahir"
          id="tanggalLahir"
          value={formData.tanggalLahir}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
          required
        />
      </div>

      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
      >
        Simpan
      </button>
    </form>
  );
}

export default StudentForm;
