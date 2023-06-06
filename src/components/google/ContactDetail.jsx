import React from 'react';
import CloseSmall from '../icons/CloseSmall';
import MoveArrowLeft from '../icons/MoveArrowLeft';
import favIcon from '../../images/favIcon.png';
import Avatar, {ConfigProvider} from 'react-avatar';
import FullScreen from '../icons/FullScreen';
import unionicon from '../../images/unionicon.png';
import union from '../../images/Union.png';
import close from '../../images/close.png';
import {BsChat} from 'react-icons/bs';
import './contactDetail.css';
import {useState} from 'react';

const ContactDetail = () => {
  const [company, setCompany] = useState ('');
  const [update, setUpdate] = useState ('');
  const [isUpdateEnabled, setIsUpdateEnabled] = useState (false);
  const [isUpdateClicked, setIsUpdateClicked] = useState (false);
  const labelStyle = {
    fontSize: '16px',
    height: '26px',
    fontWeight: '700',
    lineHeight: '24px',
    fontFamily: 'Roboto',
    color: ' rgb(50, 51, 56)',
    display: 'inherit',
  };
  const handleCompanyChange = e => {
    const inputValue = e.target.value;
    setCompany (inputValue);
    setIsUpdateEnabled (inputValue.trim () !== '');
  };

  const handleCreateUpdate = () => {
    setIsUpdateClicked (true);
  };
  return (
    <div>
      <ConfigProvider colors={['black']}>
        <div className="main">
          <div>
            <div className="main-2">
              <header>
                <div>
                  <div>
                    <button className="arrow">
                      <MoveArrowLeft />
                    </button>
                  </div>
                  <div className="header_middle">
                    <img src={favIcon} alt="favIcon" />
                    <span className="logo_name">
                      Offsite
                    </span>
                  </div>
                  <div className="header_right">
                    <button>
                      <FullScreen />
                    </button>
                    <button>
                      <img src={close} alt="close" />
                    </button>
                  </div>
                </div>
              </header>
              <div className="box">
                <div>
                  <div className="section">
                    <div className="section_left">
                      <Avatar
                        className="avatar"
                        backgroundColor="black !important"
                        name="Soo Sar"
                        size="40"
                        round={true}
                      />
                      <div className="contact_data">
                        <b>
                          Name of person
                        </b>
                        <span>
                          <u>
                            sushovansijapati@gmail.com
                          </u>
                        </span>
                      </div>
                    </div>
                    <div className="union_img">
                      <img
                        style={{marginLeft: 'auto'}}
                        src={unionicon}
                        alt="union icon"
                      />
                    </div>

                  </div>
                </div>
                <div className="tab_btn">
                  <button
                    className={`tablinks ${!isUpdateClicked ? 'active' : ''}`}
                    onClick={() => setIsUpdateClicked (false)}
                  >
                    <img className="Union_icon" src={union} alt="union" />
                    Contact Details
                  </button>
                  <button
                    className={`tablinks ${isUpdateClicked ? 'active' : ''}`}
                    onClick={() => setIsUpdateClicked (true)}
                  >
                    <BsChat className="Union_icon" /> Updates
                  </button>

                </div>
                {isUpdateClicked
                  ? <div className="Update_detail " style={{marginTop: '2rem'}}>
                      <div className="box_wrapper">
                        <label style={labelStyle}>New Update</label>
                        <input
                          type="text"
                          id="update_text"
                          placeholder="Text"
                          value={update}
                          onChange={e => setUpdate (e.target.value)}
                          className="input_component2"
                          name="description"
                          
                        />

                      </div>
                      <div className="line2">
                        <div>
                          <input
                            type="checkbox"
                            id="email"
                            name="email"
                            value="Bike"
                          />
                          <label for="email"> Add Email Content & URL</label>
                        </div>
                        <button className="save_btn">
                          <b>Save</b>
                        </button>
                      </div>
                      <div className="stroke">
                        
                      </div>
                      <div className="update_bottom">
                        <div className='update_title'>
                          All Updates
                        </div>

                        <div className="update_box">
                          <div className="box_line_1">
                            Contacted lead via email with product information

                          </div>
                          <div className="box_line_2">
                            <div className="name">
                              Wilson Workman
                            </div>
                            <div className="time">
                              May 31, 2023, at 3:45 PM
                            </div>
                          </div>

                        </div>
                        <div className="update_box">
                          <div className="box_line_1">
                            Lead responded with interest, scheduled a demo

                          </div>
                          <div className="box_line_2">
                            <div className="name">
                              Paityn Stanton
                            </div>
                            <div className="time">
                              May 31, 2023, at 3:45 PM
                            </div>
                          </div>

                        </div>
                        <div className="update_box">
                          <div className="box_line_1">
                            Held a demo, lead showed high interest

                          </div>
                          <div className="box_line_2">
                            <div className="name">
                              Abram Aminoff
                            </div>
                            <div className="time">
                              May 31, 2023, at 3:45 PM
                            </div>
                          </div>

                        </div>
                        <div className="update_box">
                          <div className="box_line_1">
                            Sent a follow-up email to discuss next steps

                          </div>
                          <div className="box_line_2">
                            <div className="name">
                              Aspen Vetrovs
                            </div>
                            <div className="time">
                              May 31, 2023, at 3:45 PM
                            </div>
                          </div>

                        </div>
                      </div>

                    </div>
                  : <div className="company_detail" style={{marginTop: '2rem'}}>
                      <div className="box_wrapper">
                        <label style={labelStyle}>Company</label>
                        <input
                          type="text"
                          id="company"
                          placeholder="Monday.com"
                          value={company}
                          onChange={e => setCompany (e.target.value)}
                          className="input_component"
                          name="description"
                          style={{
                            padding: '12px',
                            height: '30px',
                          }}
                        />

                      </div>

                      <button
                        className="update_btn"
                        onClick={handleCreateUpdate}
                      >
                        <b>Create Update</b> <img src={favIcon} alt="favIcon" />
                      </button>
                    </div>}
              </div>
              <div className="bottom">
                <span className="span1">
                  www.monday.com

                </span>
                <span className="span2">
                  Account ID : <b>32144</b>
                </span>
              </div>
            </div>
          </div>
        </div>
      </ConfigProvider>
    </div>
  );
};

export default ContactDetail;
