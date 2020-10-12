import React from "react";
import MaterialIcon from "material-icons-react";
import ButtonLink from "../ButtonLink";
import { Link } from "react-router-dom";
import TextField from "@material-ui/core/TextField";

import Autocomplete from "@material-ui/lab/Autocomplete";

export function InputFilter() {
  const course = [
    {
      title: "1 курс",
    },
    {
      title: "2 курс",
    },
    {
      title: "3 курс",
    },
    {
      title: "4 курс",
    },
    {
      title: "5 курс",
    },
  ];

  const faculty = [
    {
      title: "Математики и информатики",
    },
  ];

  return (
    <form className="filter" action="">
      <p className="filter__header">Где ты учишься?</p>

      <Autocomplete
        options={faculty}
        style={{ width: 300 }}
        getOptionLabel={(option) => option.title}
        renderInput={(params) => <TextField {...params} label="Факультет..." />}
      />
      <Autocomplete
        options={course}
        style={{ width: 300 }}
        getOptionLabel={(option) => option.title}
        renderInput={(params) => <TextField {...params} label="Курс..." />}
      />

      <Autocomplete
        options={course}
        style={{ width: 300 }}
        getOptionLabel={(option) => option.title}
        renderInput={(params) => <TextField {...params} label="Группа..." />}
      />
      {/* <input
        className="input-form filter__input"
        placeholder="Курс..."
        type="text"
      />
      <input
        className="input-form filter__input"
        placeholder="Группа..."
        type="text"
      /> */}

      <input
        className="btn btn-dark btn-large filter__submit"
        type="submit"
        value="Сохранить"
      />
    </form>
  );
}

export default function Filter() {
  return (
    <div className="card card-fullScreen">
      <InputFilter />

      <Link to="/info">
        <div className="icon-info">
          <MaterialIcon icon="info" />
        </div>
      </Link>
    </div>
  );
}
