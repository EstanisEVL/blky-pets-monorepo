interface Props {
  height: string;
  fsize: string;
  text: string;
  color: string;
  bgColor: string;
}

const Banner = ({ height, fsize, text, color, bgColor }: Props) => {
  return (
    <section
      className={`w-full ${height} font-semibold flex justify-center items-center ${bgColor} ${color}`}
    >
      <p className={`${fsize}`}>{text}</p>
    </section>
  );
};

export default Banner;
