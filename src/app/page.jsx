import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-[url('/img/bg/kids.avif')] bg-cover bg-no-repeat bg-center h-[100vh] w-[100vw] overflow-hidden  flex justify-center items-center">
      <Link href="/games">
        <button className="bg-blue-600 border-4 border-white p-12 text-white text-6xl rounded-full jump">
          ▶
        </button>
      </Link>
    </div>
  );
}
