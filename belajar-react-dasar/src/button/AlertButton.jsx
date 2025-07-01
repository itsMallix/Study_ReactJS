export default function AlertButton({text, message}){
    function handleClick(e){
        console.info(e.target);
        alert(message);
    }

    return (
        <button onClick={handleClick}>{text}</button>
    )
}


//event handler bisa di buat diluar function, namun minusnya adalah handler tidak bisa membaca nilai dari propsnya