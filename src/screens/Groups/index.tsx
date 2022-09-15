import { GroupCard } from "@components/GroupCard";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { Container } from "./styles";

export function Groups() {
  return (
    <Container>
      <Header />

      <Highlight title="Turmas" subtitle="Jogue com a sua turma" />

      <GroupCard title="Turma do trabalho" />
      <GroupCard title="Turma do padoque" />
      <GroupCard title="Turma do pagode" />
      <GroupCard title="Turma do job" />
      <GroupCard title="Turma do ignite" />
    </Container>
  )
}