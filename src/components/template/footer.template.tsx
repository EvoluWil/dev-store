import Image from 'next/image';

export const Footer = () => {
  return (
    <footer
      className="text-primary py-8 shadow-lg dark:shadow-white/10"
      style={{ boxShadow: '0 10px 15px' }}
    >
      <div className="px-8 max-w-screen-xl mx-auto w-full flex items-center gap-4 container justify-between">
        <Image
          src="/images/commons/logo.png"
          alt="Logo"
          width={160}
          height={40}
          className="dark:invert"
        />
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/EvoluWil"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition"
          >
            <Image
              src="/images/socials/github.png"
              alt="GitHub"
              width={40}
              height={40}
              className="dark:invert"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/evoluwill"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition"
          >
            <Image
              src="/images/socials/linked-in.png"
              alt="LinkedIn"
              width={40}
              height={40}
              className="dark:invert"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};
