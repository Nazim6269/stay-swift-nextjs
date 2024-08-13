import image from '@/public/image-1.png';

import two from '@/public/2.png';
import three from '@/public/3.png';
import four from '@/public/4.png';
import five from '@/public/5.png';
import Image from 'next/image';

const Gallery = () => {
  return (
    <section className="container">
      <div className="grid grid-cols-2 imageshowCase">
        <Image src={image} className="h-[400px]" alt="" />

        <div className="grid grid-cols-2 grid-rows-2 h-[400px]" />
        <Image src={five} alt="" />
        <Image src={two} alt="" />
        <Image src={three} alt="" />
        <Image src={four} alt="" />
      </div>
    </section>
  );
};

export default Gallery;
