// components/EpubReader.js

import React, { useEffect, useRef} from 'react';
import Epub from 'epubjs';

const ICCViewer = ({ epubFilePath }) => {
  const epubContainerRef = useRef(null);
  const bookRef = useRef(null);


  useEffect(() => {
    if (epubFilePath) {
      bookRef.current = Epub(epubFilePath);
      let rendition = bookRef.current.renderTo(epubContainerRef.current, {
        width: '100vw',
        height: "100vh",
        spread:'none',
        layout: 'reflowable',
        flow:'scrolled-continuous',
        allowScriptedContent: true,
      });
      rendition.display();
    }

    return () => {
      if (bookRef.current) {
        bookRef.current.destroy();
      }
    };
  }, [epubFilePath]);

  return(
    <div  ref={epubContainerRef} />
  );
};

export default ICCViewer;
