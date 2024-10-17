"use client"

import dynamic from "next/dynamic";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false }) as any;

interface IProps {
  content: string;
}

const ShowHTMLFormat = ({ content }: IProps) => {
  return (
    <ReactQuill
      readOnly
      modules={{ toolbar: false }}
      theme="snow"
      value={content}
    />
  );
};

export default ShowHTMLFormat;
