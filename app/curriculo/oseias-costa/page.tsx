"use client";

export function Page() {
  const protocol = window.location.pathname;
  console.log(protocol.slice(11, protocol.lenght));
  return <h1>Certo</h1>;
}

export default Page;
