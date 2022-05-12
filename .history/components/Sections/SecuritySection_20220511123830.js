import Image from "next/image";


export default function SecuritySection() {

    return (
        <div className='bg-gradient-to-tl from-[#002853] to-[#040c18] w-11/12 mx-auto'>
            <div className="w-full  relative">
                <Image
                    src={'/images/security_bg.jpeg'}
                    alt="Security Image"
                    width='1000px'
                    height="300px"
                />
            </div>
            <div>

            </div>
        </div>
    )
}