"use client";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function CarouselWrapper({ Images }: { Images: string[] }) {
  return (
    <div className="bg- rounded-lg">
      <Carousel
        showArrows={true}
        className="!h-full"
        showStatus={false}
        showIndicators={true}
        showThumbs={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={3000}
        transitionTime={500}
        stopOnHover={true}
        dynamicHeight={false}
        emulateTouch={true}
        swipeable={true}
      >
        {Images?.map((img, index) => (
          <div
            key={index}
            className="h-[27rem] flex items-center justify-center"
          >
            <img
              className="max-w-full max-h-full w-auto h-auto object-contain"
              src={img}
              loading="lazy"
              alt={`Img-${index}`}
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
}
