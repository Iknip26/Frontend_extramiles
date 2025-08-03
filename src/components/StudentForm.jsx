import { useState } from "react";
import "./StudentForm.css";

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
    <form onSubmit={handleSubmit} className="form-container">
      <div className="form-group">
        <label htmlFor="id">Nomor Induk Mahasiswa</label>
        <input
          type="text"
          name="id"
          id="id"
          value={formData.id}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="namaDepan">Nama Depan</label>
        <input
          type="text"
          name="namaDepan"
          id="namaDepan"
          value={formData.namaDepan}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="namaBelakang">Nama Belakang (Opsional)</label>
        <input
          type="text"
          name="namaBelakang"
          id="namaBelakang"
          value={formData.namaBelakang}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label htmlFor="tanggalLahir">Tanggal Lahir</label>
        <input
          type="date"
          name="tanggalLahir"
          id="tanggalLahir"
          value={formData.tanggalLahir}
          onChange={handleChange}
          required
        />
      </div>

      <button type="submit" className="submit-button">
        Simpan
      </button>
    </form>
  );
}

export default StudentForm;