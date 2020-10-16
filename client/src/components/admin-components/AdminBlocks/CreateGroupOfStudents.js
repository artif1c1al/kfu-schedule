import React, { useState } from "react";
import InputText from "../inputs/InputText";
import Button from "@material-ui/core/Button";

export default function CreateGroupOfStudents() {
  const [groupNum, setGroupNum] = useState("");
  const [prepVector, setPrepVector] = useState("");
  const submit = () => {
    return {
      groupNum,
      prepVector,
    };
  };
  return (
    <form onSubmit={submit}>
      <div className="card admin__card">
        <b className="card__header margin-bottom-medium">
          Создание группы студентов
        </b>
        <InputText
          value={groupNum}
          onChange={(e) => {
            setGroupNum(e.target.value);
          }}
          desc="Номер группы"
          placeholder="Начните вводить текст..."
        />
        <InputText
          value={prepVector}
          onChange={(e) => {
            setPrepVector(e.target.value);
          }}
          desc="Направление подготовки"
          placeholder="Начните вводить текст..."
        />
        <Button variant="contained">Сохранить</Button>
      </div>
    </form>
  );
}
