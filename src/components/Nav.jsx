import React from "react";

export default function Navbar({ fixed }) {
    const [navbarOpen, setNavbarOpen] = React.useState(false);
    return (
        <>
            <nav className="flex justify-between bg-gray-400">
                        <div className=" w-1/3 border">
                            <img src='https://cdn-icons-png.flaticon.com/512/1828/1828866.png' alt='Home Icon' className="flex items-center cursor-pointer hover:opacity-75 w-12 block mx-auto p-3 box-border border-gray-500"></img>

                        </div>
                        <div className="w-1/3 border">

                            <img src='https://cdn-icons-png.flaticon.com/512/833/833593.png' alt='Calendar Icon' className="flex items-center cursor-pointer hover:opacity-75 w-12 block mx-auto p-3 box-border border-gray-500"></img>

                        </div>
                        <div className="w-1/3 border">

                            <img src='https://cdn-icons-png.flaticon.com/512/5259/5259008.png' alt='Calendar Icon' className="flex items-center cursor-pointer hover:opacity-75 w-12 block mx-auto p-3 box-border border-gray-500"></img>

                        </div>
                    
                

            </nav>
        </>
    );
}