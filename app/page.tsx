import Header from "@/components/header/Header";
import Headline from "@/components/headline/Headline";
import Team from "@/components/team/Team";

export default function Home() {
  return (
    <main style={{scrollBehavior: 'smooth'}}>
      <Header />
      <Headline />
      <Team />
    </main>
  );
}
