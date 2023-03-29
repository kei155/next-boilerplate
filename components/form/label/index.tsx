interface ILabelProps extends React.ComponentProps<'label'> {
    required?: boolean
}

function Label({
  children,
  htmlFor,
  required
}: ILabelProps) {
  return <label
    htmlFor={htmlFor}
    className="absolute text-sm -translate-y-1/2 bg-white left-16pxr px-8pxr"
  >
    {required === true && <span className="w-4pxr h-4pxr bg-orange-600 absolute top-8pxr left-2pxr rounded-full"></span>}
    <span className="opacity-50">{children}</span>
  </label>
}

function Standalone({ required, children }: ILabelProps) {
  return (
    <label className='text-sm flex'>
      {required === true && <div className='relative w-8pxr'><span className="w-4pxr h-4pxr bg-orange-600 absolute top-8pxr left-2pxr rounded-full"></span></div>}
      <span className="opacity-50">{children}</span>
    </label>
  )
}

export default Object.assign(Label, { Standalone })
