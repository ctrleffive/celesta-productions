import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";

import ComingSoonVideo from "../videos/coming-soon.mp4";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <div className="flex items-center justify-center h-screen w-screen">
      <video autoPlay loop muted className="max-w-full">
        <source src={ComingSoonVideo} type="video/mp4" />
      </video>
    </div>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Celesta Productions</title>;
