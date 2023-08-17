import React from 'react'
import logoImage from '../../Assests/logo/Dhiyodha w (2).png'
import { ReactComponent as LogoImageAnimate } from '../../Assests/logo/Group.svg';
import $ from 'jquery'
import 'jquery-ui-dist/package.json'
import { useEffect, useState } from 'react'
import NetworkVision from '../../Assests/vision/netwoks.png'
import LearningVision from '../../Assests/vision/learning.png'
import EarningVision from '../../Assests/vision/earning.png'
import IdentityVision from '../../Assests/vision/identification.png'
import MarketingVision from '../../Assests/vision/marketing.png'
import SavingVision from '../../Assests/vision/saving.png'
import GrowthVision from '../../Assests/vision/growth.png'
import MentoringVision from '../../Assests/vision/mentoring.png'

const Vision = () => {
    const [navBlockUpdated, setNavBlockUpdated] = useState(false);
    useEffect(() => {
        const BLOG_SERVER_BASE_URL = "/blog/"
            , BLOG_POSTS_URL = BLOG_SERVER_BASE_URL + "wp-content/themes/DivamiBlog/divamiserver/getPosts.php"
  


        var currentImage, imagesData = {
            imageDetails: [{
                linkName: "uxportfolio/transworld",
                imageName: NetworkVision,
                webp: "assets/images/home/next-gen/avana.webp",
                altName: "Logistics and Hospitality App UX UI-Avana",
                ariaLabel: "Avana Logistics app designed by Divami",
                title: "Networking",
                message: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae enim tenetur, sequi nemo dignissimos voluptatum quos, ex accusantium quod dolore optio, facilis vitae voluptas saepe.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae enim tenetur, sequi nemo dignissimos voluptatum quos, ex accusantium quod  saepe..",
                mobileMessage: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae enim tenetur, sequi nemo dignissimos voluptatum quos, ex accusantium quod dolore optio, facilis vitae voluptas saepe.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae enim tenetur, sequi nemo dignissimos voluptatum quos, ex accusantium quod."
            }, {
                linkName: "uxportfolio/corpus",
                imageName: LearningVision,
                webp: "assets/images/home/next-gen/corpus.webp",
                altName: "SocialMedia and Entertainment UX UI-Corpus",
                ariaLabel: "Corpus Smart tv platform designed by Divami",
                title: "Learning",
                message: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae enim tenetur, sequi nemo dignissimos voluptatum quos, ex accusantium quod dolore optio, facilis vitae voluptas saepe.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae enim tenetur, sequi nemo dignissimos voluptatum quos, ex accusantium quod dolore optio, facilis vitae voluptas saepe..",
                mobileMessage: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae enim tenetur, sequi nemo dignissimos voluptatum quos, ex accusantium quod dolore optio, facilis vitae voluptas saepe.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae enim tenetur, sequi nemo dignissimos voluptatum quos, ex accusantium quod dolore optio, facilis vitae voluptas saepe.."
            }, {
                linkName: "uxportfolio/semantify",
                imageName: EarningVision,
                webp: "assets/images/home/next-gen/semantify.webp",
                altName: "Technology Web App UX UI-Semantify",
                ariaLabel: "Semantify analytics platform designed by Divami",
                title: "Earning",
                message: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae enim tenetur, sequi nemo dignissimos voluptatum quos, ex accusantium quod dolore optio, facilis vitae voluptas saepe.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae enim tenetur, sequi nemo dignissimos voluptatum quos, ex, facilis vitae voluptas saepe..",
                mobileMessage: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae enim tenetur, sequi nemo dignissimos voluptatum quos, ex accusantium quod dolore optio, facilis vitae voluptas saepe.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae enim tenetur, sequi nemo dignissimos voluptatum quos, ex accusantium quod dol"
            }, {
                linkName: "uxportfolio/incx",
                imageName: IdentityVision,
                webp: "assets/images/home/next-gen/cryptox.webp",
                altName: "Cryptocurrency Web and Mobile App UX UI-INCX",
                ariaLabel: "Incx Cryptocurrency app designed by Divami",
                title: "Identification",
                message: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae enim tenetur, sequi nemo dignissimos voluptatum quos, ex accusantium quod dolore optio, facilis vitae voluptas saepe.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae enim tenetur, sequi nemo dignissimos voluptatum quos, ex accusantium quod dolore optio, facilis vitae voluptas saepe.",
                mobileMessage: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae enim tenetur, sequi nemo dignissimos voluptatum quos, ex accusantium quod dolore optio, facilis vitae voluptas saepe.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae enim tenetur, sequi nemo dignissimos voluptatum quos, ex accusilis vitae voluptas saepe.."
            }, {
                linkName: "uxportfolio/medicopia",
                imageName: MarketingVision,
                webp: "assets/images/home/next-gen/medicopia.webp",
                altName: "Healthcare Mobile App UX UI Sample-Medicopia",
                ariaLabel: "Medicopia Healthcare app designed by Divami",
                title: "Marketing",
                message: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae enim tenetur, sequi nemo dignissimos voluptatum quos, ex accusantium quod dolore optio, facilis vitae voluptas saepe.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae enim tenetur, sequi nemo dignissum quod dolore optio, facilis vitae voluptas saepe..",
                mobileMessage: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae enim tenetur, sequi nemo dignissimos voluptatum quos, ex accusantium quod dolore optio, facilis vitae voluptas saepe.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae enim tenetur, sequi nemo dignissimos voluptatum quos, ex a saepe.."
            }, {
                linkName: "uxportfolio/airtel",
                imageName: MentoringVision,
                webp: "assets/images/home/next-gen/airtel.webp",
                altName: "Telecom Mobile App UX UI-Airtel",
                ariaLabel: "Airtel Telecom app designed by Divami",
                title: "Mentoring",
                message: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae enim tenetur, sequi nemo dignissimos voluptatum quos, ex accusantium quod dolore optio, facilis vitae voluptas saepe.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae enim tenetur, sequi nemo dignissimos voluptatum quos, ex accusantium quod dolore optio, facilis vitae voluptas saepe.",
                mobileMessage: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae enim tenetur, sequi nemo dignissimos voluptatum quos, ex accusantium quod dolore optio, facilis vitae voluptas saepe.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae enim tenetur, sequi nemo dignissimos voluptatum quos, ex accusantium quod dolore optio, facilis vitae voluptas saepe.."
            }, {
                linkName: "uxportfolio/viola",
                imageName: SavingVision,
                webp: "assets/images/home/next-gen/viola.webp",
                altName: "Fintech Mobile App UX UI-Viola",
                ariaLabel: "Viola Fintech app designed by Divami",
                title: "Saving",
                message: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae enim tenetur, sequi nemo dignissimos voluptatum quos, ex accusantium quod dolore optio, facilis vitae voluptas saepe.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae enim tenetur, sequi nemo dignissimos voluptatum quos, ex as vitae voluptas saepe.",
                mobileMessage: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae enim tenetur, sequi nemo dignissimos voluptatum quos, ex accusantium quod dolore optio, facilis vitae voluptas saepe.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae enim tenetur, sequi nemo dignissimos voluptatum quos, ex accusantium quod dolore optio, facilis vitae voluptas saepe.."
            }, {
                linkName: "uxportfolio/shiksha",
                imageName: GrowthVision,
                webp: "assets/images/home/next-gen/shiksha.webp",
                altName: "Education Web App UX UI-Shiksha by HCL",
                ariaLabel: "Shiksha Education app designed by Divami",
                title: "GDP Growth",
                message: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae enim tenetur, sequi nemo dignissimos voluptatum quos, ex accusantium quod dolore optio, facilis vitae voluptas saepe.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae enim tenetur, sequi nemo dignissimos voluptatum quos, ex accusantium quod dolore optio, facilis vitae voluptas saepe..",
                mobileMessage: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae enim tenetur, sequi nemo dignissimos voluptatum quos, ex accusantium quod dolore optio, facilis vitae voluptas saepe.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae enim tenetur, sequi nemo dignissimos voluptatum quos, ex accusantvitae voluptas saepe.."
            }]
        }
        let verticlePosition = 2;
        function setVerticalMessage(position) {
            const $descriptionFit = $(".tailor-fit-description");
            if ($(window).width() > 1023) {
                $descriptionFit.html(imagesData.imageDetails[position].message);
            } else {
                $descriptionFit.html(imagesData.imageDetails[position].mobileMessage);
            }
        }
        function setTailorFitSectionData(position) {
            $(".home-arrow__nav-image").attr("href", imagesData.imageDetails[position].linkName);
            $(".home-arrow__nav-image").attr("aria-label", imagesData.imageDetails[position].ariaLabel);
            $(".home-arrow__image").attr({
                src: imagesData.imageDetails[position].imageName + "?1564635070497",
                alt: imagesData.imageDetails[position].altName
            });
            $(".home-arrow__next-gen-image").attr({
                srcset: imagesData.imageDetails[position].webp
            });
            $(".tailor-fit-title").html(imagesData.imageDetails[position].title);
            setVerticalMessage(position);
        }

        $(document).ready(function () {
            $.ajax({
                type: "GET",
                url: BLOG_POSTS_URL,
                data: "",
                success: function (response) {

                    $(".home-impression__content .loader").hide();
                }
            });
            setTailorFitSectionData(verticlePosition);
            $(".blue__block").addClass("femvista");



            $(".tailer-section-work-link").hover(function (event) {
                findImage(currentImage = $(this).attr("data-item"));
            }, function (event) {
                currentImage = null;
            });

            $(".nav__image-block").hover(function (event) {
                currentImage = "continue";
            }, function (event) {
                currentImage = null;
            });

            startTailorFitAnimation();

            $(window).on("resize", function (e) {
                setVerticalMessage(verticlePosition);
            });

            $(".sub-title__block").hover(function (event) {
                currentImage = "continue";
            }, function (event) {
                currentImage = null;
            });

            $(".home-clients__item").hover(function (event) {

                $(".home-clients__titles-block").slick("slickPause");
            });
        });
        var classItems = ["logistics-hospitality", "socialmedia-entertainment", "technology", "cryptocurrency", "healthcare", "telecom", "fintech", "education"];
        let myTimer;
        let currentIndex = 2;
        let isTailorSectionIncrement = true;
        function imageMovement(index, image) {
            let flag = "false";
            $(".tailer-section-work-link").parent(".home-arrow__nav-item").removeClass("active");
            $(".home-arrow__nav-item:nth-child(" + (index + 1) + ")").addClass("active");
            var itemToHighlight = image;
            if ($(".nav__image-block")
                .removeClass(function (index, classes) {
                    return (classes = classes.split(" "))
                        .filter(function (eachClass) {
                            return classItems.indexOf(eachClass) > -1;
                        })
                        .join(" ");
                })
                .addClass(itemToHighlight))
            // if ($(window).width() < 768) {
            //     const totalWidth = $(".home-arrow__nav-block").outerWidth();
            //     $(".home-arrow__nav-list").css("width", totalWidth);
            //     const myScrollPos = $(".home-arrow__nav-block .active").offset().left + $(".home-arrow__nav-block .active").outerWidth(true) / 2 + $(".home-arrow__nav-block .home-arrow__nav-list").scrollLeft() - $(".home-arrow__nav-block .home-arrow__nav-list").width() / 2;
            //     $(".home-arrow__nav-block .home-arrow__nav-list").animate({
            //         scrollLeft: myScrollPos
            //     }, 300);
            //     flag = true;
            // }
            $(window).on("resize", function () {
                if (flag) {
                    setNavBlockUpdated(!navBlockUpdated);
                    flag = false;
                }
            });
        }

        function getTailorImagePosition() {
            if (isTailorSectionIncrement) {
                if (currentIndex >= 7) {
                    isTailorSectionIncrement = !1;
                    currentIndex--;
                } else {
                    currentIndex++;
                }
            } else {
                if (currentIndex === 0) {
                    isTailorSectionIncrement = !0;
                    currentIndex = 1;
                } else {
                    currentIndex--;
                }
            }
        }

        function findImage(imageName) {
            for (let i = 0; i < 8; i++) {
                if (imageName === classItems[i]) {
                    verticlePosition = i;
                    setTailorFitSectionData(i);
                    imageMovement(i, classItems[i]);
                    currentIndex = i;
                }
            }
        }

        function startTailorFitAnimation() {
            if (myTimer) {
                clearInterval(myTimer);
            }
            myTimer = setInterval(function () {
                if (!currentImage) {
                    getTailorImagePosition();
                    findImage(classItems[currentIndex]);
                }
            }, 3000);
        }


    }, [])

    return (
        <section className='diyodha-vision-area'>
            <div className='container'>
                <div className='row'>
                    <div className='col-12'data-aos="fade-up" data-aos-anchor-placement="center-bottom" >
                    <h1 className='text-center text-light'>Vision of Dhiyodha</h1>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-12'>
                        <div className="home-tailer__block">
                            <div className='row'>
                                <div className='col-lg-8 col-md-12 col-12 '>
                                    <div className="tailer__block " >
                                    {/* data-aos="fade-right" */}
                                        {/* <img src={logoImage} alt="logo arrow"
                                           /> */}
                                            <LogoImageAnimate className='logo-arrow__image'/>
                                    </div>
                                </div>
                                <div className='col-lg-4 col-md-12 col-12'>
                                    <div className="section-title__block sub-title__block d-flex align-items-start flex-column justify-content-center h-100" data-aos="fade-left">
                                        <h1 className="section-title__text tailor-fit-title">Networking</h1>
                                        <p className="section-title__descripion tailor-fit-description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae enim tenetur, sequi nemo dignissimos voluptatum quos, ex accusantium quod dolore optio, facilis vitae voluptas saepe.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae enim tenetur, sequi nemo dignissimos voluptatum quos, ex accusantium quod  saepe..</p>        
                                    </div>
                                </div>
                            </div>
                            <nav className="home-arrow__nav-block" data-aos="fade-right">
                                <div className="nav__image-block logistics-hospitality">
                                    <a href="uxportfolio/transworld" target="_blank" className="home-arrow__nav-image"
                                        aria-label="Avana Logistics app designed by Divami" rel="noreferrer">
                                        <picture>
                                            <img src="assets/images/home/avana.jpg?1564635070497"
                                                data-src="assets/images/home/semantify.jpg?1564635070497"
                                                alt="Logistics and Hospitality App UX UI-Avana"
                                                className="home-arrow__image lazy added" />
                                        </picture>
                                    </a>
                                    <div className="nav_image-block--border"></div>
                                </div>

                                <div className="home-arrow__nav-list">
                                    <div className="home-arrow__nav-item active">
                                        <a className="tailer-section-work-link work-nav-link" data-type="verticals"
                                            data-item="logistics-hospitality" id="logistics-hospitality"
                                            aria-label="Logistics &amp; hospitality related apps designed by Divami">
                                            <div className="home-arrow__nav-text">
                                                <span className="nav_item_click">Networking</span>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="home-arrow__nav-item">
                                        <a className="tailer-section-work-link work-nav-link" data-type="verticals"
                                            data-item="socialmedia-entertainment" id="socialmedia-entertainment"
                                            aria-label="Social media &amp; entertainment related apps designed by Divami">
                                            <div className="home-arrow__nav-text lazy added" src="null">
                                                <span className="nav_item_click">Learning</span>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="home-arrow__nav-item">
                                        <a className="tailer-section-work-link work-nav-link" data-type="verticals"
                                            data-item="technology" id="technology"
                                            aria-label="Technology related apps designed by Divami">
                                            <div className="home-arrow__nav-text">
                                                <span className="nav_item_click">Earning</span>
                                            </div>
                                        </a>
                                    </div>
                                    
                                    <div className="home-arrow__nav-item">
                                        <a className="tailer-section-work-link work-nav-link" data-type="verticals"
                                            data-item="cryptocurrency" id="cryptocurrency"
                                            aria-label="Cryptocurrency related apps designed by Divami">
                                            <div className="home-arrow__nav-text">
                                                <span className="nav_item_click">Identification</span>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="home-arrow__nav-item">
                                        <a className="tailer-section-work-link work-nav-link" data-type="verticals"
                                            data-item="healthcare" id="healthcare"
                                            aria-label="Health tech related apps designed by Divami">
                                            <div className="home-arrow__nav-text">
                                                <span className="nav_item_click">Marketing</span>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="home-arrow__nav-item">
                                        <a className="tailer-section-work-link work-nav-link" data-type="verticals" data-item="telecom"
                                            id="telecom" aria-label="Telecom related apps designed by Divami">
                                            <div className="home-arrow__nav-text">
                                                <span className="nav_item_click">Mentoring</span>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="home-arrow__nav-item">
                                        <a className="tailer-section-work-link work-nav-link" data-type="verticals" data-item="fintech"
                                            id="fintech" aria-label="Fintech related apps designed by Divami">
                                            <div className="home-arrow__nav-text">
                                                <span className="nav_item_click">Saving</span>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="home-arrow__nav-item">
                                        <a className="tailer-section-work-link work-nav-link" data-type="verticals"
                                            data-item="education" id="education"
                                            aria-label="Education related apps designed by Divami">
                                            <div className="home-arrow__nav-text">
                                                <span className="nav_item_click">GDPGrowth</span>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </nav>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Vision