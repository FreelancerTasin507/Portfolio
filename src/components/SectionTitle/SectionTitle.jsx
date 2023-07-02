const SectionTitle = ({ title }) => {
  return (
    <div>
      <p
        className="text-5xl font-bold text-center"
        style={{ fontFamily: "'Tilt Prism', cursive" }}
      >
        {title}
      </p>
      <hr className="border-2 w-1/6 mx-auto mt-7 border-[#A6ADBA] mb-32" />
    </div>
  );
};

export default SectionTitle;
