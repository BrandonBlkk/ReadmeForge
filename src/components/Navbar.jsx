import { Copy, RotateCcw } from 'lucide-react'
import { useState } from 'react';

const Navbar = ({ onReset, onCopy }) => {
  const [isBeta, setIsBeta] = useState(true);
  const [isRotating, setIsRotating] = useState(false);
  const [isCopying, setIsCopying] = useState(false);

  const handleResetClick = () => {
    setIsRotating(true);
    onReset();
    setTimeout(() => setIsRotating(false), 500);
  };

  const handleCopyClick = () => {
    setIsCopying(true);
    onCopy();
    setTimeout(() => setIsCopying(false), 500);
  };

  return (
    <header
      className="sticky top-0 z-30 flex items-center justify-between gap-4 border-b border-zinc-800 bg-zinc-900/75 px-6 py-3 backdrop-blur-lg"
    >
      <div className="flex items-center gap-3">
        <h1 className="text-sm font-semibold tracking-[-0.01em] text-zinc-50">
          BranReadme
        </h1>
        { isBeta ?
          <span className="rounded-full border border-rose-800 bg-zinc-900 px-2 py-0.5 text-[11px] font-medium text-rose-400">
            Beta
          </span> :
          <span className="rounded-full border border-zinc-600 bg-zinc-900 px-2 py-0.5 text-[11px] font-medium text-zinc-400">
            v1.0
          </span>
        }
      </div>

      <div className="flex items-center gap-2 select-none">
        <button
          type="button"
          onClick={handleResetClick}
          className="flex items-center gap-1.5 rounded-lg border border-zinc-800 bg-zinc-900 px-3 py-1.5 text-xs font-medium text-zinc-400 transition-all duration-150 hover:border-zinc-700 hover:text-zinc-50 cursor-pointer"
        >
          <RotateCcw 
            size={13} 
            className={`${isRotating ? '-rotate-360 transition-all duration-300 ease-in-out' : ''}`} 
          />
          Reset
        </button>

        <button
          type="button"
          onClick={handleCopyClick}
          className="flex items-center gap-1.5 rounded-lg border border-rose-600 bg-rose-600 px-3 py-1.5 text-xs font-medium text-white transition-all duration-150 hover:border-rose-500 hover:bg-rose-500 cursor-pointer"
        >
          <Copy 
            size={13} 
            className={`${isCopying ? 'transform scale-90 transition-all duration-300 ease-in-out' : ''}`}
          />
          Copy Markdown
        </button>
      </div>
    </header>
  )
}

export default Navbar