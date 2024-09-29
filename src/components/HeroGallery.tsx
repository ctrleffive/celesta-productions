import { StaticImage } from "gatsby-plugin-image";

import * as React from "react"

const images = [
  <span key={0} className="image fill !flex items-center justify-center" data-position="center">
    <StaticImage src="../images/logo.svg" className="rounded-full overflow-hidden" width={250} height={250} alt="Celesta Productions" />
  </span>,
  <StaticImage key={1} src="../images/hero-gallery/one.jpg" className="object-cover w-full h-full" alt="" />,
  <StaticImage key={2} src="../images/hero-gallery/two.jpg" className="object-cover w-full h-full" alt="" />,
  <StaticImage key={3} src="../images/hero-gallery/three.jpg" className="object-cover w-full h-full" alt="" />,
]

export const HeroGallery = () => {
  const interval = 4000

  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

  React.useEffect(() => {
    const changeImage = () => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    };

    const imageInterval = setInterval(changeImage, interval);

    return () => clearInterval(imageInterval);
  }, [images, interval]);

  return <>
    {images.map((image, index) => (
      <div
        // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
        key={index}
        className={`slider-image ${index === currentImageIndex ? 'active' : ''}`}
      >{image}</div>
    ))}
  </>
}
