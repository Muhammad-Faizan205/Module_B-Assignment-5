import bg_img from '../img_ folder/banner-bg-1.jpg'
const Section_1 = () => {
    return (

        <div className="container">
            <img style={{ position: "relative"}}src={bg_img} className='bg-img'/>
            <div className="bg-img-con">
                <div className="banner-content">
                    <h2 className='img-para'>Premium Home<br /><span className='img-para1'>Decorator</span></h2>
                    <a className='anka' href="#">Learn More</a>
                </div>
            </div>
        </div>

    )
}

export { Section_1 };