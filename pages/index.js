import Container from "@mui/material/Container";
import CreateTodo from "../components/CreateTodo";
import TodoList from "../components/TodoList";
import styled from "styled-components";

const CustomContainer = styled(Container)({
  height: "87vh",
  padding: "2rem",
});

export default function Home() {
  return (
    <>
      <CustomContainer maxWidth="sm">
        <CreateTodo />
        <TodoList />
      </CustomContainer>
    </>
  );
}
