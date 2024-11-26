import Image from 'next/image';
import './gallery.css';

function page(props) {
  return (
    <>
      <table>
        <tbody>
          <tr>
            <td><Image src="/images/kitten-1.jpg" width={200} height={160} alt=''/></td>
            <td><Image src="/images/kitten-2.jpg" width={200} height={160} alt=''/></td>
            <td><Image src="/images/kitten-3.jpg" width={200} height={160} alt=''/></td>
          </tr>
          <tr>
            <td><Image src="/images/kitten-1.jpg" width={200} height={160} alt=''/></td>
            <td><Image src="/images/kitten-2.jpg" width={200} height={160} alt=''/></td>
            <td><Image src="/images/kitten-3.jpg" width={200} height={160} alt=''/></td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default page;