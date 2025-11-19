import React, { useEffect, useRef } from 'react';

const MouseFollowBackground: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let mouseX = -1000;
        let mouseY = -1000;

        const handleMouseMove = (e: MouseEvent) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        };

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();

        let animationFrameId: number;

        const render = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Create a radial gradient that follows the mouse
            // The gradient goes from a very subtle accent color to transparent
            const gradient = ctx.createRadialGradient(
                mouseX,
                mouseY,
                0,
                mouseX,
                mouseY,
                400 // Radius of the spotlight
            );

            // Use the accent color but very transparent
            // We'll assume the accent color is roughly green/cyan based on previous steps
            // Let's use a hardcoded RGBA for now that matches the "Terminal Green" vibe: #00ff41
            gradient.addColorStop(0, 'rgba(0, 255, 65, 0.08)');
            gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');

            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            animationFrameId = requestAnimationFrame(render);
        };

        render();

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('resize', resizeCanvas);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                pointerEvents: 'none', // Allow clicks to pass through
                zIndex: 0 // Behind everything else but above the black background
            }}
        />
    );
};

export default MouseFollowBackground;
