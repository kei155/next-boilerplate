import React, { useId } from "react";
import { Label } from '@/components/form'

interface IInputProps extends React.ComponentProps<'input'> {
    type: 'text'
    | 'number'
    | 'search'
    | 'email'
    | 'password'
    | 'tel'
    id?: string
    label?: string
    placeholder?: string
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export default function Input({
    id,
    label,
    type,
    value,
    name,
    className,
    placeholder,
    required,
    onChange,
}: IInputProps) {
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
                <input
                    id={forId}
                    type={type}
                    value={value}
                    className={`${className} h-10 border p-4`}
                    onChange={onChange}
                    placeholder={placeholder}
                />
            </div>
        </>
    )
}