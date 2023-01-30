import Img from './Img.js'


function Desktop() {
    return (
        <div className='w-screen'>
            <div className='w-[1200px] m-auto' >
                {/* desktop */}
                <div className=" hidden md:flex   ">
                    <div className=" w-[300px] h-[200px] bg-[#F4F4F4] mt-[108px]  rounded-t-[25px]">
                        <div className="w-[235px] h-[140px]  rounded-[10px] bg-[#FFFFFF] absolute shadow mt-[32px] mr-[31px] mb-[28px] ml-[34px] ">
                            <div className='ml-[84px] mt-[23px]'>
                                <div className="w-[58px] h-[58px] rounded-full bg-[#F4F4F4] ">
                                    <img className='w-[36px] h-[36px] m-[11px] absolute' src={Img.Vector} alt='Vector' />
                                </div>
                                <div className='mt-[4px] ml-[-10px] text-[21px] font-bold'>
                                    Pencils
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-[300px] h-[200px]  mt-[108px]  rounded-t-[25px]">
                        <div className="w-[235px] h-[140px]  rounded-[10px] bg-[#FFFFFF] absolute shadow mt-[32px] mr-[31px] mb-[28px] ml-[34px] ">
                            <div className='ml-[84px] mt-[23px]'>
                                <div className="w-[58px] h-[58px] rounded-full bg-[#F4F4F4] ">
                                    <img className='w-[36px] h-[36px] m-[11px] absolute' src={Img.Vector3} alt='Vector' />
                                </div>
                                <div className='mt-[4px] ml-[-10px] text-[21px] font-bold'>
                                    Markers
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-[300px] h-[200px]  mt-[108px]  rounded-t-[25px]" >
                        <div className="w-[235px] h-[140px]  rounded-[10px] bg-[#FFFFFF] absolute shadow mt-[32px] mr-[31px] mb-[28px] ml-[34px] ">
                            <div className='ml-[84px] mt-[23px]'>
                                <div className="w-[58px] h-[58px] rounded-full bg-[#F4F4F4] ">
                                    <img className='w-[36px] h-[36px] m-[11px] absolute' src={Img.Vector1} alt='Vector' />
                                </div>
                                <div className='mt-[4px] ml-[-40px] text-[21px] font-bold'>
                                    Drawing Colors
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-[300px] h-[200px]  mt-[108px] rounded-t-[25px]">
                        <div className="w-[235px] h-[140px]  rounded-[10px] bg-[#FFFFFF] absolute shadow mt-[32px] mr-[31px] mb-[28px] ml-[34px] ">
                            <div className='ml-[84px] mt-[23px]'>
                                <div className="w-[58px] h-[58px] rounded-full bg-[#F4F4F4] ">
                                    <img className='w-[36px] h-[36px] m-[11px] absolute' src={Img.Vector2} alt='Vector' />
                                </div>
                                <div className='mt-[4px] ml-[-25px] text-[21px] font-bold'>
                                    Notebooks
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className='  hidden md:flex w-[1200px] h-[500px]  bg-[#F4F4F4] rounded-br-[25px] rounded-bl-[25px]'>


                    <div className='p-[50px]'>
                        <div className='w-[350px] float-left '>
                            <div className='w-[350px] h-[100px] leading-8 font-normal text-[21px]'>
                                Graphite Artist Quality Fine Art Drawing and Sketching Pencils Replaceable Nib Pencils.
                            </div>
                            <div className='w-[222px] h-[160px] font-semibold text-[18px] mt-[20px]'>
                                . MECHANICAL PENCILS <br></br>
                                . ARCHITECT'S CHOICE<br></br>
                                . EXECUTIVE PENCILS<br></br>
                                . ENGRAVABLE PENCILS

                            </div>
                            <div className='mb-[84px]'>
                                <div className='w-[120px] h-[50px] bg-[#F4B840] text-center rounded-[5px]'>
                                    <div className=' uppercase font-Poppins text-[14px] pt-[5px] font-bold leading-10 text-[#FFFFFF]  ' >SHOP ALL</div>
                                </div>
                            </div>
                        </div>
                        <div className='w-[712px] h-[500px] mt-[-10px] float-right'>
                            <div className='flex w-[712px] h-[80px] rounded-[18px] border-white-[10px] bg-white '>
                                <div className='w-[200px] h-[80px]  '>
                                    <div className='text-center pt-[10px] text-[36px] text-[#F4B840] leading-[54px] font-bold'>
                                        25% off
                                    </div>
                                </div >
                                <div className='w-[512px] h-[80px] bg-[#F4F4F4] rounded-br-[18px] border-white rounded-tr-[18px] border-[4px]' >
                                    <div className='text-[25px] font-light leading-[38px] pt-[15px] text-center'>Offer Applicable on All Our Pencils</div>
                                </div>
                            </div>
                            <div className='flex pt-[20px] justify-between w-1/1 '>
                                <div className='w-[224px] h-[320px] rounded-[18px] bg-white pl-[20px] pt-[10px]'>
                                    <img src={Img.Penimg} alt='Penimg' />
                                    <div className='text-center mt-[5px] text-[14px] leading-5 font-medium'>
                                        Aero Mechanical Pencil
                                    </div>
                                    <div className='text-center pt-[5px]'>
                                        <span className='text-[16px] leading-[24px] font-semibold'>$99.00</span>
                                        <span className='text-[14px] leading-[21px] font-normal line-through text-[#727272] ml-[5px]'> $125.00</span>
                                    </div>
                                </div>
                                <div className='w-[224px] h-[320px] rounded-[18px] bg-white pl-[20px] pt-[10px]'>
                                    <img src={Img.Penimg1} alt='Penimg' />
                                    <div className='text-center mt-[5px] text-[14px] leading-5 font-medium'>
                                        Castell Mechanical Pencil
                                    </div>
                                    <div className='text-center pt-[5px]'>
                                        <span className='text-[16px] leading-[24px] font-semibold'>$75.00</span>
                                        <span className='text-[14px] leading-[21px] font-normal line-through text-[#727272] ml-[5px]'> $99.00</span>
                                    </div>
                                </div>
                                <div className='w-[224px] h-[320px] rounded-[18px] bg-white pl-[20px] pt-[10px]'>
                                    <img src={Img.Penimg2} alt='Penimg' />
                                    <div className='text-center mt-[5px] text-[14px] leading-5 font-medium'>
                                        Architect Choice Pencil
                                    </div>
                                    <div className='text-center pt-[5px]'>
                                        <span className='text-[16px] leading-[24px] font-semibold'>$45.00</span>
                                        <span className='text-[14px] leading-[21px] font-normal line-through text-[#727272] ml-[5px]'> $70.00</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=' hidden md:flex w-[1200px] h-5 justify-center mt-[50px] mb-[60px] '  >
                    <img src={Img.Hover} alt='hover' className='w-[15px] h-[15px]' />
                    <img src={Img.Hover2} alt='hover' className='w-[15px] h-[15px] ml-[10px]' />
                </div>
                <div className='w-[1200px]  flex justify-center'>
                    <div  className=' hidden md:flex text-[45px] leading-[68px] font-bold'>
                        Packer pen Gallery
                    </div>
                </div>
                <div className='hidden md:flex w-[1200px] h-[600px] mt-11  justify-between'>
                    <div className='mt-[45px]'>
                        <img src={Img.Rectangle23} alt='Rectangle23' className='' />
                        <img src={Img.Rectangle25} alt='Rectangle25' className='mt-[10px]' />
                    </div>
                    <div>
                        <img src={Img.Rectangle21} alt='Rectangle21' />
                        <img src={Img.Rectangle24} alt='Rectangle24' className='mt-[10px]' />
                    </div>
                    <div className='mt-[45px]'>
                        <img src={Img.Rectangle26} alt='Rectangle26' />
                        <img src={Img.Rectangle27} alt='Rectangle27' className='mt-[10px]' />
                        <img src={Img.Rectangle28} alt='Rectangle28' className='mt-[10px]' />
                    </div>
                </div>
                <div className=' hidden md:flex w-[1200px] h-5 justify-center mt-[50px] mb-[60px] '  >
                    <img src={Img.Hover2} alt='hover' className='w-[15px] h-[15px]' />
                    <img src={Img.Hover} alt='hover' className='w-[15px] h-[15px] ml-[10px]' />
                </div>

                {/* desktop */}
            </div>
        </div>
    );
}

export default Desktop;