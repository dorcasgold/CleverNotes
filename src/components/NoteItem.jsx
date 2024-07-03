import { Link } from "react-router-dom"

function NoteItem({ note }) {
  return (
    <div>
      <Link to={`/edit-note/${note.id}`} className="note bg-box-light dark:bg-box-dark cursor-pointer flex flex-col gap-2 transition-colors duration-300 px-4 py-3 rounded-lg">
        <p>{note.title.length > 50 ? (note.title.substr(0, 50)) + '...' : note.title}</p>
        <p>{note.date}</p>
      </Link>
    </div>

  )
}

export default NoteItem