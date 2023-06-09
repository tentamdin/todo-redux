import React, { useState } from "react";
import { ListItemSecondaryAction, TextField } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import DoneIcon from "@mui/icons-material/Done";
import { useDispatch } from "react-redux";
import { cancelEditTodo, editTodo } from "../redux/todo/todosSlice";
import styled from "styled-components";
import { IconBtns, DeleteIconBtns } from "./TodoItem";

const EditBtns = styled(IconBtns)`
  opacity: 1;
`;
const CancelEditBtns = styled(DeleteIconBtns)`
  opacity: 1;
`;

const EditTodo = (props) => {
  const [itemValue, setItemValue] = useState(props.todo.value);
  const dispatch = useDispatch();

  const handleItemChange = (ev) => {
    console.log("props todo", props.todo);
    setItemValue(ev.target.value);
    console.log("setItemValue", itemValue);
  };

  const handleEditAndResetForm = (ev) => {
    ev.preventDefault();

    dispatch(
      editTodo({
        ...props.todo,
        value: itemValue,
      })
    );

    // Reset value
    setItemValue("");
  };

  return (
    <>
      <TextField
        variant="outlined"
        margin="dense"
        id={props.todo.id}
        value={itemValue}
        onChange={handleItemChange}
        autoFocus
      />
      <ListItemSecondaryAction>
        <EditBtns
          edge="start"
          aria-label="comments"
          onClick={handleEditAndResetForm}
        >
          <DoneIcon
            style={{
              color: "white",
            }}
          />
        </EditBtns>
        <CancelEditBtns
          edge="start"
          aria-label="comments"
          onClick={() => dispatch(cancelEditTodo(itemValue))}
        >
          <CloseIcon
            style={{
              color: "white",
            }}
          />
        </CancelEditBtns>
      </ListItemSecondaryAction>
    </>
  );
};

export default EditTodo;
