import React, { useState, useEffect } from "react";

import "react-datepicker/dist/react-datepicker.css";

const initialForm = {
  ID: null,
  User: "",
  CreateDate: "",
  UpdateDate: "",
  State: "",
};

export default function CrudForm({
  createData,
  updateData,
  dataToEdit,
  setDataToEdit,
  el,
}) {
  const [form, setForm] = useState(initialForm);

  useEffect(() => {
    if (dataToEdit) {
      setForm(dataToEdit);
    } else {
      setForm(initialForm);
    }
  }, [dataToEdit]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.User || !form.CreateDate || !form.UpdateDate || !form.State) {
      alert("datos incompletos");
      return;
    }
    if (form.ID === null) {
      createData(form);
    } else {
      updateData(form);
    }

    handleReset();
  };

  const handleReset = (e) => {
    setForm(initialForm);
    setDataToEdit(null);
  };

  return (
    <div className="div-form-container">
      <h1>{dataToEdit ? "Editando Registros" : "Agregar Registros"}</h1>

      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <input
            type="submit"
            value="Enviar"
            onClick={() => window.location.reload()}
          />
          <input type="reset" value="Limpiar" onClick={handleReset} />

          <input
            onChange={handleChange}
            value={form.User}
            type="text"
            name="User"
            placeholder="User"
          />

          <input
            onChange={handleChange}
            value={form.CreateDate}
            type="date"
            name="CreateDate"
          />

          <input
            onChange={handleChange}
            value={form.UpdateDate}
            type="date"
            name="UpdateDate"
          />

          <select
            onChange={handleChange}
            value={form.State}
            type="text"
            name="State"
            placeholder="State"
          >
            <option>Opsión obligatoria *</option>
            <option>Activo</option>
            <option>Inactivo</option>
          </select>
        </form>

        <div className="contact-info">
          <ul>
            <li>📧 sixtandev@gmail.com</li>
            <li>📞 (+57)314-895-17-56</li>
            <p> I am Emmanuel Palacio Gaviria.</p>
            <p>
              I am a passionate and creative full-stack developer from Colombia
              🧡
            </p>
            <p>I hope some day understand the kernel 🧠</p>
          </ul>
        </div>
      </div>
    </div>
  );
}
