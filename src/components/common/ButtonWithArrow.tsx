import { IoArrowUpOutline } from 'react-icons/io5';

interface Props {
  text: string;
  href?: string;
  size: number;
  color: string;
}

export default function ButtonWithArrow({ text, href, size = 15, color = 'black' }: Props) {
  return (
    <a href={href} className="group bg-black text-white py-2 px-4 rounded-full flex items-center space-x-3">
      <span>{text}</span>
      <span className="p-1 bg-red-400 rounded-full">
        <IoArrowUpOutline size={size} color={color} className="group-hover:rotate-90 rotate-45 transition-transform duration-300" />
      </span>
    </a>
  );
}
