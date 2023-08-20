

const Contact = () => {
    return (
        <div className='px-8'>
            <h2 className="text-2xl title inline-block font-bold  text-[#262626] py-6 ">Contact</h2>

            <div className="py-6 bg-[#F8FBFB] rounded-md">
                    <div className="py-2 px-4">
                    <h2 className="text-2xl font-medium">I'm Always Open To Discussing Projects</h2>
                    <h2 className="text-xl font-bold py-2">develop work or partnerships.</h2>
                    </div>

                    <div className="py-12 px-4">
                         <form className="space-y-12">
                              <div className="flex flex-col">
                                <label>Name *</label>
                                <input type="text" className="border-b-[1px] outline-none border-[#26262650]  bg-[#F8FBFB]" />
                              </div>

                              <div className="flex flex-col">
                                <label>Email *</label>
                                <input type="email" className="border-b-[1px] outline-none border-[#26262650]  bg-[#F8FBFB]" />
                              </div>

                              <div className="flex flex-col">
                                <label>Message *</label>
                                <textarea  cols="0" rows="0" className="border-b-[1px] outline-none border-[#26262650]  bg-[#F8FBFB]"></textarea>
                              </div>

                              <div>
                                 <input type="submit" value="Submit" className="px-10 py-3 rounded-md border font-medium border-[#26262650] hover:bg-[#F74D57] hover:text-white duration-300" />
                              </div>
                         </form>
                    </div>
            </div>

            <div className="py-10 flex items-center justify-center">
                    <p className="py-12 text-[#262626a8]">© 2023 All Rights Reserved by sydur6060.</p>
            </div>
        </div>
    );
};

export default Contact;