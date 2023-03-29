import Link from '@/components/Link'

const classes = {
  firstListItem: 'pb-16pxr',

  secondListItem: 'py-10pxr',
}

export default function UiTemplateLayout({
  children,
}: {
    children: React.ReactNode
}) {
  return (
    <>
      <div className='flex'>
        <div className='p-24pxr pr-48pxr'>
          <div className='text-xl'>
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400'>UI Template</span>
          </div>
          <ul>
            <li className={classes.firstListItem}>
              <div className='text-lg'>
                <Link href='/ui-templates/form'>Form</Link>
              </div>
              <ul>
                <li>
                  <Link href='/ui-templates/form#input'>Input</Link>
                </li>
                <li>
                  <Link href='/ui-templates/form#select'>Select</Link>
                </li>
                <li>
                  <Link href='/ui-templates/form#checkbox'>Checkbox</Link>
                </li>
                <li>
                  <Link href='/ui-templates/form#radio'>Radio</Link>
                </li>
              </ul>
            </li>
            <li className={classes.firstListItem}>
              <div className='text-lg'>
                <Link href='/ui-templates/button'>Button</Link>
              </div>
            </li>
          </ul>
        </div>
        <div>
          {children}
        </div>
      </div>
    </>
  )
}
