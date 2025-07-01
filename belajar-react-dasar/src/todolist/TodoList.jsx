import Todo from "./Todo.jsx"
export default function TodoList(){
    const data = [
        {
            id: 0,
            text: "Belajar React", 
            isCompleted: true
        },
        {
            id: 1,
            text: "Belajar flutter", 
            isCompleted: true
        },
        {
            id:2,
            text: "Belajar kotlin",
            isCompleted: true
        },
        {
            id:3,
            text: "Belajar Node", 
            isCompleted: false
        },
    ]

    // const todos = data.map((todo) => {
    //     return <Todo key={todo.id}{...todo}/>
    // })
    return (
        <ul>
            {data.map((todo) => {
                return <Todo key={todo.id}{...todo}/>
            })}
        </ul>
    )
} 

//jarang membuat variable di jsx, lebih sering langsung di anotasikan pada kode di bagian return function