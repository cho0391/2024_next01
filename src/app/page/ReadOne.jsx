import Image from 'next/image';
import React from 'react';

function ReadOne(props) {
  return (
    <>
     <h2>Read-1</h2>
     <Image src="/images/bg-2.jpg" width={400} height={250} alt=''/> 
    </>
  );
}

export default ReadOne;