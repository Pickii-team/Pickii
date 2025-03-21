interface Props {
  imageSrc?: string;
  imageTitle: string;
  imageDesc?: string;
}

export default function ImageCover({
  imageSrc = 'https://images.unsplash.com/photo-1567306226416-28f0efdc88ce',
  imageTitle,
  imageDesc,
}: Props) {
  return (
    <div className='relative w-full h-full'>
      <img
        src={imageSrc}
        alt='Peach'
        className='object-cover w-full h-full rounded-12'
      />
      <div className='absolute inset-0 rounded-12 bg-image-overlay'></div>
      <div className='absolute text-left text-white bottom-12 left-16'>
        <p className='text-title-03'>{imageTitle}</p>
        {imageDesc && <p className='mt-16 text-small-01'>{imageDesc}</p>}
      </div>
    </div>
  );
}
