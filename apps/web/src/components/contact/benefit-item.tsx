import type { Icon } from '@phosphor-icons/react';

interface BenefitItemProps {
  icon: Icon;
  title: string;
  description: string;
}

export function BenefitItem({
  icon: Icon,
  title,
  description,
}: BenefitItemProps) {
  return (
    <div className='group flex items-start gap-3 p-4 border border-transparent hover:border-border transition-all duration-300'>
      <Icon className='w-5 h-5 text-primary mt-0.5 shrink-0 group-hover:scale-110 transition-transform' />
      <div>
        <div className='font-medium text-foreground'>{title}</div>
        <div className='text-sm'>{description}</div>
      </div>
    </div>
  );
}
