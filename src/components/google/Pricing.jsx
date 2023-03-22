import React, { useState } from "react";
import favIcon from "../../images/favIcon.png";
import "./AddDealNew.css";
import MoveArrowLeft from "../icons/MoveArrowLeft";
import CloseSmall from "../icons/CloseSmall";
import layers from "../../images/layers.png";
import stack from "../../images/stack.png";
import thunder from "../../images/thunder.png";
import star from "../../images/star.png";
import sparkle from "../../images/sparkle.png";
import { useNavigate } from "react-router-dom";

const Pricing = () => {
    const navigate = useNavigate();
    const [isChecked, setIsChecked] = useState(false);
    const [selected, setSelected] = useState(3)

    const selectedHandler = (e, index) => {
        setSelected(index)
    }

    const handleCheckboxChange = (event) => {
        setIsChecked(event.target.checked);
    };
    return (
        <div>
            <div
                style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    marginTop: "31px",
                    marginRight: "39px",
                }}
            >
                <div>
                    <div
                        style={{
                            width: "350px",
                            height: "auto",
                            boxShadow: "0px 4px 8px #DADADA",
                            position: "relative",
                            padding: "0px",
                            backgroundColor: "#F8F9FA",
                        }}
                    >
                        <header
                            style={{
                                height: "67px",
                                width: "100%",
                                backgroundColor: "#FFFFFF",
                                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.101025)",
                            }}
                        >
                            <div
                                style={{
                                    display: "grid",
                                    height: "100%",
                                    alignItems: "center",
                                    gridTemplateColumns: "auto auto auto",
                                }}
                            >
                                <div style={{ marginLeft: "22px", color: "#676879" }}>
                                    <button>
                                        <MoveArrowLeft />
                                    </button>
                                </div>
                                <div style={{ textAlign: "center" }}>
                                    <img src={favIcon} alt="favIcon" />
                                </div>
                                <div
                                    style={{
                                        textAlign: "right",
                                        marginRight: "22px",
                                        color: "#676879",
                                    }}
                                >
                                    <button>
                                        <CloseSmall />
                                    </button>
                                </div>
                            </div>
                        </header>

                        <div style={{ padding: "30px" }}>
                            <div>
                                <div
                                    style={{
                                        width: "100%",
                                        height: "auto",
                                        borderRadius: "8px",
                                    }}
                                >
                                    <div style={{ height: "auto" }}>
                                        <h1 style={{
                                            fontFamily: 'Roboto',
                                            fontStyle: 'normal',
                                            fontWeight: '700',
                                            fontSize: '22px',
                                            color: '#323338',
                                            margin: 0,
                                        }}>Plans & Pricing
                                        </h1>
                                        <h1 style={{
                                            fontFamily: 'Roboto',
                                            fontStyle: 'normal',
                                            fontWeight: '400',
                                            fontSize: '14px',
                                            color: '#323338',
                                            margin: 0,
                                            width: '300px'
                                        }}>You can choose, change or manage your plan here.
                                        </h1>
                                    </div>
                                </div>
                            </div>

                            <div style={{ display: 'flex', justifyContent: 'end', marginTop: '16px', padding: '12px', alignItems: 'center' }}>
                                <h1 className="toggleText" style={{ color: !isChecked ? '#323338' : '' }}>Monthly
                                </h1>

                                <div style={{ paddingLeft: '8px', paddingRight: '8px' }}>
                                    <label className="switch">
                                        <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange} />
                                        <span className="slider round" />
                                    </label>
                                </div>

                                <h1 className="toggleText" style={{ color: !!isChecked ? '#323338' : '' }}>Annualy
                                </h1>
                            </div>

                            <div className="plan-card" style={{ backgroundColor: selected === 1 ? 'rgba(255, 203, 0, 0.3)' : 'white' }} onClick={(e) => selectedHandler(e, 1)}>
                                <div style={{
                                    display: 'flex',
                                    backgroundColor: 'rgba(255, 203, 0, 0.3)',
                                    padding: '6px 12px',
                                    alignItems: 'center',
                                }}
                                >
                                    <button style={{
                                        border: 'none',
                                        background: '#FFCB00',
                                        borderRadius: '4px',
                                        width: '27px',
                                        height: '23px',
                                        marginTop: 0
                                    }}
                                        className="copy-link-button"
                                    >
                                        <img
                                            width={"16px"}
                                            height={"16px"}
                                            src={layers}
                                            alt="stack"
                                        />
                                    </button>
                                    <h2 style={{
                                        margin: 0,
                                        marginLeft: '8px',
                                        color: '#323338'
                                    }}>Solo</h2>

                                    {selected === 1 && <div style={{
                                        borderRadius: '4px',
                                        width: '210px',
                                        textAlign: 'center',
                                        display: 'flex',
                                        justifyContent: 'end',
                                    }}>
                                        <h2 style={{ backgroundColor: '#FFCB00', padding: '0 8px', color: '#413F3F' }}>It's your current plan</h2>
                                    </div>}
                                </div>

                                <div className="benefits-list">
                                    <div style={{
                                        borderRadius: '4px',
                                        width: '210px',
                                        backgroundColor: 'rgba(255, 203, 0, 0.3)',
                                        padding: '2px',
                                        textAlign: 'center',

                                    }}>
                                        <h2>14 days Trial for Gmail/ Linkedin</h2>
                                    </div>
                                    <div style={{
                                        borderRadius: '4px',
                                        padding: '2px',
                                        display: 'flex',
                                        marginTop: '8px',

                                    }}>
                                        <h2 style={{ display: 'flex', fontSize: '32px', letterSpacing: '0.5px' }}><span style={{ fontSize: '20px', color: 'black', marginTop: '2px' }}>$</span> 35<span style={{ fontSize: '20px', fontWeight: 500, color: '#676879', marginTop: '2px' }}>/mo</span></h2>
                                    </div>
                                    <div style={{
                                        padding: '2px',
                                    }}>
                                        <h2 style={{ fontSize: '14px', letterSpacing: '0.5px', color: '#676879' }}>15 email finder credits</h2>
                                    </div>
                                    <ul>
                                        <li>Unlimited Users</li>
                                        <li>Create Tasks from browser</li>
                                        <li>Create, annotate and save screenshots into boards</li>
                                        <li>Save Contacts and create leads from Gmail</li>
                                    </ul>
                                </div>

                            </div>

                            <div className="plan-card" style={{ backgroundColor: selected === 2 ? 'rgba(255, 203, 0, 0.3)' : 'white' }} onClick={(e) => selectedHandler(e, 2)}>
                                {/* <div className="plan-card" onClick={(e) => selectedHandler(e, 2)}> */}
                                <div style={{
                                    display: 'flex',
                                    backgroundColor: 'rgba(255, 203, 0, 0.3)',
                                    padding: '6px 12px',
                                    alignItems: 'center',
                                    marginTop: '8px'

                                }}>
                                    <button style={{
                                        border: 'none',
                                        background: '#FFCB00',
                                        borderRadius: '4px',
                                        width: '27px',
                                        height: '23px',
                                        marginTop: 0
                                    }}
                                        className="copy-link-button"
                                    >
                                        <img
                                            width={"27px"}
                                            height={"20px"}
                                            src={stack}
                                            alt="stack"
                                        />
                                    </button>
                                    <h2 style={{
                                        margin: 0,
                                        marginLeft: '8px',
                                        color: '#323338'
                                    }}>Basic</h2>

                                    {selected === 2 && <div style={{
                                        borderRadius: '4px',
                                        width: '210px',
                                        textAlign: 'center',
                                        display: 'flex',
                                        justifyContent: 'end',
                                    }}>
                                        <h2 style={{ backgroundColor: '#FFCB00', padding: '0 8px', color: '#413F3F' }}>It's your current plan</h2>
                                    </div>}
                                </div>

                                <div className="benefits-list" style={{ margin: 0 }}>
                                    <div style={{
                                        borderRadius: '4px',
                                        padding: '2px',
                                        display: 'flex',
                                        marginTop: '8px',

                                    }}>
                                        <h2 style={{ display: 'flex', fontSize: '32px', letterSpacing: '0.5px' }}><span style={{ fontSize: '20px', color: 'black', marginTop: '2px' }}>$</span>65<span style={{ fontSize: '20px', fontWeight: 500, color: '#676879', marginTop: '2px' }}>/mo</span></h2>
                                    </div>
                                    <div style={{
                                        padding: '2px',
                                    }}>
                                        <h2 style={{ fontSize: '14px', letterSpacing: '0.5px', color: '#676879' }}>125 email finder credits</h2>
                                    </div>
                                </div>

                            </div>

                            <div className="plan-card" style={{ backgroundColor: selected === 3 ? 'rgba(255, 203, 0, 0.3)' : 'white' }} onClick={(e) => selectedHandler(e, 3)}>
                                <div style={{
                                    display: 'flex',
                                    backgroundColor: 'rgba(255, 203, 0, 0.3)',
                                    padding: '6px 12px',
                                    alignItems: 'center',
                                    marginTop: '8px'

                                }}>
                                    <button style={{
                                        border: 'none',
                                        background: '#FFCB00',
                                        borderRadius: '4px',
                                        width: '27px',
                                        height: '23px',
                                        marginTop: 0
                                    }}
                                        className="copy-link-button"
                                    >
                                        <img
                                            width={"27px"}
                                            height={"20px"}
                                            src={thunder}
                                            alt="thunder"
                                        />
                                    </button>
                                    <h2 style={{
                                        margin: 0,
                                        marginLeft: '8px',
                                        color: '#323338'
                                    }}>Pro</h2>

                                    {selected === 3 && <div style={{
                                        borderRadius: '4px',
                                        width: '210px',
                                        textAlign: 'center',
                                        display: 'flex',
                                        justifyContent: 'end',
                                    }}>
                                        <h2 style={{ backgroundColor: '#FFCB00', padding: '0 8px', color: '#413F3F' }}>It's your current plan</h2>
                                    </div>}
                                </div>

                                <div className="benefits-list" style={{ margin: 0 }}>
                                    <div style={{
                                        borderRadius: '4px',
                                        padding: '2px',
                                        display: 'flex',
                                        marginTop: '8px',

                                    }}>
                                        <h2 style={{ display: 'flex', fontSize: '32px', letterSpacing: '0.5px' }}><span style={{ fontSize: '20px', color: 'black', marginTop: '2px' }}>$</span>115<span style={{ fontSize: '20px', fontWeight: 500, color: '#676879', marginTop: '2px' }}>/mo</span></h2>
                                    </div>
                                    <div style={{
                                        padding: '2px',
                                    }}>
                                        <h2 style={{ fontSize: '14px', letterSpacing: '0.5px', color: '#676879' }}>300 email finder credits</h2>
                                    </div>
                                </div>

                            </div>

                            <div className="plan-card" style={{ backgroundColor: selected === 4 ? 'rgba(255, 203, 0, 0.3)' : 'white' }} onClick={(e) => selectedHandler(e, 4)}>
                                <div style={{
                                    display: 'flex',
                                    backgroundColor: 'rgba(255, 203, 0, 0.3)',
                                    padding: '6px 12px',
                                    alignItems: 'center',
                                    marginTop: '8px'

                                }}>
                                    <button style={{
                                        border: 'none',
                                        background: '#FFCB00',
                                        borderRadius: '4px',
                                        width: '27px',
                                        height: '23px',
                                        marginTop: 0
                                    }}
                                        className="copy-link-button"
                                    >
                                        <img
                                            width={"27px"}
                                            height={"20px"}
                                            src={star}
                                            alt="star"
                                        />
                                    </button>
                                    <h2 style={{
                                        margin: 0,
                                        marginLeft: '8px',
                                        color: '#323338'
                                    }}>Ultimate</h2>

                                    {selected === 4 && <div style={{
                                        borderRadius: '4px',
                                        width: '210px',
                                        textAlign: 'center',
                                        display: 'flex',
                                        justifyContent: 'end',
                                    }}>
                                        <h2 style={{ backgroundColor: '#FFCB00', padding: '0 8px', color: '#413F3F' }}>It's your current plan</h2>
                                    </div>}
                                </div>

                                <div className="benefits-list" style={{ margin: 0 }}>
                                    <div style={{
                                        borderRadius: '4px',
                                        padding: '2px',
                                        display: 'flex',
                                        marginTop: '8px',

                                    }}>
                                        <h2 style={{ display: 'flex', fontSize: '32px', letterSpacing: '0.5px' }}><span style={{ fontSize: '20px', color: 'black', marginTop: '2px' }}>$</span>195<span style={{ fontSize: '20px', fontWeight: 500, color: '#676879', marginTop: '2px' }}>/mo</span></h2>
                                    </div>
                                    <div style={{
                                        padding: '2px',
                                    }}>
                                        <h2 style={{ fontSize: '14px', letterSpacing: '0.5px', color: '#676879' }}>800 email finder credits</h2>
                                    </div>
                                </div>

                            </div>

                            <div className="plan-card" style={{ backgroundColor: selected === 5 ? 'rgba(255, 203, 0, 0.3)' : 'white' }} onClick={(e) => selectedHandler(e, 5)}>
                                <div style={{
                                    display: 'flex',
                                    backgroundColor: 'rgba(255, 203, 0, 0.3)',
                                    padding: '6px 12px',
                                    alignItems: 'center',
                                    marginTop: '8px'

                                }}>
                                    <button style={{
                                        border: 'none',
                                        background: '#FFCB00',
                                        borderRadius: '4px',
                                        width: '27px',
                                        height: '23px',
                                        marginTop: 0
                                    }}
                                        className="copy-link-button"
                                    >
                                        <img
                                            width={"27px"}
                                            height={"20px"}
                                            src={sparkle}
                                            alt="sparkle"
                                        />
                                    </button>
                                    <h2 style={{
                                        margin: 0,
                                        marginLeft: '8px',
                                        color: '#323338'
                                    }}>Platinum</h2>

                                    {selected === 5 && <div style={{
                                        borderRadius: '4px',
                                        width: '210px',
                                        textAlign: 'center',
                                        display: 'flex',
                                        justifyContent: 'end',
                                    }}>
                                        <h2 style={{ backgroundColor: '#FFCB00', padding: '0 8px', color: '#413F3F' }}>It's your current plan</h2>
                                    </div>}
                                </div>

                                <div className="benefits-list" style={{ margin: 0 }}>
                                    <div style={{
                                        borderRadius: '4px',
                                        padding: '2px',
                                        display: 'flex',
                                        marginTop: '8px',

                                    }}>
                                        <h2 style={{ display: 'flex', fontSize: '32px', letterSpacing: '0.5px' }}><span style={{ fontSize: '20px', color: 'black', marginTop: '2px' }}>$</span>375<span style={{ fontSize: '20px', fontWeight: 500, color: '#676879', marginTop: '2px' }}>/mo</span></h2>
                                    </div>
                                    <div style={{
                                        padding: '2px',
                                    }}>
                                        <h2 style={{ fontSize: '14px', letterSpacing: '0.5px', color: '#676879' }}>1700 email finder credits</h2>
                                    </div>
                                </div>

                            </div>

                            <div style={{ marginTop: '16px' }}>
                                <button
                                    onClick={(e) => { e.preventDefault(); navigate("/googleAddDealNew") }}
                                    style={{
                                        padding: "8px 16px",
                                        height: "40px",
                                        color: "#323338",
                                        borderRadius: "4px",
                                        width: '100%',
                                        background: '#FFCB00',
                                        boxShadow: '0px 4px 8px rgba(197, 199, 208, 0.5)',
                                        fontWeight: 'bold',
                                        fontSize: '16px',
                                        fontFamily: "Roboto",
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        textAlign: 'center',
                                    }}
                                >
                                    Get Started
                                </button>
                            </div>

                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    marginTop: "16px",
                                    cursor: "pointer",
                                }}
                                onClick={() => navigate("/googleAddDealNew")}
                            >
                                <h1 style={{
                                    fontFamily: 'Roboto',
                                    fontStyle: 'normal',
                                    fontWeight: '600',
                                    fontSize: '16px',
                                    color: 'black',
                                    margin: 0,
                                    textDecoration: 'underline'
                                }}>Learn More</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Pricing;
