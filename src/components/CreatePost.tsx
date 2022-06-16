import { observer } from "mobx-react-lite";
import { FormEventHandler, useState } from "react";
import { nanoid } from "nanoid";
import post from "../store/post";

const CreatePost = () => {
  const [text, setText] = useState("");
  const handleAddPost: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const data = { id: nanoid(), text };
    post.createPost(data);
    setText("");
  };
  return (
    <div>
      <form onSubmit={handleAddPost}>
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder='enter text'
        />
        {text.length >= 3 && <button type='submit'>Add</button>}
      </form>
    </div>
  );
};

export default observer(CreatePost);
