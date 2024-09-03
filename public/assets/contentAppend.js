﻿const str = 
`<header id="site-header" class="main-header main-header-overlay">
<!-- <div class="w-full h-full flex bg-primary pt-5 md:hidden">
    <div class="container flex gap-15 items-center justify-center self-stretch flex-grow-1 flex-shrink-1 transition-all">
        <div class="ld-fancy-heading relative"><span class="ld-fh-element relative mb-0/5em text-13 font-medium uppercase text-black">New!</span></div>
        <div class="ld-fancy-heading relative pointer-events-auto">
            <span class="ld-fh-element relative mb-0/5em text-13 font-normal text-black">Progressive wallets coming soon! <u class="font-bold">Stay Tuned!</u></span>
        </div>
    </div>
</div> -->
<div class="w-full static flex items-center px-35 md:hidden">
    <div class="w-25percent static flex flex-col items-start pointer-events-auto p-10">
        <div class="module-logo flex navbar-brand-plain py-30" id="size-logo">
            <a class="navbar-brand flex p-0 relative" href="#" rel="home">
                <span class="navbar-brand-inner post-rel"><img src="assets/images/logo/logo-01-light.svg" width="146px" alt="Dark AI" /></span>
            </a>
        </div>
    </div>
    <div class="w-50percent static flex flex-col items-center p-10 module-menu">
        <div class="lqd-fancy-menu lqd-custom-menu lqd-menu-td-none lqd-custom-menu-has-btn flex items-center fixed bg-white-10 rounded-10 pr-10 pb-5 pl-20">
            <ul class="reset-ul inline-ul link-white-40 link-14" data-localscroll="true" data-localscroll-options='{"itemsSelector":">li > a", "trackWindowScroll": true, "includeParentAsOffset": false}'>
                <li class="menu-item-object-page menu-item-home current-menu-item mr-40"><a href="#banner">Home</a></li>
                <li class="mr-40"><a href="#parallax-section">Pre-Order<!-- <span class="link-badge" style="--lqd-badge-color: #747474;">Pre-order</span> --></a></li>
                <li class="mr-40"><a href="#main-features">Features</a></li>
                <li class="mr-40"><a href="#backers">Backers</a></li>
                <li class="mr-40"><a href="#news">News</a></li>
            </ul>
            <!-- <div class="lqd-custom-menu-btn-wrap ml-40">
                <a href="#modal-subscribe" class="btn btn-solid btn-xs btn-icon-shaped text-14 rounded-6 py-5 px-10 text-black bg-primary" data-lity="modal-subscribe"><span data-text="Login" class="btn-txt">Login</span></a>
            </div> -->
        </div>
    </div>
    <div class="w-25percent static flex flex-row items-center justify-end gap-15 p-10" style="visibility: hidden;">
        <div class="ld-dropdown-menu flex relative ld-dropdown-menu-underlined w-65" role="menubar">
            <span
                class="ld-module-trigger"
                role="button"
                data-ld-toggle="true"
                data-bs-toggle="collapse"
                data-bs-target="#dropdown-language"
                aria-controls="dropdown-language"
                aria-expanded="false"
                data-toggle-options='{ "type":  "hoverFade" }'
            >
                <span class="ld-module-trigger-txt text-15 font-medium text-white"><span>En</span> <img width="48" height="48" src="assets/images/shape/Language1.png" alt="shape earth" /></span>
            </span>
            <div class="ld-module-dropdown left collapse absolute" id="dropdown-language" aria-expanded="false" role="menuitem">
                <div class="ld-dropdown-menu-content">
                    <ul class="text-14 link-black">
                        <li><a href="#">CN</a></li>
                        <li><a href="#">FR</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="max-w-full">
            <a
                href="#modal-subscribe"
                class="btn btn-solid btn-sm btn-hover-txt-switch-change btn-hover-txt-switch btn-hover-txt-switch-y btn-icon-shaped text-15 font-500 bg-transparent border-2 border-white-10 rounded-6 text-white"
                data-lity="modal-subscribe"
            >
                <span data-text="Login" class="btn-txt">Login</span>
            </a>
        </div>
    </div>
</div>
<div class="lqd-mobile-sec relative bg-black">
    <div class="lqd-mobile-sec-inner navbar-header flex items-stretch w-full">
        <div class="lqd-mobile-modules-container empty"></div>
        <button
            type="button"
            class="navbar-toggle collapsed nav-trigger style-mobile flex relative items-center justify-end border-none bg-transparent nav-trigger-dark p-0"
            data-ld-toggle="true"
            data-bs-toggle="collapse"
            data-bs-target="#lqd-mobile-sec-nav"
            aria-expanded="false"
            data-toggle-options='{ "changeClassnames":  {"html":  "mobile-nav-activated"} }'
        >
            <span class="sr-only">Menu</span>
            <span class="bars inline-block relative z-1">
                <span class="bars-inner flex flex-col w-full h-full"><span class="bar inline-block"></span> <span class="bar inline-block"></span> <span class="bar inline-block"></span></span>
            </span>
        </button>
        <a class="navbar-brand flex relative" href="#">
            <span class="navbar-brand-inner"><img class="logo-default" src="assets/images/logo/logo-01-light.svg" width="152px" alt="Dark AI" /></span>
        </a>
    </div>
    <div class="lqd-mobile-sec-nav w-full absolute z-10">
        <div class="mobile-navbar-collapse navbar-collapse collapse w-full bg-black text-white" id="lqd-mobile-sec-nav" aria-expanded="false" role="navigation">
            <ul
                id="mobile-primary-nav"
                class="reset-ul lqd-mobile-main-nav main-nav nav"
                data-localscroll="true"
                data-localscroll-options='{"itemsSelector":"> li > a", "trackWindowScroll": true, "includeParentAsOffset": true}'
            >
                <li class="current-menu-item"><a class="text-white" href="#banner">Home</a></li>
                <li><a class="text-white" href="#parallax-section">Pre-Order<!-- <span class="link-badge" style="--lqd-badge-color: #747474;">Pre-order</span> --></a></li>
                <li><a class="text-white" href="#main-features">Features</a></li>
                <li><a class="text-white" href="#backers">Backers</a></li>
                <li><a class="text-white" href="#news">News</a></li>
            </ul>
        </div>
    </div>
</div>

<section class="lqd-section lqd-stickybar-wrap lqd-stickybar-wrap-fixed lqd-stickybar-left link-white link-medium pt-100 pb-25 bg-transparent pointer-events-none md:hidden">
    <div class="static w-full h-full flex items-center justify-between flex-grow-1 vertical-lr">
        <div class="w-full flex items-center flex-grow-1 justify-center p-10">
            <div class="lqd-fancy-menu lqd-menu-td-none static w-full header-module header-module-rotate pb-10 flex items-center -rotate-180">
                <ul class="reset-ul inline-nav flex pointer-events-auto" data-lqd-interactive-color="true">
                    <li class="mb-20">
                        <span class="text-14 text-white-30 font-silkscreen">COMMUNITY</span>
                    </li>
                    <li class="mb-20">
                        <a href="https://x.com/upnetworkhq" target="_blank" class="text-14 font-silkscreen">
                            <span class="link-icon inline-flex hide-if-empty left-icon icon-next-to-label text-slate-300 rotate-90">
                                <svg aria-hidden="true" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" fill="#fff" id="X"/></path>
                                </svg>
                            </span>
                            X
                        </a>
                    </li>
                     <li class="mb-20">
                        <span class="text-14 text-white-30 font-silkscreen">/</span>
                    </li>
                    <li class="mb-20">
                        <a href="https://t.me/upnetworkhq" target="_blank" class="text-14 font-silkscreen">
                            <span class="link-icon inline-flex hide-if-empty left-icon icon-next-to-label text-slate-300 rotate-90">
                                <svg aria-hidden="true" viewbox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                                    <path class="cls-1" d="M477,43.86,13.32,223.29a5.86,5.86,0,0,0-.8.38c-3.76,2.13-30,18.18,7,32.57l.38.14,110.41,35.67a6.08,6.08,0,0,0,5.09-.62L409.25,120.57a6,6,0,0,1,2.2-.83c3.81-.63,14.78-1.81,7.84,7-7.85,10-194.9,177.62-215.66,196.21a6.3,6.3,0,0,0-2.07,4.17l-9.06,108a7.08,7.08,0,0,0,2.83,5.67,6.88,6.88,0,0,0,8.17-.62l65.6-58.63a6.09,6.09,0,0,1,7.63-.39l114.45,83.1.37.25c2.77,1.71,32.69,19.12,41.33-19.76l79-375.65c.11-1.19,1.18-14.27-8.17-22-9.82-8.08-23.72-4-25.81-3.56A6,6,0,0,0,477,43.86Z" fill="#fff" id="Telegram"/></path>
                                </svg>
                            </span>
                            Telegram
                        </a>
                    </li>
                    <li class="mb-20">
                        <span class="text-14 text-white-30 font-silkscreen">/</span>
                    </li>
                    <li>
                        <a href="https://discord.gg/upnetworkhq" target="_blank" class="text-14 font-silkscreen">
                            <span class="link-icon inline-flex hide-if-empty left-icon icon-next-to-label text-slate-300 rotate-90">
                                <svg aria-hidden="true" viewbox="0 0 68 68" xmlns="http://www.w3.org/2000/svg">
                                    <path class="cls-1" d="M57.7,12.6c-4.4-2-9.1-3.5-14.1-4.3-.6,1.1-1.3,2.5-1.8,3.6-5.2-.8-10.4-.8-15.6,0-.5-1.1-1.2-2.6-1.8-3.6-5,.8-9.7,2.3-14.1,4.3C1.5,25.7-.9,38.5.3,51.2c5.9,4.3,11.6,6.9,17.2,8.6,1.4-1.9,2.6-3.9,3.7-5.9-2-.8-4-1.7-5.8-2.8.5-.3,1-.7,1.4-1.1,11.2,5.1,23.3,5.1,34.4,0,.5.4.9.8,1.4,1.1-1.9,1.1-3.8,2-5.8,2.8,1.1,2.1,2.3,4.1,3.7,5.9,5.6-1.7,11.3-4.3,17.2-8.6,1.5-14.6-2.3-27.4-10-38.6ZM22.7,43.4c-3.4,0-6.1-3.1-6.1-6.8s2.7-6.8,6.1-6.8,6.2,3.1,6.1,6.8c0,3.7-2.7,6.8-6.1,6.8ZM45.3,43.4c-3.4,0-6.1-3.1-6.1-6.8s2.7-6.8,6.1-6.8,6.2,3.1,6.1,6.8c0,3.7-2.7,6.8-6.1,6.8Z" fill="#fff" id="Discord"/></path>
                                </svg>
                            </span>
                            Discord
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</section>

</header>


<main class="content bg-black" id="lqd-site-content" >


<div id="lqd-contents-wrap">


    <section
        class="lqd-section banner min-h-100vh flex justify-center items-center p-10 bg-black"
        id="banner"
        data-parallax="true"
        data-parallax-options='{"start": "top top", "end": "bottom top"}'
        data-parallax-from='{ "y": "0vh", "scaleX": 1,"scaleY": 1,"opacity": 1 }'
        data-parallax-to='{ "y": "72vh", "scaleX": 1.2,"scaleY": 1.2,"opacity": 0 }'
    >
        <div class="module-video-2 w-full h-full absolute top-0 left-0 overflow-hidden z-0 transotion-opacity pointer-events-none bg-before">
            <video class="background-video-hosted max-w-full w-full h-full absolute-center object-cover" src="assets/videos/dark-ai/banner/phone-prorder-02-1080p.mp4" autoplay muted playsinline loop></video>
        </div>

        <div class="container-fluid">
            <div class="row">
                <div class="col col-12">
                    <!-- /.w-full relative -->
                    <div class="agenda w-full relative" id="agenda">
                        <div class="container">
                            <div class="mx-2percent flex flex-wrap lg:mx-0  pt-200">
                                <div class="w-full relative flex items-center justify-center text-center">
                                    <h2 class="relative mb-0/5em text-white font-bold capitalize">Pre-Order</h2>
                                </div>

                                <!-- <div class="w-full relative flex justify-center pt-100 mb-110 module-timer">
                                    <div class="countdown h3 my-0 text-center text-88 text-white" id="lqd-countdown-gallery" data-plugin-countdown="true" data-countdown-options='{ "until" : "2024-11-24", "daysLabel" : "Day", "hoursLabel" : "Hou", "minutesLabel" : "Min", "secondsLabel" : "Sec" }'></div>
                                </div> -->
                                
                                <div class="w-full relative flex flex-col">
                                    <div class="w-60percent mx-auto text-center lg:w-80percent sm:w-full">
                                        <div class="countdown h3 my-0 text-center text-white mb-50" id="lqd-countdown-gallery" data-plugin-countdown="true" data-countdown-options='{ "until" : "2024-09-22 13:00", "daysLabel" : "Day", "hoursLabel" : "Hou", "minutesLabel" : "Min", "secondsLabel" : "Sec" }'></div>
                                        <p class="ld-fh-element relative mb-3/25em text-19 leading-1/2em">
                                            Time: 13:00 on September 22, 2024 (UTC)<br>
                                            First Batch: 15,000 Units<br>
                                        </p>
                                    </div>
                                </div>
                                <div class="w-full relative flex flex-col animation-element">
                                    <div class="w-30percent mx-auto text-center lg:w-80percent sm:w-full z-100">
                                        <a href="https://support.upnetwork.xyz/hc/en-gb/articles/15461716922268-Pre-Order-Countdown-for-the-Up-Mobile-A24-Movers-Edition" target="_blank" class="button btn btn-solid btn-md btn-has-label btn-icon-right btn-hover-swp w-full border-3 border-white rounded-100 text-17 leading-2em tracking-1 text-white font-bold hover:bg-primary hover:text-black">
                                        <span class="btn-txt" data-text="Join the event">$999 USD / Learn more</span>
                                        <span class="btn-icon">
                                            <i aria-hidden="true" class="lqd-icn-ess icon-md-arrow-forward text-1em"></i>
                                        </span>
                                        <span class="btn-icon mr-10">
                                            <i aria-hidden="true" class="lqd-icn-ess icon-md-arrow-forward text-1em"></i>
                                        </span>
                                        </a>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <!-- /.agenda w-full relative -->
                </div>
                <!-- /.col col-12 -->
            </div>
        </div>
    </section>


    <!-- Start Carousel Text -->
    <section class="lqd-section carousel-text pt-90">
        <div class="container-fluid">
            <div class="row">
                <div class="col col-12 p-0">
                    <div class="carousel-container carousel-dots-mobile-inside carousel-dots-mobile-center">
                        <div class="carousel-items row -mx-30" data-lqd-flickity='{ "columnsAutoWidth":true,"wrapAround":true,"marquee":true,"cellAlign" : "left", "prevNextButtons":false,"pageDots":false,"groupCells":false,"pauseAutoPlayOnHover":false}'>
                            <div class="carousel-item px-30">
                                <div class="carousel-item-inner">
                                    <div class="carousel-item-content text-12vw uppercase tracking-0/5 text-center">
                                        <h3 class="m-0 text-1em whitespace-nowrap text-white-10 font-ultrabold">Pre-Order.</h3>
                                    </div>
                                </div>
                            </div>
                            <div class="carousel-item px-30">
                                <div class="carousel-item-inner">
                                    <div class="carousel-item-content text-12vw uppercase tracking-0/5 text-center">
                                        <h3 class="m-0 text-1em whitespace-nowrap text-white-10 font-ultrabold">Pre-Order.</h3>
                                    </div>
                                </div>
                            </div>
                            <div class="carousel-item px-30">
                                <div class="carousel-item-inner">
                                    <div class="carousel-item-content text-12vw uppercase tracking-0/5 text-center">
                                        <h3 class="m-0 text-1em whitespace-nowrap text-white-10 font-ultrabold">Pre-Order.</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- /.col col-12 -->
            </div>
        </div>
    </section>


    <!-- End Carousel Text -->
    <!-- <section
        id="parallax-section"
        class="lqd-section parallax-bg bg-before w-full min-h-100vh flex flex-col items-center justify-center bg-no-repeat bg-bottom-center bg-cover p-10"
        style="background-image: url(assets/images/bg/phone-prorder-01-t.gif);"
        data-parallax="true"
        data-parallax-options='{"ease": "linear", "start": "top bottom", "end": "bottom+=0px top"}'
        data-parallax-from='{"y": "0px", "scaleX" : 1, "scaleY" : 1}'
        data-parallax-to='{"y": "-300px", "scaleX" : 0.6, "scaleY" : 0.6}'
    > -->
    <section
        id="parallax-section"
        class="lqd-section uplanding bg-before w-full min-h-100vh flex flex-col items-center justify-center bg-no-repeat bg-bottom-center bg-cover bg-black p-10"
        data-parallax="true"
        data-parallax-options='{"ease": "linear", "start": "top bottom", "end": "bottom+=0px top"}'
        data-parallax-from='{"y": "0px", "scaleX" : 1, "scaleY" : 1}'
        data-parallax-to='{"y": "-300px", "scaleX" : 0.6, "scaleY" : 0.6}'
    >   
        <div class="module-video-3 w-full h-full absolute top-0 left-0 overflow-hidden z-0 transotion-opacity pointer-events-none bg-before">
            <video class="background-video-hosted max-w-full w-full h-full absolute-center object-cover opacity-20" src="assets/videos/dark-ai/banner/bg-video-09-720p.mp4" autoplay muted playsinline loop></video>
        </div>
        <div
            class="container flex flex-col"
            data-custom-animations="true"
            data-ca-options='{"animationTarget": ".animation-element,.animation-element .split-inner", "duration" : 750, "delay" : 50, "ease": "expo.out", "initValues": {"scaleX" : 0.5, "scaleY" : 0.5, "rotationZ" : 3, "opacity" : 0} , "animations": {"scaleX" : 1, "scaleY" : 1, "rotationZ" : 0, "opacity" : 1}}'
        >
            <div class="carousel-item flex flex-column items-center justify-center has-one-child w-full flex-auto animation-element">
                <div class="carousel-item-inner relative mb-60 w-full">
                    <div class="carousel-item-content relative max-w-full flex-row mx-auto p-10">
                        <div class="flex justify-center text-primary">
                            <img src="assets/images/logo/logo-01-light.svg" width="700" alt="upnetwork">
                        </div>
                    </div>
                </div>
            </div>
            <!-- <div class="ld-fancy-heading relative max-w-full text-center animation-element">
                <h1 class="ld-fh-element relative mb-0/15em leading-1em" data-text-rotator="true" data-split-text="true" data-split-options='{"type": "chars, words"}'>
                    <span class="txt-rotate-keywords text-primary font-black"><span class="txt-rotate-keyword active">UP</span> <span class="txt-rotate-keyword">UP</span> <span class="txt-rotate-keyword">UP</span></span>
                    <span class="font-outfit font-black text-white">NETWORK</span>
                </h1>
            </div> -->
            <div class="ld-fancy-heading relative text-center max-w-full mb-15 animation-element">
                <p class="ld-fh-element relative mb-0/5em leading-1/3em uppercase text-16 font-chakra-petch border-1 border-white-20 rounded-100 px-20 py-10"><span class="font-bold text-white">De</span>centralized <span class="font-bold text-white">M</span>obile <span class="font-bold text-white">I</span>nfrastructure <span class="font-bold text-white">N</span>etwork</p>
            </div>
            <div class="ld-fancy-heading relative text-center max-w-full animation-element">
                <p class="ld-fh-element relative mb-0/5em leading-1/3em"><span class="text-primary font-bold">Up Network</span> is creating the world’s first decentralized mobile infrastructure network <span class="text-white font-bold">(DeMIN)</span> powered by Movement. It aims to democratize the smartphone ecosystem by turning every Android device into a lite node in this decentralized network, combining regular smartphone functions with advanced Web3 features.</p>
            </div>
            <div class="flex flex-row flex-wrap justify-center mt-10 p-10 z-100">
                <div class="max-w-full banner-btn-left animation-element">
                    <a href="https://support.upnetwork.xyz/hc/en-gb/articles/15461716922268-Pre-Order-Countdown-for-the-Up-Mobile-A24-Movers-Edition" target="_blank" class="btn btn-solid btn-md btn-hover-txt-switch btn-hover-txt-switch-y btn-icon-shaped text-17 font-medium bg-primary text-black rounded-6 rounded-right-0" data-localscroll="true">
                        <span data-text="Up Mobile" class="btn-txt" data-transition-delay="true" data-delay-options='{"elements":  ".lqd-chars", "delayType":  "animation", "startDelay":  0, "delayBetween":  32.5}'>
                            Up Mobile
                        </span>
                    </a>
                </div>
                <div class="max-w-full banner-btn-right animation-element">
                    <a href="https://www.youtube.com/watch?v=Fnk0kFlneQU" class="fresco btn btn-solid btn-md btn-icon-left btn-hover-swp text-17 font-medium bg-primary text-black rounded-6 rounded-left-0">
                        <span data-text="Watch Video" class="btn-txt">Watch Video </span><span class="btn-icon"><i aria-hidden="true" class="lqd-icn-ess icon-ion-ios-play"></i> </span>
                        <span class="btn-icon"><i aria-hidden="true" class="lqd-icn-ess icon-ion-ios-play"></i></span>
                    </a>
                </div>
            </div>
        </div>

    </section>
    <section
        class="lqd-section features py-60"
        id="features"
        data-custom-animations="true"
        data-ca-options='{"animationTarget": ".animation-element", "duration" : 850, "startDelay" : 300, "delay" : 70, "ease": "expo.out", "initValues": {"scaleX" : 0.7, "scaleY" : 0.7, "rotationZ" : 2, "opacity" : 0} , "animations": {"scaleX" : 1, "scaleY" : 1, "rotationZ" : 0, "opacity" : 1}}'
    >

        <div class="container">
                <div class="row">
                    <div class="col col-12 mb-90 mt-70">
                        <div class="mb-30 lqd-imggrp-single block relative">
                            <div class="lqd-imggrp-img-container inline-flex relative items-center justify-center">
                                <figure class="w-full relative">
                                    <img width="48" height="10" src="assets/images/logo/logo-up-yellow.svg" alt="shape">
                                </figure>
                            </div>
                        </div>
                        <h3 class="lqd-text-reveal-el mb-40 text-60 font-semibold leading-0/9em -tracking-3 text-white" data-split-text="true" data-split-options='{"type": "words, chars"}' data-parallax="true" data-parallax-options='{"parallaxTargets": ".lqd-chars, figure", "start": "top bottom", "end": "center 75%", "scrub" : 3}' data-parallax-from='{"opacity" :0.2}' data-parallax-to='{"opacity" :1, "stagger": {"from": "start", "each" : 1}}'>
                            <span class="lqd-adv-txt-item">

                                <span>Democratize 3.3 Billion Android Devices.</span>
                                <!-- <span class="vertical-align-top mx-5 lqd-adv-txt-fig relative inline-flex">
                                    <img class="h-auto max-w-full border-none rounded-0" width="62" height="62" src="./assets/images/demo/asymmetric-9/shape/Img-2.png" alt="shape">
                                </span> -->
                            </span>
                            
                        <!-- <div class="flex justify-start items-center">
                            <div class="w-auto mr-10 py-5 border-2 border-white rounded-100 px-15 ld-fancy-heading relative">
                                <h5 class="ld-fh-element text-14 uppercase tracking-1 m-0 text-white  inline-block relative">Our vision</h5>
                            </div>
                            <span href="#" class="text-14 font-bold uppercase leading-1em tracking-1 text-black rounded-100 btn btn-solid btn-custom-size btn-icon-block btn-icon-top w-30 h-30 bg-accent mr-10 border-none p-0" target="_blank" rel="nofollow">
                                <span class="btn-icon w-1em">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="10.625" height="10.625" viewBox="0 0 10.625 10.625">
                                        <path d="M-1.76-11.322H5.313V-4.25H3.885V-8.932L-4.316-.7l-1-1,8.2-8.234H-1.76Z" transform="translate(5.313 11.322)"></path>
                                    </svg>
                                </span>
                            </span>
                        </div> -->
                    </div>
                </div>
            </div>
        <div class="container" id="main-features">
            <div class="row justify-around self-stretch gap-60">
                <div class="col flex-auto w-30percent sm:w-full">
                    <div class="flex flex-col gap-30 animation-element">
                        <div class="max-w-full flex items-center items-start text-40 text-primary border-primary mb-10">
                            <svg class="w-1em h-1em" xmlns="http://www.w3.org/2000/svg" width="256" height="256" viewbox="0 0 512 512" fill="currentColor">
                                <path
                                    d="M437.8,165.1l.7-.3c2.2-1,3.9-1.5,5.1-1.6l1.4-.2c2.9-.6,5.9-.9,8.9-.9,17.9,0,32.9-5.6,43.3-16.2,7.5-7.6,12.2-17.5,13.8-28.9h.9s0-65.7,0-65.7h-109.6v47.6c-.3,3.4-.2,6.6-.2,9.4,0,3.1,0,6-.3,8.2v.7c-1.3,9.3-5.8,17.9-12.7,24.3-7.1,6.5-10.4,8-11.5,8.3-1.1.3-2.7.2-7.3-.5-4-.5-9.4-1.3-16.1-1.3-28.4,0-52.2,21.4-55.4,49.9-.7,6.5-.3,11.3,0,14.8.3,3.9.4,5.1-.9,9-2.7,7.7-8.4,14.8-16.1,20.1-7.7,5.3-16.6,8.1-25,8.1h-.8s-.8,0-.8,0c-8.4,0-17.3-2.9-25-8.1-7.7-5.3-13.5-12.4-16.1-20-1.4-3.9-1.3-5.1-.9-9,.3-3.5.7-8.4,0-14.8-3.2-28.4-27-49.9-55.4-49.9s-12.1.7-16.1,1.3c-4.6.6-6.2.8-7.3.4-1.1-.3-4.4-1.7-11.5-8.3-6.9-6.4-11.4-15-12.6-24.3v-.7c-.3-1.1-.4-2.3-.4-3.6v-61.5H.2v55.7c-.1,15.7,4.9,29.2,14.5,38.9,10.4,10.6,25.4,16.2,43.3,16.2s6,.3,8.9.9l1.4.2c1.3.2,2.9.7,5.1,1.6l.7.3c7.4,3,13.9,7.9,18.8,14.4,12,15.8,12.1,37.9,0,53.8-3.9,5.2-9,9.5-14.7,12.6l-.5.3c-1.6.9-3,1.5-4.2,2-.6.2-1.1.4-1.6.5l-.5.2c-4.3,1.4-8.8,2.1-13.4,2.1-34.7,0-58.1,21.5-58.1,53.6s11.3,38,20.8,44.5c11.6,7.9,25.6,10.2,38.9,11.4h.9c3.5.6,6.5,1.3,10,2.6l1.7.6h.3c9,3.2,16.5,9.5,21.2,18,2.7,4.8,4.5,11,5.2,17.5.3,2.6.4,5.1.6,7.5.1,1.9.3,4,.5,6.1v48.3h109.6v-64.5h-.8c-1.8-12.4-7.6-23.8-16.9-32.6-.8-.8-1.6-1.4-2.2-1.9l-.4-.3c-11.8-10.3-27.1-10.6-38.3-10.8h-.1c-1.9,0-3.6,0-5.2-.1l-1.7-.3-3.6-.8-3.4-1.1-3.7-1.5c-3.8-1.8-7.4-4-10.6-6.8l-.7-.6c-10.1-9.1-15.2-20.4-15.4-34.4,0-10,3.2-19.5,9.2-27.5,5.8-7.8,14.1-13.5,23.3-16.3,9.3-2.8,26.6-2.8,35-.1,15.2,4.9,26,19,26.9,35.1,0,1.3,0,2.7,0,4.4-.2,4.7-.4,11.2,2.3,19.3,7.6,22.7,28.8,38,52.6,38.1,23.8,0,44.9-15.4,52.6-38.2,2.7-8.1,2.5-14.6,2.3-19.3,0-1.6-.1-3,0-4.3.8-16.1,11.7-30.2,26.9-35.1,8.4-2.7,25.7-2.6,35,.1,9.2,2.7,17.5,8.5,23.3,16.3,6,8,9.2,17.5,9.2,27.5-.2,14-5.2,25.3-15.4,34.4l-.6.6c-3.2,2.8-6.8,5.1-10.6,6.8l-3.7,1.5-3.4,1.1-2.9.7-2.3.4c-1.6,0-3.3.1-5.2.1h-.1c-11.2.2-26.5.5-38.3,10.8l-.4.4c-.6.5-1.3,1.2-2.2,2-8.9,8.5-14.6,19.4-16.6,31.3h-1v65.7h109.6v-48.3c.2-2.1.4-4.2.5-6.1.2-2.4.4-4.9.6-7.5.7-6.5,2.5-12.8,5.2-17.5,4.7-8.4,12.2-14.7,21.2-17.8l1.9-.7c3.4-1.2,6.4-2,10-2.4h.9c13.4-1.3,27.3-3.6,38.9-11.5,17.2-11.8,20.8-30.7,20.8-44.5,0-32.1-23.3-53.6-58.1-53.6s-9.1-.7-13.4-2.1l-.5-.2c-.5-.1-1-.3-1.5-.5-1.3-.5-2.7-1.1-4.3-2l-.5-.3c-5.7-3-10.8-7.3-14.7-12.5-12-15.9-11.9-38,0-53.8,4.9-6.4,11.4-11.4,18.8-14.3h0Z"
                                ></path>
                            </svg>
                        </div>
                        <div class="max-w-full">
                            <h3 class="text-20 mb-0/5em lqd-iconbox-heading text-primary">Powered By Movement</h3>
                            <h3
                                class="lqd-text-reveal-el text-20 leading-25 text-yellow-100 m-0"
                                data-split-text="true"
                                data-split-options='{"type": "words, chars"}'
                                data-parallax="true"
                                data-parallax-options='{"parallaxTargets": ".lqd-chars, figure", "start": "top 50%", "end": "bottom bottom", "scrub" : 3}'
                                data-parallax-from='{"opacity" : 0.2}'
                                data-parallax-to='{"opacity" : 1, "stagger": {"from": "start", "each" : 1}}'
                            >
                                Built on Movement, the 1st parallelized MoveVM ZK layer 2 on Ethereum; delivering 160,000+ TPS, with < $0.01 gas fee.
                            </h3>
                        </div>
                    </div>
                </div>
                <div class="col flex-auto w-30percent sm:w-full">
                    <div class="flex flex-col gap-30 animation-element">
                        <div class="max-w-full flex items-center text-40 text-primary border-primary mb-10">
                            <svg class="w-1em h-1em" xmlns="http://www.w3.org/2000/svg" width="256" height="256" viewbox="0 0 24 24" fill="currentColor">
                                <path d="m7,23H1v-4.5c0-.828.672-1.5,1.5-1.5h3c.828,0,1.5.672,1.5,1.5v4.5Zm8-4.5c0-.828-.672-1.5-1.5-1.5h-3c-.828,0-1.5.672-1.5,1.5v4.5h6v-4.5Zm0-16c0-.828-.672-1.5-1.5-1.5h-3c-.828,0-1.5.672-1.5,1.5v4.5h6V2.5Zm8,16c0-.828-.672-1.5-1.5-1.5h-3c-.828,0-1.5.672-1.5,1.5v4.5h6v-4.5Zm-12-8c0-.828-.672-1.5-1.5-1.5h-3c-.828,0-1.5.672-1.5,1.5v4.5h6v-4.5Zm8,0c0-.828-.672-1.5-1.5-1.5h-3c-.828,0-1.5.672-1.5,1.5v4.5h6v-4.5Z"/>
                            </svg>
                        </div>
                        <div class="max-w-full">
                            <h3 class="text-20 mb-0/5em lqd-iconbox-heading text-primary">Web3 Mobile OS</h3>
                            <h3
                                class="lqd-text-reveal-el text-20 leading-25 text-yellow-100 m-0"
                                data-split-text="true"
                                data-split-options='{"type": "words, chars"}'
                                data-parallax="true"
                                data-parallax-options='{"parallaxTargets": ".lqd-chars, figure", "start": "top 60%", "end": "bottom bottom", "scrub" : 3}'
                                data-parallax-from='{"opacity" : 0.2}'
                                data-parallax-to='{"opacity" : 1, "stagger": {"from": "start", "each" : 1}}'
                            >
                                UpOS is a Web3 native mobile operating system built on Android, offering regular smartphone features plus native Web3 features, easily installed on compatible Android devices to seamlessly enhance your Web3 native mobile experience.
                            </h3>
                        </div>
                    </div>
                </div>
                <div class="col flex-auto w-30percent sm:w-full">
                    <div class="flex flex-col gap-30 animation-element">
                        <div class="max-w-full flex items-center text-40 text-primary border-primary mb-10">
                            <svg class="w-1em h-1em" xmlns="http://www.w3.org/2000/svg" width="256" height="256" viewbox="0 0 24 24" fill="currentColor">
                                <path d="M3,4H24V2H3C1.346,2,0,3.346,0,5v14c0,1.654,1.346,3,3,3H24V6H3c-.552,0-1-.449-1-1s.448-1,1-1ZM20,13c.552,0,1,.448,1,1s-.448,1-1,1-1-.448-1-1,.448-1,1-1Z"/>
                            </svg>
                        </div>
                        <div class="max-w-full">
                            <h3 class="text-20 mb-0/5em lqd-iconbox-heading text-primary">Native Wallets & Lite Nodes</h3>
                            <h3
                                class="lqd-text-reveal-el text-20 leading-25 text-yellow-100 m-0"
                                data-split-text="true"
                                data-split-options='{"type": "words, chars"}'
                                data-parallax="true"
                                data-parallax-options='{"parallaxTargets": ".lqd-chars, figure", "start": "top 55%", "end": "bottom bottom", "scrub" : 3}'
                                data-parallax-from='{"opacity" : 0.2}'
                                data-parallax-to='{"opacity" : 1, "stagger": {"from": "start", "each" : 1}}'
                            >
                                Each UpOS device acts as a lite node for DeMIN, with native wallets offering headless-signature for seamless Web2 and Web3 integration.
                            </h3>
                        </div>
                    </div>
                </div>
                <div class="col flex-auto w-30percent sm:w-full">
                    <div class="flex flex-col gap-30 animation-element">
                        <div class="max-w-full flex items-center text-40 text-primary border-primary mb-10">
                            <svg class="w-1em h-1em" xmlns="http://www.w3.org/2000/svg" width="256" height="256" viewbox="0 0 24 24" fill="currentColor">
                                <path d="M3,1.5c0,.83-.67,1.5-1.5,1.5S0,2.33,0,1.5,.67,0,1.5,0s1.5,.67,1.5,1.5Zm-1.5,3.5c-.83,0-1.5,.67-1.5,1.5s.67,1.5,1.5,1.5,1.5-.67,1.5-1.5-.67-1.5-1.5-1.5Zm21,0c-.83,0-1.5,.67-1.5,1.5s.67,1.5,1.5,1.5,1.5-.67,1.5-1.5-.67-1.5-1.5-1.5ZM1.5,16c-.83,0-1.5,.67-1.5,1.5s.67,1.5,1.5,1.5,1.5-.67,1.5-1.5-.67-1.5-1.5-1.5Zm21,0c-.83,0-1.5,.67-1.5,1.5s.67,1.5,1.5,1.5,1.5-.67,1.5-1.5-.67-1.5-1.5-1.5ZM22.5,0c-.83,0-1.5,.67-1.5,1.5s.67,1.5,1.5,1.5,1.5-.67,1.5-1.5-.67-1.5-1.5-1.5Zm-5,0c-.83,0-1.5,.67-1.5,1.5s.67,1.5,1.5,1.5,1.5-.67,1.5-1.5-.67-1.5-1.5-1.5Zm-5.5,0c-.83,0-1.5,.67-1.5,1.5s.67,1.5,1.5,1.5,1.5-.67,1.5-1.5-.67-1.5-1.5-1.5ZM6.5,0c-.83,0-1.5,.67-1.5,1.5s.67,1.5,1.5,1.5,1.5-.67,1.5-1.5-.67-1.5-1.5-1.5ZM1.5,10.5c-.83,0-1.5,.67-1.5,1.5s.67,1.5,1.5,1.5,1.5-.67,1.5-1.5-.67-1.5-1.5-1.5Zm21,0c-.83,0-1.5,.67-1.5,1.5s.67,1.5,1.5,1.5,1.5-.67,1.5-1.5-.67-1.5-1.5-1.5Zm-5,0c-.83,0-1.5,.67-1.5,1.5s.67,1.5,1.5,1.5,1.5-.67,1.5-1.5-.67-1.5-1.5-1.5Zm-5.5,0c-.83,0-1.5,.67-1.5,1.5s.67,1.5,1.5,1.5,1.5-.67,1.5-1.5-.67-1.5-1.5-1.5Zm-5.5,0c-.83,0-1.5,.67-1.5,1.5s.67,1.5,1.5,1.5,1.5-.67,1.5-1.5-.67-1.5-1.5-1.5ZM1.5,21c-.83,0-1.5,.67-1.5,1.5s.67,1.5,1.5,1.5,1.5-.67,1.5-1.5-.67-1.5-1.5-1.5Zm21,0c-.83,0-1.5,.67-1.5,1.5s.67,1.5,1.5,1.5,1.5-.67,1.5-1.5-.67-1.5-1.5-1.5Zm-5,0c-.83,0-1.5,.67-1.5,1.5s.67,1.5,1.5,1.5,1.5-.67,1.5-1.5-.67-1.5-1.5-1.5Zm-5.5,0c-.83,0-1.5,.67-1.5,1.5s.67,1.5,1.5,1.5,1.5-.67,1.5-1.5-.67-1.5-1.5-1.5Zm-5.5,0c-.83,0-1.5,.67-1.5,1.5s.67,1.5,1.5,1.5,1.5-.67,1.5-1.5-.67-1.5-1.5-1.5Zm7-3.5c0-.83-.67-1.5-1.5-1.5s-1.5,.67-1.5,1.5,.67,1.5,1.5,1.5,1.5-.67,1.5-1.5Zm0-11c0-.83-.67-1.5-1.5-1.5s-1.5,.67-1.5,1.5,.67,1.5,1.5,1.5,1.5-.67,1.5-1.5Z"/></svg>
                            </svg>
                        </div>
                        <div class="max-w-full">
                            <h3 class="text-20 mb-0/5em lqd-iconbox-heading text-primary">Self Integrated With OEM Partners</h3>
                            <h3
                                class="lqd-text-reveal-el text-20 leading-25 text-yellow-100 m-0"
                                data-split-text="true"
                                data-split-options='{"type": "words, chars"}'
                                data-parallax="true"
                                data-parallax-options='{"parallaxTargets": ".lqd-chars, figure", "start": "top 60%", "end": "bottom bottom", "scrub" : 3}'
                                data-parallax-from='{"opacity" : 0.2}'
                                data-parallax-to='{"opacity" : 1, "stagger": {"from": "start", "each" : 1}}'
                            >
                                Anyone can integrate UpOS and DeMIN to the compatible Android devices while qualified OEM partners get better rewards.
                            </h3>
                        </div>
                    </div>
                </div>
                <div class="col flex-auto w-30percent sm:w-full">
                    <div class="flex flex-col gap-30 animation-element">
                        <div class="max-w-full flex items-center text-40 text-primary border-primary mb-10">
                            <svg class="w-1em h-1em" xmlns="http://www.w3.org/2000/svg" width="256" height="256" viewbox="0 0 512 512" fill="currentColor">
                                    <path class="cls-1" d="M0,64v170.7h234.7V0H64C28.7,0,0,28.7,0,64Z"/>
                                    <path class="cls-1" d="M0,448c0,35.3,28.7,64,64,64h170.7v-234.7H0v170.7Z"/>
                                    <path class="cls-1" d="M277.3,277.3v234.7h170.7c35.3,0,64-28.7,64-64v-170.7h-234.7Z"/>
                                    <polygon class="cls-1" points="362.7 234.7 405.3 234.7 405.3 149.3 490.7 149.3 490.7 106.7 405.3 106.7 405.3 21.3 362.7 21.3 362.7 106.7 277.3 106.7 277.3 149.3 362.7 149.3 362.7 234.7"/>
                            </svg>
                        </div>
                        <div class="max-w-full">
                            <h3 class="text-20 mb-0/5em lqd-iconbox-heading text-primary">DApp & DePIN Ecosystem</h3>
                            <h3
                                class="lqd-text-reveal-el text-20 leading-25 text-yellow-100 m-0"
                                data-split-text="true"
                                data-split-options='{"type": "words, chars"}'
                                data-parallax="true"
                                data-parallax-options='{"parallaxTargets": ".lqd-chars, figure", "start": "top 70%", "end": "bottom bottom", "scrub" : 3}'
                                data-parallax-from='{"opacity" : 0.2}'
                                data-parallax-to='{"opacity" : 1, "stagger": {"from": "start", "each" : 1}}'
                            >
                                The dApp and DePIN ecosystems combine to offer a powerful mobile platform where users can easily access and use Web3 services through dApps, while also supporting versatile sensors and chips for seamless integration with DePIN accessories.
                            </h3>
                        </div>
                    </div>
                </div>
                <div class="col flex-auto w-30percent sm:w-full">
                    <div class="flex flex-col gap-30 animation-element">
                        <div class="max-w-full flex items-center text-40 text-primary border-primary mb-10">
                            <svg class="w-1em h-1em" xmlns="http://www.w3.org/2000/svg" width="256" height="256" viewbox="0 0 24 24" fill="currentColor">
                                <path d="M6.486,22.143,5.457,20.428C9,18.3,9,13.73,9,11a3,3,0,0,1,6,0H13a1,1,0,0,0-2,0C11,13.947,11,19.434,6.486,22.143Zm8.41-8.059L12.9,13.916c-.316,3.729-1.525,6.615-3.592,8.58l1.377,1.449C13.123,21.634,14.538,18.315,14.9,14.084Zm2.746,6.255-1.881-.678a15.57,15.57,0,0,1-1.6,3.235l1.674,1.094A17.538,17.538,0,0,0,17.642,20.339ZM19,11A7,7,0,0,0,6.787,6.333L8.276,7.667A5,5,0,0,1,17,11a29.686,29.686,0,0,1-.462,5.809l1.963.382A31.459,31.459,0,0,0,19,11ZM7,11a5,5,0,0,1,.069-.833L5.1,9.833A6.971,6.971,0,0,0,5,11c0,4.645-1.346,7-4,7v2C4.869,20,7,16.8,7,11Zm16,0a10.865,10.865,0,0,0-1.1-4.794l-1.8.875A8.9,8.9,0,0,1,21,11a27.569,27.569,0,0,1-2.274,11.921l1.8.861A29.414,29.414,0,0,0,23,11ZM3,11a9.01,9.01,0,0,1,9-9,8.911,8.911,0,0,1,5.4,1.8l1.2-1.6A10.9,10.9,0,0,0,12,0,11.013,11.013,0,0,0,1,11v3H3Z"/>
                            </svg>
                        </div>
                        <div class="max-w-full">
                            <h3 class="text-20 mb-0/5em lqd-iconbox-heading text-primary">Proof Of Personhood</h3>
                            <h3
                                class="lqd-text-reveal-el text-20 leading-25 text-yellow-100 m-0"
                                data-split-text="true"
                                data-split-options='{"type": "words, chars"}'
                                data-parallax="true"
                                data-parallax-options='{"parallaxTargets": ".lqd-chars, figure", "start": "top 65%", "end": "bottom bottom", "scrub" : 3}'
                                data-parallax-from='{"opacity" : 0.2}'
                                data-parallax-to='{"opacity" : 1, "stagger": {"from": "start", "each" : 1}}'
                            >
                                Up ID links your fingerprint to your identity through Zero-Knowledge Proofs. This makes it mathematically impossible to link usage of your identity cross various dApps. 
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="lqd-section how-it-works px-10 pt-90" id="how-it-works">
        <!-- <div class="absolute max-w-full w-full ltr-left-0 -top-100vh z-0 p-0 module-img pointer-events-none">
            <div class="lqd-imggrp-single block relative">
                <div class="lqd-imggrp-img-container inline-flex relative w-full items-center justify-center">
                    <figure class="w-full relative"><img class="w-full max-w-full" width="1675" height="2962" src="assets/images/how-it-work/glows1.png" alt="bg how it work" /></figure>
                </div>
            </div>
        </div> -->
        <div class="container">
            <div class="row h-full">
                <div class="col col-12 p-0 min-h-70vh flex flex-row flex-wrap items-center self-stretch flex-grow-1 flex-shrink-0 module-top mb-30 lg:flex-col lg:justify-center">
                    <div class="w-50percent flex flex-col p-10 overflow-hidden transition-bg rounded-30 flex-grow-1 flex-shrink-0 mb-30 lg:w-full">
                        <div
                            class="lqd-imggrp-single block relative max-w-full text-center"
                            data-parallax="true"
                            data-parallax-options='{"ease": "linear", "start": "top bottom", "end": "bottom top"}'
                            data-parallax-from='{"y": "-120px", "z": "0px", "scaleX" : 1.2, "scaleY" : 1.2}'
                            data-parallax-to='{"y": "0px", "z": "120px", "scaleX" : 1.1, "scaleY" : 1.1}'
                        >
                            <div class="lqd-imggrp-img-container inline-flex relative items-center justify-center">
                                <figure class="w-full relative" data-reveal="true" data-reveal-options='{"direction": "tb"}'>
                                    <img class="rounded-30 w-560" width="1120" height="1320" src="assets/images/how-it-work/section-gif-01-bw.gif" alt="user insight" />
                                </figure>
                            </div>
                        </div>
                    </div>
                    <div
                        class="w-50percent flex flex-col gap-30 p-10 transition-bg text-center flex-grow-1 flex-shrink-0 lg:w-full"
                        data-custom-animations="true"
                        data-ca-options='{"animationTarget": ".animation-element:not([data-split-text]), .animation-element .split-inner .lqd-words", "duration" : 800, "delay" : 70, "ease": "expo.out", "initValues": {"scaleX" : 0.7, "scaleY" : 0.7, "rotationZ" : 2, "opacity" : 0} , "animations": {"scaleX" : 1, "scaleY" : 1, "rotationZ" : 0, "opacity" : 1}}'
                    >
                        <div class="ld-fancy-heading relative flex items-center self-center bg-primary rounded-4 px-15 animation-element">
                            <h6 class="ld-fh-element font-silkscreen relative m-0 text-12 font-medium uppercase leading-1em tracking-1 text-black py-5 pr-0 pl-5">Web3 OS experience</h6>
                        </div>
                        <div class="ld-fancy-heading relative max-w-full animation-element">
                            <h2 class="ld-fh-element relative m-0 text-white" data-split-text="true" data-split-options='{"type": "chars, words"}'>The Up<span class="font-chakra-petch font-thin">OS</span></h2>
                        </div>
                        <div class="max-w-full">
                            <p
                                class="lqd-text-reveal-el mt-0 mb-0 px-5percent text-34 leading-40 text-yellow-100 text-center animation-element"
                                data-split-text="true"
                                data-split-options='{"type": "words, chars"}'
                                data-parallax="true"
                                data-parallax-options='{"parallaxTargets": ".lqd-chars, figure", "start": "top 70%", "end": "bottom bottom", "scrub" : 3}'
                                data-parallax-from='{"opacity" : 0.2}'
                                data-parallax-to='{"opacity" : 1, "stagger": {"from": "start", "each" : 1}}'
                            >
                                UpOS is a Web3 native mobile operating system built on Android, offering regular smartphone features plus native Web3 features, easily installed on compatible Android devices to seamlessly enhance your Web3 native mobile experience.
                            </p>
                        </div>
                    </div>
                </div>
                <div
                    class="col col-12 p-0 min-h-70vh flex flex-row flex-wrap items-center self-stretch flex-grow-1 flex-shrink-0 lg:flex-col lg:justify-center"
                    data-custom-animations="true"
                    data-ca-options='{"animationTarget": ".animation-element, .animation-element .split-inner .lqd-words", "duration" : 800, "delay" : 70, "ease": "expo.out", "initValues": {"scaleX" : 0.7, "scaleY" : 0.7, "rotationZ" : 3, "opacity" : 0} , "animations": {"scaleX" : 1, "scaleY" : 1, "rotationZ" : 0, "opacity" : 1}}'
                >
                    <div class="w-50percent flex flex-col gap-30 p-10 transition-bg text-center flex-grow-1 flex-shrink-0 lg:w-full">
                        <div class="ld-fancy-heading relative flex items-center self-center bg-primary rounded-4 px-15 animation-element">
                            <h6 class="ld-fh-element font-silkscreen relative m-0 text-12 font-medium uppercase leading-1em tracking-1 text-black py-5 pr-0 pl-5">DeMIN + Accessories</h6>
                        </div>
                        <div class="ld-fancy-heading relative max-w-full animation-element">
                            <h2 class="ld-fh-element relative m-0 text-white text-80" data-split-text="true" data-split-options='{"type": "chars, words"}'><span class="font-chakra-petch font-thin">dePIN = </span><span class="text-primary">DeMIN</span> + Accessories</h2>
                        </div>
                        <div class="max-w-full">
                            <p
                                class="lqd-text-reveal-el mt-0 mb-0 px-5percent text-34 leading-40 text-yellow-100 text-center animation-element"
                                data-split-text="true"
                                data-split-options='{"type": "words, chars"}'
                                data-parallax="true"
                                data-parallax-options='{"parallaxTargets": ".lqd-chars, figure", "start": "top 70%", "end": "bottom bottom", "scrub" : 3}'
                                data-parallax-from='{"opacity" : 0.2}'
                                data-parallax-to='{"opacity" : 1, "stagger": {"from": "start", "each" : 1}}'
                            >
                                Your mobile compute powerhouse is equipped with most versatile sensors and chips, it’s ready to plug and play any 3rd party <span class="text-primary">DePIN</span> accessories and operate <span class="text-primary">AI</span> agencies.
                            </p>
                        </div>
                    </div>
                    <div class="w-50percent flex flex-col p-10 overflow-hidden transition-bg rounded-30 flex-grow-1 flex-shrink-0 mb-30 lg:w-full lg:order-first">
                        <div
                            class="lqd-imggrp-single block relative max-w-full text-center"
                            data-parallax="true"
                            data-parallax-options='{"ease" :"linear", "start": "top bottom", "end": "bottom top"}'
                            data-parallax-from='{"y": "-120px", "scaleX" : 1.1, "scaleY" : 1.1}'
                            data-parallax-to='{"y": "120px", "scaleX" : 1.2, "scaleY" : 1.2}'
                        >
                            <div class="lqd-imggrp-img-container inline-flex relative items-center justify-center">
                                <figure class="w-full relative" data-reveal="true" data-reveal-options='{"direction": "tb"}'>
                                    <img class="rounded-30 w-560" width="1120" height="1320" src="assets/images/how-it-work/section-gif-02-bw.gif" alt="api access" />
                                </figure>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section
        class="lqd-section carousel-button py-100"
        data-custom-animations="true"
        data-ca-options='{"animationTarget": "[data-lqd-flickity]> .flickity-viewport > .flickity-slider > .carousel-item > .carousel-item-inner", "duration" : 800, "delay" : 75, "ease": "expo.out", "direction": "random", "initValues": {"scaleX" : 0.8, "scaleY" : 0.8, "opacity" : 0} , "animations": {"scaleX" : 1, "scaleY" : 1, "opacity" : 1}}'
    >
        <div class="container-fluid p-0">
            <div class="row m-0">
                <div class="col col-12 p-0">
                    <div class="carousel-container relative carousel-nav-shaped">
                        <div
                            class="carousel-items relative lqd-fade-sides"
                            data-lqd-flickity='{"marquee": true, "percentPosition": false, "columnsAutoWidth": true, "marqueeTickerSpeed": "0.5", "pauseAutoPlayOnHover": false}'
                        >
                            <div class="flickity-viewport relative w-full overflow-hidden">
                                <div class="flickity-slider flex w-full h-full relative items-center">
                                    <div class="carousel-item flex flex-col justify-center has-one-child">
                                        <div class="flex flex-row gap-30 whitespace-nowrap">
                                            <a class="btn btn-solid btn-sm btn-hover-txt-liquid-y btn-icon-left bg-white-5 shadow-sm rounded-10 text-white text-15">
                                                <span
                                                    data-text="Help me write a story"
                                                    class="btn-txt"
                                                    data-transition-delay="true"
                                                    data-delay-options='{"elements":  ".lqd-chars", "delayType":  "animation", "startDelay":  0, "delayBetween":  32.5}'
                                                    data-split-text="true"
                                                    data-split-options='{"type":  "chars, words"}'
                                                >
                                                    Up Network
                                                </span>
                                                <span class="btn-icon text-1em text-primary mr-10">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="12.885" height="12.894" viewbox="0 0 12.885 12.894">
                                                        <path
                                                            d="M6.451-6.047A25.07,25.07,0,0,0,3.916-4.86,6.916,6.916,0,0,0,2.443-3.814,6.718,6.718,0,0,0,1.4-2.355,25.1,25.1,0,0,0,.193.22h-.36A26.15,26.15,0,0,0-1.38-2.355,6.924,6.924,0,0,0-2.417-3.814,6.916,6.916,0,0,0-3.889-4.86,24.748,24.748,0,0,0-6.434-6.047v-.36A24.44,24.44,0,0,0-3.88-7.594,6.687,6.687,0,0,0-2.417-8.64,6.924,6.924,0,0,0-1.38-10.1,26.15,26.15,0,0,0-.167-12.674h.36A25.1,25.1,0,0,0,1.4-10.1,6.718,6.718,0,0,0,2.443-8.64,6.468,6.468,0,0,0,3.9-7.594,24.44,24.44,0,0,0,6.451-6.407Z"
                                                            transform="translate(6.434 12.674)"
                                                            fill="currentColor"
                                                        ></path>
                                                    </svg>
                                                </span>
                                            </a>
                                            <a class="btn btn-solid btn-sm btn-hover-txt-liquid-y btn-icon-left bg-white-5 shadow-sm rounded-10 text-white text-15">
                                                <span
                                                    data-text="Help me plan my trip"
                                                    class="btn-txt"
                                                    data-transition-delay="true"
                                                    data-delay-options='{"elements":  ".lqd-chars", "delayType":  "animation", "startDelay":  0, "delayBetween":  32.5}'
                                                    data-split-text="true"
                                                    data-split-options='{"type":  "chars, words"}'
                                                >
                                                    Up OS
                                                </span>
                                                <span class="btn-icon text-1em text-primary mr-10">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="12.885" height="12.894" viewbox="0 0 12.885 12.894">
                                                        <path
                                                            d="M6.451-6.047A25.07,25.07,0,0,0,3.916-4.86,6.916,6.916,0,0,0,2.443-3.814,6.718,6.718,0,0,0,1.4-2.355,25.1,25.1,0,0,0,.193.22h-.36A26.15,26.15,0,0,0-1.38-2.355,6.924,6.924,0,0,0-2.417-3.814,6.916,6.916,0,0,0-3.889-4.86,24.748,24.748,0,0,0-6.434-6.047v-.36A24.44,24.44,0,0,0-3.88-7.594,6.687,6.687,0,0,0-2.417-8.64,6.924,6.924,0,0,0-1.38-10.1,26.15,26.15,0,0,0-.167-12.674h.36A25.1,25.1,0,0,0,1.4-10.1,6.718,6.718,0,0,0,2.443-8.64,6.468,6.468,0,0,0,3.9-7.594,24.44,24.44,0,0,0,6.451-6.407Z"
                                                            transform="translate(6.434 12.674)"
                                                            fill="currentColor"
                                                        ></path>
                                                    </svg>
                                                </span>
                                            </a>
                                            <a class="btn btn-solid btn-sm btn-hover-txt-liquid-y btn-icon-left bg-white-5 shadow-sm rounded-10 text-white text-15">
                                                <span
                                                    data-text="Find me a good restaurant"
                                                    class="btn-txt"
                                                    data-transition-delay="true"
                                                    data-delay-options='{"elements":  ".lqd-chars", "delayType":  "animation", "startDelay":  0, "delayBetween":  32.5}'
                                                    data-split-text="true"
                                                    data-split-options='{"type":  "chars, words"}'
                                                >
                                                    Up Mobile
                                                </span>
                                                <span class="btn-icon text-1em text-primary mr-10">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="12.885" height="12.894" viewbox="0 0 12.885 12.894">
                                                        <path
                                                            d="M6.451-6.047A25.07,25.07,0,0,0,3.916-4.86,6.916,6.916,0,0,0,2.443-3.814,6.718,6.718,0,0,0,1.4-2.355,25.1,25.1,0,0,0,.193.22h-.36A26.15,26.15,0,0,0-1.38-2.355,6.924,6.924,0,0,0-2.417-3.814,6.916,6.916,0,0,0-3.889-4.86,24.748,24.748,0,0,0-6.434-6.047v-.36A24.44,24.44,0,0,0-3.88-7.594,6.687,6.687,0,0,0-2.417-8.64,6.924,6.924,0,0,0-1.38-10.1,26.15,26.15,0,0,0-.167-12.674h.36A25.1,25.1,0,0,0,1.4-10.1,6.718,6.718,0,0,0,2.443-8.64,6.468,6.468,0,0,0,3.9-7.594,24.44,24.44,0,0,0,6.451-6.407Z"
                                                            transform="translate(6.434 12.674)"
                                                            fill="currentColor"
                                                        ></path>
                                                    </svg>
                                                </span>
                                            </a>
                                            <a class="btn btn-solid btn-sm btn-hover-txt-liquid-y btn-icon-left bg-white-5 shadow-sm rounded-10 text-white text-15">
                                                <span
                                                    data-text="Help me get fit"
                                                    class="btn-txt"
                                                    data-transition-delay="true"
                                                    data-delay-options='{"elements":  ".lqd-chars", "delayType":  "animation", "startDelay":  0, "delayBetween":  32.5}'
                                                    data-split-text="true"
                                                    data-split-options='{"type":  "chars, words"}'
                                                >
                                                    Up Wallet
                                                </span>
                                                <span class="btn-icon text-1em text-primary mr-10">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="12.885" height="12.894" viewbox="0 0 12.885 12.894">
                                                        <path
                                                            d="M6.451-6.047A25.07,25.07,0,0,0,3.916-4.86,6.916,6.916,0,0,0,2.443-3.814,6.718,6.718,0,0,0,1.4-2.355,25.1,25.1,0,0,0,.193.22h-.36A26.15,26.15,0,0,0-1.38-2.355,6.924,6.924,0,0,0-2.417-3.814,6.916,6.916,0,0,0-3.889-4.86,24.748,24.748,0,0,0-6.434-6.047v-.36A24.44,24.44,0,0,0-3.88-7.594,6.687,6.687,0,0,0-2.417-8.64,6.924,6.924,0,0,0-1.38-10.1,26.15,26.15,0,0,0-.167-12.674h.36A25.1,25.1,0,0,0,1.4-10.1,6.718,6.718,0,0,0,2.443-8.64,6.468,6.468,0,0,0,3.9-7.594,24.44,24.44,0,0,0,6.451-6.407Z"
                                                            transform="translate(6.434 12.674)"
                                                            fill="currentColor"
                                                        ></path>
                                                    </svg>
                                                </span>
                                            </a>
                                            <a class="btn btn-solid btn-sm btn-hover-txt-liquid-y btn-icon-left bg-white-5 shadow-sm rounded-10 text-white text-15">
                                                <span
                                                    data-text="Write a Python Script"
                                                    class="btn-txt"
                                                    data-transition-delay="true"
                                                    data-delay-options='{"elements":  ".lqd-chars", "delayType":  "animation", "startDelay":  0, "delayBetween":  32.5}'
                                                    data-split-text="true"
                                                    data-split-options='{"type":  "chars, words"}'
                                                >
                                                    Up Store
                                                </span>
                                                <span class="btn-icon text-1em text-primary mr-10">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="12.885" height="12.894" viewbox="0 0 12.885 12.894">
                                                        <path
                                                            d="M6.451-6.047A25.07,25.07,0,0,0,3.916-4.86,6.916,6.916,0,0,0,2.443-3.814,6.718,6.718,0,0,0,1.4-2.355,25.1,25.1,0,0,0,.193.22h-.36A26.15,26.15,0,0,0-1.38-2.355,6.924,6.924,0,0,0-2.417-3.814,6.916,6.916,0,0,0-3.889-4.86,24.748,24.748,0,0,0-6.434-6.047v-.36A24.44,24.44,0,0,0-3.88-7.594,6.687,6.687,0,0,0-2.417-8.64,6.924,6.924,0,0,0-1.38-10.1,26.15,26.15,0,0,0-.167-12.674h.36A25.1,25.1,0,0,0,1.4-10.1,6.718,6.718,0,0,0,2.443-8.64,6.468,6.468,0,0,0,3.9-7.594,24.44,24.44,0,0,0,6.451-6.407Z"
                                                            transform="translate(6.434 12.674)"
                                                            fill="currentColor"
                                                        ></path>
                                                    </svg>
                                                </span>
                                            </a>
                                            <a class="btn btn-solid btn-sm btn-hover-txt-liquid-y btn-icon-left bg-white-5 shadow-sm rounded-10 text-white text-15">
                                                <span
                                                    data-text="Create a 3 course menu"
                                                    class="btn-txt"
                                                    data-transition-delay="true"
                                                    data-delay-options='{"elements":  ".lqd-chars", "delayType":  "animation", "startDelay":  0, "delayBetween":  32.5}'
                                                    data-split-text="true"
                                                    data-split-options='{"type":  "chars, words"}'
                                                >
                                                    Up Network
                                                </span>
                                                <span class="btn-icon text-1em text-primary mr-10">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="12.885" height="12.894" viewbox="0 0 12.885 12.894">
                                                        <path
                                                            d="M6.451-6.047A25.07,25.07,0,0,0,3.916-4.86,6.916,6.916,0,0,0,2.443-3.814,6.718,6.718,0,0,0,1.4-2.355,25.1,25.1,0,0,0,.193.22h-.36A26.15,26.15,0,0,0-1.38-2.355,6.924,6.924,0,0,0-2.417-3.814,6.916,6.916,0,0,0-3.889-4.86,24.748,24.748,0,0,0-6.434-6.047v-.36A24.44,24.44,0,0,0-3.88-7.594,6.687,6.687,0,0,0-2.417-8.64,6.924,6.924,0,0,0-1.38-10.1,26.15,26.15,0,0,0-.167-12.674h.36A25.1,25.1,0,0,0,1.4-10.1,6.718,6.718,0,0,0,2.443-8.64,6.468,6.468,0,0,0,3.9-7.594,24.44,24.44,0,0,0,6.451-6.407Z"
                                                            transform="translate(6.434 12.674)"
                                                            fill="currentColor"
                                                        ></path>
                                                    </svg>
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                    <div class="carousel-item flex flex-col justify-center has-one-child">
                                        <div class="flex flex-row gap-30 whitespace-nowrap">
                                            <a class="btn btn-solid btn-sm btn-hover-txt-liquid-y btn-icon-left bg-white-5 shadow-sm rounded-10 text-white text-15">
                                                <span
                                                    data-text="Help me write a story"
                                                    class="btn-txt"
                                                    data-transition-delay="true"
                                                    data-delay-options='{"elements":  ".lqd-chars", "delayType":  "animation", "startDelay":  0, "delayBetween":  32.5}'
                                                    data-split-text="true"
                                                    data-split-options='{"type":  "chars, words"}'
                                                >
                                                    Up OS
                                                </span>
                                                <span class="btn-icon text-1em text-primary mr-10">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="12.885" height="12.894" viewbox="0 0 12.885 12.894">
                                                        <path
                                                            d="M6.451-6.047A25.07,25.07,0,0,0,3.916-4.86,6.916,6.916,0,0,0,2.443-3.814,6.718,6.718,0,0,0,1.4-2.355,25.1,25.1,0,0,0,.193.22h-.36A26.15,26.15,0,0,0-1.38-2.355,6.924,6.924,0,0,0-2.417-3.814,6.916,6.916,0,0,0-3.889-4.86,24.748,24.748,0,0,0-6.434-6.047v-.36A24.44,24.44,0,0,0-3.88-7.594,6.687,6.687,0,0,0-2.417-8.64,6.924,6.924,0,0,0-1.38-10.1,26.15,26.15,0,0,0-.167-12.674h.36A25.1,25.1,0,0,0,1.4-10.1,6.718,6.718,0,0,0,2.443-8.64,6.468,6.468,0,0,0,3.9-7.594,24.44,24.44,0,0,0,6.451-6.407Z"
                                                            transform="translate(6.434 12.674)"
                                                            fill="currentColor"
                                                        ></path>
                                                    </svg>
                                                </span>
                                            </a>
                                            <a class="btn btn-solid btn-sm btn-hover-txt-liquid-y btn-icon-left bg-white-5 shadow-sm rounded-10 text-white text-15">
                                                <span
                                                    data-text="Help me plan my trip"
                                                    class="btn-txt"
                                                    data-transition-delay="true"
                                                    data-delay-options='{"elements":  ".lqd-chars", "delayType":  "animation", "startDelay":  0, "delayBetween":  32.5}'
                                                    data-split-text="true"
                                                    data-split-options='{"type":  "chars, words"}'
                                                >
                                                    Up Mobile
                                                </span>
                                                <span class="btn-icon text-1em text-primary mr-10">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="12.885" height="12.894" viewbox="0 0 12.885 12.894">
                                                        <path
                                                            d="M6.451-6.047A25.07,25.07,0,0,0,3.916-4.86,6.916,6.916,0,0,0,2.443-3.814,6.718,6.718,0,0,0,1.4-2.355,25.1,25.1,0,0,0,.193.22h-.36A26.15,26.15,0,0,0-1.38-2.355,6.924,6.924,0,0,0-2.417-3.814,6.916,6.916,0,0,0-3.889-4.86,24.748,24.748,0,0,0-6.434-6.047v-.36A24.44,24.44,0,0,0-3.88-7.594,6.687,6.687,0,0,0-2.417-8.64,6.924,6.924,0,0,0-1.38-10.1,26.15,26.15,0,0,0-.167-12.674h.36A25.1,25.1,0,0,0,1.4-10.1,6.718,6.718,0,0,0,2.443-8.64,6.468,6.468,0,0,0,3.9-7.594,24.44,24.44,0,0,0,6.451-6.407Z"
                                                            transform="translate(6.434 12.674)"
                                                            fill="currentColor"
                                                        ></path>
                                                    </svg>
                                                </span>
                                            </a>
                                            <a class="btn btn-solid btn-sm btn-hover-txt-liquid-y btn-icon-left bg-white-5 shadow-sm rounded-10 text-white text-15">
                                                <span
                                                    data-text="Find me a good restaurant"
                                                    class="btn-txt"
                                                    data-transition-delay="true"
                                                    data-delay-options='{"elements":  ".lqd-chars", "delayType":  "animation", "startDelay":  0, "delayBetween":  32.5}'
                                                    data-split-text="true"
                                                    data-split-options='{"type":  "chars, words"}'
                                                >
                                                    Up Wallet
                                                </span>
                                                <span class="btn-icon text-1em text-primary mr-10">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="12.885" height="12.894" viewbox="0 0 12.885 12.894">
                                                        <path
                                                            d="M6.451-6.047A25.07,25.07,0,0,0,3.916-4.86,6.916,6.916,0,0,0,2.443-3.814,6.718,6.718,0,0,0,1.4-2.355,25.1,25.1,0,0,0,.193.22h-.36A26.15,26.15,0,0,0-1.38-2.355,6.924,6.924,0,0,0-2.417-3.814,6.916,6.916,0,0,0-3.889-4.86,24.748,24.748,0,0,0-6.434-6.047v-.36A24.44,24.44,0,0,0-3.88-7.594,6.687,6.687,0,0,0-2.417-8.64,6.924,6.924,0,0,0-1.38-10.1,26.15,26.15,0,0,0-.167-12.674h.36A25.1,25.1,0,0,0,1.4-10.1,6.718,6.718,0,0,0,2.443-8.64,6.468,6.468,0,0,0,3.9-7.594,24.44,24.44,0,0,0,6.451-6.407Z"
                                                            transform="translate(6.434 12.674)"
                                                            fill="currentColor"
                                                        ></path>
                                                    </svg>
                                                </span>
                                            </a>
                                            <a class="btn btn-solid btn-sm btn-hover-txt-liquid-y btn-icon-left bg-white-5 shadow-sm rounded-10 text-white text-15">
                                                <span
                                                    data-text="Help me get fit"
                                                    class="btn-txt"
                                                    data-transition-delay="true"
                                                    data-delay-options='{"elements":  ".lqd-chars", "delayType":  "animation", "startDelay":  0, "delayBetween":  32.5}'
                                                    data-split-text="true"
                                                    data-split-options='{"type":  "chars, words"}'
                                                >
                                                    Up Store
                                                </span>
                                                <span class="btn-icon text-1em text-primary mr-10">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="12.885" height="12.894" viewbox="0 0 12.885 12.894">
                                                        <path
                                                            d="M6.451-6.047A25.07,25.07,0,0,0,3.916-4.86,6.916,6.916,0,0,0,2.443-3.814,6.718,6.718,0,0,0,1.4-2.355,25.1,25.1,0,0,0,.193.22h-.36A26.15,26.15,0,0,0-1.38-2.355,6.924,6.924,0,0,0-2.417-3.814,6.916,6.916,0,0,0-3.889-4.86,24.748,24.748,0,0,0-6.434-6.047v-.36A24.44,24.44,0,0,0-3.88-7.594,6.687,6.687,0,0,0-2.417-8.64,6.924,6.924,0,0,0-1.38-10.1,26.15,26.15,0,0,0-.167-12.674h.36A25.1,25.1,0,0,0,1.4-10.1,6.718,6.718,0,0,0,2.443-8.64,6.468,6.468,0,0,0,3.9-7.594,24.44,24.44,0,0,0,6.451-6.407Z"
                                                            transform="translate(6.434 12.674)"
                                                            fill="currentColor"
                                                        ></path>
                                                    </svg>
                                                </span>
                                            </a>
                                            <a class="btn btn-solid btn-sm btn-hover-txt-liquid-y btn-icon-left bg-white-5 shadow-sm rounded-10 text-white text-15">
                                                <span
                                                    data-text="Write a Python Script"
                                                    class="btn-txt"
                                                    data-transition-delay="true"
                                                    data-delay-options='{"elements":  ".lqd-chars", "delayType":  "animation", "startDelay":  0, "delayBetween":  32.5}'
                                                    data-split-text="true"
                                                    data-split-options='{"type":  "chars, words"}'
                                                >
                                                    Up Network
                                                </span>
                                                <span class="btn-icon text-1em text-primary mr-10">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="12.885" height="12.894" viewbox="0 0 12.885 12.894">
                                                        <path
                                                            d="M6.451-6.047A25.07,25.07,0,0,0,3.916-4.86,6.916,6.916,0,0,0,2.443-3.814,6.718,6.718,0,0,0,1.4-2.355,25.1,25.1,0,0,0,.193.22h-.36A26.15,26.15,0,0,0-1.38-2.355,6.924,6.924,0,0,0-2.417-3.814,6.916,6.916,0,0,0-3.889-4.86,24.748,24.748,0,0,0-6.434-6.047v-.36A24.44,24.44,0,0,0-3.88-7.594,6.687,6.687,0,0,0-2.417-8.64,6.924,6.924,0,0,0-1.38-10.1,26.15,26.15,0,0,0-.167-12.674h.36A25.1,25.1,0,0,0,1.4-10.1,6.718,6.718,0,0,0,2.443-8.64,6.468,6.468,0,0,0,3.9-7.594,24.44,24.44,0,0,0,6.451-6.407Z"
                                                            transform="translate(6.434 12.674)"
                                                            fill="currentColor"
                                                        ></path>
                                                    </svg>
                                                </span>
                                            </a>
                                            <a class="btn btn-solid btn-sm btn-hover-txt-liquid-y btn-icon-left bg-white-5 shadow-sm rounded-10 text-white text-15">
                                                <span
                                                    data-text="Create a 3 course menu"
                                                    class="btn-txt"
                                                    data-transition-delay="true"
                                                    data-delay-options='{"elements":  ".lqd-chars", "delayType":  "animation", "startDelay":  0, "delayBetween":  32.5}'
                                                    data-split-text="true"
                                                    data-split-options='{"type":  "chars, words"}'
                                                >
                                                    Up Mobile
                                                </span>
                                                <span class="btn-icon text-1em text-primary mr-10">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="12.885" height="12.894" viewbox="0 0 12.885 12.894">
                                                        <path
                                                            d="M6.451-6.047A25.07,25.07,0,0,0,3.916-4.86,6.916,6.916,0,0,0,2.443-3.814,6.718,6.718,0,0,0,1.4-2.355,25.1,25.1,0,0,0,.193.22h-.36A26.15,26.15,0,0,0-1.38-2.355,6.924,6.924,0,0,0-2.417-3.814,6.916,6.916,0,0,0-3.889-4.86,24.748,24.748,0,0,0-6.434-6.047v-.36A24.44,24.44,0,0,0-3.88-7.594,6.687,6.687,0,0,0-2.417-8.64,6.924,6.924,0,0,0-1.38-10.1,26.15,26.15,0,0,0-.167-12.674h.36A25.1,25.1,0,0,0,1.4-10.1,6.718,6.718,0,0,0,2.443-8.64,6.468,6.468,0,0,0,3.9-7.594,24.44,24.44,0,0,0,6.451-6.407Z"
                                                            transform="translate(6.434 12.674)"
                                                            fill="currentColor"
                                                        ></path>
                                                    </svg>
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    <section
        class="lqd-section testimonial bg-no-repeat transition-border py-100"
        id="backers"
        style="background-image: url(assets/images/testimonial/testimonial-bg2.gif);"
        data-custom-animations="true"
        data-ca-options='{"animationTarget": ".animation-element, .animation-element .split-inner .lqd-chars", "duration" : 800, "delay" : 70, "ease": "expo.out", "initValues": {"scaleX" : 0.8, "scaleY" : 0.8, "rotationZ" : 3, "opacity" : 0} , "animations": {"scaleX" : 1, "scaleY" : 1, "rotationZ" : 0, "opacity" : 1}}'
    >
        <div class="container-fluid">
            <div class="row justify-center transition-bg">
                <div class="col col-12 col-lg-6 flex flex-col gap-40">
                    <div class="ld-fancy-heading relative max-w-full text-center animation-element">
                        <h2 class="ld-fh-element relative m-0 text-white" data-split-text="true" data-split-options='{"type": "chars, words"}'><span class="font-chakra-petch font-thin">Support </span>for UP Network</h2>
                    </div>
                    <div class="ld-fancy-heading relative text-center px-15percent animation-element">
                <p class="ld-fh-element relative mb-0/5em leading-1/3em">Our supporters across different industries.</p>
            </div>
                </div>
                <div class="col col-12 pt-40">
                    <div class="carousel-container carousel-dots-style3 carousel-dots-md carousel-dots-mobile-outside carousel-dots-mobile-center animation-element">
                        <div class="carousel-items relative " data-lqd-flickity='{"cellAlign": "center", "wrapAround": true, "autoPlay": true, "pageDots": true, "": "inherit", "groupCells": false, "pauseAutoPlayOnHover": false, "prevNextButtons": false, "dotsIndicator": "dots", "dotsAppendTo": "self"}'>
                            <div class="flickity-viewport relative w-full overflow-hidden">
                                <div class="flickity-slider flex w-full h-full relative items-start">
                                    <!-- <div class="carousel-item flex flex-col col-lg-3 justify-center flex-auto px-30">
                                        <div class="carousel-item-inner relative w-full mb-20">
                                            <div class="carousel-item-content relative w-full">
                                                <div class="lqd-testi relative lqd-testi-style-8 flex flex-col-reverse lqd-testi-card lqd-testi-shadow-none lqd-testi-details-sm lqd-testi-quote-16 lqd-testi-avatar-60 bg-white-0 border-1 border-white-20 rounded-12">
                                                    <div class="lqd-testi-quote">
                                                        <blockquote>
                                                            <p>
                                                                <span style="color: #cccccc;">
                                                                    "Our cooperation with Up Network has important strategic significance, which is expected to jointly create a new era of mobile blockchain and bring innovation and change to the industry."</span>
                                                            </p>
                                                        </blockquote>
                                                        <figure>
                                                            <img src="assets/images/client/client-logo-02.svg" width="120" alt="client">
                                                        </figure>
                                                    </div>
                                                    <div class="lqd-testi-info flex flex-wrap items-center justify-between mb-1/5em">
                                                        <div class="lqd-testi-details flex items-center">
                                                            <figure class="lqd-testi-avatar rounded-full overflow-hidden">
                                                                <img decoding="async" class="rounded-full" src="assets/images/team/team-avatar-01.png" alt="leandroMariotto">
                                                            </figure>
                                                            <div class="lqd-testi-np pl-1/5em">
                                                                <h3 class="font-medium">Rushi Manche</h3>
                                                                <h4>Movement Co-founder</h4>
                                                            </div>
                                                            
                                                        </div>
                                                        <div class="lqd-testi-social-icon"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div> -->
                                    <!-- <div class="carousel-item flex flex-col col-lg-3 justify-center flex-auto px-30">
                                        <div class="carousel-item-inner relative w-full mb-20">
                                            <div class="carousel-item-content relative w-full">
                                                <div class="lqd-testi relative lqd-testi-style-8 flex flex-col-reverse lqd-testi-card lqd-testi-shadow-none lqd-testi-details-sm lqd-testi-quote-16 lqd-testi-avatar-60 bg-white-0 border-1 border-white-20 rounded-12">
                                                    <div class="lqd-testi-quote">
                                                        <blockquote>
                                                            <p>
                                                                <span style="color: #cccccc;">
                                                                    "Up Network's precise market positioning and unique product advantages make it stand out in the fiercely competitive market and have huge market potential."</span>
                                                            </p>
                                                        </blockquote>
                                                        <figure>
                                                            <img src="assets/images/client/client-logo-02.svg" width="120" alt="client">
                                                        </figure>
                                                    </div>
                                                    <div class="lqd-testi-info flex flex-wrap items-center justify-between mb-1/5em">
                                                        <div class="lqd-testi-details flex items-center">
                                                            <figure class="lqd-testi-avatar rounded-full overflow-hidden">
                                                                <img decoding="async" class="rounded-full" src="assets/images/team/team-avatar-02.png" alt="leandroMariotto">
                                                            </figure>
                                                            <div class="lqd-testi-np pl-1/5em">
                                                                <h3 class="font-medium">Will Gaines</h3>
                                                                <h4>Movement Head of Marketing</h4>
                                                            </div>
                                                        </div>
                                                        <div class="lqd-testi-social-icon"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div> -->
                                    <div class="carousel-item flex flex-col col-lg-4 justify-center flex-auto px-30">
                                        <div class="carousel-item-inner relative w-full mb-20">
                                            <div class="carousel-item-content relative w-full">
                                                <div class="lqd-testi relative lqd-testi-style-8 flex flex-col-reverse lqd-testi-card lqd-testi-shadow-none lqd-testi-details-sm lqd-testi-quote-16 lqd-testi-avatar-60 bg-white-0 border-1 border-white-20 rounded-12">
                                                    <div class="lqd-testi-quote">
                                                        <blockquote>
                                                            <p>
                                                                <span style="color: #cccccc;">
                                                                    Co-founder of Good Game Champ and Sharestix Crypto angel investor, portfolio includes Sandbox, Legend, and Soundxyz Pre-creative director of Joyrich and participated in top fashion shows.</span>
                                                            </p>
                                                        </blockquote>
                                                        <figure>
                                                            <img src="assets/images/client/client-logo-03.png" width="120" alt="client">
                                                        </figure>
                                                    </div>
                                                    <div class="lqd-testi-info flex flex-wrap items-center justify-between mb-1/5em">
                                                        <div class="lqd-testi-details flex items-center">
                                                            <figure class="lqd-testi-avatar rounded-full overflow-hidden">
                                                                <img decoding="async" class="rounded-full" src="assets/images/team/team-avatar-03.png" alt="leandroMariotto">
                                                            </figure>
                                                            <div class="lqd-testi-np pl-1/5em">
                                                                <h3 class="font-medium">Cordell Broadus</h3>
                                                                <h4>Son of Rapper Snoop Dogg</h4>
                                                            </div>
                                                        </div>
                                                        <div class="lqd-testi-social-icon"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="carousel-item flex flex-col col-lg-4 justify-center flex-auto px-30">
                                        <div class="carousel-item-inner relative w-full mb-20">
                                            <div class="carousel-item-content relative w-full">
                                                <div class="lqd-testi relative lqd-testi-style-8 flex flex-col-reverse lqd-testi-card lqd-testi-shadow-none lqd-testi-details-sm lqd-testi-quote-16 lqd-testi-avatar-60 bg-white-0 border-1 border-white-20 rounded-12">
                                                    <div class="lqd-testi-quote">
                                                        <blockquote>
                                                            <p>
                                                                <span style="color: #cccccc;">
                                                                    Former CEO of NTT global payment business. Senior VP at NTT Communications Asia. Senior Executive for Atos Origin and Schlumberger Japan.</span>
                                                            </p>
                                                        </blockquote>
                                                        <figure>
                                                            <img src="assets/images/client/client-logo-04.svg" width="120" alt="client">
                                                        </figure>
                                                    </div>
                                                    <div class="lqd-testi-info flex flex-wrap items-center justify-between mb-1/5em">
                                                        <div class="lqd-testi-details flex items-center">
                                                            <figure class="lqd-testi-avatar rounded-full overflow-hidden">
                                                                <img decoding="async" class="rounded-full" src="assets/images/team/team-avatar-04.png" alt="leandroMariotto">
                                                            </figure>
                                                            <div class="lqd-testi-np pl-1/5em">
                                                                <h3 class="font-medium">Tyrone Lynch</h3>
                                                                <h4>Founder of Metadomo</h4>
                                                            </div>
                                                        </div>
                                                        <div class="lqd-testi-social-icon"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="carousel-item flex flex-col col-lg-4 justify-center flex-auto px-30">
                                        <div class="carousel-item-inner relative w-full mb-20">
                                            <div class="carousel-item-content relative w-full">
                                                <div class="lqd-testi relative lqd-testi-style-8 flex flex-col-reverse lqd-testi-card lqd-testi-shadow-none lqd-testi-details-sm lqd-testi-quote-16 lqd-testi-avatar-60 bg-white-0 border-1 border-white-20 rounded-12">
                                                    <div class="lqd-testi-quote">
                                                        <blockquote>
                                                            <p>
                                                                <span style="color: #cccccc;">
                                                                    Industry advisory committee member of the Hong Kong Insurance Authority. Researcher in licensed stablecoin, renewable energy tokenization and central bank digital currencies.</span>
                                                            </p>
                                                        </blockquote>
                                                        <figure>
                                                            <img src="assets/images/client/client-logo-05.svg" width="120" alt="client">
                                                        </figure>
                                                    </div>
                                                    <div class="lqd-testi-info flex flex-wrap items-center justify-between mb-1/5em">
                                                        <div class="lqd-testi-details flex items-center">
                                                            <figure class="lqd-testi-avatar rounded-full overflow-hidden">
                                                                <img decoding="async" class="rounded-full" src="assets/images/team/team-avatar-05.png" alt="leandroMariotto">
                                                            </figure>
                                                            <div class="lqd-testi-np pl-1/5em">
                                                                <h3 class="font-medium">Dick Fong</h3>
                                                                <h4>Ex McKinsey Partner</h4>
                                                            </div>
                                                        </div>
                                                        <div class="lqd-testi-social-icon"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="carousel-item flex flex-col col-lg-4 justify-center flex-auto px-30">
                                        <div class="carousel-item-inner relative w-full mb-20">
                                            <div class="carousel-item-content relative w-full">
                                                <div class="lqd-testi relative lqd-testi-style-8 flex flex-col-reverse lqd-testi-card lqd-testi-shadow-none lqd-testi-details-sm lqd-testi-quote-16 lqd-testi-avatar-60 bg-white-0 border-1 border-white-20 rounded-12">
                                                    <div class="lqd-testi-quote">
                                                        <blockquote>
                                                            <p>
                                                                <span style="color: #cccccc;">
                                                                    Managing Partner @ Hywood Capital. Former Head of Capital Structure @ Huawei. General Manager of Finance at Southern Airlines.</span>
                                                            </p>
                                                        </blockquote>
                                                        <figure>
                                                            <img src="assets/images/client/client-logo-06.svg" width="120" alt="client">
                                                        </figure>
                                                    </div>
                                                    <div class="lqd-testi-info flex flex-wrap items-center justify-between mb-1/5em">
                                                        <div class="lqd-testi-details flex items-center">
                                                            <figure class="lqd-testi-avatar rounded-full overflow-hidden">
                                                                <img decoding="async" class="rounded-full" src="assets/images/team/team-avatar-06.png" alt="leandroMariotto">
                                                            </figure>
                                                            <div class="lqd-testi-np pl-1/5em">
                                                                <h3 class="font-medium">Jason Dong</h3>
                                                                <h4>Partner & President of Hywood Capital</h4>
                                                            </div>
                                                        </div>
                                                        <div class="lqd-testi-social-icon"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col col-12 pt-60 col-lg-6 flex flex-col gap-40 module-svg">
                    <!-- <div class="w-full text-center">
                        <div class="ld-fancy-heading relative animation-element"><p class="ld-fh-element relative mb-0/5em text-20 leading-26">Ecosystem Partners.</p></div>
                    </div> -->
                    <div class="carousel-container relative carousel-nav-shaped">
                        <div class="carousel-items relative lqd-fade-sides pb-20" data-lqd-flickity='{"marquee": true, "marqueeTickerSpeed": "0.2", "pauseAutoPlayOnHover": false}'>
                            <div class="flickity-viewport relative w-full overflow-hidden">
                                <div class="flickity-slider flex w-full h-full relative items-start">
                                    <div class="carousel-item flex flex-column items-center justify-center has-one-child w-full flex-auto">
                                        <div class="carousel-item-inner relative w-full">
                                            <div class="carousel-item-content relative max-w-full flex-row mx-auto p-10">
                                                <div class="flex justify-center text-primary">
                                                    <img src="assets/images/client-ecosystem/movement.svg" class="ml-20" width="220" alt="client">
                                                </div>
                                                <div class="flex justify-center text-primary">
                                                    <img src="assets/images/client-ecosystem/nexio.png" class="ml-20" width="220" alt="client">
                                                </div>
                                                
                                            </div>
                                        </div>
                                    </div>
                                    <div class="carousel-item flex flex-column items-center justify-center has-one-child w-full flex-auto">
                                        <div class="carousel-item-inner relative w-full">
                                            <div class="carousel-item-content relative max-w-full flex-row mx-auto p-10">
                                                <div class="flex justify-center text-primary">
                                                    <img src="assets/images/client-ecosystem/bytecity.png" class="ml-20" width="220" alt="client">
                                                </div>
                                                <div class="flex justify-center text-primary">
                                                    <img src="assets/images/client-ecosystem/route-x.png" class="ml-20" width="220" alt="client">
                                                </div>
                                                <div class="flex justify-center text-primary">
                                                    <img src="assets/images/client-ecosystem/secwarex.png" class="ml-20" width="220" alt="client">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-items relative lqd-fade-sides pb-20" data-lqd-flickity='{"marquee": true, "marqueeTickerSpeed": "0.2", "pauseAutoPlayOnHover": false}'>
                            <div class="flickity-viewport relative w-full overflow-hidden">
                                <div class="flickity-slider flex w-full h-full relative items-start">
                                    <div class="carousel-item flex flex-column items-center justify-center has-one-child w-full flex-auto">
                                        <div class="carousel-item-inner relative w-full">
                                            <div class="carousel-item-content relative max-w-full flex-row mx-auto p-10">
                                                <div class="flex justify-center text-primary">
                                                    <img src="assets/images/client-ecosystem/coq.png" class="ml-20" width="220" alt="client">
                                                </div>
                                                <div class="flex justify-center text-primary">
                                                    <img src="assets/images/client-ecosystem/galxe.svg" class="ml-20" width="220" alt="client">
                                                </div>
                                                <div class="flex justify-center text-primary">
                                                    <img src="assets/images/client-ecosystem/ipxdex.svg" class="ml-20" width="220" alt="client">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="carousel-item flex flex-column items-center justify-center has-one-child w-full flex-auto">
                                        <div class="carousel-item-inner relative w-full">
                                            <div class="carousel-item-content relative max-w-full flex-row mx-auto p-10">
                                                <div class="flex justify-center text-primary">
                                                    <img src="assets/images/client-ecosystem/avitus.svg" class="ml-20" width="220" alt="client">
                                                </div>
                                                <div class="flex justify-center text-primary">
                                                    <img src="assets/images/client-ecosystem/brkt.svg" class="ml-20" width="220" alt="client">
                                                </div>
                                                <div class="flex justify-center text-primary">
                                                    <img src="assets/images/client-ecosystem/element.svg" class="ml-20" width="220" alt="client">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-items relative lqd-fade-sides pb-20" data-lqd-flickity='{"marquee": true, "marqueeTickerSpeed": "0.2", "pauseAutoPlayOnHover": false}'>
                            <div class="flickity-viewport relative w-full overflow-hidden">
                                <div class="flickity-slider flex w-full h-full relative items-start">
                                    <div class="carousel-item flex flex-column items-center justify-center has-one-child w-full flex-auto">
                                        <div class="carousel-item-inner relative w-full">
                                            <div class="carousel-item-content relative max-w-full flex-row mx-auto p-10">
                                                <div class="flex justify-center text-primary">
                                                    <img src="assets/images/client-ecosystem/henry.svg" class="ml-20" width="220" alt="client">
                                                </div>
                                                <div class="flex justify-center text-primary">
                                                    <img src="assets/images/client-ecosystem/razordao.svg" class="ml-20" width="220" alt="client">
                                                </div>
                                                <div class="flex justify-center text-primary">
                                                    <img src="assets/images/client-ecosystem/turnup.svg" class="ml-20" width="220" alt="client">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="carousel-item flex flex-column items-center justify-center has-one-child w-full flex-auto">
                                        <div class="carousel-item-inner relative w-full">
                                            <div class="carousel-item-content relative max-w-full flex-row mx-auto p-10">
                                                <div class="flex justify-center text-primary">
                                                    <img src="assets/images/client-ecosystem/henry.svg" class="ml-20" width="220" alt="client">
                                                </div>
                                                <div class="flex justify-center text-primary">
                                                    <img src="assets/images/client-ecosystem/razordao.svg" class="ml-20" width="220" alt="client">
                                                </div>
                                                <div class="flex justify-center text-primary">
                                                    <img src="assets/images/client-ecosystem/turnup.svg" class="ml-20" width="220" alt="client">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Start Text LG -->
    <section class="lqd-section text-lg py-0">
        <div class="container-fluid">
            <div class="row">
                <div class="col col-12">
                    <div class="whitespace-nowrap ld-fancy-heading relative" data-parallax="true" data-parallax-options='{"ease": "linear", "start": "top bottom", "end": "bottom+=0px top"}' data-parallax-from='{"x": "1vw"}' data-parallax-to='{"x": "-20vw"}'>
                        <h2 class="ld-fh-element mb-0/5em inline-block relative font-ultrabold text-white" style="font-size: 320px;">{What's New}</h2>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- End Text LG -->


    <!-- Start Blog -->
    <section class="lqd-section blog py-90 bg-transparent transition-all" id="news" style="background-image: linear-gradient(180deg, #000 0%, #000 100%);" data-custom-animations="true" data-ca-options='{"animationTarget": ".animation-element", "ease": "power4.out", "initValues": {"y": "35px", "opacity" : 0} , "animations": {"y": "0px", "opacity" : 1}}'>
        <div class="container">
            <div class="row items-center">
                <div class="col col-12 col-md-6 animation-element">
                    <div class="mb-15 ld-fancy-heading relative">
                        <h6 class="ld-fh-element m-0 inline-block font-silkscreen relative label text-10 tracking-1 uppercase font-normal text-white bg-white-10  trackink-1px py-5 px-15 rounded-100">Latest Event & News</h6>
                    </div>
                    <div class="ld-fancy-heading relative">
                        <h2 class="ld-fh-element mb-0/5em inline-block relative text-40 text-white font-bold">We’re Showing Up.</h2>
                    </div>
                </div>
                <div class="col col-12 col-md-6 animation-element">
                    <div class="ld-fancy-heading relative">
                        <p class="ld-fh-element mb-0/5em inline-block relative leading-1/6em text-18 text-gray-500">Stay updated on our latest activities and witness our growth and progress together!</p>
                    </div>
                </div>
                <div class="col col-12 animation-element">
                    <div class="flex flex-wrap -mr-30 -ml-30 module-blog">
                        <div class="w-33percent flex px-30 mb-30 md:w-50percent sm:w-full module-col">
                            <article class="lqd-lp relative lqd-lp-style-6 lqd-lp-style-6-alt lqd-lp-hover-img-zoom lqd-lp-hover-img-zoom-out lqd-lp-animate-onhover rounded-10 overflow-hidden text-start post-5561 post type-post status-publish format-standard has-post-thumbnail hentry category-business category-culture tag-beauty tag-travel hover:inner-text-primary">
                                <div class="lqd-lp-img overflow-hidden">
                                    <figure>
                                        <img class="w-full" width="640" height="364" src="./assets/images/blog/news-gif-01.gif" alt="5 reasons to purchase desktop computers">
                                    </figure>
                                    <div class="lqd-lp-meta uppercase font-bold relative z-3">
                                        <span class="screen-reader-text">Tags </span>
                                        <ul class="lqd-lp-cat lqd-lp-cat-shaped lqd-lp-cat-solid reset-ul inline-ul font-bold uppercase tracking-0/1em">
                                            <li><a class="rounded-full" href="#" rel="category">Event</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <header class="lqd-lp-header pt-1/5em px-1em">
                                    <div class="lqd-lp-meta lqd-lp-meta-dot-between flex flex-wrap items-center">
                                        <div class="lqd-lp-author relative z-3">
                                            <div class="lqd-lp-author-info">
                                                <h3 class="mt-0 mb-0">
                                                    <a href="https://x.com/upnetworkhq" target="_blank">X</a>
                                                </h3>
                                            </div>
                                        </div>
                                        <time class="lqd-lp-date" datetime="2021-06-02T13:40:12+00:00">Aug 13, 2024</time>
                                    </div>
                                    <a href="https://x.com/upnetworkhq/status/1823253422528716816?s=46&t=2C3ZlXNOybDCo9XROu8MZQ" target="_blank">
                                        <h2 class="entry-title lqd-lp-title mt-0/5em mb-0 h5 text-black font-bold">Up Network and Movement co-hosting the Afterparty</h2>
                                    </a>
                                </header>
                                <div class="lqd-lp-excerpt pt-1em pb-1/5em px-1em">
                                    <p class="text-14 text-black-40">On August 12, 2024, the Up Network team attended the Foresight 2024 conference in Hong Kong and, at 6:30 PM (GMT+8), co-hosted our celebration dinner with members of the Movement Labs ecosystem...</p>
                                    <a href="https://x.com/upnetworkhq/status/1823253422528716816?s=46&t=2C3ZlXNOybDCo9XROu8MZQ" target="_blank" class="text-black font-bold">Read More</a>
                                </div>
                            </article>
                        </div>
                        <div class="w-33percent flex px-30 mb-30 md:w-50percent sm:w-full module-col">
                            <article class="lqd-lp relative lqd-lp-style-6 lqd-lp-style-6-alt lqd-lp-hover-img-zoom lqd-lp-hover-img-zoom-out lqd-lp-animate-onhover rounded-10 overflow-hidden text-start post-5561 post type-post status-publish format-standard has-post-thumbnail hentry category-business category-culture tag-beauty tag-travel hover:inner-text-primary">
                                <div class="lqd-lp-img overflow-hidden">
                                    <figure>
                                        <img class="w-full" width="640" height="364" src="./assets/images/blog/news-gif-02.gif" alt="5 reasons to purchase desktop computers">
                                    </figure>
                                    <div class="lqd-lp-meta uppercase font-bold relative z-3">
                                        <span class="screen-reader-text">Tags </span>
                                        <ul class="lqd-lp-cat lqd-lp-cat-shaped lqd-lp-cat-solid reset-ul inline-ul font-bold uppercase tracking-0/1em">
                                            <li><a class="rounded-full" href="#" rel="category">News</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <header class="lqd-lp-header pt-1/5em px-1em">
                                    <div class="lqd-lp-meta lqd-lp-meta-dot-between flex flex-wrap items-center">
                                        <div class="lqd-lp-author relative z-3">
                                            <div class="lqd-lp-author-info">
                                                <h3 class="mt-0 mb-0">
                                                    <a href="https://news.futunn.com/" target="_blank">Futubull</a>
                                                </h3>
                                            </div>
                                        </div>
                                        <time class="lqd-lp-date" datetime="2021-06-02T13:40:12+00:00">Aug 4, 2024</time>
                                    </div>
                                    <a href="https://news.futunn.com/post/45950633/suncorp-tech-01063-hk-collaborates-with-osmosis-to-develop-web3?level=1&data_ticket=1723613536941333" target="_blank">
                                        <h2 class="entry-title lqd-lp-title mt-0/5em mb-0 h5 text-black font-bold">SunCorp Tech and Up Network partner to create...</h2>
                                    </a>
                                </header>
                                <div class="lqd-lp-excerpt pt-1em pb-1/5em px-1em">
                                    <p class="text-14 text-black-40">SunCorp Technologies announces a strategic partnership with Osmosis, a global leader in decentralized mobile infrastructure networks (represented by Up Network in the Asia-Pacific region), to...</p>
                                    <a href="https://news.futunn.com/post/45950633/suncorp-tech-01063-hk-collaborates-with-osmosis-to-develop-web3?level=1&data_ticket=1723613536941333" target="_blank" class="text-black font-bold">Read More</a>
                                </div>
                            </article>
                        </div>
                        <div class="w-33percent flex px-30 mb-30 md:w-50percent sm:w-full module-col">
                            <article class="lqd-lp relative lqd-lp-style-6 lqd-lp-style-6-alt lqd-lp-hover-img-zoom lqd-lp-hover-img-zoom-out lqd-lp-animate-onhover rounded-10 overflow-hidden text-start post-5561 post type-post status-publish format-standard has-post-thumbnail hentry category-business category-culture tag-beauty tag-travel hover:inner-text-primary">
                                <div class="lqd-lp-img overflow-hidden">
                                    <figure>
                                        <img class="w-full" width="640" height="364" src="./assets/images/blog/news-gif-03.gif" alt="5 reasons to purchase desktop computers">
                                    </figure>
                                    <div class="lqd-lp-meta uppercase font-bold relative z-3">
                                        <span class="screen-reader-text">Tags </span>
                                        <ul class="lqd-lp-cat lqd-lp-cat-shaped lqd-lp-cat-solid reset-ul inline-ul font-bold uppercase tracking-0/1em">
                                            <li><a class="rounded-full" href="#" rel="category">News</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <header class="lqd-lp-header pt-1/5em px-1em">
                                    <div class="lqd-lp-meta lqd-lp-meta-dot-between flex flex-wrap items-center">
                                        <div class="lqd-lp-author relative z-3">
                                            <div class="lqd-lp-author-info">
                                                <h3 class="mt-0 mb-0">
                                                    <a href="https://blockster.com/" target="_blank">Blockster</a>
                                                </h3>
                                            </div>
                                        </div>
                                        <time class="lqd-lp-date" datetime="2021-06-02T13:40:12+00:00">July 9, 2024</time>
                                    </div>
                                    <a href="https://t.co/KRcko29cwx" target="_blank">
                                        <h2 class="entry-title lqd-lp-title mt-0/5em mb-0 h5 text-black font-bold">Early media coverage on Up Network and Up Mobile</h2>
                                    </a>
                                </header>
                                <div class="lqd-lp-excerpt pt-1em pb-1/5em px-1em">
                                    <p class="text-14 text-black-40">Up Network has unveiled ‘Up Mobile,’ the world’s first smartphone integrating advanced artificial intelligence and blockchain technology, powered by Facebook’s Move programming language...</p>
                                    <a href="https://t.co/KRcko29cwx" target="_blank" class="text-black font-bold">Read More</a>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
                <div class="col col-12 text-center">
                    <a href="http://support.upnetwork.xyz" class="btn btn-naked btn-icon-right btn-icon-circle btn-icon-custom-size btn-icon-solid btn-icon-ripple text-white" target="_blank">
                        <span class="btn-txt" data-text="See more events">More News</span>
                        <span class="btn-icon w-30 h-30 text-white bg-white-10">
                            <i aria-hidden="true" class="lqd-icn-ess icon-ion-ios-add"></i>
                        </span>
                    </a>
                </div>

                <div class="col col-12 mt-5 p-30">
                    <span class="divider w-full flex border-top border-white-20"></span>
                </div>

                <div class="col col-12 col-md-6 animation-element">
                    <div class="mb-15 ld-fancy-heading relative">
                        <h6 class="ld-fh-element m-0 inline-block font-silkscreen relative label text-10 tracking-1 uppercase font-normal text-white bg-white-10  trackink-1px py-5 px-15 rounded-100">Latest Announcement</h6>
                    </div>
                    <div class="ld-fancy-heading relative">
                        <h2 class="ld-fh-element mb-0/5em inline-block relative text-40 text-white font-bold">Up Announcement.</h2>
                    </div>
                </div>
                <div class="col col-12 col-md-6 animation-element">
                    <div class="ld-fancy-heading relative">
                        <p class="ld-fh-element mb-0/5em inline-block relative leading-1/6em text-18 text-gray-500">The latest stories of Up Network updates, community, announcements and sneak peeks.</p>
                    </div>
                </div>
                <div class="col col-12 animation-element">
                    <div class="flex flex-wrap -mr-30 -ml-30 module-blog">
                        <div class="w-33percent flex px-30 mb-30 md:w-50percent sm:w-full module-col">
                            <article class="lqd-lp relative lqd-lp-style-6 lqd-lp-style-6-alt lqd-lp-hover-img-zoom lqd-lp-hover-img-zoom-out lqd-lp-animate-onhover rounded-10 overflow-hidden text-start post-5561 post type-post status-publish format-standard has-post-thumbnail hentry category-business category-culture tag-beauty tag-travel hover:inner-text-primary">
                                <div class="lqd-lp-img overflow-hidden">
                                    <figure>
                                        <img class="w-full" width="640" height="364" src="./assets/images/blog/news-gif-04.gif" alt="5 reasons to purchase desktop computers">
                                    </figure>
                                    <div class="lqd-lp-meta uppercase font-bold relative z-3">
                                        <span class="screen-reader-text">Tags </span>
                                        <ul class="lqd-lp-cat lqd-lp-cat-shaped lqd-lp-cat-solid reset-ul inline-ul font-bold uppercase tracking-0/1em">
                                            <li><span class="rounded-full" rel="category">Announcement</span></li>
                                        </ul>
                                    </div>
                                </div>
                                <header class="lqd-lp-header pt-1/5em px-1em">
                                    <div class="lqd-lp-meta lqd-lp-meta-dot-between flex flex-wrap items-center">
                                        <div class="lqd-lp-author relative z-3">
                                            <div class="lqd-lp-author-info">
                                                <h3 class="mt-0 mb-0">
                                                    <span>Up Network</span>
                                                </h3>
                                            </div>
                                        </div>
                                        <time class="lqd-lp-date" datetime="">Aug 18, 2024</time>
                                    </div>
                                    <div>
                                        <h2 class="entry-title lqd-lp-title mt-0/5em mb-0 h5 text-black font-bold">Website Upgrade to Enhance User Experience and Transparency</h2>
                                    </div>
                                </header>
                                <div class="lqd-lp-excerpt pt-1em pb-1/5em px-1em">
                                    <p class="text-14 text-black-40">We are pleased to announce that our official website will go live within the next 48 hours.This update represents not only a technical advancement but also our unwavering dedication to continuous improvement and enhancing the user experience.</p>
                                    <a href="https://support.upnetwork.xyz/hc/en-gb/articles/15456038759196-Website-Upgrade-to-Enhance-User-Experience-and-Transparency" target="_blank" class="text-black font-bold">Read More</a>
                                </div>
                            </article>
                        </div>
                        <div class="w-33percent flex px-30 mb-30 md:w-50percent sm:w-full module-col">
                            <article class="lqd-lp relative lqd-lp-style-6 lqd-lp-style-6-alt lqd-lp-hover-img-zoom lqd-lp-hover-img-zoom-out lqd-lp-animate-onhover rounded-10 overflow-hidden text-start post-5561 post type-post status-publish format-standard has-post-thumbnail hentry category-business category-culture tag-beauty tag-travel hover:inner-text-primary">
                                <div class="lqd-lp-img overflow-hidden">
                                    <figure>
                                        <img class="w-full" width="640" height="364" src="./assets/images/blog/news-gif-05.gif" alt="5 reasons to purchase desktop computers">
                                    </figure>
                                    <div class="lqd-lp-meta uppercase font-bold relative z-3">
                                        <span class="screen-reader-text">Tags </span>
                                        <ul class="lqd-lp-cat lqd-lp-cat-shaped lqd-lp-cat-solid reset-ul inline-ul font-bold uppercase tracking-0/1em">
                                            <li><span class="rounded-full" rel="category">Award</span></li>
                                        </ul>
                                    </div>
                                </div>
                                <header class="lqd-lp-header pt-1/5em px-1em">
                                    <div class="lqd-lp-meta lqd-lp-meta-dot-between flex flex-wrap items-center">
                                        <div class="lqd-lp-author relative z-3">
                                            <div class="lqd-lp-author-info">
                                                <h3 class="mt-0 mb-0">
                                                    <span>Up Announcement</span>
                                                </h3>
                                            </div>
                                        </div>
                                        <time class="lqd-lp-date" datetime="">Aug 20, 2024</time>
                                    </div>
                                    <div>
                                        <h2 class="entry-title lqd-lp-title mt-0/5em mb-0 h5 text-black font-bold">Pre-Order Countdown for the Up Mobile A24 - Movers Edition</h2>
                                    </div>
                                </header>
                                <div class="lqd-lp-excerpt pt-1em pb-1/5em px-1em">
                                    <p class="text-14 text-black-40">The Up Mobile A24 (Mover Edition) phone launched by Up Network will officially begin pre-sales on September 22, 2024, at 13:00 (UTC). The countdown to the 'official pre-sale' starts now!"</p>
                                    <a href="https://support.upnetwork.xyz/hc/en-gb/articles/15461716922268-Pre-Order-Countdown-for-the-Up-Mobile-A24-Movers-Edition" target="_blank" class="text-black font-bold">Read More</a>
                                </div>
                            </article>
                        </div>
                        <div class="w-33percent flex px-30 mb-30 md:w-50percent sm:w-full module-col">
                            <article class="lqd-lp relative lqd-lp-style-6 lqd-lp-style-6-alt lqd-lp-hover-img-zoom lqd-lp-hover-img-zoom-out lqd-lp-animate-onhover rounded-10 overflow-hidden text-start post-5561 post type-post status-publish format-standard has-post-thumbnail hentry category-business category-culture tag-beauty tag-travel hover:inner-text-primary">
                                <div class="lqd-lp-img overflow-hidden">
                                    <figure>
                                        <img class="w-full" width="640" height="364" src="./assets/images/blog/news-gif-06.gif" alt="5 reasons to purchase desktop computers">
                                    </figure>
                                    <div class="lqd-lp-meta uppercase font-bold relative z-3">
                                        <span class="screen-reader-text">Tags </span>
                                        <ul class="lqd-lp-cat lqd-lp-cat-shaped lqd-lp-cat-solid reset-ul inline-ul font-bold uppercase tracking-0/1em">
                                            <li><span class="rounded-full" rel="category">Announcement</span></li>
                                        </ul>
                                    </div>
                                </div>
                                <header class="lqd-lp-header pt-1/5em px-1em">
                                    <div class="lqd-lp-meta lqd-lp-meta-dot-between flex flex-wrap items-center">
                                        <div class="lqd-lp-author relative z-3">
                                            <div class="lqd-lp-author-info">
                                                <h3 class="mt-0 mb-0">
                                                    <span>Up Mobile</span>
                                                </h3>
                                            </div>
                                        </div>
                                        <time class="lqd-lp-date" datetime="">Aug 19, 2024</time>
                                    </div>
                                    <div>
                                        <h2 class="entry-title lqd-lp-title mt-0/5em mb-0 h5 text-black font-bold">FAQ: Your Questions, Answered</h2>
                                    </div>
                                </header>
                                <div class="lqd-lp-excerpt pt-1em pb-1/5em px-1em">
                                    <p class="text-14 text-black-40">Find answers to the most frequently asked questions here about our products, technology, tokenomics and ecosystem.</p>
                                    <a href="https://support.upnetwork.xyz/hc/en-gb/articles/15461644309660-FAQ-Your-Questions-Answered" target="_blank" class="text-black font-bold">Read More</a>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
                <div class="col col-12 text-center">
                    <a href="https://upnetworkhelp.zendesk.com/hc/en-gb" class="btn btn-naked btn-icon-right btn-icon-circle btn-icon-custom-size btn-icon-solid btn-icon-ripple text-white" target="_blank">
                        <span class="btn-txt" data-text="See more news">More Announcement</span>
                        <span class="btn-icon w-30 h-30 text-white bg-white-10">
                            <i aria-hidden="true" class="lqd-icn-ess icon-ion-ios-add"></i>
                        </span>
                    </a>
                </div>
            </div>
        </div>
    </section>
    <!-- End Blog -->



    
    <section
        class="lqd-section newsletter w-full flex flex-col items-center justify-center transition-all pt-200 pb-200 bg-black bg-center"
        id="newsletter"
        style="background-image: url(assets/images/bg/n-bg-02.jpg);"
    >   
        <!-- <div class="module-video w-full h-full absolute top-0 left-0 overflow-hidden z-0 transotion-opacity pointer-events-none bg-before">
            <video class="background-video-hosted max-w-full w-full h-full absolute-center object-cover" src="assets/videos/dark-ai/banner/community-bg-01.mp4" autoplay muted playsinline loop></video>
        </div> -->
        <div
            class="container flex flex-col justify-center gap-40 p-10"
            data-custom-animations="true"
            data-ca-options='{"animationTarget": ".animation-element, .animation-element .split-inner .lqd-chars", "duration" : 800, "startDelay" : 400, "delay" : 70, "ease": "expo.out", "initValues": {"scaleX" : 0.6, "scaleY" : 0.6, "rotationZ" : 1, "opacity" : 0} , "animations": {"scaleX" : 1, "scaleY" : 1, "rotationZ" : 0, "opacity" : 1}}'
        >
            <div class="w-full text-center">
                <div class="ld-fancy-heading relative animation-element">
                    <h2 class="ld-fh-element relative m-0 text-white" data-split-text="true" data-split-options='{"type": "chars, words"}'><span class="font-chakra-petch font-thin">Join the</span>community</h2>
                </div>
            </div>
            <div class="w-full text-center">
                <div class="ld-fancy-heading relative animation-element"><p class="ld-fh-element relative mb-0/5em text-20 leading-26">Take part in the conversation! Stay in the know & be the first to hear about any new updates.</p></div>
            </div>
            <div class="w-full text-center">
                <div class="ld-sf relative ld-sf--input-solid ld-sf--button-solid ld-sf--size-xs ld-sf--round ld-sf--border-none ld-sf--button-show ld-sf--button-inline animation-element">
                    <ul class="social-icon social-icon-border-none text-28">
                        <li>
                            <a class="text-white-70" href="https://t.me/upnetworkhq" target="_blank">
                                <svg xmlns="http://www.w3.org/2000/svg" height="1em" fill="currentColor" viewBox="0 0 512 512">
                                    <path class="cls-1" d="M477,43.86,13.32,223.29a5.86,5.86,0,0,0-.8.38c-3.76,2.13-30,18.18,7,32.57l.38.14,110.41,35.67a6.08,6.08,0,0,0,5.09-.62L409.25,120.57a6,6,0,0,1,2.2-.83c3.81-.63,14.78-1.81,7.84,7-7.85,10-194.9,177.62-215.66,196.21a6.3,6.3,0,0,0-2.07,4.17l-9.06,108a7.08,7.08,0,0,0,2.83,5.67,6.88,6.88,0,0,0,8.17-.62l65.6-58.63a6.09,6.09,0,0,1,7.63-.39l114.45,83.1.37.25c2.77,1.71,32.69,19.12,41.33-19.76l79-375.65c.11-1.19,1.18-14.27-8.17-22-9.82-8.08-23.72-4-25.81-3.56A6,6,0,0,0,477,43.86Z" id="Telegram"/></path>
                                </svg>
                            </a>
                        </li>
                        <li>
                            <a class="text-white-70" href="https://x.com/upnetworkhq" target="_blank">
                                <svg xmlns="http://www.w3.org/2000/svg" height="1em" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" id="X"/></path>
                                </svg>
                            </a>
                        </li>
                        <li>
                            <a class="text-white-70" href="https://discord.gg/upnetworkhq" target="_blank">
                                <svg xmlns="http://www.w3.org/2000/svg" height="1em" fill="currentColor" viewBox="0 0 68 68">
                                    <path class="cls-1" d="M57.7,12.6c-4.4-2-9.1-3.5-14.1-4.3-.6,1.1-1.3,2.5-1.8,3.6-5.2-.8-10.4-.8-15.6,0-.5-1.1-1.2-2.6-1.8-3.6-5,.8-9.7,2.3-14.1,4.3C1.5,25.7-.9,38.5.3,51.2c5.9,4.3,11.6,6.9,17.2,8.6,1.4-1.9,2.6-3.9,3.7-5.9-2-.8-4-1.7-5.8-2.8.5-.3,1-.7,1.4-1.1,11.2,5.1,23.3,5.1,34.4,0,.5.4.9.8,1.4,1.1-1.9,1.1-3.8,2-5.8,2.8,1.1,2.1,2.3,4.1,3.7,5.9,5.6-1.7,11.3-4.3,17.2-8.6,1.5-14.6-2.3-27.4-10-38.6ZM22.7,43.4c-3.4,0-6.1-3.1-6.1-6.8s2.7-6.8,6.1-6.8,6.2,3.1,6.1,6.8c0,3.7-2.7,6.8-6.1,6.8ZM45.3,43.4c-3.4,0-6.1-3.1-6.1-6.8s2.7-6.8,6.1-6.8,6.2,3.1,6.1,6.8c0,3.7-2.7,6.8-6.1,6.8Z" id="Discord"/></path>
                                </svg>
                            </a>
                        </li>
                    </ul>
                    <!-- <form class="ld_subscribe_form ld_sf_form relative" method="post" action="#">
                        <p class="pb-20"><input type="email" class="block w-full rounded-2 bg-white-5 text-white-70 text-15" name="email" placeholder="Enter your email address" /></p>
                        <button type="submit" class="inline-flex items-center justify-center m-0 rounded-2 relative text-white bg-primary text-15">
                            <span class="submit-text text-black">Subscribe</span> <span class="ld-sf-spinner rounded-full absolute overflow-hidden"><span class="block lqd-overlay flex rounded-full">Sending</span></span>
                        </button>
                    </form> -->
                    <div class="ld_sf_response"></div>
                </div>
            </div>
        </div>
    </section>
</div>
</main>
<footer id="site-footer" class="main-footer pt-120 px-5percent bg-black" data-sticky-footer="true" data-sticky-footer-options='{"shadow": "1"}'>
<div class="container-fluid flex flex-wrap p-0">
    <div class="w-20percent flex flex-col gap-20 p-10 transition-bg module-logo lg:w-full lg:flex-row">
        <div class="lqd-imggrp-single block relative">
            <div class="lqd-imggrp-img-container inline-flex relative items-center justify-center">
                <figure class="w-full relative"><img width="60" src="assets/images/logo/logo-up-yellow.svg" alt="Dark AI" /></figure>
            </div>
        </div>
        <div class="max-w-full self-start">
            <a href="#" class="btn btn-solid btn-icon-shaped text-10 bg-white-10 rounded-100 px-10 text-white"><span data-text="EN" class="btn-txt">EN</span></a>
        </div>
    </div>
    <div class="w-20percent flex flex-col gap-25 p-10 transition-bg lg:w-25percent sm:w-50percent">
        <div class="ld-fancy-heading relative"><h6 class="ld-fh-element relative mb-0/5em text-15 font-ultrabold">Contact Us</h6></div>
        <div class="lqd-fancy-menu lqd-custom-menu relative lqd-menu-td-none">
            <ul class="reset-ul link-white-50 text-15">
                <li class="mb-15"><a href="mailto:partner@upnetwork.xyz">partner@upnetwork.xyz</a></li>
                <li class="mb-15"><a href="mailto:sales@upnetwork.xyz">sales@upnetwork.xyz<!-- <span class="link-badge" style="--lqd-badge-color: #747474;">Soon</span> --></a></li>
                <li class="mb-15"><a href="mailto:support@upnetwork.xyz">support@upnetwork.xyz</a></li>
            </ul>
        </div>
        <div class="ld-fancy-heading relative"><h6 class="ld-fh-element relative mb-0/5em text-15 font-ultrabold">Support</h6></div>
        <div class="lqd-fancy-menu lqd-custom-menu relative lqd-menu-td-none">
            <ul class="reset-ul link-white-50 text-15">
                <li class="mb-15"><a href="${window.location.origin}/#/officialverification" target="_self">Verification Search</a></li>
            </ul>
        </div>
    </div>
    <div class="w-20percent flex flex-col gap-25 p-10 transition-bg lg:w-25percent sm:w-50percent">
        <div id="ld-fancy-heading-6447b46bcde9f" class="ld-fancy-heading relative"><h6 class="ld-fh-element relative mb-0/5em text-15 font-ultrabold">Legal</h6></div>
        <div class="lqd-fancy-menu lqd-custom-menu relative lqd-menu-td-none">
            <ul class="reset-ul link-white-50 text-15">
                <li class="mb-15"><a href="https://support.upnetwork.xyz/hc/en-gb/articles/15471578816284-Terms-and-Conditions" target="_blank">Terms and Conditions</a></li>
                <li class="mb-15"><a href="https://support.upnetwork.xyz/hc/en-gb/articles/15471548935068-Privacy-Policy" target="_blank">Privacy Policy</a></li>
                <li class="mb-15"><a href="https://support.upnetwork.xyz/hc/en-gb/articles/15471634288156-Return-and-Cancellation-Policy" target="_blank">Return and Cancellation Policy</a></li>
            </ul>
        </div>
    </div>
    <div class="w-20percent flex flex-col gap-25 p-10 transition-bg lg:w-25percent sm:w-50percent">
        <div id="ld-fancy-heading-6447b46bd5918" class="ld-fancy-heading relative"><h6 class="ld-fh-element relative mb-0/5em text-15 font-ultrabold">Learn More</h6></div>
        <div class="lqd-fancy-menu lqd-custom-menu relative lqd-menu-td-none">
            <ul class="reset-ul link-white-50 text-15">
                <li class="mb-15"><a href="https://www.notion.so/upnetwork/UP-NETWORK-INTRO-0b30d27b07e14a2ea73d903920802170">About Up Network</a></li>
                <li class="mb-15"><a href="#">UP OS</a></li>
                <li class="mb-15"><a href="#">DeMIN</a></li>
                <li class="mb-15"><a href="#">Proof of Personal-hood</a></li>
                <li class="mb-15"><a href="#">Developers</a></li>
                <li class="mb-15"><a href="#">OEM Partners</a></li>
            </ul>
        </div>
    </div>
    <div class="w-20percent flex flex-col gap-25 p-10 transition-bg lg:w-25percent sm:w-50percent">
        <div id="ld-fancy-heading-6447b46bdd7a2" class="ld-fancy-heading relative"><h6 class="ld-fh-element relative mb-0/5em text-15 font-ultrabold">Social</h6></div>
        <div class="lqd-fancy-menu lqd-custom-menu relative lqd-menu-td-none">
            <ul class="reset-ul link-white-50 text-15">
                <li class="mb-15"><a href="https://x.com/upnetworkhq">X<span class="link-badge" style="--lqd-badge-color: #747474;">Twitter</span></a></li>
                <li class="mb-15"><a href="https://t.me/upnetworkhq">Telegram</a></li>
                <li class="mb-15"><a href="https://discord.gg/upnetworkhq">Discord</a></li>
                <li class="mb-15"><a href="https://www.youtube.com/@UpNetworkHQ">Youtube</a></li>
            </ul>
        </div>
    </div>
    <div class="w-full flex justify-between items-center p-10 mt-70 mb-40 transition-bg lg:flex-wrap">
        <div class="ld-fancy-heading relative w-25percent lg:w-full lg:text-center">
            <p class="ld-fh-element relative mb-0/5em text-12 leading-20 tracking-0/1 text-white-30">Copyright © 2024 Up Network Company. All rights reserved.</p>
        </div>
        <div class="lqd-fancy-menu lqd-custom-menu relative lqd-menu-td-none module-social lg:w-full lg:text-center">
            <ul class="reset-ul inline-ul" style="visibility: hidden;">
                <li class="mr-25">
                    <a class="text-white-40 text-15" href="https://t.me/upnetworkhq" target="_blank">
                        <span class="link-icon inline-flex hide-if-empty left-icon icon-next-to-label text-slate-300">
                            <svg aria-hidden="true" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" fill="#fff" id="X"/></path>
                            </svg>
                        </span>
                        <span>X</span>
                    </a>
                </li>
                <li class="mr-25">
                    <a class="text-white-40 text-15" href="https://x.com/upnetworkhq" target="_blank">
                        <span class="link-icon inline-flex hide-if-empty left-icon icon-next-to-label text-slate-300">
                            <svg aria-hidden="true" viewbox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                                <path class="cls-1" d="M477,43.86,13.32,223.29a5.86,5.86,0,0,0-.8.38c-3.76,2.13-30,18.18,7,32.57l.38.14,110.41,35.67a6.08,6.08,0,0,0,5.09-.62L409.25,120.57a6,6,0,0,1,2.2-.83c3.81-.63,14.78-1.81,7.84,7-7.85,10-194.9,177.62-215.66,196.21a6.3,6.3,0,0,0-2.07,4.17l-9.06,108a7.08,7.08,0,0,0,2.83,5.67,6.88,6.88,0,0,0,8.17-.62l65.6-58.63a6.09,6.09,0,0,1,7.63-.39l114.45,83.1.37.25c2.77,1.71,32.69,19.12,41.33-19.76l79-375.65c.11-1.19,1.18-14.27-8.17-22-9.82-8.08-23.72-4-25.81-3.56A6,6,0,0,0,477,43.86Z" fill="#fff" id="Telegram"/></path>
                            </svg>
                        </span>
                        <span>Telegram</span>
                    </a>
                </li>
                <li>
                    <a class="text-white-40 text-15" href="https://discord.gg/upnetworkhq" target="_blank">
                        <span class="link-icon inline-flex hide-if-empty left-icon icon-next-to-label text-slate-300">
                            <svg aria-hidden="true" viewbox="0 0 68 68" xmlns="http://www.w3.org/2000/svg">
                                <path class="cls-1" d="M57.7,12.6c-4.4-2-9.1-3.5-14.1-4.3-.6,1.1-1.3,2.5-1.8,3.6-5.2-.8-10.4-.8-15.6,0-.5-1.1-1.2-2.6-1.8-3.6-5,.8-9.7,2.3-14.1,4.3C1.5,25.7-.9,38.5.3,51.2c5.9,4.3,11.6,6.9,17.2,8.6,1.4-1.9,2.6-3.9,3.7-5.9-2-.8-4-1.7-5.8-2.8.5-.3,1-.7,1.4-1.1,11.2,5.1,23.3,5.1,34.4,0,.5.4.9.8,1.4,1.1-1.9,1.1-3.8,2-5.8,2.8,1.1,2.1,2.3,4.1,3.7,5.9,5.6-1.7,11.3-4.3,17.2-8.6,1.5-14.6-2.3-27.4-10-38.6ZM22.7,43.4c-3.4,0-6.1-3.1-6.1-6.8s2.7-6.8,6.1-6.8,6.2,3.1,6.1,6.8c0,3.7-2.7,6.8-6.1,6.8ZM45.3,43.4c-3.4,0-6.1-3.1-6.1-6.8s2.7-6.8,6.1-6.8,6.2,3.1,6.1,6.8c0,3.7-2.7,6.8-6.1,6.8Z" fill="#fff" id="Discord"/></path>
                            </svg>
                        </span>
                        <span>Discord</span>
                    </a>
                </li>
                <!-- <li>
                    <a class="text-white-40 text-15" href="#"><span>Privacy Policy</span></a>
                </li> -->
            </ul>
        </div>
    </div>
</div>
</footer>`
var parentElement = document.getElementById("wrap");
parentElement.innerHTML = str