import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Notes from './pages/Notes'
import CreateNote from './pages/CreateNote'
import EditNote from './pages/EditNote'
import { useState } from 'react'

function App() {
  const [notes, SetNotes] = useState([])
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Notes notes={notes} />} />
          <Route path='create-note' element={<CreateNote SetNotes={SetNotes} />} />
          <Route path='/edit-note/:id' element={<EditNote />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App