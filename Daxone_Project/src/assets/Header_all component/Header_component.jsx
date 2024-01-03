import Header_img from '../img_ folder/hm1-single-1.png'

const Header_component = () => {
    return(
        <div className='container'>
                        <div className='row align-items-center header-main'>
                            <div className=' col-2 col-sm-6'>
                                <div>
                                <img className='header-img' src={Header_img}/>
                                </div>
                            </div>
                            <div class='col-6 col-sm-6'>
                                    <h3 className='heading'>30% <span> </span> off</h3>
                                    <h1 className='heading1'>Comfort Chair</h1>
                                    <p className='heading2'>Collect from Daxone & get 30% Discount.</p>
                                    <div>
                                    <button className='btn'>SHOP NOW</button>
                                    </div>
                                </div>
                            </div>
                        </div>
    )
}

export {Header_component};