import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen  bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <div className="flex flex-col cursor-default">
          <span>Olá, eu sou</span>

          <p className="text-2xl font-bold">
            Nicolas Eduardo da Silva
          </p>

          <p className="
    text-blue-500 
    inline-block
    transform
    hover:underline
    hover:underline-offset-8
    transition
    duration-300
  ">
            Desenvolvedor Back-End
          </p>
          <span>
            Sou apaixonado por aprender e desenvolver novas tecnologias
          </span>

        </div>

      </main>
    </div>
  );
}
