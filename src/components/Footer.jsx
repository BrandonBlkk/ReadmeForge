import profileImage from '../assets/images/Profile.png';

export default function Footer() {
  return (
    <footer
      className="mt-auto flex items-center justify-center gap-2 border-t border-zinc-800 py-5 text-[11px] font-medium uppercase tracking-[0.08em] text-zinc-500"
    >
      Made by
      <a
        href="https://github.com/BrandonBlkk"
        className="flex items-center gap-1.5 text-zinc-50 no-underline transition-colors duration-200 hover:text-blue-500"
      >
        <img
          src={profileImage}
          alt="Profile"
          className="h-5 w-5 rounded-full select-none"
        />
        Brandon
      </a>
    </footer>
  )
}
