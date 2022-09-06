import type { GetStaticProps } from "next";
import { ComoAjudar } from "../components/ComoAjudar";
import { Container } from "../components/Container";
import { Form } from "../components/Form";
import { Header } from "../components/Header";
import { Lula } from "../components/Lula";
import { Propostas } from "../components/Propostas";
import { Reimont } from "../components/Reimont";
import { WhatsAppButton } from "../components/WhatsAppButton";

interface HomeProps {
  propostas: {
    id: number;
    title: string;
    img: string;
    href: string;
    alt: string;
    icon: string;
  }[];
}

export default function Home({ propostas }: HomeProps) {
  return (
    <Container>
      <Header />
      <Form />
      <Propostas propostas={propostas} />
      <ComoAjudar />
      <Reimont />
      <Lula />
      <WhatsAppButton />
    </Container>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch("https://backend-reimont.vercel.app/proposals");
  const data = await response.json();

  return {
    props: {
      propostas: data,
    },
    revalidate: 60 * 60,
  };
};
