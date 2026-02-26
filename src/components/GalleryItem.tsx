
import React from 'react';
import { cn } from '@/lib/utils';

interface GalleryItemProps {
  imageSrc: string;
  title: string;
  large?: boolean;
  className?: string;
}

const GalleryItem: React.FC<GalleryItemProps> = ({ 
  imageSrc, 
  title,
  large = false,
  className
}) => {
  return (
    <div 
      className={cn(
        'group relative overflow-hidden rounded-xl border border-gold-200 bg-white shadow-md',
        large ? 'sm:col-span-2' : '',
        className
      )}
    >
      <div className="aspect-[4/3] w-full overflow-hidden">
        <img 
          src={imageSrc} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
    </div>
  );
};

export default GalleryItem;
