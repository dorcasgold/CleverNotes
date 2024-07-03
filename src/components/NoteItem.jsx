import { Link } from "react-router-dom"

function NoteItem({ note }) {
  return (
    <div>
      <Link to={`/edit-note & {note.id}`} className="notes bg-box-light dark:bg-box-dark flex flex-col gap-2 transition-colors duration-300">
        <p>{note.title.length > 30 ? (note.title.substr(0, 30)) + '...' : note.title}</p>
        <p>{note.date}</p>
      </Link>
    </div>

  )
}

export default NoteItem