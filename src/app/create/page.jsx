import Image from 'next/image';
import React from 'react';

function page(props) {
  return (
    <>
      {/* 자식페이지 */}
      <h2>Create page</h2> 
      <p><Image src='/images/photo-4.jpg' width={300} height={200} /></p>
    </>
  );
}

export default page;