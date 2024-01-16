import React from 'react'

const page = () => {
  return (
    <>
     <div className="bg-gray-100 xl:h-screen dark:bg-gray-800">
        <div className="body-content" x-data="{ open: true }">
            <div className="relative lg:block navbar-menu">
                {/* <nav x-bind:className="! open ? 'w-0' : 'w-[280px]'"
                    className="fixed top-0 transition-all lg:mt-0 mt-16 left-0 dark:bg-gray-900 bottom-0 flex flex-col w-[280px] shadow bg-gray-50 overflow-hidden z-50"
                    id="sidenav"></nav>
                    <div className="flex items-center w-full px-4 pt-4 pb-4 border-b border-gray-300 dark:border-gray-700">
                        <a href="#">
                            <h2 className="ml-3 text-lg font-bold text-gray-700 dark:text-gray-400 whitespace-nowrap"> Your
                                Logo </h2>
                        </a>
                    </div>
                    <div className="pb-6 mt-4 overflow-x-hidden overflow-y-auto">
                        <ul className="mb-8 text-sm ">
                            <li>
                                <a href="#"
                                    className="flex items-center px-6 py-4 text-gray-700 dark:text-gray-400 dark:hover:bg-gray-800 group hover:text-gray-600 hover:bg-gray-100">
                                    <span className="drop-shadow-lg mr-2 flex h-8 w-8 items-center 
                                    justify-center rounded-lg bg-white  dark:bg-gray-800 dark:text-gray-100 bg-center 
                                     text-center xl:p-2.5">
                                        <svg className="w-5 h-5 dark:group-hover:text-gray-300" viewBox="0 0 18 18"
                                            fill="none" xmlns="http://www.w3.org/2000/svg"
                                            data-config-id="auto-svg-2-1">
                                            <path
                                                d="M14.9066 3.12873C14.9005 3.12223 14.8987 3.11358 14.8923 3.10722C14.8859 3.10086 14.8771 3.09893 14.8706 3.09278C13.3119 1.53907 11.2008 0.666626 8.99996 0.666626C6.79914 0.666626 4.68807 1.53907 3.12935 3.09278C3.12279 3.09893 3.11404 3.10081 3.10763 3.10722C3.10122 3.11363 3.09944 3.12222 3.09334 3.12873C1.93189 4.29575 1.14217 5.78067 0.823851 7.39609C0.505534 9.01151 0.672885 10.685 1.30478 12.2054C1.93668 13.7258 3.00481 15.025 4.37435 15.9389C5.7439 16.8528 7.35348 17.3405 8.99996 17.3405C10.6464 17.3405 12.256 16.8528 13.6256 15.9389C14.9951 15.025 16.0632 13.7258 16.6951 12.2054C17.327 10.685 17.4944 9.01151 17.1761 7.39609C16.8578 5.78067 16.068 4.29575 14.9066 3.12873ZM8.99992 15.6666C8.00181 15.6663 7.01656 15.4414 6.11714 15.0087C5.21773 14.5759 4.42719 13.9464 3.80409 13.1666H7.15015C7.38188 13.4286 7.66662 13.6383 7.98551 13.782C8.3044 13.9257 8.65017 14 8.99992 14C9.34968 14 9.69544 13.9257 10.0143 13.782C10.3332 13.6383 10.618 13.4286 10.8497 13.1666H14.1958C13.5727 13.9464 12.7821 14.5759 11.8827 15.0087C10.9833 15.4414 9.99804 15.6663 8.99992 15.6666ZM8.16659 11.5C8.16659 11.3351 8.21546 11.174 8.30703 11.037C8.3986 10.8999 8.52875 10.7931 8.68102 10.7301C8.83329 10.667 9.00085 10.6505 9.1625 10.6826C9.32415 10.7148 9.47263 10.7942 9.58918 10.9107C9.70572 11.0272 9.78509 11.1757 9.81724 11.3374C9.8494 11.499 9.83289 11.6666 9.76982 11.8189C9.70675 11.9711 9.59994 12.1013 9.4629 12.1929C9.32586 12.2844 9.16474 12.3333 8.99992 12.3333C8.77898 12.3331 8.56714 12.2452 8.41091 12.089C8.25468 11.9327 8.16681 11.7209 8.16659 11.5ZM15.1751 11.5017L15.1665 11.5H11.4999C11.4983 10.9846 11.3373 10.4824 11.0389 10.0623C10.7405 9.64218 10.3193 9.32472 9.83325 9.15352V6.49996C9.83325 6.27894 9.74546 6.06698 9.58918 5.9107C9.4329 5.75442 9.22093 5.66663 8.99992 5.66663C8.77891 5.66663 8.56695 5.75442 8.41067 5.9107C8.25439 6.06698 8.16659 6.27894 8.16659 6.49996V9.15352C7.68054 9.32472 7.25939 9.64218 6.96098 10.0623C6.66256 10.4824 6.50151 10.9846 6.49992 11.5H2.83334L2.82474 11.5017C2.60799 10.9669 2.46221 10.406 2.39114 9.83329H3.16659C3.3876 9.83329 3.59956 9.74549 3.75584 9.58921C3.91212 9.43293 3.99992 9.22097 3.99992 8.99996C3.99992 8.77894 3.91212 8.56698 3.75584 8.4107C3.59956 8.25442 3.3876 8.16663 3.16659 8.16663H2.39114C2.54005 6.9821 3.00621 5.85981 3.74037 4.91838L4.28597 5.46399C4.36335 5.54137 4.4552 5.60274 4.5563 5.64462C4.65739 5.68649 4.76574 5.70804 4.87517 5.70804C4.98459 5.70804 5.09294 5.68649 5.19404 5.64461C5.29513 5.60274 5.38699 5.54136 5.46436 5.46399C5.54173 5.38661 5.60311 5.29476 5.64498 5.19366C5.68686 5.09257 5.70841 4.98422 5.70841 4.87479C5.70841 4.76537 5.68686 4.65702 5.64498 4.55592C5.60311 4.45483 5.54173 4.36297 5.46435 4.2856L4.91881 3.74005C5.86016 3.00613 6.98227 2.5401 8.16659 2.39118V3.16663C8.16659 3.38764 8.25439 3.5996 8.41067 3.75588C8.56695 3.91216 8.77891 3.99996 8.99992 3.99996C9.22093 3.99996 9.4329 3.91216 9.58918 3.75588C9.74546 3.5996 9.83325 3.38764 9.83325 3.16663V2.39118C11.0176 2.5401 12.1397 3.00613 13.081 3.74005L12.5355 4.2856C12.3792 4.44186 12.2914 4.6538 12.2914 4.87479C12.2914 5.09578 12.3792 5.30772 12.5355 5.46399C12.6917 5.62025 12.9037 5.70804 13.1247 5.70804C13.3457 5.70804 13.5576 5.62026 13.7139 5.46399L14.2595 4.91838C14.9936 5.85981 15.4598 6.9821 15.6087 8.16663H14.8333C14.6122 8.16663 14.4003 8.25442 14.244 8.4107C14.0877 8.56698 13.9999 8.77894 13.9999 8.99996C13.9999 9.22097 14.0877 9.43293 14.244 9.58921C14.4003 9.74549 14.6122 9.83329 14.8333 9.83329H15.6087C15.5376 10.406 15.3919 10.9669 15.1751 11.5017Z"
                                                fill="currentColor"></path>
                                        </svg>
                                    </span>
                                    <span>Dashboard</span>
                                </a>
                            </li>
                            <li x-data="{ open: false }">
                                <a href="#" @click="open = ! open"
                                    className="flex items-center px-6 py-4 text-gray-700 dark:text-gray-400 dark:hover:bg-gray-800 group hover:text-gray-600 hover:bg-gray-100">
                                    <span className="drop-shadow-lg mr-2 flex h-8 w-8 items-center 
                                    justify-center rounded-lg bg-white dark:bg-gray-800 dark:text-gray-100 bg-center 
                                     text-center xl:p-2.5">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                            fill="currentColor" className="w-5 h-5 dark:group-hover:text-gray-300"
                                            viewBox="0 0 16 16">
                                            <path
                                                d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zm.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2z">
                                            </path>
                                        </svg>
                                    </span>
                                    <span> Profile </span>
                                    <span className="inline-block ml-auto sidenav-arrow">
                                        <svg className="w-3 h-3 dark:group-hover:text-gray-300" viewBox="0 0 10 6"
                                            fill="none" xmlns="http://www.w3.org/2000/svg"
                                            data-config-id="auto-svg-3-1">
                                            <path
                                                d="M9.08329 0.666626C8.74996 0.333293 8.24996 0.333293 7.91663 0.666626L4.99996 3.58329L2.08329 0.666626C1.74996 0.333293 1.24996 0.333293 0.916626 0.666626C0.583293 0.999959 0.583293 1.49996 0.916626 1.83329L4.41663 5.33329C4.58329 5.49996 4.74996 5.58329 4.99996 5.58329C5.24996 5.58329 5.41663 5.49996 5.58329 5.33329L9.08329 1.83329C9.41663 1.49996 9.41663 0.999959 9.08329 0.666626Z"
                                                fill="currentColor"></path>
                                        </svg>
                                    </span>
                                </a>
                                <div className="pl-3 ml-3 transition border-gray-500 dropdown-section nested-menu"
                                    x-show="open">
                                    <ul className="text-sm ">
                                        <li>
                                            <a href="#"
                                                className="flex items-center py-3 pl-3 pr-4 text-gray-700 rounded dark:text-gray-400 dark:hover:bg-gray-800 hover:bg-gray-100 ">
                                                <span className="text-gray-700 dark:text-gray-400">Profile</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#"
                                                className="flex items-center py-3 pl-3 pr-4 text-gray-700 rounded dark:text-gray-400 dark:hover:bg-gray-800 hover:bg-gray-100 ">
                                                <span className="text-gray-700 dark:text-gray-400">Leave</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#"
                                                className="flex items-center py-3 pl-3 pr-4 text-gray-700 rounded dark:text-gray-400 dark:hover:bg-gray-800 hover:bg-gray-100 ">
                                                <span className="text-gray-700 dark:text-gray-400">Assets</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </li>

                            <li>
                                <a href="#"
                                    className="flex items-center px-6 py-4 text-gray-700 dark:text-gray-400 dark:hover:bg-gray-800 group hover:text-gray-600 hover:bg-gray-100">
                                    <span className="drop-shadow-lg mr-2 flex h-8 w-8 items-center 
                                    justify-center rounded-lg bg-white dark:bg-gray-800 dark:text-gray-100 bg-center 
                                     text-center xl:p-2.5">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                            fill="currentColor"
                                            className="w-5 h-5 dark:group-hover:text-gray-300 bi bi-people"
                                            viewBox="0 0 16 16">
                                            <path
                                                d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816zM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275zM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z" />
                                        </svg>
                                    </span>
                                    <span> Users </span>
                                </a>
                            </li>
                            <li>
                                <a href="#"
                                    className="flex items-center px-6 py-4 text-gray-700 dark:text-gray-400 dark:hover:bg-gray-800 group hover:text-gray-600 hover:bg-gray-100">
                                    <span className="drop-shadow-lg mr-2 flex h-8 w-8 items-center 
                                    justify-center rounded-lg bg-white dark:bg-gray-800 dark:text-gray-100 bg-center 
                                     text-center xl:p-2.5">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                            fill="currentColor"
                                            className="w-5 h-5 dark:group-hover:text-gray-300 bi bi-basket"
                                            viewBox="0 0 16 16">
                                            <path
                                                d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1v4.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 13.5V9a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h1.217L5.07 1.243a.5.5 0 0 1 .686-.172zM2 9v4.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V9H2zM1 7v1h14V7H1zm3 3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 4 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 6 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 8 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5z" />
                                        </svg>
                                    </span>
                                    <span> Products </span>
                                    <span
                                        className="flex items-center justify-center w-6 h-6 px-2 ml-auto text-xs text-indigo-600 bg-indigo-100 rounded dark:bg-gray-700 dark:text-gray-100">5</span>
                                </a>
                            </li>
                            <li>
                                <a href="#"
                                    className="flex items-center px-6 py-4 text-gray-700 dark:text-gray-400 dark:hover:bg-gray-800 group hover:text-gray-600 hover:bg-gray-100">
                                    <span className="drop-shadow-lg mr-2 flex h-8 w-8 items-center 
                                    justify-center rounded-lg bg-white dark:bg-gray-800 dark:text-gray-100 bg-center 
                                     text-center xl:p-2.5">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                            fill="currentColor"
                                            className="w-5 h-5 dark:group-hover:text-gray-300 bi bi-file-earmark"
                                            viewBox="0 0 16 16">
                                            <path
                                                d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5L14 4.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5h-2z" />
                                        </svg>
                                    </span>
                                    <span> Docs </span>
                                </a>
                            </li>
                            <li>
                                <a href="#"
                                    className="flex items-center px-6 py-4 text-gray-700 dark:text-gray-400 dark:hover:bg-gray-800 group hover:text-gray-600 hover:bg-gray-100">
                                    <span className="drop-shadow-lg mr-2 flex h-8 w-8 items-center 
                                    justify-center rounded-lg bg-white dark:bg-gray-800 dark:text-gray-100 bg-center 
                                     text-center xl:p-2.5">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                            fill="currentColor"
                                            className="w-5 h-5 dark:group-hover:text-gray-300 bi bi-toggles"
                                            viewBox="0 0 16 16">
                                            <path
                                                d="M4.5 9a3.5 3.5 0 1 0 0 7h7a3.5 3.5 0 1 0 0-7h-7zm7 6a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zm-7-14a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zm2.45 0A3.49 3.49 0 0 1 8 3.5 3.49 3.49 0 0 1 6.95 6h4.55a2.5 2.5 0 0 0 0-5H6.95zM4.5 0h7a3.5 3.5 0 1 1 0 7h-7a3.5 3.5 0 1 1 0-7z" />
                                        </svg>
                                    </span>
                                    <span> Components </span>
                                    <span
                                        className="flex items-center justify-center w-6 h-6 px-2 ml-auto text-xs text-indigo-600 bg-indigo-100 rounded dark:bg-gray-700 dark:text-gray-100">10</span>
                                </a>
                            </li>
                            <li>
                                <a href="#"
                                    className="flex items-center px-6 py-4 text-gray-700 dark:text-gray-400 dark:hover:bg-gray-800 group hover:text-gray-600 hover:bg-gray-100">
                                    <span className="drop-shadow-lg mr-2 flex h-8 w-8 items-center 
                                    justify-center rounded-lg bg-white dark:bg-gray-800 dark:text-gray-100 bg-center 
                                     text-center xl:p-2.5">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                            fill="currentColor"
                                            className="w-5 h-5 dark:group-hover:text-gray-300 bi bi-info-circle"
                                            viewBox="0 0 16 16">
                                            <path
                                                d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                            <path
                                                d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                                        </svg>
                                    </span>
                                    <span> Help </span>
                                </a>
                            </li>
                            <li>
                                <a href="#"
                                    className="flex items-center px-6 py-4 text-gray-700 dark:text-gray-400 dark:hover:bg-gray-800 group hover:text-gray-600 hover:bg-gray-100">
                                    <span className="drop-shadow-lg mr-2 flex h-8 w-8 items-center 
                                    justify-center rounded-lg bg-white dark:bg-gray-800 dark:text-gray-100 bg-center 
                                     text-center xl:p-2.5">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                            fill="currentColor" className="w-5 h-5 dark:group-hover:text-gray-300"
                                            viewBox="0 0 16 16">
                                            <path
                                                d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM2 2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H2z" />
                                            <path
                                                d="M2.5 4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5V4z" />
                                        </svg>
                                    </span>
                                    <span> Calendar </span>
                                </a>
                            </li>
                            <li>
                                <a href="#"
                                    className="flex items-center px-6 py-4 text-gray-700 dark:text-gray-400 dark:hover:bg-gray-800 group hover:text-gray-600 hover:bg-gray-100">
                                    <span className="drop-shadow-lg mr-2 flex h-8 w-8 items-center 
                                    justify-center rounded-lg bg-white dark:bg-gray-800 dark:text-gray-100 bg-center 
                                     text-center xl:p-2.5">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                            fill="currentColor" className="w-5 h-5 dark:group-hover:text-gray-300"
                                            viewBox="0 0 16 16">
                                            <path
                                                d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                                            <path fill-rule="evenodd"
                                                d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z" />
                                        </svg>
                                    </span>
                                    <span> Team </span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav> */}
            </div>
            <div className="mx-auto transition-all content-wrapper" id="dash"
                x-bind:className="! open ? 'lg:ml-0' : 'lg:ml-[280px]'">
                <section
                    className="sticky top-0 z-40 px-3 py-3 bg-white shadow dark:text-gray-100 dark:bg-gray-900 lg:px-5">
                    <nav className="relative">
                        <div className="flex items-center justify-between">
                            <div>
                                <button x-on:click="open = ! open"
                                    className="px-2 py-3 text-blue-500 bg-blue-100 rounded dark:text-gray-400 dark:bg-gray-800">
                                    <svg width="18" height="10" viewBox="0 0 18 10" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M1.50002 1.66667H16.5C16.721 1.66667 16.933 1.57887 17.0893 1.42259C17.2456 1.26631 17.3334 1.05435 17.3334 0.833333C17.3334 0.61232 17.2456 0.400358 17.0893 0.244078C16.933 0.0877975 16.721 0 16.5 0H1.50002C1.27901 0 1.06704 0.0877975 0.910765 0.244078C0.754484 0.400358 0.666687 0.61232 0.666687 0.833333C0.666687 1.05435 0.754484 1.26631 0.910765 1.42259C1.06704 1.57887 1.27901 1.66667 1.50002 1.66667V1.66667ZM16.5 8.33333H1.50002C1.27901 8.33333 1.06704 8.42113 0.910765 8.57741C0.754484 8.73369 0.666687 8.94565 0.666687 9.16667C0.666687 9.38768 0.754484 9.59964 0.910765 9.75592C1.06704 9.9122 1.27901 10 1.50002 10H16.5C16.721 10 16.933 9.9122 17.0893 9.75592C17.2456 9.59964 17.3334 9.38768 17.3334 9.16667C17.3334 8.94565 17.2456 8.73369 17.0893 8.57741C16.933 8.42113 16.721 8.33333 16.5 8.33333ZM16.5 4.16667H1.50002C1.27901 4.16667 1.06704 4.25446 0.910765 4.41074C0.754484 4.56702 0.666687 4.77899 0.666687 5C0.666687 5.22101 0.754484 5.43298 0.910765 5.58926C1.06704 5.74554 1.27901 5.83333 1.50002 5.83333H16.5C16.721 5.83333 16.933 5.74554 17.0893 5.58926C17.2456 5.43298 17.3334 5.22101 17.3334 5C17.3334 4.77899 17.2456 4.56702 17.0893 4.41074C16.933 4.25446 16.721 4.16667 16.5 4.16667Z"
                                            fill="currentColor"></path>
                                    </svg>
                                </button>
                            </div>
                            <div className="justify-center hidden md:flex">
                                <div className=" xl:w-96">
                                    <div className="relative flex flex-wrap items-center w-full ">
                                        <input type="search"
                                            className="form-control relative flex-auto min-w-0 block w-72 px-3 py-1.5 text-base font-normal text-gray-700 bg-white  dark:text-gray-100 bg-clip-padding border border-solid border-gray-300 dark:border-gray-800 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white dark:bg-gray-800  focus:border-blue-600 focus:outline-none"
                                            placeholder="Search"/>
                                        <button
                                            className="btn i px-6 py-2.5 bg-blue-600 dark:bg-blue-300 dark:hover:bg-blue-400  dark:text-gray-900 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out flex items-center"
                                            type="button" id="button-addon2">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                                                <path
                                                    d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <div className="relative mr-4 ">
                                    <span>
                                        <svg mlns="http://www.w3.org/2000/svg" width="20" height="20"
                                            fill="currentColor" className="text-gray-400" viewBox="0 0 16 16">
                                            <path
                                                d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                                            <path
                                                d="M3 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3 6a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 6zm0 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z" />
                                        </svg>
                                    </span>
                                </div>
                                <div className="block mr-4 md:hidden">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                                        className="text-gray-400" viewBox="0 0 16 16">
                                        <path
                                            d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                    </svg>
                                </div>
                                <div className="relative mr-4 ">
                                    <span>
                                        <div className="absolute top-0 right-0 w-2 h-2 bg-red-400 rounded-full">
                                        </div>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                            fill="currentColor" className="text-gray-400" viewBox="0 0 16 16">
                                            <path
                                                d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z" />
                                        </svg>
                                    </span>
                                </div>
                                <div className="relative text-left lg:inline-block" x-data="{ open: false }">
                                    <div className="lg:block" >
                                        <button className="flex items-center">
                                            <div className="hidden mr-3 text-right md:block">
                                                <p className="text-sm font-bold text-black dark:text-gray-400"> John Doe
                                                </p>
                                            </div>
                                            <div className="mr-2">
                                                <img src="https://i.postimg.cc/pr2Q6n1w/pexels-italo-melo-2379005.jpg"
                                                    className="object-cover object-right w-10 h-10 rounded-full"
                                                    alt="person"/>
                                            </div>
                                            <span>
                                                <svg className="text-gray-400" width="10" height="6" viewBox="0 0 10 6"
                                                    fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M9.08335 0.666657C8.75002 0.333323 8.25002 0.333323 7.91669 0.666657L5.00002 3.58332L2.08335 0.666657C1.75002 0.333323 1.25002 0.333323 0.916687 0.666657C0.583354 0.99999 0.583354 1.49999 0.916687 1.83332L4.41669 5.33332C4.58335 5.49999 4.75002 5.58332 5.00002 5.58332C5.25002 5.58332 5.41669 5.49999 5.58335 5.33332L9.08335 1.83332C9.41669 1.49999 9.41669 0.99999 9.08335 0.666657Z"
                                                        fill="currentColor"></path>
                                                </svg>
                                            </span>
                                        </button>
                                    </div>
                                    <div x-show="open" id="dropdown_profile"
                                        className="absolute right-0 w-48 mt-3 origin-top-right bg-white rounded shadow dark:bg-gray-800 dark:text-gray-100 dark:bg-gray-700"
                                        style="display: none;">
                                        <div className="py-1">
                                            <a href="#"
                                                className="flex px-4 py-2 text-sm text-gray-700 dark:text-gray-400 dark:hover:bg-gray-800 hover:bg-gray-100">
                                                <svg className="mr-2" xmlns="http://www.w3.org/2000/svg" width="18"
                                                    height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                    <circle cx="12" cy="12" r="3"></circle>
                                                    <path
                                                        d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z">
                                                    </path>
                                                </svg>
                                                Account
                                            </a>
                                            <a href="#"
                                                className="flex px-4 py-2 text-sm text-gray-700 dark:hover:bg-gray-800 dark:text-gray-400 hover:bg-gray-100">
                                                <svg className="mr-2" xmlns="http://www.w3.org/2000/svg" width="18"
                                                    height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                                                    <polyline points="16 17 21 12 16 7"></polyline>
                                                    <line x1="21" y1="12" x2="9" y2="12"></line>
                                                </svg>
                                                Logout
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </nav>
                </section>
                <section className="px-6 pt-6">
                    <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
                        <div className="flex items-center p-4 rounded-md shadow dark:bg-gray-900 bg-gray-50">
                            <div className="mr-4">
                                <span
                                    className="inline-block p-4 mr-2 text-blue-600 bg-blue-100 rounded-full dark:text-gray-400 dark:bg-gray-700">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                        className="w-6 h-6 bi bi-currency-dollar" viewBox="0 0 16 16">
                                        <path
                                            d="M4 10.781c.148 1.667 1.513 2.85 3.591 3.003V15h1.043v-1.216c2.27-.179 3.678-1.438 3.678-3.3 0-1.59-.947-2.51-2.956-3.028l-.722-.187V3.467c1.122.11 1.879.714 2.07 1.616h1.47c-.166-1.6-1.54-2.748-3.54-2.875V1H7.591v1.233c-1.939.23-3.27 1.472-3.27 3.156 0 1.454.966 2.483 2.661 2.917l.61.162v4.031c-1.149-.17-1.94-.8-2.131-1.718H4zm3.391-3.836c-1.043-.263-1.6-.825-1.6-1.616 0-.944.704-1.641 1.8-1.828v3.495l-.2-.05zm1.591 1.872c1.287.323 1.852.859 1.852 1.769 0 1.097-.826 1.828-2.2 1.939V8.73l.348.086z">
                                        </path>
                                    </svg>
                                </span>
                            </div>
                            <div>
                                <p className="mb-2 text-gray-700 dark:text-gray-400">Earnings Annual</p>
                                <h2 className="text-2xl font-bold text-gray-700 dark:text-gray-400">
                                    $1,25,220</h2>
                            </div>
                        </div>
                        <div className="flex items-center p-4 rounded-md shadow dark:bg-gray-900 bg-gray-50">
                            <div className="mr-4">
                                <span
                                    className="inline-block p-4 mr-2 text-blue-600 bg-blue-100 rounded-full dark:text-gray-400 dark:bg-gray-700">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                        className="w-6 h-6 bi bi-bag-check" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd"
                                            d="M10.854 8.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L7.5 10.793l2.646-2.647a.5.5 0 0 1 .708 0z">
                                        </path>
                                        <path
                                            d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z">
                                        </path>
                                    </svg>
                                </span>
                            </div>
                            <div>
                                <p className="mb-2 text-gray-700 dark:text-gray-400">Pending Orders</p>
                                <h2 className="text-2xl font-bold text-gray-700 dark:text-gray-400">
                                    100</h2>
                            </div>
                        </div>
                        <div className="flex items-center p-4 rounded-md shadow dark:bg-gray-900 bg-gray-50">
                            <div className="mr-4">
                                <span
                                    className="inline-block p-4 mr-2 text-blue-600 bg-blue-100 rounded-full dark:text-gray-400 dark:bg-gray-700">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                        className="w-6 h-6 bi bi-chat-text" viewBox="0 0 16 16">
                                        <path
                                            d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z">
                                        </path>
                                        <path
                                            d="M4 5.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zM4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8zm0 2.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5z">
                                        </path>
                                    </svg>
                                </span>
                            </div>
                            <div>
                                <p className="mb-2 text-gray-700 dark:text-gray-400">Pending Requests</p>
                                <h2 className="text-2xl font-bold text-gray-700 dark:text-gray-400">
                                    56</h2>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="px-6 py-6">
                    <div className="grid lg:grid-cols-[60%,1fr]  grid-cols-1 gap-6 ">
                        <div className="pt-4 bg-white rounded shadow dark:text-gray-100 dark:bg-gray-900">
                            <div className="flex px-6 pb-4 border-b dark:border-gray-700">
                                <h2 className="text-xl font-bold dark:text-gray-400">Transaction</h2>
                            </div>
                            <div className="p-4 overflow-x-auto">
                                <table className="w-full table-auto">
                                    <thead>
                                        <tr className="text-xs text-left text-gray-500 dark:text-gray-400">
                                            <th className="px-6 pb-3 font-medium">Transaction ID</th>
                                            <th className="px-6 pb-3 font-medium ">Date </th>
                                            <th className="px-6 pb-3 font-medium">Email </th>
                                            <th className="px-6 pb-3 font-medium">Status </th>
                                            <th className="px-6 pb-3 font-medium"> </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="text-xs bg-gray-100 dark:text-gray-400 dark:bg-transparent">
                                            <td className="px-6 py-5 font-medium">018276td45</td>
                                            <td className="px-6 py-5 font-medium ">08.4.2021</td>
                                            <td className="px-6 py-5 font-medium ">abc@gmail.com</td>
                                            <td>
                                                <span
                                                    className="inline-block px-2 py-1 text-center text-green-600 bg-green-100 rounded-full dark:text-green-700 dark:bg-green-200">Completed</span>
                                            </td>
                                            <td className="px-6 py-5 ">
                                                <a href="#"
                                                    className="px-4 py-2 font-medium text-blue-500 border border-blue-500 rounded-md dark:text-blue-300 dark:border-blue-300 dark:hover:bg-blue-300 dark:hover:text-gray-700 hover:text-gray-100 hover:bg-blue-500">Edit
                                                </a>
                                            </td>
                                        </tr>
                                        <tr className="text-xs dark:text-gray-400">
                                            <td className="px-6 py-5 font-medium">018276td45</td>
                                            <td className="px-6 py-5 font-medium ">08.4.2021</td>
                                            <td className="px-6 py-5 font-medium ">abc@gmail.com</td>
                                            <td>
                                                <span
                                                    className="inline-block px-2 py-1 text-center text-yellow-600 bg-yellow-100 rounded-full dark:text-yellow-700 dark:bg-yellow-200">Pending</span>
                                            </td>
                                            <td className="px-6 py-5 ">
                                                <a href="#"
                                                    className="px-4 py-2 font-medium text-blue-500 border border-blue-500 rounded-md dark:text-blue-300 dark:border-blue-300 dark:hover:bg-blue-300 dark:hover:text-gray-700 hover:text-gray-100 hover:bg-blue-500">Edit
                                                </a>
                                            </td>
                                        </tr>
                                        <tr className="text-xs bg-gray-100 dark:bg-transparent dark:text-gray-400">
                                            <td className="px-6 py-5 font-medium">018276td45</td>
                                            <td className="px-6 py-5 font-medium ">08.4.2021</td>
                                            <td className="px-6 py-5 font-medium ">abc@gmail.com</td>
                                            <td>
                                                <span
                                                    className="inline-block px-2 py-1 text-center text-green-600 bg-green-100 rounded-full dark:text-green-700 dark:bg-green-200">Completed</span>
                                            </td>
                                            <td className="px-6 py-5 ">
                                                <a href="#"
                                                    className="px-4 py-2 font-medium text-blue-500 border border-blue-500 rounded-md dark:text-blue-300 dark:border-blue-300 dark:hover:bg-blue-300 dark:hover:text-gray-700 hover:text-gray-100 hover:bg-blue-500">Edit
                                                </a>
                                            </td>
                                        </tr>
                                        <tr className="text-xs dark:text-gray-400">
                                            <td className="px-6 py-5 font-medium">018276td45</td>
                                            <td className="px-6 py-5 font-medium ">08.4.2021</td>
                                            <td className="px-6 py-5 font-medium ">abc@gmail.com</td>
                                            <td>
                                                <span
                                                    className="inline-block px-2 py-1 text-center text-red-600 bg-red-100 rounded-full dark:text-red-700 dark:bg-red-200">
                                                    Cancelled</span>
                                            </td>
                                            <td className="px-6 py-5 ">
                                                <a href="#"
                                                    className="px-4 py-2 font-medium text-blue-500 border border-blue-500 rounded-md dark:text-blue-300 dark:border-blue-300 dark:hover:bg-blue-300 dark:hover:text-gray-700 hover:text-gray-100 hover:bg-blue-500">Edit
                                                </a>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        
                    </div>
                </section>
            </div>
        </div>
    </div>
    <script defer src="https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js"></script>
    </>
  )
}

export default page