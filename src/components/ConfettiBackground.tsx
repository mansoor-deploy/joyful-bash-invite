
import React, { useEffect, useState } from 'react';

// Define confetti piece type
type ConfettiPiece = {
  id: number;
  left: string;
  width: string;
  height: string;
  delay: string;
  duration: string;
  color: string;
};

const COLORS = [
  '#D4AF37', // gold
  '#FEC6A1', // rose
  '#FFDEE2', // blush
  '#E5DEFF', // mint
  '#FEF7CD', // cream
];

const SHAPES = [
  'rounded-full', // Circle
  'rounded', // Rounded square
  'rounded-lg', // More rounded square
  'rounded-tl-full rounded-br-full', // Custom shape
  'rounded-tr-full rounded-bl-full', // Custom shape
];

const ConfettiBackground: React.FC = () => {
  const [confetti, setConfetti] = useState<ConfettiPiece[]>([]);

  useEffect(() => {
    // Generate confetti pieces
    const pieces: ConfettiPiece[] = [];
    const count = 30; // Number of confetti pieces

    for (let i = 0; i < count; i++) {
      pieces.push({
        id: i,
        left: `${Math.random() * 100}%`,
        width: `${Math.random() * 10 + 5}px`,
        height: `${Math.random() * 10 + 5}px`,
        delay: `${Math.random() * 5}s`,
        duration: `${Math.random() * 4 + 6}s`,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
      });
    }

    setConfetti(pieces);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
      {confetti.map((piece) => (
        <div
          key={piece.id}
          className={`absolute ${SHAPES[piece.id % SHAPES.length]} animate-confetti-fall opacity-70`}
          style={{
            left: piece.left,
            width: piece.width,
            height: piece.height,
            animationDelay: piece.delay,
            animationDuration: piece.duration,
            backgroundColor: piece.color,
            top: '-20px',
          }}
        />
      ))}
    </div>
  );
};

export default ConfettiBackground;
