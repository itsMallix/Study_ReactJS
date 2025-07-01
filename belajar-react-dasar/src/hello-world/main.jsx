import { createRoot } from "react-dom/client";
import HelloWorld from "./HelloWorld.jsx";
import { StrictMode } from "react";
import Container from "./Container.jsx";
import TodoList from "../todolist/TodoList.jsx";
import Table from "../table/Table.jsx";
import AlertButton from "../button/AlertButton.jsx";
import MyButton from "../button/MyButton.jsx";
import Toolbar from "../button/Toolbar.jsx";
import SearchForm from "../form/SearchForm.jsx";
import SayHelloForm from "../form/SayHello.jsx";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <Container>
            <HelloWorld />
            <TodoList />
            <Table />
            <br />
            <AlertButton text="Tekan ini" message="Button ditekan loh ya 🤭"/>
            &nbsp;
            <MyButton text="smash ini" onSmash={() => alert("Button dismash🤭")} />

            <br />
            <Toolbar onClick={(e) => {
                e.stopPropagation();
                alert("Toolbar di klik🤭");
            }}/>
            <br />
            <SearchForm />
            <br />
            <SayHelloForm/>
        </Container>
    </StrictMode>
);

//propagation digunakan untuk memisahkan event pada component dan parent component