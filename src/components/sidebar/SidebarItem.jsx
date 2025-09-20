const SidebarItem = ({ icon: Icon, label, active = false, path, onClick }) => {
  const handleClick = (e) => {
    e.preventDefault();
    if (onClick) {
      onClick(path, label);
    }
  };

  return (
    <a
      href={path}
      onClick={handleClick}
      className={`flex items-center space-x-3 px-3 py-1.5 rounded-md text-xs transition-all duration-200 ${
        active
          ? 'bg-blue-50 text-blue-600 border-r-2 border-blue-600'
          : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
      }`}
    >
      <Icon className="w-4 h-4" />
      <span className="font-medium">{label}</span>
    </a>
  );
};
export default SidebarItem