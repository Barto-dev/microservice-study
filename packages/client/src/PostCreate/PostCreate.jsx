import React, {useState} from 'react';
import axios from 'axios';


const PostCreate = () => {
  const [title, setTitle] = useState('');

  const onSubmit = async (evt) => {
    evt.preventDefault();
    await axios.post('http://localhost:4000/posts', {
      title
    })
    setTitle('')
  }
  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="post" className="mb-2">Title</label>
          <input value={title}
                 onChange={(e) => setTitle(e.target.value)}
                 type="text"
                 id="post"
                 className="form-control mb-3" />
        </div>
        <button className="btn btn-primary" >Submit</button>
      </form>
    </div>
  );
};

export default PostCreate;

