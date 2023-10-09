"use client";

import { useEffect, useState } from "react";

export default function CurriculoPage() {
  const [ path, setPath ] = useState('')

  useEffect(() => {
    window !== undefined ? setPath(window.location.pathname) : ''
  },[])

  const name = path.slice(11, (path.length - 5))
  
  return (
    <section>
      <h1>{name}</h1>
    </section>
  )
}
