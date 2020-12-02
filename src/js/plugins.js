
/*
 * Swiper get started: https://swiperjs.com/get-started/
 * AOS get started: https://github.com/michalsnik/aos
 */

import AOS from 'aos';
import Swiper, { Autoplay, Navigation, Pagination, Thumbs } from 'swiper';

import 'aos/dist/aos.css';
import 'swiper/swiper-bundle.css';

Swiper.use([Autoplay, Navigation, Pagination, Thumbs]);

AOS.init();
