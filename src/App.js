
import { useAtom } from 'jotai';
import { atomWithStorage } from 'jotai/utils'

const darkModeAtom = atomWithStorage('darkMode', false)

function App() {
  const [darkMode, setDarkMode] = useAtom(darkModeAtom)
  const toggleDarkMode = () => setDarkMode(!darkMode)
  return (
    <div className= {darkMode ? 'dark' : ''}>
      <div className="dark:bg-black max-w-7xl m-auto h-screen p-4">
        <h1 className="text-sm tracking-wider uppercase text-gray-700 dark:text-white">
            Hello world
          </h1>

          <h1 className='dark:text-white'>Welcome to {darkMode ? 'dark' : 'light'} mode!</h1>
          <button className='bg-black px-4 py-2 dark:bg-white dark:text-black text-white rounded-md ' onClick={toggleDarkMode}>{darkMode ? 'LIGHT' : 'DARK'}</button >
      </div>
    </div>
  );
}

export default App;
