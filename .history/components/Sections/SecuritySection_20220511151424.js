import Image from "next/image";


export default function SecuritySection() {

    return (
        <div className='bg-gradient-to-br from-[#001a26] to-[#000000] w-11/12 mx-auto'>
            <div className="w-full h-[440px] relative">
                <Image
                    src={'/images/security_bg.jpeg'}
                    alt="Security Image"
                    layout="fill"
                    objectFit="cover"
                />
            </div>
            <div className="text-white w-[75%] mx-auto my-8">
                <h2 className="text-3xl text-[#76c1e4] text-center font-bold">White Hat Security</h2>
                <p className="text-lg text-gray-400 py-8">White hat security is using the latest techniques used by malicious hackers to search out vulneralbilities within your website, computer systems, and your network. White hat security fully disclose all the vulnerabilities they find to the company, individual or product owner who is responsible for fixing the flaws so the issues can be resolved before they are exploited by malicious hackers.</p>
                <div className="flex space-x-6">
                    <ul className="space-y-6">
                        <li>
                            <h3 className="text-xl text-[#76c1e4] font-semibold">Pen testing</h3>
                            <p className="text-lg text-gray-400">Ethical hackers use their skills to help identify potential entry points and system vulnerabilities and then try to penetrate the organization&apos;s network or exposed system.</p>
                        </li>
                        <li>
                            <h3 className="text-xl text-[#76c1e4] font-semibold">Email phishing</h3>
                            <p className="text-lg text-gray-400">White hat hackers conduct legitimate anti-phishing campaigns to find and fix possible issues within an organization&apos;s network before an attack can occur. Email phishing tricks the recipient of the email into providing sensitive information or clicking on a malicious file or link</p>
                        </li>
                        <li>
                            <h3 className="text-xl text-[#76c1e4] font-semibold">Denial-of-service (DoS) attack</h3>
                            <p className="text-lg text-gray-400">This type of attack temporarily disrupts or degrades the performance of a machine or network resource, making it unavailable to users. A white hat hacker can simulate this type of attack to help an organization develop its DoS response plan</p>
                        </li>
                    </ul>
                    <ul className="space-y-6">
                        <li>
                            <h3 className="text-xl text-[#76c1e4] font-semibold">Social engineering</h3>
                            <p className="text-lg text-gray-400">White hat hackers use behavioral techniques to test the security level of a company's systems so it can prevent an attack. Social engineering attacks take advantage of human nature and trust in order to trick employees into breaking security protocols or giving away sensitive information.</p>
                        </li>
                        <li>
                            <h3 className="text-xl text-[#76c1e4] font-semibold">Security scanning</h3>
                            <p className="text-lg text-gray-400">Ethical hackers use a variety of tools to automate the process of finding known vulnerabilities. These range from tools to detect web application vulnerabilities, such as Acunetix or Netsparker, to open source pen testing tools, including Metasploit Framework or Nikto.</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}