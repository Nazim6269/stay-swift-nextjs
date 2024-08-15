import Image from 'next/image';

//TODO: implement intercepting route concept when click image

const Gallery = ({ gallery }) => {
  const newGallery = [...gallery];
  newGallery.shift();

  return (
    <section className="container">
      <div className="grid grid-cols-2 imageshowCase">
        <Image
          src={gallery[0]}
          height={400}
          width={400}
          className="h-[400px]"
          alt="Main pictures"
        />

        <div className="grid grid-cols-2 grid-rows-2 h-[400px]">
          {newGallery?.map((image) => (
            <Image
              key={image}
              src={image}
              width={400}
              height={400}
              alt="Sub pictures"
              className="h-[400px]"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
