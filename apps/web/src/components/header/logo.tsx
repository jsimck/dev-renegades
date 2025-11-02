export function Logo() {
  return (
    <a href='/' className='inline-block group' aria-label='dev renegades home'>
      <div className='flex items-baseline gap-1'>
        <span
          className='text-xl md:text-3xl font-bold tracking-tight lowercase'
          aria-hidden='true'
        >
          dev
        </span>
        <span
          className='text-xl md:text-3xl font-family-serif font-normal lowercase'
          aria-hidden='true'
        >
          renegades
        </span>
      </div>
    </a>
  );
}
