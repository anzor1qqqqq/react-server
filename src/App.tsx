import { useEffect, useState } from 'react';

export function App() {
  const [content, setContent] = useState('')

  useEffect(() => {
    const pages = import.meta.glob('/public/file.txt', { eager: true, query: 'raw' });

    setContent(pages['/public/file.txt'].default)
  }, [])

  return (
    <div>
      {content}
    </div>
  );
}
