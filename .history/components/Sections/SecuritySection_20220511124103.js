import Image from "next/image";


export default function SecuritySection() {

    return (
        <div className='bg-gradient-to-br from-[#002853] via-[#000000] to-[#000000] w-11/12 mx-auto'>
            <div className="w-full h-[440px] relative">
                <Image
                    src={'/images/security_bg.jpeg'}
                    alt="Security Image"
                    layout="fill"
                    objectFit="contain"
                />
            </div>
            <div>
                
            </div>
        </div>
    )
}