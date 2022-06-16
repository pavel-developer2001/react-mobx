import { observer } from "mobx-react-lite";
import { FC, FormEventHandler, useState } from "react";
import post, { IPost } from "../store/post";

const Post: FC<{ postData: IPost }> = ({ postData }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [text, setText] = useState(postData.text);
  const handleChangeEdit = () => {
    setIsEdit(true);
  };
  const handleRemovePost = (id: string) => {
    post.removePost(id);
  };
  const handleEditPost: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const data = { id: postData.id, text };
    post.editPost(data);
    setIsEdit(false);
  };
  if (isEdit) {
    return (
      <form onSubmit={handleEditPost}>
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder='enter text'
        />
        {text.length >= 3 && <button type='submit'>Add</button>}
        <button onClick={() => setIsEdit(false)}>Cancell</button>
      </form>
    );
  }
  return (
    <div>
      {!isEdit && (
        <>
          {postData.text}
          <button onClick={() => handleRemovePost(postData.id)}>delete</button>
          <button onClick={() => handleChangeEdit()}>edit</button>
        </>
      )}
    </div>
  );
};

export default observer(Post);
