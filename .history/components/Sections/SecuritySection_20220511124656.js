import Image from "next/image";


export default function SecuritySection() {

    return (
        <div className='bg-gradient-to-r from-[#00151f] via-[#000000] to-[#000000] w-11/12 mx-auto'>
            <div className="w-full h-[440px] relative">
                <Image
                    src={'/images/security_bg.jpeg'}
                    alt="Security Image"
                    layout="fill"
                    objectFit="cover"
                />
            </div>
            <div className="text-white w-[75%] mx-auto my-8">
                <p className="text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
        </div>
    )
}