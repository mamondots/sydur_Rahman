import edu from '../../assets/img/edu-icon-2.webp'
import exp from '../../assets/img/exper-icon-2.webp'

const Resume = () => {
    return (
        <div className='px-8'>
            <h2 className="text-2xl title inline-block font-bold  text-[#262626] py-6 ">Resume</h2>
            <div className="grid grid-cols-2 gap-8 cursor-pointer">
                <div>
                    <div className='flex items-center space-x-1'>
                        <img src={edu} alt="" />
                        <h2 className='text-2xl font-medium'>Education</h2>
                    </div>
                    <div className='py-8'>
                        <div className='px-4 py-4 bg-[#FFF4F4]'>
                            <p className='text-[#26262692]'>2018-2022</p>
                            <h2 className='text-xl'>B.Sc in Computer Science Engineering</h2>
                            <p className='py-1 text-[#26262692]'>Prime University</p>
                            <p className='text-[#26262692]'>Dhaka,Bangladesh</p>
                        </div>

                        <div className='px-4 py-4 bg-[#EEF5FA] mt-4'>
                            <p className='text-[#26262692]'>2022-2023</p>
                            <h2 className='text-lg'>Complete Web Development</h2>
                            <p className='py-1 text-[#26262692]'>Programming-Hero</p>
                            <p className='text-[#26262692]'>Dhaka,Bangladesh</p>
                        </div>
                    </div>
                </div>

                <div>
                    <div className='flex items-center space-x-1'>
                        <img src={exp} alt="" />
                        <h2 className='text-2xl font-medium'>Experience</h2>
                    </div>

                    <div className='py-8'>
                    <div className='px-4 py-4 bg-[#EEF5FA] mt-4'>
                            <p className='text-[#26262692]'>2023-2023</p>
                            <h2 className='text-lg'>Jr.Front-End Developer</h2>
                            <p className='py-1 text-[#26262692]'>Dream It.</p>
                            <p className='text-[#26262692]'>Dhaka,Bangladesh</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='grid lg:grid-cols-2 gap-8 py-12'>
                 <div>
                    <h2 className='text-2xl font-medium'>Working Skills</h2>
                    <div className='py-8 space-y-6'>
                            <div>
                                <div className='flex items-center justify-between text-base text-[#262626a0] font-medium'>
                                    <p>Front-End</p>
                                    <p>80%</p>
                                </div>
                                <div className='bg-[#EDF2F2] mt-2 rounded-md'>
                                    <p className='bg-[#FF6464] py-[3px] w-[80%] rounded-md'></p>
                                </div>
                            </div>

                            <div>
                                <div className='flex items-center justify-between text-base font-medium text-[#262626a0]'>
                                    <p>Back-End</p>
                                    <p>60%</p>
                                </div>
                                <div className='bg-[#EDF2F2] mt-2 rounded-md'>
                                    <p className='bg-[#9272D4] py-[3px] w-[60%] rounded-md'></p>
                                </div>
                            </div>

                            <div>
                                <div className='flex items-center justify-between text-base font-medium text-[#262626a0]'>
                                    <p>MERN-STACK</p>
                                    <p>48%</p>
                                </div>
                                <div className='bg-[#EDF2F2] mt-2 rounded-md'>
                                    <p className='bg-[#5185D4] py-[3px] w-[48%] rounded-md'></p>
                                </div>
                            </div>

                            <div>
                                <div className='flex items-center justify-between text-base font-medium text-[#262626a0]'>
                                    <p>Responsive Design</p>
                                    <p>85%</p>
                                </div>
                                <div className='bg-[#EDF2F2] mt-2 rounded-md'>
                                    <p className='bg-[#CA56F2] py-[3px] w-[85%] rounded-md'></p>
                                </div>
                            </div>
                    </div>
                 </div>

                 <div>
                 <h2 className='text-2xl font-medium'>Knowledges</h2>
                 <div className='py-8 flex items-center flex-wrap  gap-2 cursor-pointer'>
                        <p className='bg-[#EDF2F2] hover:bg-[#F3465C] hover:text-white duration-300 px-4 py-2 rounded-md text-[#262626b4]'>HTML</p>
                        <p className='bg-[#EDF2F2] hover:bg-[#F3465C] hover:text-white duration-300 px-4 py-2 rounded-md text-[#262626b4]'>CSS</p>
                        <p className='bg-[#EDF2F2] hover:bg-[#F3465C] hover:text-white duration-300 px-4 py-2 rounded-md text-[#262626b4]'>JavaScript</p>
                        <p className='bg-[#EDF2F2] hover:bg-[#F3465C] hover:text-white duration-300 px-4 py-2 rounded-md text-[#262626b4]'>ReactJs</p>
                        <p className='bg-[#EDF2F2] hover:bg-[#F3465C] hover:text-white duration-300 px-4 py-2 rounded-md text-[#262626b4]'>Tailwind</p>
                        <p className='bg-[#EDF2F2] hover:bg-[#F3465C] hover:text-white duration-300 px-4 py-2 rounded-md text-[#262626b4]'>Bootstrap</p>
                        <p className='bg-[#EDF2F2] hover:bg-[#F3465C] hover:text-white duration-300 px-4 py-2 rounded-md text-[#262626b4]'>NodeJs</p>
                        <p className='bg-[#EDF2F2] hover:bg-[#F3465C] hover:text-white duration-300 px-4 py-2 rounded-md text-[#262626b4]'>MongoDB</p>
                        <p className='bg-[#EDF2F2] hover:bg-[#F3465C] hover:text-white duration-300 px-4 py-2 rounded-md text-[#262626b4]'>Firebase</p>
                        <p className='bg-[#EDF2F2] hover:bg-[#F3465C] hover:text-white duration-300 px-4 py-2 rounded-md text-[#262626b4]'>ExpressJs</p>
                        <p className='bg-[#EDF2F2] hover:bg-[#F3465C] hover:text-white duration-300 px-4 py-2 rounded-md text-[#262626b4]'>GitHub</p>
                        <p className='bg-[#EDF2F2] hover:bg-[#F3465C] hover:text-white duration-300 px-4 py-2 rounded-md text-[#262626b4]'>Vercel</p>
                    </div>
                 </div>
            </div>
        </div>
    );
};

export default Resume;