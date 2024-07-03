import { TiArrowBack } from "react-icons/ti";
import { FaRegSave } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { v4 as uuid } from "uuid";
import useCreateDate from '../components/useCreateDate'

function CreateNote({ setNotes }) {
  const [title, SetTitle] = useState('')
  const [details, SetDetails] = useState('')
  const currentDate = useCreateDate();
  const navigate = useNavigate()


  const handleSubmit = (e) => {
    e.preventDefault();

    if (title && details) {

      const note = { id: uuid(), title, details, currentDate }
      //add this note to the note array
      setNotes(prevNotes => [note, ...prevNotes])
      //redirect to homepage
      navigate('/')
    }
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
            <div className="text-3xl bg-teal-700 text-gray-200 p-2 px-2 rounded-lg cursor-pointer hover:bg-teal-600 transition-all" onClick={handleSubmit}>
              <FaRegSave />
            </div>
          </div>
        </header>
        <form className="flex flex-col gap-1 mx-3" onSubmit={handleSubmit}>
          <input type="text" placeholder="Empty Title ☹..." className="bg-transparent p-2 w-full" autoFocus value={title} onChange={(e) => SetTitle(e.target.value)} />
          <textarea className="bg-transparent p-2 w-full" rows='20' placeholder="Write Here !!!" autoFocus value={details} onChange={(e) => SetDetails(e.target.value)}></textarea>
        </form>
      </div>
    </div>
  )
}

export default CreateNote