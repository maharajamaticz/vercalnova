import Images from '@/app/Images';
import ImgComponent from '@/Component/global/imgComponent';
import Link from 'next/link';
import QRCode from "react-qr-code";

function Qrpage() {
  return (
    <>
      <div className='qrall'>
        <QRCode size={180} value="https://example.com" />
      </div>
      <p className='text-white text-center mt-3'>Get the App on</p>
      <div className='d-flex justify-content-center gap-2'>
        <Link href="/" target='_blank'>
          <ImgComponent src={Images.playstore} className='playstoreImg' alt='playstore' />
        </Link>
        <Link href="/" target='_blank'>
          <ImgComponent src={Images.appstore} className='appstoreImg' alt='appstore' />
        </Link>
      </div>
    </>
  )
}

export default Qrpage