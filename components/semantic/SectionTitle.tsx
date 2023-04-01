export interface ISectionTitleProps extends React.ComponentProps<'h2'> {
    //
}

export default function SectionTitle({
  children,
  ...props
}: ISectionTitleProps) {
  return (
    <>
      <h2 className='text-xl my-10pxr'>{children}</h2>
    </>
  )
}
