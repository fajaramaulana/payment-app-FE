const Sidebar = () => {
    return (
      <aside className="w-64 bg-gray-800 text-white h-full">
        <nav>
          <ul>
            <li>
              <a href="/dashboard" className="block py-2 px-4 hover:bg-gray-600">Dashboard</a>
            </li>
            <li>
              <a href="/profile" className="block py-2 px-4 hover:bg-gray-600">Profile</a>
            </li>
          </ul>
        </nav>
      </aside>
    );
  };
  
  export default Sidebar;
  