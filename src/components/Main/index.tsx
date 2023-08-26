import photo1 from "../../assets/photo1.png";
import photo2 from "../../assets/photo2.png";
import photo3 from "../../assets/photo3.png";
import photo4 from "../../assets/photo4.png";
import photo5 from "../../assets/photo5.png";
import photo6 from "../../assets/photo6.png";

const images = [
  { src: photo1, alt: "photo1" },
  { src: photo2, alt: "photo2" },
  { src: photo3, alt: "photo3" },
  { src: photo4, alt: "photo4" },
  { src: photo5, alt: "photo5" },
  { src: photo6, alt: "photo6" },
];

const Main = () => {
  return (
    <main className="grid min-h-screen grid-cols-3 gap-8 mt-16 justify-items-stretch">
      {images.map(({ src, alt }) => (
        <img
          key={alt}
          src={src}
          alt={alt}
          className="rounded-xl [&:nth-of-type(2)]:col-start-2 [&:nth-of-type(2)]:col-end-4 [&:nth-of-type(2)]:row-start-1 [&:nth-of-type(2)]:row-end-2 [&:nth-of-type(3)]:col-start-1 [&:nth-of-type(3)]:col-end-3 [&:nth-of-type(3)]:row-start-2 [&:nth-of-type(3)]:row-end-3 [&:nth-of-type(4)]:col-start-3 [&:nth-of-type(4)]:col-end-4 [&:nth-of-type(4)]:row-start-2 [&:nth-of-type(4)]:row-end-4"
        />
      ))}
    </main>
  );
};

export default Main;
