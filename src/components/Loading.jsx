import { useState } from 'react';

export default function LoadingInvite({ children }) {
  const [loading, setLoading] = useState(true);
  const [explode, setExplode] = useState(false);

  const handleStart = () => {
    // Explosión visual
    setExplode(true);

    // Iniciar música si existe el audio
    const audio = document.getElementById('myAudio');
    if (audio) {
      audio.play().catch(err => {
        console.log("Autoplay bloqueado, el usuario debe interactuar:", err);
      });
      playPauseBtn.textContent = "🔊";
    }

    // Esperar animación y mostrar contenido
    setTimeout(() => {
      setLoading(false);
    }, 800);
  };

  if (loading) {
    return (
        <div className="items-center justify-center h-screen w-screen flex flex-col text-center relative overflow-hidden">
            <div className={`text-6xl transition-transform duration-700 ease-out z-0 ${explode ? 'scale-[10] opacity-0' : 'scale-100 opacity-100'}`}>
                <div className="race-text">¡MI PRESENTACIÓN!</div>
            </div>

            {!explode && (
                <button id="playPauseBtn" onClick={handleStart} className="z-10 mt-12 px-6 py-1 text-white bg-red-500 font-serif rounded-full animate-blue-glow hover:scale-105 transition-all duration-300">
                    <img src="/hot.webp" alt="" className='w-48 h-auto' />
                </button>
            )}

            <style jsx>{`
                

                .race-text {
                    font-size: 2rem;
                    font-weight: bold;
                    color: #fff;
                    text-transform: uppercase;
                    letter-spacing: 5px;
                    text-shadow:
                    0 0 5px #f00,
                    0 0 10px #ff0,
                    0 0 20px #fff,
                    2px 2px 2px #000;
                    animation: shake 0.2s infinite, neon-pulse 2s ease-in-out infinite;
                    position: relative;
                }

                @keyframes shake {
                    0% { transform: translate(1px, 0px) rotate(0deg); }
                    25% { transform: translate(-1px, 1px) rotate(-1deg); }
                    50% { transform: translate(-2px, 0px) rotate(1deg); }
                    75% { transform: translate(1px, -1px) rotate(0deg); }
                    100% { transform: translate(0px, 1px) rotate(-1deg); }
                }

                @keyframes neon-pulse {
                    0%, 100% {
                    text-shadow:
                        0 0 5px #f00,
                        0 0 10px #ff0,
                        0 0 20px #fff,
                        2px 2px 2px #000;
                    }
                    50% {
                    text-shadow:
                        0 0 10px #ff9900,
                        0 0 20px #ffcc00,
                        0 0 30px #fff,
                        2px 2px 2px #222;
                    }
                }
            `}</style>
        </div>
    );
  }

  return (
    <div className="flex flex-wrap h-screen animate-fadeIn">
      {children}
    </div>
  );
}
