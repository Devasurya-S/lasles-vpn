import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaStar } from "react-icons/fa6";

const Testimonial = () => {
	const data = [
		{
			name: "Viezh Robert",
			place: "Warsaw, Poland",
			rating: 4.5,
			content:
				"“Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”.",
			imgUrl: "/images/profile-1.png",
		},
		{
			name: "Yessica Christy",
			place: "Shanxi, China",
			rating: 4.5,
			content:
				"“I like it because I like to travel far and still can connect with high speed.”.",
			imgUrl: "/images/profile-2.png",
		},
		{
			name: "Kim Young Jou",
			place: "Seoul, South Korea",
			rating: 4.5,
			content:
				"“This is very unusual for my business that currently requires a virtual private network that has high security.”.",
			imgUrl: "/images/profile-3.png",
		},
	];

	let settings = {
		dots: false,
		arrows: false,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,
		focusOnSelect: true,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 2,
				},
			},
			{
				breakpoint: 576,
				settings: {
					slidesToShow: 1,
				},
			},
		],
		autoplay: true,
	};

	return (
		<section className="bg-white">
			<div className="container py-3 py-lg-5">
				<h2 className="hd-type-2 fw-medium mb-2 mb-md-3 color-2 text-center">
					Trusted by Thousands of <br /> Happy Customer
				</h2>
				<p className="text-type-1 fw-regular mb-3 mb-md-4 color-1 text-center mb-4 mb-md-5">
					These are the stories of our customers who have joined us with great
					<br /> pleasure when using this crazy feature.
				</p>
				<Slider {...settings}>
					{data.map((item, index) => {
						return (
							<div key={index} className="p-3 h-100">
								<div className="d-flex gap-3">
									<div>
										<img
											src={item.imgUrl}
											className="img-fluid"
											alt="profile icon"
										/>
									</div>
									<div className="d-flex gap-3 flex-grow-1 justify-content-between align-items-center">
										<div>
											<h4 className="mb-0 text-type-3 color-2 fw-medium">
												{item.name}
											</h4>
											<p className="mb-0 text-type-4 fw-regular">
												{item.place}
											</p>
										</div>
										<div className="d-flex gap-2 align-items-center text-type-1 ">
											<p className="mb-0 fw-regular color-1">{item.rating}</p>
											<FaStar fill="#FEA250" />
										</div>
									</div>
								</div>
								<p className="mb-0 mt-2 text-type-1 fw-regular color-1">
									{item.content}
								</p>
							</div>
						);
					})}
				</Slider>
			</div>
		</section>
	);
};

export default Testimonial;
