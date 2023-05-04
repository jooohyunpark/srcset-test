import React from 'react'
import '@/styles/main.scss'

const App = () => {
  return (
    <div>
      <img
        srcSet="https://picsum.photos/300 300w, https://picsum.photos/600 600w, https://picsum.photos/900 900w, https://picsum.photos/1200 1200w"
        sizes="(min-width: 1000px) 25vw, (min-width: 500px) 50vw, 100vw"
      />
    </div>
  )
}

export default App
