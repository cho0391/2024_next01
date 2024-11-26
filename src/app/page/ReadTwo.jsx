import Image from 'next/image';
import React from 'react';

function ReadTwo(props) {
  return (
    <>
     <h2>Read-1</h2>
     <Image src="/images/bg-dark.jpg" width={400} height={250} alt=''/> 
    </>
  );
}

export default ReadTwo;