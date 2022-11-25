import React from 'react';
import cardsatu from '../assets/service_img_1.png';
import carddua from '../assets/service_img_2.png';
import cardtiga from '../assets/service_img_3.png';
import cardorangsatu from '../assets/card_orang_satu.png';
import cardorangdua from '../assets/card_orang_dua.png';
import cardorangtiga from '../assets/card_orang_tiga.png';

import '../CSS/service.css';

const Service = () => {
  return (
    <>
      <div className="service-body">
        <div className="wrapper-bg-service">
          <div className="wrapper-content-service">
            <div className="wrapper-content-items">
              <div className="items-service">
                <h1>We Offer Create Website Company Profile</h1>
                <p>Develop your company profile based on your needs</p>
              </div>
            </div>
          </div>
          {/* card */}
          <div className="container-img-service">
            <img src={cardsatu} alt="portfoliocard " />

            <img src={carddua} alt="portfoliocard" />

            <img src={cardtiga} alt="portfoliocard" />
          </div>
        </div>
        {/* card */}
        <div class="container-card-dua">
          <div class="wrapper-card-dua">
            <img src={cardorangsatu} alt="" />
            <div class="txt">
              <p>We'll start by asking you questions about your business and how it operates. </p>
            </div>
          </div>
          <div class="wrapper-card-dua">
            <img src={cardorangdua} alt="" className="second-img-orang" />
            <div class="txt-card-orang">
              <p>From there, we'll create a document that is easy to read and easy on the eyes</p>
            </div>
          </div>
          <div class="wrapper-card-dua">
            <img src={cardorangtiga} alt="" />
            <div class="txt">
              <p>And one that will help you stand out from the crowd when people look you up online.</p>
            </div>
          </div>
        </div>
        {/* card */}

        {/* card-porto */}
        <div className="wrapper-porto-content">
          <div className="card-porto-wrapper">
            <img src={cardsatu} alt="" />
            <div className="text-porto">
              <h3>B2C Company Profile</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus adipisci veritatis quibusdam molestias, eos reiciendis at quisquam accusamus nam, est cum? Exercitationem, sunt neque! Facilis nesciunt dolor explicabo id
                sequi repellendus odio neque soluta nihil possimus! Ducimus esse doloribus accusantium.
              </p>
            </div>
          </div>
          <div className="card-porto-wrapper sm-top">
            <img src={carddua} alt="" />
            <div className="text-porto">
              <h3>B2C Company Profile</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus adipisci veritatis quibusdam molestias, eos reiciendis at quisquam accusamus nam, est cum? Exercitationem, sunt neque! Facilis nesciunt dolor explicabo id
                sequi repellendus odio neque soluta nihil possimus! Ducimus esse doloribus accusantium.
              </p>
            </div>
          </div>
          <div className="card-porto-wrapper sm-top">
            <img src={cardtiga} alt="" />
            <div className="text-porto">
              <h3>B2C Company Profile</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus adipisci veritatis quibusdam molestias, eos reiciendis at quisquam accusamus nam, est cum? Exercitationem, sunt neque! Facilis nesciunt dolor explicabo id
                sequi repellendus odio neque soluta nihil possimus! Ducimus esse doloribus accusantium.
              </p>
            </div>
          </div>
        </div>
        {/* card-porto */}
      </div>
    </>
  );
};

export default Service;
