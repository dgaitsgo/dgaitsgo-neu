import Link from "next/link"

interface BreadCrumbProps {
    crumbs: Array<{
        label: string
        href?: string
    }>
}

function BreadCrumb({ crumbs }: BreadCrumbProps) {

    return (
        <p className='pl-4 pb-8 mt-8'>
            {
                crumbs.map(({ label, href }, key) =>
                    <span key={key}>
                        {href ? <Link href={href}>
                            <span className="underline mr-4 klein underline-offset-4">{label}</span>
                        </Link>
                            : <span className="mr-4">{label}</span>
                        }
                        {key !== crumbs.length - 1? <span className="mr-4">/</span> : null}
                    </span>
                )
            }
        </p>
    )
}

export default BreadCrumb