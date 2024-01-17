interface ContentWrapperProps {
    children: React.ReactNode
}

function ContentWrapper({ children }: ContentWrapperProps) {
    return (
        <div className="subpixel-antialiased font-fivo min-h-screen flex flex-col items-center w-full">
            <div className="lg:pt-12 lg:px-12 md:p-4 sm:px-0 relative flex-col lg:max-w-prose max-w-full" >
                <div className='flex justify-between items-center'>
                    <div className="flex-col max-w-full">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContentWrapper