import { useState, useEffect } from 'react';
import { CiLight } from "react-icons/ci";
import { FaSearch } from "react-icons/fa";
import NoteItem from '../components/NoteItem';
import { MdNoteAdd } from "react-icons/md";
import { Link } from "react-router-dom";

function Notes({ notes }) {
  // toggleTheme
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
  const [text, setText] = useState('');
  const [filteredNotes, setFilteredNotes] = useState(notes);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const handleSearch = () => {
    setFilteredNotes(notes.filter(note => note.title.toLowerCase().includes(text.toLowerCase())));
  };

  useEffect(handleSearch, [text, notes]);

  return (
    <div className='w-full bg-gray-400 flex justify-center h-screen'>
      <div className='bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark px-4 w-[390px] flex flex-col gap-5 transition-colors duration-300'>
        <header className='flex justify-between items-center text-2xl mt-4'>
          <div>
            <p className=" font-semibold">Clever Notes</p>
          </div>
          <div className=" bg-teal-500 text-white p-2 rounded-3xl" onClick={toggleTheme}>
            <CiLight className=" cursor-pointer" />
          </div>
        </header>
        <section className="flex gap-3 items-center relative mt-2">
          <input
            type="text"
            placeholder="Search notes..."
            className="px-4 py-3 w-full bg-box-light rounded-lg dark:bg-box-dark transition-colors duration-300"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <FaSearch className=" absolute cursor-pointer right-4 text-gray-500" />
        </section>
        <section className="grid grid-cols-2 gap-2">
          {filteredNotes.length === 0 && <p className="empty__notes">No notes found.</p>}
          {filteredNotes.map(note => (
            <NoteItem key={note.id} note={note} />
          ))}
        </section>
        <div className="bg-teal-500 text-white text-2xl w-10 flex justify-center py-2 fixed bottom-3 ml-40 rounded-md">
          <Link to='/create-note'><MdNoteAdd /></Link>
        </div>
      </div>
    </div>
  );
}

export default Notes;
