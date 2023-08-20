

const Navbar = () => {
    return (
        <div>
             <div className="flex justify-between items-center px-28 pt-20 pb-10">
                <h2 className="text-2xl font-medium">Sydur<span className="text-[#F3465C]">Rahman</span></h2>
                 <a href="https://www.fiverr.com/mamon_junior/be-front-end-web-developer-in-react-js">
                 <p className="text-base font-medium px-6 py-3 bg-gradient-to-r from-[#F54A58] to-[#E12A71] text-white rounded-md hover:scale-105 duration-500 cursor-pointer">Hire me</p>
                 </a>
             </div>
        </div>
    );
};

export default Navbar;