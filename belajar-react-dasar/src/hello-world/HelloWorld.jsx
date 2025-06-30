function HeaderHelloWorld({text = "Ups, gaada text wak"}){
    // const text = "hello world";
    return (
        <h1 style={{
            color: "red",
            backgroundColor: "black"
        }}>{text.toUpperCase()}</h1>
    )
}

function ParagraphHelloWorld(){
    const text = "Hello World loh ya";
    const style ={
        color: "black",
        backgroundColor: "yellow"
    };

    return (
        <p style={style}>{text.toLowerCase()}</p>
    )
}

export default function HelloWorld(){
    return (
        <div>
            <HeaderHelloWorld text="Bawakdehelwak"/> 
            <ParagraphHelloWorld/>
        </div>
    )
}

//return function hanya bisa return 1 nilai saja jika ingin return 2 nilai bis apakai div / fragment <>
//jika ingin mengakses variable js di jsx bisa pakai kurung kurawal
// kurawal hanya bisa di pakai di 2 tempat, yaitu text dan nilai atribut pada tag element seperti <img src={source} />
// kurawal dobel ini menyatakan modul js
// destructuring ini sebagai set dari nilia default sebuah parameter props
// untuk kriim props kita pakai atribut seperti pad ahtml element