import React, { ChangeEvent, FormEvent, useState } from "react";

export const InputForm: React.FC<{ add: Add }> = ({ add }) => {
  const [content, setContent] = useState("");
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value);
  };
  const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    add(content);
    setContent("");
  };
  return (
    <form>
      <input type="text" value={content} onChange={handleChange} />
      {/* donot use <input type="button/submit..." , will error */}
      <button type="submit" onClick={handleSubmit}>
        Add
      </button>
    </form>
  );
};

// InputForm.defaultProps = {
//   add: () => {},
// };
