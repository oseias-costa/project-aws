import Header from "@/components/header/Header";
import Headline from "@/components/headline/Headline";
import Team from "@/components/team/Team";
import Mentor from "@/components/mentor/Mentor";
import Teacher from "@/components/teacher/Teacher";

export default function Home() {
  return (
    <main style={{ scrollBehavior: "smooth" }}>
      <Header />
      <Headline />
      <Team />
      <Mentor />
      <Teacher />
    </main>
  );
}
