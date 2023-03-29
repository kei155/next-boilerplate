import NextLink from 'next/link'

interface ILinkProps extends React.ComponentProps<typeof NextLink> {
    //
}

export default function Link({
  children,
  ...props
}: ILinkProps) {
  return <NextLink {...props}>{children}</NextLink>
}
