const Navbar = () => {
    const options = ['Works', 'Skills', 'Experience', 'Project']
    return (
        <div>
            <div className='border-2 border-red  flex flex-row flex-wrap px-6 py-3'
                style={{
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    borderRadius: "40px"
                }}>
                <h2 style={{
                    fontSize: "40px",
                    fontFamily: "Lucida Grande, Lucida Sans Unicode, Lucida Sans, sans-serif",
                    fontWeight: "bold",
                    letterSpacing: "2px"
                }}>
                    Pritam Patra
                </h2>
                <div className='flex flex-row gap-10 p-6 flex-wrap'
                    style={{
                        borderRadius: "40px",
                        padding: "2px",
                        mixBlendMode: "screen"
                    }}>
                    <div className="flex-wrap" 
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        gap: "30px",
                        border: "1px",
                        borderRadius: "38px",
                        backgroundColor: "#727070ff",
                        padding: "11px 25px",
                        color: "black",
                        boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3), 0 0 20px rgba(255, 255, 255, 0.1)",
                        transition: "all 0.3s ease"
                    }}>
                        {options.map((e) => (
                            <h3
                                key={e}
                                className="bg-transparent border-1 rounded-xl"
                                style={{
                                    padding: "8px 16px",
                                    borderRadius: "20px",
                                    border: "1px ",
                                    cursor: "pointer",
                                    color: "black",
                                    transition: "all 0.3s ease",
                                    fontFamily: "cursive",
                                    fontSize: "16px",
                                    textTransform: "uppercase",
                                    fontWeight: "bold"
                                }}
                                onMouseEnter={(event) => {
                                    event.target.style.background = 'white';
                                    event.target.style.color = '#1a5007ff';
                                    event.target.style.boxShadow = "0 0 15px rgba(0, 0, 0, 0.7)";
                                }}
                                onMouseLeave={(event) => {
                                    event.target.style.background = 'transparent';
                                    event.target.style.color = 'black';
                                    event.target.style.boxShadow = "none";
                                }}
                            >
                                {e}
                            </h3>
                        ))}
                    </div>
                </div>

                <div>
                    <button
                        className="group pointer-events-auto relative h-12 w-50 cursor-pointer overflow-hidden rounded-full border-2 border-white/20 bg-transparent p-3 px-8 text-center font-semibold backdrop-blur-sm transition-all duration-300 "
                        style={{
                            backgroundColor: "#727070ff",
                            borderRadius: "40px",
                            fontFamily: "cursive",
                            color: "black",
                            fontWeight: "bold",
                            cursor: "pointer",
                            transition: "all 0.3s ease",
                            padding: "10px 20px",
                            border: "none",
                            overflow: "hidden",
                            position: "relative"
                        }}
                    >
                        <div style={{
                            display: "flex",
                            alignItems: "center",
                            textAlign: "center",
                            gap: "12px"
                        }}>
                            <div style={{
                                height: "12px",
                                width: "12px",
                                borderRadius: "360px",
                                backgroundColor: "black",
                                transition: "all 0.3s ease",
                                transform: "scale(1)"
                            }}
                                className="group-hover:scale-[100]"
                            >
                            </div>
                            <span className="text-center items-center justify-center ml-4">
                                Lets connet
                            </span>
                            <span
                                className="absolute top-0 left-0 z-10 flex h-full w-full translate-x-12 items-center justify-center gap-3 text-white opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
                            >
                                Let's Connect
                            </span>
                        {/* </div> */}
                       
                        </div>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Navbar
