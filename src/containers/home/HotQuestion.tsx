import { IconFire, IconVs } from '@/public/svgs';
import ImageCover from '@/src/components/ImageCover';

export default function HotQuestion() {
  return (
    <section className='p-16 space-y-8 border rounded-8 border-primaryVariant'>
      <div className='flex items-center gap-8'>
        <IconFire />
        <h3 className='text-title-04'>지금 가장 치열한 투표</h3>
      </div>
      <div className='py-4 text-center border rounded-full border-primaryVariant bg-surface text-small-01 text-primaryVariant'>
        <p>Q. 복숭아</p>
      </div>
      <div className='flex items-center justify-between gap-20'>
        <div className='aspect-square rounded-12 shadow-elevation2'>
          <ImageCover
            imageSrc='https://images.unsplash.com/photo-1567306226416-28f0efdc88ce'
            imageTitle='물복'
          />
        </div>
        <IconVs className='shrink-0' />
        <div className='aspect-square rounded-12 shadow-elevation2'>
          <ImageCover
            imageSrc='https://images.unsplash.com/photo-1567306226416-28f0efdc88ce'
            imageTitle='딱복'
          />
        </div>
      </div>
      <div className='flex items-center gap-10 mx-10 text-caption-02'>
        <p>51%</p>
        <div className='flex w-full h-10'>
          <div
            className='h-full rounded-l-full bg-primaryVariant'
            style={{ width: '51%' }}
          ></div>
          <div
            className='h-full rounded-r-full bg-secondary'
            style={{ width: '49%' }}
          ></div>
        </div>

        <p>49%</p>
      </div>
    </section>
  );
}
