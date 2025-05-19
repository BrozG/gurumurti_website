
import React from 'react';
import { cn } from '@/lib/utils';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icon,
  className,
}) => {
  return (
    <div 
      className={cn(
        "group p-6 border border-gold-300 bg-cream-50 hover:bg-gold-100 transition-colors duration-300 rounded-sm flex flex-col items-center text-center",
        className
      )}
    >
      <div className="w-16 h-16 mb-4 flex items-center justify-center text-gold-600 group-hover:text-gold-800 transition-colors">
        {icon}
      </div>
      <h3 className="text-xl font-serif font-medium mb-3">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

export default ServiceCard;
