import blog01 from '../../assets/img/blog-img-1.webp'
import blog02 from '../../assets/img/blog-img-2.webp'
import blog03 from '../../assets/img/blog-img-3.webp'
import blog04 from '../../assets/img/blog-img-4.webp'

const Blogs = () => {
    return (
        <div className='px-8'>
            <h2 className="text-2xl title inline-block font-bold  text-[#262626] py-6 ">Blogs</h2>

            <div className="pb-12 space-y-4">
                 <div className="grid grid-cols-2 gap-4 cursor-pointer">
                        <div className='bg-[#FFF4F4] group px-6 py-6 rounded-md overflow-hidden'>
                            <div className='overflow-hidden'>
                                <img className='rounded-md overflow-hidden group-hover:scale-110 duration-300' src={blog01} alt="" />
                            </div>
                            <div>
                                 <p className='py-2 pt-4 text-[#262626af]'>27 April <span className='px-2'>Inspiration</span></p>
                                 <h2 className='font-medium group-hover:text-[#F54C57] duration-300'>How To Own Your Audience By Creating An Email List.</h2>
                            </div>
                        </div>

                        <div className='bg-[#FFF4F4] group px-6 py-6 rounded-md overflow-hidden'>
                            <div className='overflow-hidden'>
                                <img className='rounded-md overflow-hidden group-hover:scale-110 duration-300' src={blog02} alt="" />
                            </div>

                            <div>
                                 <p className='py-2 pt-4 text-[#262626af]'>06 October <span className='px-2'>Web Development</span></p>
                                 <h2 className='font-medium group-hover:text-[#F54C57] duration-300'>The Window Knows How To Say Beside You.</h2>
                            </div>
                        </div>
                 </div>

                 <div className="grid grid-cols-2 gap-4 cursor-pointer">
                        <div className='bg-[#FFF4F4] group px-6 py-6 rounded-md overflow-hidden'>
                            <div className='overflow-hidden'>
                                <img className='rounded-md overflow-hidden group-hover:scale-110 duration-300' src={blog03} alt="" />
                            </div>

                            <div>
                                 <p className='py-2 pt-4 text-[#262626af]'>12 March <span className='px-2'>Landing page</span></p>
                                 <h2 className='font-medium group-hover:text-[#F54C57] duration-300'>Everything You Need To Know About Web Accessibility.</h2>
                            </div>
                        </div>

                        <div className='bg-[#FFF4F4] group px-6 py-6 rounded-md overflow-hidden'>
                            <div className='overflow-hidden'>
                                <img className='rounded-md overflow-hidden group-hover:scale-110 duration-300' src={blog04} alt="" />
                            </div>

                            <div>
                                 <p className='py-2 pt-4 text-[#262626af]'>15 November <span className='px-2'>Web Design</span></p>
                                 <h2 className='font-medium group-hover:text-[#F54C57] duration-300'>Top 10 Toolkits For Deep Learning In 2021.</h2>
                            </div>

                        </div>
                 </div>
            </div>
        </div>
    );
};

export default Blogs;