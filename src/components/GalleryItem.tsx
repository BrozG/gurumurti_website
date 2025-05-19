
import React from 'react';
import { cn } from '@/lib/utils';

interface GalleryItemProps {
  imageSrc: string;
  title: string;
  description?: string;
  large?: boolean;
  className?: string;
}

const GalleryItem: React.FC<GalleryItemProps> = ({ 
  imageSrc, 
  title,
  description,
  large = false,
  className
}) => {
  return (
    <div 
      className={cn(
        'group relative overflow-hidden artframe',
        large ? 'gallery-item-big' : '',
        className
      )}
    >
      <div className="w-full h-full overflow-hidden">
        <img 
          src={imageSrc} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
        <h3 className="text-white font-serif text-xl font-semibold">{title}</h3>
        {description && (
          <p className="text-white/80 mt-2 text-sm">{description}</p>
        )}
      </div>
    </div>
  );
};

export default GalleryItem;
