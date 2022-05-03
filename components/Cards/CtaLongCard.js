import { useRouter } from "next/router";


export default function Cta() {
    const router = useRouter();

    return(
        <div className="bg-[#040C18] py-20">
            <div className='flex flex-col md:flex-row justify-between items-center p-8 m-16 rounded-lg bg-gradient-to-r from-[#AE67FA] to-[#F49867]'>
                <div className='flex flex-col text-center md:text-left text-white'>
                    <h2 className='text-xl font-bold'>Please let me know if there is anything I can do for you.</h2>
                </div>
                <div className='flex justify-center items-center md:ml-8'>
                    <button  onClick={() => router.push('/landing')} className='text-lg text-white font-semibold bg-black px-2 py-4 mt-4 rounded-md md:mt-0'>Get Started Today!</button>
                </div>
            </div>
        </div>
    )
}