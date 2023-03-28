import { useId } from "react"
import { Label } from ".."


interface ISelectItem<T> {
    text: string
    value: T
}
interface ISelectProps<T = any> extends React.ComponentProps<'select'> {
    items: ISelectItem<T>[]
    id?: string
    label?: string
    textWhenEmpty?: string
}

export default function Select(
    {
        id,
        label,
        items,
        textWhenEmpty,
        required,
        value,
        className,
        onChange,
    }: ISelectProps<any>
) {
    const forId = id || useId()

    return (
        <>
            <div
                data-form-item
                className="relative py-2"
            >
                {
                    !!label
                    && <Label
                        htmlFor={forId}
                        required={required}
                    >{label}</Label>
                }
                <select
                    id={forId}
                    value={value}
                    className={`${className} h-10 border pl-4 pr-8`}
                    onChange={onChange}
                >
                    {
                        items.map(
                            item => (
                                <option
                                    key={item.value}
                                    value={item.value}
                                >{item.text}</option>
                            )
                        )
                    }
                </select>
            </div>
        </>
    )
}