import { Link } from "react-router-dom";
import "./SingleBk.css";
import ReactStars from "react-rating-stars-component";
import ebk1 from "../../../assets/ebooks/ebk1.webp";
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
                                <h1 className="bk-name">The Perfect Marriage: A Completely Gripping Psychological Suspense</h1>
                                <div className="publication">
                                    <p className="pub-name">
                                        By
                                        <Link className="pub-link" to="/books/book" style={{ marginLeft: '5px' }}>
                                            <span className="d-flex">
                                                <span className="child">Jeneva Rose</span>
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
                                        <Link className="pub-link" to="/books/book">
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
                                                    <em>New York Times </em>
                                                    The bestselling thriller with “a tantalizing premise and twists at every turn . . . a sizzling, masterful debut about betrayal and justice
                                                </strong>
                                            </p> <br />
                                            <p>
                                            Would you defend your husband if he was accused of killing his mistress?

Sarah Morgan is a successful and powerful defense attorney in Washington D.C. At 33 years old, she is a named partner at her firm and life is going exactly how she planned.

The same cannot be said for her husband, Adam. He is a struggling writer who has had little success in his career. He begins to tire of his and Sarah’s relationship as she is constantly working.

Out in the secluded woods, at Adam and Sarah’s second home, Adam engages in a passionate affair with Kelly Summers.

Then, one morning everything changes. Adam is arrested for Kelly’s murder. She had been found stabbed to death in Adam and Sarah’s second home.

Sarah soon finds herself playing the defender for her own husband, a man accused of murdering his mistress.

But is Adam guilty or is he innocent?
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
                                            <Link className="pub-link" to="/books/book">
                                                <span className="d-flex">
                                                    <span className="child">Jeneva Rose</span>
                                                </span>
                                            </Link>
                                        </div>
                                        <div className="lang">
                                            <span className="first-lang">Release Date</span>
                                            <span className="second-lang">July 13, 2020</span>
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
                                                    <img src={ebk1} alt="" />
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