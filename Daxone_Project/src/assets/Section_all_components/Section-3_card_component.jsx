import card_img_1 from '../img_ folder/pro-hm1-1.jpg'
import card_img_2 from '../img_ folder/pro-hm1-2.jpg'
import card_img_3 from '../img_ folder/pro-hm1-3.jpg'
import card_img_4 from '../img_ folder/pro-hm1-4.jpg'


const Section_3 = () => {
    return (

        <div className='container'>
            <div className="row">
                <div className="col md-3 ">
                    <div className=" rest ">

                        <img className='card1' src={card_img_1} />

                        <div className="card-body">
                            <p className="cardpara">Chair <br /><span>Golden Easy Spot Chair.</span></p>
                            <h5 className="card-title">$210.00</h5>
                        </div>
                    </div>
                </div>



                <div className="col md-3  ">
                    <div className="  rest " >


                        <img className='card1' src={card_img_2} />

                        <div className="card-body">
                            <p className="cardpara">Chair <br /><span>Golden Easy Spot Chair.</span></p>
                            <h5 className="card-title">$210.00</h5>
                        </div>
                    </div>
                </div>

                <div className="col md-3  ">
                    <div className="  rest  " >

                        <img className='card1' src={card_img_3} />

                        <div className="card-body">
                            <p className="cardpara">Chair <br /><span>Golden Easy Spot Chair.</span></p>
                            <h5 className="card-title">$210.00</h5>
                        </div>
                    </div>
                </div>


                <div className="col md-3 ">
                    <div className="  rest  " >

                        <img className='card1' src={card_img_4} />

                        <div className="card-body">
                            <p className="cardpara">Chair <br /><span>Golden Easy Spot Chair.</span></p>
                            <h5 className="card-title">$210.00</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>




    )














}

export { Section_3 };