import type { Icon } from '@phosphor-icons/react';

interface StatCardProps {
  value: string;
  suffix: string;
  suffixOpacity?: 'primary' | 'muted';
  icon: Icon;
  title: string;
  description: string;
}

export function StatCard({
  value,
  suffix,
  suffixOpacity = 'primary',
  icon: Icon,
  title,
  description,
}: StatCardProps) {
  return (
    <div className='group p-8 border-r border-border last:border-r-0 hover:bg-card/50 transition-all duration-300 relative'>
      <div className='flex items-start justify-between mb-4'>
        <div className='flex items-baseline gap-2'>
          <div className='text-5xl font-bold text-primary font-mono'>
            {value}
          </div>
          <div
            className={`text-3xl font-light ${
              suffixOpacity === 'primary'
                ? 'text-primary'
                : 'text-muted-foreground'
            }`}
          >
            {suffix}
          </div>
        </div>
        <Icon className='w-5 h-5 text-primary/50 group-hover:text-primary transition-colors' />
      </div>

      <h3 className='text-lg font-semibold mb-2 lowercase'>{title}</h3>

      <p className='text-sm text-muted-foreground'>{description}</p>

      <div className='absolute bottom-0 left-0 h-0.5 w-0 bg-primary group-hover:w-full transition-all duration-500' />
    </div>
  );
}
