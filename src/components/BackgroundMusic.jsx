import { useEffect, useRef, useState } from 'react'

function BackgroundMusic() {
    const audioRef = useRef(null)
    const [isPlaying, setIsPlaying] = useState(false)
    const [volume, setVolume] = useState(0.3)

    useEffect(() => {
        const audio = audioRef.current
        if (!audio) return

        // Try to autoplay with muted first (browser policy)
        audio.volume = volume
        audio.loop = true
        
        // Attempt autoplay
        const playPromise = audio.play()
        if (playPromise !== undefined) {
            playPromise
                .then(() => {
                    setIsPlaying(true)
                })
                .catch(() => {
                    // Autoplay failed, user needs to click
                    setIsPlaying(false)
                })
        }
    }, [])

    const toggleMusic = () => {
        const audio = audioRef.current
        if (!audio) return

        if (isPlaying) {
            audio.pause()
            setIsPlaying(false)
        } else {
            audio.play()
            setIsPlaying(true)
        }
    }

    const handleVolumeChange = (e) => {
        const newVolume = parseFloat(e.target.value)
        setVolume(newVolume)
        if (audioRef.current) {
            audioRef.current.volume = newVolume
        }
    }

    return (
        <div className='fixed bottom-8 right-8 z-50 flex items-center gap-3 bg-black/40 backdrop-blur-md rounded-full px-4 py-3 border border-white/10 hover:border-white/20 transition-all'>
            {/* Music Toggle Button */}
            <button
                onClick={toggleMusic}
                className='text-white text-2xl hover:scale-110 transition-transform duration-200'
                title={isPlaying ? 'Pause music' : 'Play music'}
            >
                {isPlaying ? '🎵' : '🔇'}
            </button>

            {/* Volume Control */}
            <input
                type='range'
                min='0'
                max='1'
                step='0.1'
                value={volume}
                onChange={handleVolumeChange}
                className='w-20 h-1 bg-white/20 rounded-lg appearance-none cursor-pointer accent-indigo-500'
                title='Volume control'
            />

            {/* Volume Percentage */}
            <span className='text-white text-sm font-medium w-8'>
                {Math.round(volume * 100)}%
            </span>

            {/* Audio Element */}
            <audio
                ref={audioRef}
                src='/Man I Need - Olivia Dean.mp3'
                loop
                preload='auto'
            />
        </div>
    )
}

export default BackgroundMusic
