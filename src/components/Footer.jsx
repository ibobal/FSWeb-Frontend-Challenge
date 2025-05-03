import { useSelector } from "react-redux";
import { FaCodepen, FaInstagram } from "react-icons/fa";
import { FiTwitter, FiAtSign } from "react-icons/fi";

export default function Footer() {
  const { data } = useSelector((state) => state.data);
  const { title, desc, email } = data.footerSection;

  return (
    <div className="flex flex-col bg-white dark:bg-[#252128] justify-between items-center text-center px-6 py-16">
      <h1 className="text-3xl md:text-5xl font-bold text-customPurple dark:text-[#8F88FF] mb-8">
        {title}
      </h1>
      <p className="text-lg md:text-xl w-full md:w-90 mb-8">{desc}</p>
      <a
        href="mailto: name@email.com"
        className="text-lg md:text-xl text-customIndigo dark:text-[#8F88FF] underline"
      >
        {email}
      </a>
      <div className="flex gap-4 mt-8 text-4xl text-customIndigo dark:text-[#8F88FF]">
        <a
          href="https://twitter.com/your-profile"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FiTwitter />
        </a>
        <a
          href="https://codepen.io/your-profile"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaCodepen />
        </a>
        <a
          href="https://instagram.com/your-profile"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FiAtSign />
        </a>

        <a
          href="https://instagram.com/your-profile"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>
      </div>
    </div>
  );
}
