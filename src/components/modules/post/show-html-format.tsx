"use client"

import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false }) as any;

interface IProps {
  content: string;
}

const ShowHTMLFormat = ({ content }: IProps) => {
  return (
    <ReactQuill
      readOnly
      className="mb-4"
      value={content}
      required
      placeholder="Write your blog here..."
      modules={{
        toolbar: false,
      }}
      theme="snow"
    />
  );
};

export default ShowHTMLFormat;
