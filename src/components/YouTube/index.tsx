import React from "react";

type Props = {
  id: string;
  title: string;
};

const YouTube: React.FC<Props> = ({ id, title }) => (
  <div className="mb-8 mt-8 shadow-[0_0_150px_rgba(0,0,0,0.13)]">
    <div className="relative pt-[56.25%]">
      <iframe
        className="absolute left-0 top-0 h-full w-full"
        src={`https://www.youtube.com/embed/${id}`}
        title={title}
        frameBorder="0"
        allow="autoplay;"
        allowFullScreen
      />
    </div>
  </div>
);

export default YouTube;

