import React from "react";
import { Translation } from "react-i18next";

const bgImgOne = "./images/carousel-bg-one.png";
const bgImgTwo = "./images/carousel-bg-two.png";

function Carousel() {
	return (
		<div>
			<div
				id='carouselExampleCaptions'
				className='carousel carousel-fade slide'
				data-bs-ride='carousel'>
				<div className='carousel-indicators'>
					<button
						type='button'
						data-bs-target='#carouselExampleCaptions'
						data-bs-slide-to='0'
						className='active'
						aria-current='true'
						aria-label='Slide 1'></button>
					<button
						type='button'
						data-bs-target='#carouselExampleCaptions'
						data-bs-slide-to='1'
						aria-label='Slide 2'></button>
					<button
						type='button'
						data-bs-target='#carouselExampleCaptions'
						data-bs-slide-to='2'
						aria-label='Slide 3'></button>
				</div>
				<div className='carousel-inner'>
					<div className='carousel-item active'>
						<img src={bgImgOne} className='d-block w-100' alt='...' />
						<div className='carousel-caption d-none d-md-block'>
							<Translation>
								{(t) => <h5>{t("page_main.carousel.title_one")}</h5>}
							</Translation>
							<Translation>
								{(t) => <p>{t("page_main.carousel.message_one")}</p>}
							</Translation>
						</div>
					</div>
					<div className='carousel-item'>
						<img src={bgImgTwo} className='d-block w-100' alt='...' />
						<div className='carousel-caption mb-14 d-none d-md-block'>
							<h5>Second slide label</h5>
							<p>
								Some representative placeholder content for the second slide.
							</p>
						</div>
					</div>
					<div className='carousel-item'>
						<img src={bgImgOne} className='d-block w-100' alt='...' />
						<div className='carousel-caption d-none d-md-block'>
							<h5>Third slide label</h5>
							<p>
								Some representative placeholder content for the third slide.
							</p>
						</div>
					</div>
				</div>
				<button
					className='carousel-control-prev'
					type='button'
					data-bs-target='#carouselExampleCaptions'
					data-bs-slide='prev'>
					<span
						className='carousel-control-prev-icon'
						aria-hidden='true'></span>
					<span className='visually-hidden'>Previous</span>
				</button>
				<button
					className='carousel-control-next'
					type='button'
					data-bs-target='#carouselExampleCaptions'
					data-bs-slide='next'>
					<span
						className='carousel-control-next-icon'
						aria-hidden='true'></span>
					<span className='visually-hidden'>Next</span>
				</button>
			</div>
		</div>
	);
}

export default Carousel;
