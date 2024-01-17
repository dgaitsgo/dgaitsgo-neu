import Image from 'next/image'


function IconButton() {
    return (
        <>
            <Image
                priority
                src="/images/icons/back.svg"
                height={24}
                width={24}
                alt="Back"
            />
        </>
    )
}

export default IconButton