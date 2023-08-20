import front from '../../assets/img/work-img-1.webp'
import front2 from '../../assets/img/work-img-2.webp'
import front3 from '../../assets/img/work-img-3.webp'
import front4 from '../../assets/img/work-img-4.webp'

const Work = () => {
    return (
        <div className='px-8'>
            <h2 className="text-2xl title inline-block font-bold  text-[#262626] py-6 ">Portfolio</h2>

            <div className="py-4">
                    <div className="grid grid-cols-2 gap-3 cursor-pointer">
                        <div className="bg-[#FFF4F4] group px-6 py-6 h-[55vh] rounded-md overflow-hidden">
                            <div className='overflow-hidden'>
                                <a href="https://vermillion-hotteok-d0c334.netlify.app/">
                                <img className='rounded-md overflow-hidden group-hover:scale-110 duration-300' src={front} alt="front" />
                                </a>
                            </div>
                            <div className='py-2'>
                            <a href="https://vermillion-hotteok-d0c334.netlify.app/">
                                 <h2 className='text-lg font-medium py-1 
                                  group-hover:text-[#F54B57]  duration-300'>Full-Stack Project
                                    <span className='px-2 text-base'>[Preview]</span>
                                  </h2>
                                  </a>
                                 <p className='text-[#26262692]'>Using Technologies:</p>
                                 <p className='text-[#26262692] py-1'>Html, Css, JavaScript, ReactJs,Tailwind, Firebase, NodeJs, ExpressJs, MongoDB</p>
                            </div>
                        </div>

                        <div className="bg-[#EEF5FA] group px-6 py-6 rounded-md">
                            <div className='overflow-hidden'>
                            <a href="https://vermillion-hotteok-d0c334.netlify.app/">
                                <img className='rounded-md overflow-hidden group-hover:scale-110 duration-300' src={front2} alt="front" />
                                </a>
                            </div>
                            <div className='py-2'>
                            <a href="https://effulgent-dolphin-19e906.netlify.app">
                                 <h2 className='text-lg font-medium py-1 
                                  group-hover:text-[#F54B57]  duration-300'>Front-End Project
                                    <span className='px-2 text-base'>[Preview]</span>
                                  </h2>
                                  </a>
                                 <p className='text-[#26262692]'>Using Technologies:</p>
                                 <p className='text-[#26262692] py-1'>Html, Css, JavaScript, ReactJs,Tailwind, Firebase</p>
                            </div>
                        </div>

                        <div className="bg-[#EEF5FA] group px-6 py-6 rounded-md mt-[-70px] h-[65vh]">
                        <div className='overflow-hidden'>
                            <a href="https://heartfelt-raindrop-3c654f.netlify.app/">
                                <img className='rounded-md overflow-hidden group-hover:scale-110 duration-300' src={front3} alt="front" />
                                </a>
                            </div>
                            <div className='py-2'>
                            <a href="https://heartfelt-raindrop-3c654f.netlify.app/">
                                 <h2 className='text-lg font-medium py-1 
                                  group-hover:text-[#F54B57]  duration-300'>Landing Page
                                    <span className='px-2 text-base'>[Preview]</span>
                                  </h2>
                                  </a>
                                 <p className='text-[#26262692]'>Using Technologies:</p>
                                 <p className='text-[#26262692] py-1'>Html, Css, JavaScript, ReactJs,Tailwind, Firebase</p>
                            </div>
                        </div>

                        <div className="bg-[#FFF4F4] group px-6 py-6 rounded-md">
                        <div className='overflow-hidden'>
                            <a href="https://leafy-kleicha-d67d83.netlify.app/">
                                <img className='rounded-md overflow-hidden group-hover:scale-110 duration-300' src={front4} alt="front" />
                                </a>
                            </div>
                            <div className='py-2'>
                            <a href="https://leafy-kleicha-d67d83.netlify.app/">
                                 <h2 className='text-lg font-medium py-1 
                                  group-hover:text-[#F54B57]  duration-300'>Responsive Page
                                    <span className='px-2 text-base'>[Preview]</span>
                                  </h2>
                                  </a>
                                 <p className='text-[#26262692]'>Using Technologies:</p>
                                 <p className='text-[#26262692] py-1'>Html, Css, JavaScript, ReactJs,Tailwind, Firebase</p>
                            </div>
                        </div>

                    </div>
            </div>
        </div>
    );
};

export default Work;