import { useState } from 'react'

export default function ClickCounter() {
  const [count, setCount] = useState(0)

  return (
    <button onClick={() => setCount((c) => c + 1)}>
      Count is {count}
    </button>
  )
}
