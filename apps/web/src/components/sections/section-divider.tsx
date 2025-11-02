export function SectionDivider() {
  return (
    <div className='w-full py-8 md:py-12'>
      <div className='max-w-5xl mx-auto px-6'>
        <div className='flex items-center gap-8'>
          <div className='h-px flex-1 bg-linear-to-r from-transparent via-border to-border' />
          <div className='flex items-center gap-2'>
            <div className='w-1.5 h-1.5 bg-primary animate-pulse' />
            <div className='text-primary text-2xl font-light font-mono'>
              &#47;&#47;
            </div>
            <div className='w-1.5 h-1.5 bg-border' />
          </div>
          <div className='h-px flex-1 bg-linear-to-l from-transparent via-border to-border' />
        </div>
      </div>
    </div>
  );
}
