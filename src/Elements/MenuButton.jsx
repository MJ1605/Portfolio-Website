import { useState } from "react";
import { motion } from "framer-motion";

export const FloatingButton = () => {
    const [isOpen, setIsOpen] = useState(false);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({
            behavior: 'smooth', 
            block: 'start',     
            });
        }

        setIsOpen(false)
    };

  return (
    <>
        <motion.div
            className="fixed top-10 right-4 z-50 w-28 h-12 rounded-4xl cursor-pointer flex justify-center bg-white backdrop-blur-sm overflow-hidden"
            onClick={() => setIsOpen(!isOpen)}
            whileHover={{scale: 1.2, transition: {duration: 0.15}}}
            
            >
            <motion.div
                className="flex flex-col items-center justify-center"
                animate={{ y: isOpen ? "-50%" : "0%" }}
                transition={{ type: "spring", stiffness: 700, damping: 40, mass: 0.6, }}
                style={{ height: "200%" }}
            >
                <p className="h-12 flex items-center justify-center m-0 select-none">MENU</p>
                <p className="h-12 flex items-center justify-center m-0 select-none">CLOSE</p>
            </motion.div>
        </motion.div>


      <div className={`fixed top-32 right-4 w-96 z-40`} >
        <motion.div className=" bg-white rounded-4xl flex flex-col justify-around text-2xl mb-10 p-5 gap-3 shadow-lg" 
            animate={{opacity: isOpen ? "100%" : "0%", y: isOpen ? "0": "50%", rotate: isOpen ? 0 : 5}} transition={{ type: "spring", stiffness: 300, damping: 20, mass: 0.8, }}>
            <MenuButton buttonText={"Home"}></MenuButton>
            <MenuButton buttonText={"Featured Work"}></MenuButton>
            <MenuButton buttonText={"Experience"}></MenuButton>
            <MenuButton buttonText={"Personal Accolates"}></MenuButton>
            <MenuButton buttonText={"Contacts"}></MenuButton>
        </motion.div>
        <motion.div className="bg-white right-4 w-96 rounded-4xl" animate={{opacity: isOpen ? "100%" : "0%", y: isOpen ? "0": "1000%", rotate: isOpen ? 0 : -5}} transition={{ type: "spring", stiffness: 300, damping: 20, mass: 0.8, }}>
            <p>Playable web demos</p>
        </motion.div>
      </div>
      
    </>
  );
};

function MenuButton({buttonText})
{
    return(
        <div className="p-0 m-0">
            <button onClick={()=>{console.log(buttonText)}} className="text-left uppercase text-nowrap hover:bg-blue-100 h-full w-full p-1 rounded-2xl">{buttonText}</button>
        </div>
    )
}
