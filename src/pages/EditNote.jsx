import { TiArrowBack } from "react-icons/ti";
import { FaRegSave } from "react-icons/fa";
import { Link, useParams, useNavigate } from "react-router-dom";
import { MdDeleteForever } from "react-icons/md";
import { useState } from "react";
import useCreateDate from '../components/useCreateDate'

function EditNote({ notes, setNotes }) {
  const { id } = useParams();
  const note = notes.find((item) => item.id == id);
  const [title, setTitle] = useState(note.title)
  const [details, setDetails] = useState(note.details)
  const navigate = useNavigate()
  const currentDate = useCreateDate();

  const handleForm = (e) => {
    e.preventDefault();

    if (title && details) {
      const newNote = { ...note, title, details, currentDate }

      const newNotes = notes.map(item => {
        if (item.id == id) {
          item = newNote;
        }
        return item;
      })
      setNotes(newNotes)
    }
    //redirect to home page
    navigate('/')
  }

  const handleDelete = () => {
    if (window.confirm(`Do yo really want to delete this`)) {
      const newNotes = notes.filter(item => item.id != id);
      setNotes(newNotes);
      navigate('/')
    }
    const newNotes = notes.filter(item => item.id !== id);
    setNotes(newNotes);
    //redirect to home page
    navigate('/')
  }

  return (
    <div className='w-full bg-gray-400 flex justify-center h-auto'>
      <div className='bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark px-4 w-[390px] flex flex-col gap-5 transition-colors duration-300'>
        <header className="mx-3 my-4 mt-8">
          <div className="flex justify-between">
            <div className="text-3xl bg-teal-700 text-gray-200 p-2 px-2 rounded-lg cursor-pointer hover:bg-teal-600 transition-all">
              <Link to='/'>
                <TiArrowBack />
              </Link>
            </div>
            <div className="text-3xl bg-teal-700 text-gray-200 p-2 px-2 rounded-lg cursor-pointer hover:bg-teal-600 transition-all" onClick={handleForm}>
              <FaRegSave />
            </div>
            <div className="text-3xl bg-red-500 text-gray-200 p-2 px-2 rounded-lg cursor-pointer hover:bg-red-800 transition-all" onClick={handleDelete}>
              <MdDeleteForever />
            </div>
          </div>
        </header>
        <form className="flex flex-col gap-1 mx-3" onSubmit={handleForm}>
          <input type="text" placeholder="Empty Title ☹..." className="bg-transparent p-2 w-full" autoFocus value={title} onChange={(e) => setTitle(e.target.value)} />
          <textarea className="bg-transparent p-2 w-full" rows='20' placeholder="Write Here !!!" autoFocus value={details} onChange={(e) => setDetails(e.target.value)}></textarea>
        </form>
      </div>
    </div>
  )
}

export default EditNote
