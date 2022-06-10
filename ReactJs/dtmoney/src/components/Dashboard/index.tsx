import { Summary } from "../Summary";
import { TranslationTable } from "../TranslationTable";
import { Container } from "./styles";

export function Dashboard() {
    return (
        <Container>
            <Summary/>
            <TranslationTable/>
        </Container>
    );
}