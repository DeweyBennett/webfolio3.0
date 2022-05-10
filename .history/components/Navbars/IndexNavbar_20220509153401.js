import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import Sticky from 'react-stickynode';
import IndexDropdown from '../Dropdowns/IndexDropdown';

export default function IndexNavbar({ portProjects }){
    console.log(portProjects)
    const router = useRouter();
    const [navbarOpen, setNavbarOpen] = useState(false);
    const [state, setState] = useState({
        isMobileMenu: false,
        isSticky: false,
    });

    const handleStateChange = (status) => {
        status.status === Sticky.STATUS_FIXED
        ? setState({ ...state, isSticky: true })
        : setState({ ...state, isSticky: false });
    };

    return (
        <Sticky
            enabled={true}
            top={0}
            activeClass="is-sticky"
            innerZ={100}
            onStateChange={handleStateChange}
        >
            <nav
                className={state.isSticky ? 'bg-[#040C18] shadow-md shadow-[rgb(59,90,136)] z-50 w-full flex flex-wrap items-center justify-between px-2 py-3' : 'fixed left-0 right-0 z-50 w-full flex flex-wrap items-center justify-between px-2 py-5 bg-transparent transition-all duration-300 ease-in-out'}
            >
                <div className="flex flex-wrap items-center justify-between w-full px-4 mx-auto">
                    <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                        <Link href="/">
                            <a
                                className="text-gray-500 hover:text-gray-200 text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
                                href="#pablo"
                            >
                               Dewey Bennett
                            </a>
                        </Link>
                        <button
                            className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                            type="button"
                            onClick={() => setNavbarOpen(!navbarOpen)}
                            >
                            <i className="fas fa-bars"></i>
                        </button>
                    </div>
                    <div
                        className={
                        "lg:flex flex-grow items-center bg-white lg:bg-opacity-0 lg:shadow-none" +
                        (navbarOpen ? " block" : " hidden")
                        }
                        id="example-navbar-warning"
                    >
                        <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                            <li className="flex items-center">
                                <IndexDropdown portProjects={portProjects} />
                            </li>
                            <li className="flex items-center">
                                <a
                                className="hover:text-blue-700 text-blue-900 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                                href="https://www.facebook.com/dewey.bennett.54"
                                target="_blank"
                                rel="noreferrer"
                                >
                                <i className="text-blueGray-400 fab fa-facebook text-lg leading-lg " />
                                <span className="lg:hidden inline-block ml-2">Share</span>
                                </a>
                            </li>

                            <li className="flex items-center">
                                <a
                                className="hover:text-blue-700 text-blue-900 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                                href="https://www.linkedin.com/in/dewey-bennett-5b040789/"
                                target="_blank"
                                rel="noreferrer"
                                >
                                <i className="text-blue-400 fab fa-linkedin text-lg leading-lg " />
                                <span className="lg:hidden inline-block ml-2">Connect</span>
                                </a>
                            </li>

                            <li className="flex items-center">
                                <button onClick={() => router.push('/auth/credentials_login')}
                                className="bg-blue-900 text-white active:bg-blue-700 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
                                type="button"
                                >
                                <i className="fas fa-arrow-alt-circle-down"></i> Sign In
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </Sticky>
    )
}