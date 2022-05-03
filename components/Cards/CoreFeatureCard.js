

export default function CoreFeature({ title, text }) {

    return(
        <div className="flex flex-col justify-between items-start w-[100%] m-1">
            <div className="Flex-1 max-w-[360px] mr-8">
                <h1 className="font-bold text-xl text-white">{title}</h1>
            </div>
            <div className="flex-2 max-w-[700px]">
                <p className="text-[#81AFDD] text-lg font-semibold">{text}</p>
            </div>
        </div>
    )
}