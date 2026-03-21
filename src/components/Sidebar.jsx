import { LayoutGrid, Settings, Download, Plus } from 'lucide-react'

const sidebarItems = [
  { id: 'add', icon: Plus, label: 'Add Section', action: 'add' },
  { id: 'templates', icon: LayoutGrid, label: 'Templates', action: 'templates' },
  { id: 'settings', icon: Settings, label: 'Settings', action: 'settings' },
  { id: 'export', icon: Download, label: 'Export', action: 'export' },
]

const Sidebar = ({ activePanel, onPanelChange }) => {
  return (
    <aside
      className="fixed left-0 top-0 z-40 flex min-h-screen w-12 flex-col items-center gap-1 border-r border-zinc-800 bg-zinc-900/75 pt-4 backdrop-blur-lg"
    >
      {/* Logo mark */}
      <div
        className="mb-4 flex h-8 w-8 items-center justify-center rounded-lg cursor-pointer"
      >
        <img
          src="/logo.svg"
          alt="Profile"
          className="h-5 w-5 rounded-full select-none"
        />
      </div>

      {sidebarItems.map((item) => {
        const Icon = item.icon
        const isActive = activePanel === item.action
        return (
          <button
            key={item.id}
            onClick={() => onPanelChange(item.action)}
            title={item.label}
            aria-label={item.label}
            className={`relative flex h-9 w-9 items-center justify-center rounded-lg border border-transparent transition-all duration-150 cursor-pointer ${
              isActive
                ? 'bg-blue-500/15 text-blue-500'
                : 'text-zinc-500 hover:bg-[#1e1e22] hover:text-zinc-400'
            }`}
          >
            {isActive && (
              <span
                className="absolute -left-1.5 h-4 w-0.75 rounded-r-xs bg-blue-500"
              />
            )}
            <Icon size={18} />
          </button>
        )
      })}
    </aside>
  )
}

export default Sidebar
