import { useEffect, useState } from 'react';

export function App() {
  const [content, setContent] = useState('')
  console.log('content: ', content);

  useEffect(() => {
    const pages: any = import.meta.glob('/public/file.txt', { eager: true, query: 'raw' });

    // eslint-disable-next-line react-hooks/set-state-in-effect
    setContent(pages['/public/file.txt'].default)
  }, [])

  return (
    <div>
      {content}
    </div>
  );
}
