import './About.css'
import front from '../../assets/img/icons8-frontend-50.png'
import back from '../../assets/img/icons8-backend-50.png'
import res from '../../assets/img/icons8-responsive-50.png'


const About = () => {
    return (
        <div className='px-8'>
            <h2 className="text-2xl title inline-block font-bold  text-[#262626] py-6 ">About</h2>
            <div>
                <p className='py-2 text-[#616776]'>I'm Front-End and Back-End MERN STACK Developer  from Dhaka Bangladesh, working in web development. I enjoy turning complex problems into simple, beautiful and intuitive designs.</p>
                <p className='py-2 text-[#616776]'>My aim is to bring across your message and identity in the most creative way. I created web sites for many famous brand companies.</p>
            </div>

            <div>
                <h2 className="text-2xl font-bold  text-[#262626] py-3">What I Do!</h2>

                <div className='grid lg:grid-cols-2 gap-4 space-x-4 space-y-4 pb-12 pt-4 cursor-pointer'>
                    <div className='bg-[#FFF4F4] px-4 py-2'>
                        <img className='py-2' src={front} alt="" />
                        <h2 className='text-xl font-medium'>Front-end Development</h2>
                        <p className='py-2 text-[#616776]'>Creation of interactive and responsive user interfaces using HTML, CSS, Tailwind, JavaScript and ReactJs.</p>
                    </div>

                    <div className='bg-[#EEF5FA] px-4 py-2'>
                        <img className='py-2' src={back} alt="" />
                        <h2 className='text-xl font-medium'>Back-end Development</h2>
                        <p className='py-2 text-[#616776]'>Building server-side applications and APIs using programming languages like Mongodb, NodeJs, JWT or Firebase.</p>
                    </div>

                    <div className='bg-[#EEF5FA] px-4 py-2'>
                        <img className='py-2' src={back} alt="" />
                        <h2 className='text-xl font-medium'>Full Stack Development</h2>
                        <p className='py-2 text-[#616776]'>Building server-side and client side applications and APIs using programming languages like React, JavaScript, Html, Css, Tailwind, Bootstrip Mongodb, NodeJs, JWT or Firebase.</p>
                    </div>

                    <div className='bg-[#FFF4F4] px-4 py-2'>
                        <img className='py-2' src={res} alt="" />
                        <h2 className='text-xl font-medium'>Responsive Design</h2>
                        <p className='py-2 text-[#616776]'>Ensuring websites are optimized for various devices and screen sizes, providing a seamless user experience.</p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default About;