import Link from "next/link"

export default function UiTemplateLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <div className="flex">
                <div className="w-36">
                    <div>UI Template</div>
                    <ul>
                        <li>
                            <div>Form</div>
                            <ul>
                                <li>
                                    <Link href="/ui-templates/form/input">Input</Link>
                                </li>
                                <li>
                                    <Link href="/ui-templates/form/select">Select</Link>
                                </li>
                                <li>
                                    <Link href="/ui-templates/form/checkbox">Checkbox</Link>
                                </li>
                            </ul>
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