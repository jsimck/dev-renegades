export function SectionDivider() {
  return (
    <div className='w-full'>
      <div className='max-w-5xl mx-auto px-6'>
        <div className='flex items-center gap-8'>
          <div className='h-px flex-1 bg-linear-to-r from-transparent to-border' />
          <div className='text-primary text-2xl font-light'>/</div>
          <div className='h-px flex-1 bg-linear-to-l from-transparent to-border' />
        </div>
      </div>
    </div>
  );
}
