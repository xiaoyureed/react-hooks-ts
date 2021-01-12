import React, { useRef, useState } from "react";

interface IComment {
  author: {
    name: string;
    url: string;
  };
  content: string;
}

const CommentList: React.FC<{ comments: Array<IComment> }> = ({ comments }) => {
  return (
    <div>
      {comments.map((comm) => {
        return (
          <div
            key={comm.author.url}
            style={{
              position: "relative",
              height: "80px",
              paddingLeft: "80px",
            }}
          >
            <span
              style={{
                position: "absolute",
                top: "0",
                left: "10px",
                width: "60px",
                height: "60px",
                backgroundColor: "#eee",
              }}
            />
            <p
              style={{
                cursor: "pointer",
                color: "blue",
              }}
              onClick={() => {
                const url = comm.author.url;
                if (!url) return;
                window.open(url);
              }}
            >
              {comm.author.name}
            </p>
            <p>{comm.content}</p>
          </div>
        );
      })}
    </div>
  );
};

const CommentInput: React.FC<{ handleSubmit: (comm: IComment) => void }> = ({
  handleSubmit,
}) => {
  const refInput = useRef<HTMLTextAreaElement>(null);
  const refName = useRef<HTMLInputElement>(null);
  const refUrl = useRef<HTMLInputElement>(null);
  return (
    <div>
      <form
        onSubmit={() => {
          if (!refInput.current?.value) return;
          const content = refInput.current?.value;
          const name = refName.current?.value || "someone";
          const url = refUrl.current?.value || "";
          handleSubmit({
            author: {
              name,
              url,
            },
            content,
          });
        }}
      >
        <textarea
          ref={refInput}
          style={{
            display: "block",
            width: "100%",
            border: "1px solid #ccc",
          }}
        />
        <input ref={refName} type="text" placeholder="name" />
        {/* 必须输入 https://xxxx 才打开新页面, 若只是路径, 那么 这里的输入仅仅作为 path 拼接上 当前 host */}
        <input ref={refUrl} type="text" placeholder="url" />
        <button>submit</button>
      </form>
    </div>
  );
};

const CommentBoard: React.FC = () => {
  const [comments, setComments] = useState<Array<IComment>>([]);
  return (
    <>
      <h2>comments: {comments.length}</h2>
      <CommentList comments={comments} />
      <CommentInput
        handleSubmit={(comm) => {
          setComments((prev) => {
            return [...prev, comm];
          });
        }}
      />
    </>
  );
};

export default CommentBoard;
