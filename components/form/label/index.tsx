interface ILabelProps extends React.ComponentProps<'label'> {
    required?: boolean
}

export default function Label({
    children,
    htmlFor,
    required
}: ILabelProps) {
    return <label
        htmlFor={htmlFor}
        className="absolute text-sm -translate-y-1/2 bg-white left-4 px-2"
    >
        {!!required && <span className="w-1 h-1 bg-orange-600 absolute top-1.5 left-0.5 rounded-full"></span>}
        <span className="opacity-50">{children}</span>
    </label>
}