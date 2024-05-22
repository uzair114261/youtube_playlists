import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './components/Home';
import Contact from './components/Contact';
import PlayList from './components/playlists/PlayList';
import About from './components/About';
import Footer from './components/Footer';
import Blogs from './components/blogs/Blogs';
import AIBlogs from './components/blogs/AIBlogs';
import OrganicBlogs from './components/blogs/OrganicBlogs';
import OrganicBlogContent from './components/blogs/OrganicBlogContent';
import AIBlogContent from './components/blogs/AIBlogContent';
import { ToastProvider } from './context/ToastContext';
import AIPlaylists from './components/playlists/AIPlaylists';
import OrganicPlaylists from './components/playlists/OrganicPlaylists';
import Test from './components/Test';
import OrganicPlaylistView from './components/playlists/OrganicPlaylistView';
import AIPlaylistView from './components/playlists/AIPlayListsView';
import Chatbot from './components/chatbot/Chatbot';

function App() {
  return (
    <div className="ease-in duration-200">
      <ToastProvider>
        <Router>
          <Chatbot />
          <Navbar />
          <Routes>
            <Route element={<Home />} path='' />
            <Route element={<Contact />} path='/contact' />
            <Route element={<PlayList />} path='/playlist' />
            <Route element={<AIPlaylists />} path='/playlist/ai' />
            <Route element={<AIPlaylistView />} path='/playlist/ai/:playlist_id' />
            <Route element={<OrganicPlaylists />} path='/playlist/organic' />
            <Route element={<OrganicPlaylistView />} path='/playlist/organic/:playlist_id' />
            <Route element={<AIBlogs />} path='/blogs/ai' />
            <Route element={<AIBlogContent />} path='/blogs/ai/:slug' />
            <Route element={<OrganicBlogs />} path='/blogs/organic' />
            <Route element={<OrganicBlogContent />} path='/blogs/organic/:slug' />
            <Route element={<Blogs />} path='/blogs' />
            <Route element={<About />} path='/about' />
            <Route element={<Test />} path='/testing' />
          </Routes>
          <Footer />
        </Router>
      </ToastProvider>

    </div>
  );
}

export default App;
