import Image from 'next/image';

export const Header = () => {
  return (
    <header className="sticky top-0 left-0 w-full flex items-center justify-between px-4 md:px-12 py-4 z-50 transition-all duration-300 shadow-lg dark:shadow-white/10 shadow-black/30 bg-gradient-to-b from-black/30 to-transparent backdrop-blur-xl">
      <div className="px-8 max-w-screen-xl mx-auto w-full">
        <div className="flex items-center gap-4 container">
          <Image
            src="/images/commons/logo.png"
            alt="Logo"
            width={160}
            height={40}
            className="object-contain dark:invert"
          />
        </div>
      </div>
    </header>
  );
};
