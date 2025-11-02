interface SectionHeaderProps {
  children: string;
}

export function SectionHeader({ children }: SectionHeaderProps) {
  return (
    <div className='text-muted-foreground/30 text-base mb-4 font-mono font-medium'>
      {`// ${children}`}
    </div>
  );
}
