

export const Header = () => {

  return (
    <header>      
      <nav className="bg-white dark:bg-gray-900">
          <div className="border-b border-slate-200 dark:border-b-0 flex flex-wrap justify-between items-center mx-auto w-full px-4 md:px-6 py-3">
              <a href="/" className="flex items-center">
                  <img src="https://images.yourstory.com/cs/images/companies/logosC2481575977792883png?fm=auto&ar=1:1&mode=fill&fill=solid&fill-color=fff" className="mr-3 h-10" alt="CardDekho Logo" />
                  <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">CarDekho</span>
              </a>
              <div className="flex items-center relative">
                  <span onClick="" className="cursor-pointer text-xl text-gray-700 dark:text-white mr-5 bi bi-gear-wide-connected"></span>
                  <span onClick="" className="cursor-pointer text-xl text-gray-700 dark:text-white mr-5 bi bi-search"></span>
                  <a href="/cart" className="text-gray-700 dark:text-white mr-5">
                    <span className="text-2xl bi bi-cart-fill relative">
                      <span className="text-white text-sm absolute -top-1 left-2.5 bg-rose-500 px-1 rounded-full "></span>
                    </span>                    
                  </a>
                  <span onClick="" className="bi bi-person-circle cursor-pointer text-2xl text-gray-700 dark:text-white"></span>
                  {/* { dropdown && ( token ? <DropdownLoggedIn setDropdown={setDropdown} /> : <DropdownLoggedOut setDropdown={setDropdown} /> ) } */}
              </div>
          </div>
      </nav>
      {/* { searchSection && <Search setSearchSection={setSearchSection} /> } */}
      
    </header>
  )
}