export interface IPageTitleProps extends React.ComponentProps<'h1'> {
    //
}

export default function PageTitle({
  children,
  ...props
}: IPageTitleProps) {
  return (
    <>
      <h1 className='text-2xl my-10pxr'>{children}</h1>
    </>
  )
}
