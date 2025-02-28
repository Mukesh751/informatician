import { Link } from "react-router-dom";
import "./SingleBk.css";
import ReactStars from "react-rating-stars-component";
import ebk2 from "../../../assets/ebooks/ebk2.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-regular-svg-icons";

export default function SingleBk() {
    return (
        <div className="single-view">
            <div className="container-fluid">
                <div className="row">
                    <div className="single">
                        <div className="inside-wrapper">
                            <div className="space hide"></div>
                            <div className="left-wrapper-content">
                                <div className="first-section">
                                    <span className="first-type">Ebook</span>
                                </div>
                                <h1 className="bk-name">An Ugly Truth: Inside Facebook's Battle for Domination</h1>
                                <div className="publication">
                                    <p className="pub-name">
                                        By
                                        <Link className="pub-link" to="/books/book5" style={{ marginLeft: '5px' }}>
                                            <span className="d-flex">
                                                <span className="child"> Sheera Frenkel, Cecilia Kang</span>
                                            </span>
                                        </Link>
                                    </p>
                                </div>
                                <div className="user-rate">
                                    <div>
                                        <ReactStars
                                            count={5}
                                            size={24}
                                            value={4}
                                            activeColor="#ffd700" />
                                    </div>
                                    <p className="rating-count">
                                        <Link className="pub-link" to="/books/book5">
                                            <span className="d-flex">
                                                <span className="child">
                                                    (1,103 ratings)
                                                </span>
                                            </span>
                                        </Link>

                                    </p>
                                </div>
                                <span>
                                    <div className="d-block" style={{ height: '29px', marginBottom: '24px' }}></div>
                                </span>
                                <div style={{ marginBottom: '56px' }}>
                                    <h2 className="abt-bk">About this Book</h2>
                                    <div style={{ marginTop: '8px', fontSize: '1rem' }}>
                                        <div className="theory">
                                            <p>
                                                <strong>
                                                    <em>INSTANT NEW YORK TIMES </em>
                                                    BESTSELLER // WINNER OF THE SABEW BEST IN BUSINESS AWARDA Book of the Year: Fortune, Foreign Affairs, The Times (London), Cosmopolitan, TechCrunch, WIRED“                                                </strong>
                                            </p> <br />
                                            <p>
                                            On Jan. 6, after monitoring the messages domestic extremists were posting on Facebook, the company’s security experts became increasingly worried there might be violence in Washington, D.C. The team warned top executives, who even mulled asking their C.E.O., Mark Zuckerberg, to call Donald Trump and find out what the president was intending to tell his mob of supporters then gathering to protest the election results. But the executives scrapped that plan, worried the media would find out about such a phone call and Facebook would be implicated in whatever happened next.

Instead, they sat at home and watched as Trump stirred up the furious crowd, and as threats in Facebook posts escalated into real-world attacks on the Capitol. Days later, in a video interview with Reuters, Sheryl Sandberg, the company’s chief operating officer, blamed the riots on far-right niche social media sites, such as Gab and Parler, “that don’t have our abilities to stop hate, don’t have our standards and don’t have our transparency.”
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div style={{ marginBottom: '40px' }}>
                                    <div className="bk-desc">
                                        <div className="lang">
                                            <span className="first-lang">Language</span>
                                            <span className="second-lang">English</span>
                                        </div>
                                        <div className="lang">
                                            <span className="first-lang">Publisher</span>
                                            <Link className="pub-link" to="/books/book5">
                                                <span className="d-flex">
                                                    <span className="child"> Sheera Frenkel, Cecilia Kang</span>
                                                </span>
                                            </Link>
                                        </div>
                                        <div className="lang">
                                            <span className="first-lang">Release Date</span>
                                            <span className="second-lang">Oct 17, 2001</span>
                                        </div>
                                        <div className="lang">
                                            <span className="first-lang">ISBN</span>
                                            <span className="second-lang">9780718074326</span>
                                        </div>
                                    </div>
                                </div>
                                <span className="divider"></span>
                            </div>
                            <div className="space"></div>

                            <div className="right-wrapper-content">
                                <div className="side">
                                    <div style={{ marginBottom: '24px' }}>
                                        <div>
                                            <div className="book-box">
                                                <div className="thumbnail">
                                                    <img src={ebk2} alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div style={{ marginBottom: '16px' }}>
                                        <button type="button" class="btn btn-outline-success" style={{ backgroundColor: "#1e7b85", color: "white", width: '100%', marginBottom: '12px', fontWeight: 600 }}>Start Reading</button>
                                        <button type="button" class="btn btn-outline-success" style={{ width: '100%', marginBottom: '12px', fontWeight: 600 }}>Sample</button>
                                    </div>
                                    <div className="right-last">
                                        <ul className="right-list">
                                            <li>
                                                <button>
                                                    <div style={{ display: 'flex', maxWidth: '190px' }}>
                                                        <div>
                                                            <FontAwesomeIcon icon={faBookmark} style={{height: '24px'}} />
                                                        </div>
                                                        <div className="label">
                                                            Save for later
                                                        </div>
                                                    </div>
                                                </button>
                                            </li>
                                        </ul>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}