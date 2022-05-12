import { useState } from 'react';
import { useRouter } from 'next/router';
import axios from "axios";
import Image from 'next/image';

export default function IndexHeader(){
    const router = useRouter();

    return(
        <div className="bg-transparent bg-banner bg-no-repeat bg-top bg-cover">
            <div>
                <div className="grid grid-cols-2 gap-14 items-center min-h-[100vh] max-w-[80%] mx-auto">
                    <div className="text-left col-span-1">
                        <h1 className="text-3xl font-bold bg-gradient-to-l from-[#AE67FA] to-[#F49867] bg-clip-text text-transparent mb-2">Thank you for visiting my portfolio. I look forward to hearing from you soon!</h1>
                        <p className="text-[#81AFDD] text-lg">Hello, my name is Dewey Bennett and thank you for visiting my page. I am a new web developer in the Lynchburg, Va area, and I specialize in developing mobile and web applications for small businesses. Please check out my portfolio and let me know if there is anything I can do for you.</p>
                        <div className='flex flex-col w-[100%]'>
                            <button onClick={() => router.push('/landing')} className='text-[#040C18] px-2 py-4 w-[50%] mx-auto mt-4 rounded-full text-lg font-bold bg-gradient-to-r from-[#AE67FA] to-[#F49867] hover:bg-gradient-to-l hover:from-[#AE67FA] hover:to-[#F49867]'>Send Message</button>
                        </div>
                    </div>
                    <div className="col-span-1">
                        <div className='relative min-h-[500px]'>
                            <Image src={'/images/ai.png'} alt='ai' layout='fill' objectFit='contain' priority />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}