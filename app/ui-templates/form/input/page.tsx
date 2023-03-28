"use client"

import { Input } from '@/components/form'
import { useRef, useState } from 'react'

export default function Page() {
    const [text, setText] = useState('')
    const handleChange = (
        {
            target: { name, value }
        }: React.ChangeEvent<HTMLInputElement>
    ) => {
        setText(value)
        console.log(text)
    }

    return (
        <div>
            <div>sample</div>
            <div>
                <Input
                    label="배송메세지"
                    type="text"
                    name="example"
                    value={text}
                    placeholder="플레이스홀더"
                    onChange={handleChange}
                ></Input>


                <Input
                    label="이메일"
                    type="email"
                    name="example"
                    value={text}
                    required
                    placeholder="플레이스홀더"
                    onChange={handleChange}
                ></Input>
            </div>
        </div>
    )
}