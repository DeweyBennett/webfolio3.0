import Image from "next/image";


export default function SecuritySection() {

    return (
        <div className='bg-gradient-to-br from-[#00131c] to-[#000000] w-11/12 mx-auto'>
            <div className="w-full h-[440px] relative">
                <Image
                    src={'/images/security_bg.jpeg'}
                    alt="Security Image"
                    layout="fill"
                    objectFit="cover"
                />
            </div>
            <div className="text-white w-[75%] mx-auto my-8">
                <h1 className="text-3xl text-[#76c1e4] text-center font-bold">White Hat Security</h1>
                <p className="text-lg text-gray-400 py-8">White hat security is using the latest techniques used by malicious hackers to search out vulneralbilities within your website, com</p>
            </div>
        </div>
    )
}