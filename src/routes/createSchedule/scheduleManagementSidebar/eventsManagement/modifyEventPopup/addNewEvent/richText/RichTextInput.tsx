import ReactQuill, { Quill } from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // ES6
import { useState } from 'react';

export const RichTextInput = () => {
  const [value, setValue] = useState('');

  return (
      <ReactQuill theme="snow" value={value} onChange={setValue} />
  )
}