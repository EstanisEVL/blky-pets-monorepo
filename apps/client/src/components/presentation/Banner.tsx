type BannerPropsType = {
  height: string;
  fsize: string;
  text: string;
  color: string;
  bgColor: string;
};

const Banner = ({ height, fsize, text, color, bgColor }: BannerPropsType) => {
  return (
    <section
      className={`px-4 sm:px-0 w-full ${height} flex justify-center items-center ${bgColor} ${color}`}
    >
      <p className={`${fsize} font-kanit font-semibold text-center`}>{text}</p>
    </section>
  );
};

export default Banner;
