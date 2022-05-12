import Image from "next/image";


export default function SecuritySection() {

    return (
        <div className='bg-gradient-to-tl from-[#002853] to-[#040c18]'>
            <div className="w-full relative">
                <Image
                    src={'/images/security_bg.jpeg'}
                    width={'1400'}
                    height='300px'
                    alt="Security Image"
                />
            </div>
            <div>

            </div>
        </div>
    )
}