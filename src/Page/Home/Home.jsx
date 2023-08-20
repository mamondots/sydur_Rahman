import userImg from '../../assets/img/owner.webp'
import './Home.css'
import { FaFacebookF,FaLinkedinIn,FaGithub,FaMapMarkerAlt,FaRegUser, FaYoutube } from 'react-icons/fa';
import { CiMobile1} from 'react-icons/ci';
import { RiMailSendLine} from 'react-icons/ri';
import { SlCalender} from 'react-icons/sl';
import { FiDownload} from 'react-icons/fi';

import { BsFileEarmarkText} from 'react-icons/bs';
import { ImBlogger2} from 'react-icons/im';
import { LuContact} from 'react-icons/lu';
import { BsTools} from 'react-icons/bs';
import resume from '../../assets/img/sydur_rahman.pdf'
import { useState } from 'react';
import About from '../About/About';
import Resume from '../Resume/Resume';
import Work from '../Work/Work';
import Blogs from '../Blogs/Blogs';
import Contact from '../Contact/Contact';

const Home = () => {
    const [toggle,setToggle] = useState(1)
    const toggleTab = (index) =>{
        setToggle(index)
    }
    return (
        <div className="px-28 py-12">
           <div className="lg:flex gap-8">
             <div className="owner  bg-[#FFFFFF] rounded-md lg:w-2/4">
                <div className='flex items-center justify-center rounded-md '>
                    <img className='rounded-md px-10 pt-8' src={userImg} alt="" />
                </div>
                <div className='flex items-center justify-center flex-col py-5'>
                     <h2 className='text-xl font-semibold text-[#000]'>Sydur Rahman</h2>
                     <p className='py-1 text-[#000000ac] font-medium'>Junior Web Developer</p>
                     <div className='flex items-center py-1 space-x-2 cursor-pointer font-medium text-lg'>
                          <a href="https://www.facebook.com/al.mamon.9237/">
                          <p className='px-2 py-2 rounded-md text-[#1773EA] hover:bg-gradient-to-r from-[#F54A58] to-[#E12A71] hover:text-white duration-300'><FaFacebookF></FaFacebookF></p>
                          </a>
                          <a href="https://www.youtube.com/channel/UCTDMrBd6TOiI30_D8ydGlTA">
                          <p className='px-2 py-2 rounded-md text-[#E12A72] hover:bg-gradient-to-r from-[#F54A58] to-[#E12A71] hover:text-white duration-300'><FaYoutube></FaYoutube></p>
                          </a>
                          <a href="https://www.linkedin.com/in/al-mamon-543821251/">
                          <p className='px-2 py-2 rounded-md text-[#144679] hover:bg-gradient-to-r from-[#F54A58] to-[#E12A71] hover:text-white duration-300'><FaLinkedinIn></FaLinkedinIn></p>
                          </a>
                         <a href="https://github.com/mamondots">
                         <p className='px-2 py-2 rounded-md text-[#1C9CEA] hover:bg-gradient-to-r from-[#F54A58] to-[#E12A71] hover:text-white duration-300'><FaGithub></FaGithub></p>
                         </a>
                     </div>
                </div>
                <div className='px-8 py-12 bg-[#F3F6F6] cursor-pointer space-y-8 '>
                     <div className='flex items-center space-x-4 group'>
                        <div className='px-2 py-2 bg-[#fff] group-hover:bg-[#E32D70]   duration-300 drop-shadow-2xl rounded-md'>
                            <p className='text-2xl font-semibold text-[#E32D70] group-hover:text-white duration-300'><CiMobile1></CiMobile1></p>
                        </div>
                        <div>
                            <p className='text-[#262626b2] text-[14px]'>Phone</p>
                            <p>+8801646286477</p>
                        </div>
                     </div>

                     <div className='flex items-center space-x-4 group'>
                            <div className='px-2 py-2 bg-[#fff] group-hover:bg-[#E32D70]   duration-300 drop-shadow-2xl rounded-md'>
                            <p className='text-2xl font-semibold text-[#6AB5C9] group-hover:text-white duration-300'><RiMailSendLine></RiMailSendLine></p>
                            </div>
                            <div>
                                <p className='text-[#262626b2] text-[14px]'>Email</p>
                                <p>sydur6060@gmail.com</p>
                            </div>
                     </div>


                     <div className='flex items-center space-x-4 group'>
                            <div className='px-2 py-2 bg-[#fff] group-hover:bg-[#E32D70]   duration-300 drop-shadow-2xl rounded-md'>
                            <p className='text-2xl font-semibold text-[#FD7590] group-hover:text-white duration-300'><FaMapMarkerAlt></FaMapMarkerAlt></p>
                            </div>
                            <div>
                                <p className='text-[#262626b2] text-[14px]'>Location</p>
                                <p>Dhaka,Bangladesh</p>
                            </div>
                     </div>


                     <div className='flex items-center space-x-4 group'>
                        <div className='px-2 py-2 bg-[#fff] group-hover:bg-[#E32D70]   duration-300 drop-shadow-2xl rounded-md'>
                            <p className='text-2xl font-semibold text-[#C17CEB] group-hover:text-white duration-300'>
                            <SlCalender></SlCalender>
                            </p>
                        </div>
                        <div>
                            <p className='text-[#262626b2] text-[14px]'>Birthday</p>
                            <p>12 july 1999</p>
                        </div>
                     </div>
                </div>
                <div className='flex items-center justify-center mt-8'>
                <div className='download-cv px-6 py-3 bg-gradient-to-r from-[#F74E55] to-[#DE2673] text-white flex items-center justify-center rounded-md space-x-2 cursor-pointer hover:translate-y-2 duration-300'>
                    <p><FiDownload></FiDownload></p>
                    <a href={resume} download='resume'>Download Cv</a>
                </div>
                </div>
             </div>

             <div className="owner-info rounded-md  w-full">
                <div className='container'>
                        <div className='inline-block absolute right-28'>
                        <div className='block-tab flex items-center bg-white px-10 py-6 space-x-2 rounded-md cursor-pointer'>
                            <div onClick={() => toggleTab(1)} className={toggle === 1 ? 'tabs active-tabs flex flex-col items-center  px-4 py-2 rounded-md':'tabs flex flex-col items-center  px-4 py-2 rounded-md'}>
                                <p className='text-2xl py-2 text-[#26262695]'><FaRegUser></FaRegUser></p>
                                <p className='text-[#26262695]'>About</p>
                            </div>

                            <div onClick={() => toggleTab(2)} className={toggle === 2 ? 'tabs active-tabs flex flex-col items-center  px-3 py-2 rounded-md':'tabs flex flex-col items-center  px-3 py-2 rounded-md'}>
                                <p className='text-2xl py-2 text-[#26262695]'><BsFileEarmarkText></BsFileEarmarkText></p>
                                <p className='text-[#26262695]'>Resume</p>
                            </div>

                            <div onClick={() => toggleTab(3)} className={toggle === 3 ? 'tabs active-tabs flex flex-col items-center  px-4 py-2 rounded-md':'tabs flex flex-col items-center  px-4 py-2 rounded-md'}>
                                <p className='text-2xl py-2 text-[#26262695]'><BsTools></BsTools></p>
                                <p className='text-[#26262695]'>Works</p>
                            </div>

                            <div onClick={() => toggleTab(4)} className={toggle === 4 ? 'tabs active-tabs flex flex-col items-center  px-4 py-2 rounded-md':'tabs flex flex-col items-center  px-4 py-2 rounded-md'}>
                                <p className='text-2xl py-2 text-[#26262695]'><ImBlogger2></ImBlogger2></p>
                                <p className='text-[#26262695]'>Blogs</p>
                            </div>

                            <div onClick={() => toggleTab(5)} className={toggle === 5 ? 'tabs active-tabs flex flex-col items-center  px-3 py-2 rounded-md':'tabs flex flex-col items-center  px-3 py-2 rounded-md'}>
                                <p className='text-2xl py-2 text-[#26262695]'><LuContact></LuContact></p>
                                <p className='text-[#26262695]'>Contact</p>
                            </div>

                        </div>
                        </div>
                        <div className='contain-tabs relative top-40 rounded-md  bg-white'>
                                <div className={toggle === 1 ? "content active-content":"content"}>
                                    <About></About>
                                </div>

                                <div className={toggle === 2 ? "content active-content":"content"}>
                                    <Resume></Resume>
                                </div>

                                <div className={toggle === 3 ? "content active-content":"content"}>
                                    <Work></Work>
                                </div>

                                <div className={toggle === 4 ? "content active-content":"content"}>
                                    <Blogs></Blogs>
                                </div>

                                <div className={toggle === 5 ? "content active-content":"content"}>
                                    <Contact></Contact>
                                </div>

                        </div>
                </div>
             </div>
           </div>
        </div>
    );
};

export default Home;