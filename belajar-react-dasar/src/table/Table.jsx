import Row from "./Row";

export default function Table(){
    return (
        <table border="1">
            <tbody>
                <Row id="1" text="satu"/>
                <Row id="2" text="dua"/>
                <Row id="3" text="tiga"/>
                <Row id="4" text="empat"/>
            </tbody>
        </table>
    )
}

//lebih baik gini pake pure function karena returnny akonsisten