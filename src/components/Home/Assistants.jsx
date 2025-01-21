import React from 'react'
import svg from '../../assets/images/calendar-linear.svg'

const Assistants = () => {
    return (
        <div className='bg-black md:w-[90%] md:mx-auto py-10 px-5 md:p-12 mt-5 mx-3 mb-10 rounded-2xl '>
            <div className='md:flex justify-between items-center'>
                <div className='text-white md:w-[45%] flex flex-col justify-end md:mt-0 gap-3 h-[50%] '>
                    <h1 className='text-2xl md:text-4xl md:mb-3'>Book an appointement with our <span className='font-medium'>Experts</span></h1>
                    <p className='text-sm '>Book your meeting and take the next step forward!</p>
                </div>
                <div className='md:w-[55%]'>
                    <div className="flex justify-end items-center mt-5">
                        <a href="https://api.whatsapp.com/send?phone=9899829299" target="_blank" rel="noopener noreferrer">
                        <button
                            className="bg-white flex justify-between items-center gap-1 hover:bg-[#1782C5] w-auto h-[38px] p-2 px-3 rounded-full transition-colors duration-200 group"
                        >
                            <span
                                className="text-black transition-colors duration-200 group-hover:text-white"
                            >
                                Schedule meeting
                            </span>

                            <div
                                className="flex items-center justify-center w-[28px] h-[28px] rounded-full group "
                            >
                                <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="transition-colors duration-300"
                                >
                                    <path
                                        d="M2 12C2 8.229 2 6.343 3.172 5.172C4.344 4.001 6.229 4 10 4H14C17.771 4 19.657 4 20.828 5.172C21.999 6.344 22 8.229 22 12V14C22 17.771 22 19.657 20.828 20.828C19.656 21.999 17.771 22 14 22H10C6.229 22 4.343 22 3.172 20.828C2.001 19.656 2 17.771 2 14V12Z"
                                        className="stroke-black group-hover:stroke-white"
                                        stroke-width="1.5"
                                    />
                                    <path
                                        d="M7 4V2.5M17 4V2.5M2.5 9H21.5"
                                        className="stroke-black group-hover:stroke-white"
                                        stroke-width="1.5"
                                        stroke-linecap="round"
                                    />
                                    <path
                                        d="M18 17C18 17.2652 17.8946 17.5196 17.7071 17.7071C17.5196 17.8946 17.2652 18 17 18C16.7348 18 16.4804 17.8946 16.2929 17.7071C16.1054 17.5196 16 17.2652 16 17C16 16.7348 16.1054 16.4804 16.2929 16.2929C16.4804 16.1054 16.7348 16 17 16C17.2652 16 17.5196 16.1054 17.7071 16.2929C17.8946 16.4804 18 16.7348 18 17ZM18 13C18 13.2652 17.8946 13.5196 17.7071 13.7071C17.5196 13.8946 17.2652 14 17 14C16.7348 14 16.4804 13.8946 16.2929 13.7071C16.1054 13.5196 16 13.2652 16 13C16 12.7348 16.1054 12.4804 16.2929 12.2929C16.4804 12.1054 16.7348 12 17 12C17.2652 12 17.5196 12.1054 17.7071 12.2929C17.8946 12.4804 18 12.7348 18 13ZM13 17C13 17.2652 12.8946 17.5196 12.7071 17.7071C12.5196 17.8946 12.2652 18 12 18C11.7348 18 11.4804 17.8946 11.2929 17.7071C11.1054 17.5196 11 17.2652 11 17C11 16.7348 11.1054 16.4804 11.2929 16.2929C11.4804 16.1054 11.7348 16 12 16C12.2652 16 12.5196 16.1054 12.7071 16.2929C12.8946 16.4804 13 16.7348 13 17ZM13 13C13 13.2652 12.8946 13.5196 12.7071 13.7071C12.5196 13.8946 12.2652 14 12 14C11.7348 14 11.4804 13.8946 11.2929 13.7071C11.1054 13.5196 11 13.2652 11 13C11 12.7348 11.1054 12.4804 11.2929 12.2929C11.4804 12.1054 11.7348 12 12 12C12.2652 12 12.5196 12.1054 12.7071 12.2929C12.8946 12.4804 13 12.7348 13 13ZM8 17C8 17.2652 7.89464 17.5196 7.70711 17.7071C7.51957 17.8946 7.26522 18 7 18C6.73478 18 6.48043 17.8946 6.29289 17.7071C6.10536 17.5196 6 17.2652 6 17C6 16.7348 6.10536 16.4804 6.29289 16.2929C6.48043 16.1054 6.73478 16 7 16C7.26522 16 7.51957 16.1054 7.70711 16.2929C7.89464 16.4804 8 16.7348 8 17ZM8 13C8 13.2652 7.89464 13.5196 7.70711 13.7071C7.51957 13.8946 7.26522 14 7 14C6.73478 14 6.48043 13.8946 6.29289 13.7071C6.10536 13.5196 6 13.2652 6 13C6 12.7348 6.10536 12.4804 6.29289 12.2929C6.48043 12.1054 6.73478 12 7 12C7.26522 12 7.51957 12.1054 7.70711 12.2929C7.89464 12.4804 8 12.7348 8 13Z"
                                        className="fill-black group-hover:fill-white"
                                    />
                                </svg>
                            </div>

                        </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Assistants
