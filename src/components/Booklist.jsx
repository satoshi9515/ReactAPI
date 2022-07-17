// Booklist.jsx

// 🔽 追加
import { useState, useEffect } from "react";

// 🔽 propsを追加
export const Booklist = ({ language, getData }) => {
    // 🔽 ここから追加
  const [bookData, setBookData] = useState(null);

  useEffect(() => {
    const result = getData?.(language).then((response) =>
      setBookData(response)
    );
  }, [language, getData]);

  // 🔼 ここまで追加
  
  return (
    <>
      <p>this is {JSON.stringify(bookData)} list component</p>
    </>
  );
  
  };