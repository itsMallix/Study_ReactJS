export default function Todo({text, isCompleted, isDeleted}){
    if (isDeleted){
        return null;
    }else {
        return (
            <li>
                {/* {isCompleted ? <del>{text}</del> : text} */}
                {text}{isCompleted && "✅" }
            </li>
        )
    }
}

//ternary operator lebih simple
//atau bisa menggunakan logical and
