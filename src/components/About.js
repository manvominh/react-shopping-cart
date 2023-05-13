import { Link } from "react-router-dom";

const About = () => {
    return (
        <>
            <section className="ftco-section ftco-no-pb ftco-no-pt bg-light fadeInUp ftco-animated">
                <div className="container">
                    <div className="row">
                        <div className="col-md-5 p-md-5 img img-2 d-flex justify-content-center align-items-center" style={{backgroundImage:'url(images/about.jpg)'}}>
                            <a href="https://vimeo.com/45830194" className="icon popup-vimeo d-flex justify-content-center align-items-center fadeInUp ftco-animated">
                                <span className="icon-play"></span>
                            </a>
                        </div>
                        <div className="col-md-7 py-5 wrap-about pb-md-5 ftco-animate fadeInUp ftco-animated">
                            <div className="heading-section-bold mb-4 mt-md-5 fadeInUp ftco-animated">
                                <div className="ml-md-0">
                                    <h2 className="mb-4">Welcome to Vegefoods an eCommerce website</h2>
                                </div>
                            </div>
                            <div className="pb-md-5">
                                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                                <p>But nothing the copy said could convince her and so it didn’t take long until a few insidious Copy Writers ambushed her, made her drunk with Longe and Parole and dragged her into their agency, where they abused her for their.</p>
                                <p><Link to="/shop" className="btn btn-primary">Shop now</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="ftco-section ftco-no-pt ftco-no-pb py-5 bg-light">
                <div className="container py-4">
                    <div className="row d-flex justify-content-center py-5">
                        <div className="col-md-6">
                            <h2 style={{fontSize:"22px"}} className="mb-0">Subcribe to our Newsletter</h2>
                            <span>Get e-mail updates about our latest shops and special offers</span>
                        </div>
                        <div className="col-md-6 d-flex align-items-center">
                            <form action="#" className="subscribe-form">
                                <div className="form-group d-flex">
                                    <input type="text" className="form-control" placeholder="Enter email address" />
                                        <input type="submit" value="Subscribe" className="submit px-3" />
                                        </div>
                                    </form>
                                </div>
                        </div>
                    </div>
            </section>
        </>
    )
};

export default About;