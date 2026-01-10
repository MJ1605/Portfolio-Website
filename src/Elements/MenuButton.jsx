import { useState } from "react";
import { motion } from 'framer-motion';

export const FloatingButton = () =>{
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
        <motion.div 
        animate={{ 
            width: isOpen ? 220 : 60,
            height: isOpen ? 220 : 60,
            borderRadius: isOpen ? "20px" : "30px",
        }}
        style={{
            position: 'fixed',
            top: '30px',
            right: '30px',
            backgroundColor: 'rgba(255, 255, 255, 0.7)',
            backdropFilter: 'blur(15px)', 
            border: '1px solid rgba(255, 255, 255, 0.3)',
            cursor: 'pointer',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column'
        }}
        onClick={() => setIsOpen(!isOpen)}
        >
            <div style={{
                position: 'absolute',
                top: 0,
                right: -1,
                width: '60px',
                height: '60px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '6px',
            }}>
                <motion.span 
                    animate={{ 
                    rotate: isOpen ? 45 : 0, 
                    y: isOpen ? 8 : 0 
                    }}
                    style={lineStyle} 
                />
                
                <motion.span 
                    animate={{ 
                    opacity: isOpen ? 0 : 1,
                    x: isOpen ? 20 : 0
                    }}
                    style={lineStyle} 
                />
                
                <motion.span 
                    animate={{ 
                    rotate: isOpen ? -45 : 0, 
                    y: isOpen ? -8 : 0 
                    }}
                    style={lineStyle} 
                />
            </div>

                <nav style={{
                    marginTop: '60px',
                    paddingLeft: '30px',
                    display: 'flex',
                    flexDirection: 'column',
                    opacity: isOpen ? 1 : 0,
                    transition: 'opacity 0.3s ease',
                    pointerEvents: isOpen ? 'auto' : 'none' 
                    }}>
                        {['home', 'work', 'contact'].map((id, index) => (
                        <motion.button
                            key={id}
                            onClick={(e) => {
                                e.stopPropagation();
                                scrollToSection(id);
                            }}
                            style={linkStyle}

                            initial={{ opacity: 0, x: 20 }}
                            animate={{ 
                                opacity: isOpen ? 1 : 0, 
                                x: isOpen ? 0 : 20 
                            }}

                            whileHover={{ 
                                y: -5, 
                                color: '#ff6b6b',
                                transition: { 
                                type: "spring", 
                                stiffness: 400, 
                                damping: 25,
                                delay: 0 
                                } 
                            }}

                            transition={{
                                type: "spring",
                                stiffness: 300,
                                damping: 30,

                                x: { 
                                delay: isOpen ? 0.2 + (index * 0.1) : 0,
                                damping: 20 
                                },
                                opacity: { 
                                delay: isOpen ? 0.2 + (index * 0.1) : 0 
                                },
                                
                                default: { delay: 0 }
                            }}
                            >
                            {id.toUpperCase()}
                        </motion.button>
                    ))}
                </nav>
        </motion.div>
    )
}


const lineStyle = {
  display: 'block',
  width: '24px',
  height: '2px',
  backgroundColor: '#333', 
  borderRadius: '2px'
};



const linkStyle = {
  background: 'none',
  border: 'none',
  color: '#332222',
  fontSize: '30px',
  fontWeight: 'bold',
  textAlign: 'left',
  cursor: 'pointer',
  padding: '2px 0',
  width: '100%',
  letterSpacing: '2px',
  textTransform: 'uppercase',
};