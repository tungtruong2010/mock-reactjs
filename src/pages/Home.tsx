import { Container } from "@mui/material";
import Header from "../components/Header";
import MainTable from "../components/Table";

export default function Home(){
    return (
        <Container maxWidth="xl">
            <Header/>
            <div className="tableTest">
                <MainTable/>
            </div>
        </Container>
    )
}