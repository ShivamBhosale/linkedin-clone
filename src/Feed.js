import React, { useEffect, useState } from 'react';
import './Feed.css';
import CreateIcon from '@mui/icons-material/Create';
import InputOption from './InputOption';
import ImageIcon from '@mui/icons-material/Image';
import ArticleIcon from '@mui/icons-material/Article';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import Post from './Post';
import { db, serverTimestamp } from './firebase';
import { collection, onSnapshot, addDoc, orderBy } from 'firebase/firestore';

function Feed() {
  const [posts, setPosts] = useState([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'posts'), orderBy('timestamp','desc'), (snapshot) => {
      setPosts(snapshot.docs.map(doc => ({
        id: doc.id,
        data: doc.data(),
      })));
    });

    return () => unsubscribe();
  }, []);

  const sendPost = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, 'posts'), {
        name: 'Shivam Bhosale',
        description: 'Gradstudent @ Uwindsor',
        message: input,
        photoUrl: '',
        timestamp: serverTimestamp(),
      });
      setInput('');  // Clear the input field after posting
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  return (
    <div className='feed'>
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateIcon />
          <form>
            <input 
              type="text" 
              placeholder='Start a post' 
              value={input}
              onChange={(e) => setInput(e.target.value)}  // Update input state on change
            />
            <button onClick={sendPost} type="submit">Send</button>
          </form>
        </div>

        <div className="feed__inputOptions">
          <InputOption Icon={ImageIcon} title='Media' color="#70B6FB" />
          <InputOption Icon={LibraryBooksIcon} title='Contribute expertise' color="#E8A53E" />
          <InputOption Icon={ArticleIcon} title='Write Article' color="#F79B80" />
        </div>
      </div>
      {posts.map((post) => (
        <Post 
          key={post.id} 
          name={post.data.name} 
          description={post.data.description} 
          message={post.data.message} 
          photoUrl={post.data.photoUrl} 
        />
      ))}
    </div>
  );
}

export default Feed;
