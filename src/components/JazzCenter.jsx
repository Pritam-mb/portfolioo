function JazzCenter() {
    return (
        <div className="fixed inset-0 flex items-center justify-center pointer-events-none z-2">
            <div className="jazz-gif-container">
                <img 
                    src="/jazz.gif" 
                    alt="Jazz Animation"
                    className="jazz-gif"
                    style={{
                        width: '500px',
                        height: '500px',
                        borderRadius: '50%',
                        opacity: 0.7,
                        filter: 'drop-shadow(0 0 20px rgba(99, 102, 241, 0.5))',
                        border: '3px solid rgba(255, 255, 255, 0.2)',
                        background: 'rgba(0, 0, 0, 0.3)',
                        backdropFilter: 'blur(10px)'
                    }}
                />
            </div>
        </div>
    )
}

export default JazzCenter