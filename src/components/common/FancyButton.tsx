"use client"

interface FancyButtonProps {
  children: React.ReactNode
  isDark?: boolean
}

const FancyButton = ({ children, isDark = true }: FancyButtonProps) => {
  const style = isDark ? "text-white bg-gray-900" : "text-gray-900 bg-white"
  return (
    <div className="relative inline-flex group">
      <div className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt" />
      <button className={`relative z-20 h-10 px-4 transition-all duration-200 rounded-md ${style}`}>
        {children}
      </button>
    </div>
  )
}

export default FancyButton