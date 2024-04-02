import PhoneGame from "@/components/phone-char";
import { characters } from "@/data";

export default function Call({ params }) {
  const char = characters.find((char) => char.id === params.slug);

  return <PhoneGame {...char} />;
}
