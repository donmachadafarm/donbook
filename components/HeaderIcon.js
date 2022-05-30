function HeaderIcon({Icon, active}) {
  return (
    <div className="flex items-center cursor-pointer md:px-10 sm:h-14 md:hover:bg-gray-100 rounded-xl active:border-b-2 active:border-gray-500 group">
        <Icon className={`text-center text-gray-500 h-5 sm:h-7 mx-auto group-hover:text-gray-700 ${active && 'text-gray-700'}`} />
    </div>
  )
}

export default HeaderIcon