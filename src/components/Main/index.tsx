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
    <main className="min-h-screen">
      <section className="grid grid-cols-3 gap-3 px-3 mt-10 lg:mt-16 lg:gap-8 justify-items-stretch lg:px-10">
        {images.map(({ src, alt }) => (
          <img
            key={alt}
            src={src}
            alt={alt}
            className="rounded-xl [&:nth-of-type(2)]:col-start-2 [&:nth-of-type(2)]:col-end-4 [&:nth-of-type(2)]:row-start-1 [&:nth-of-type(2)]:row-end-2 [&:nth-of-type(3)]:col-start-1 [&:nth-of-type(3)]:col-end-3 [&:nth-of-type(3)]:row-start-2 [&:nth-of-type(3)]:row-end-3 [&:nth-of-type(4)]:col-start-3 [&:nth-of-type(4)]:col-end-4 [&:nth-of-type(4)]:row-start-2 [&:nth-of-type(4)]:row-end-4"
          />
        ))}
      </section>
    </main>
  );
};

export default Main;
