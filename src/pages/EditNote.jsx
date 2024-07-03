import { TiArrowBack } from "react-icons/ti";
import { FaRegSave } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { MdDeleteForever } from "react-icons/md";
import { useState } from "react";

function EditNote({ notes, setNotes }) {
  const { id } = useParams();
  const note = notes.find((item) => item.id == id);
  const [title, setTitle] = useState(note.title)
  const [details, setDetails] = useState(note.details)

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
            <div className="text-3xl bg-teal-700 text-gray-200 p-2 px-2 rounded-lg cursor-pointer hover:bg-teal-600 transition-all">
              <FaRegSave />
            </div>
            <div className="text-3xl bg-red-500 text-gray-200 p-2 px-2 rounded-lg cursor-pointer hover:bg-red-800 transition-all">
              <MdDeleteForever />
            </div>
          </div>
        </header>
        <form className="flex flex-col gap-1 mx-3">
          <input type="text" placeholder="Empty Title ☹..." className="bg-transparent p-2 w-full" autoFocus value={title} onChange={(e) => setTitle(e.target.value)} />
          <textarea className="bg-transparent p-2 w-full" rows='20' placeholder="Write Here !!!" autoFocus value={details} onChange={(e) => setDetails(e.target.value)}></textarea>
        </form>
      </div>
    </div>
  )
}

export default EditNote
