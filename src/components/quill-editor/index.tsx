"use client";

import dynamic from "next/dynamic";
import { useState } from "react";
import "react-quill/dist/quill.snow.css";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false }) as any;



const QuillEditor = () => {
  const [value, setValue] = useState("");
  


  return (

    <div>
    <ReactQuill
      modules={{
        toolbar: [
          [{ header: [1, 2, false] }],
          ["bold", "italic", "underline", "strike", "blockquote"],
          [
            { list: "ordered" },
            { list: "bullet" },
            { indent: "-1" },
            { indent: "+1" },
          ],
          ["link"],
          ["clean"],
        ],
      }}
      theme="snow"
      value={value}
      onChange={setValue}
      />

      <ReactQuill readOnly value={value} modules={{toolbar: false}}  />
    
      </div>
  );
};

export default QuillEditor;
