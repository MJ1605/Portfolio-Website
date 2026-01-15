import React, { useEffect, useRef } from 'react';

const FluidGrid = () => {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const spacing = 30;
    const dotRadius = 2;
    const maxDistortion = 40;
    const dampening = 0.08;
    let dots = [];
    let width, height, rows, cols;

    const initGrid = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;

      dots = [];
      rows = Math.floor(height / spacing) + 1;
      cols = Math.floor(width / spacing) + 1;

      for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
          dots.push({
            x: x * spacing,
            y: y * spacing,
            originalX: x * spacing,
            originalY: y * spacing,
            vx: 0,
            vy: 0,
          });
        }
      }
    };

    const handleMouseMove = (e) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      const { x: mouseX, y: mouseY } = mouseRef.current;

      for (let i = 0; i < dots.length; i++) {
        const dot = dots[i];
        const dx = mouseX - dot.originalX;
        const dy = mouseY - dot.originalY;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 150) {
          const force = (150 - distance) / 150;
          const angle = Math.atan2(dy, dx);
          const targetX = dot.originalX + Math.cos(angle) * force * maxDistortion;
          const targetY = dot.originalY + Math.sin(angle) * force * maxDistortion;

          dot.vx += (targetX - dot.x) * dampening;
          dot.vy += (targetY - dot.y) * dampening;
        } else {
          dot.vx += (dot.originalX - dot.x) * dampening;
          dot.vy += (dot.originalY - dot.y) * dampening;
        }

        dot.vx *= 0.92;
        dot.vy *= 0.92;
        dot.x += dot.vx;
        dot.y += dot.vy;

        const dotDistance = Math.sqrt((mouseX - dot.x) ** 2 + (mouseY - dot.y) ** 2);
        const gradient = 1 - Math.min(1, dotDistance / 200);
        const colorValue = Math.floor(40 + gradient * 200);

        ctx.beginPath();
        ctx.fillStyle = `rgb(${colorValue}, ${colorValue}, ${colorValue + 40})`;
        ctx.arc(dot.x, dot.y, dotRadius + gradient * 1.5, 0, Math.PI * 2);
        ctx.fill();

        if (i < dots.length - 1 && (i + 1) % cols !== 0) {
          drawLink(dot, dots[i + 1], gradient);
        }
        if (i + cols < dots.length) {
          drawLink(dot, dots[i + cols], gradient);
        }
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    const drawLink = (dotA, dotB, gradient) => {
      const lineDist = Math.sqrt((dotB.x - dotA.x) ** 2 + (dotB.y - dotA.y) ** 2);
      if (lineDist < spacing * 1.5) {
        ctx.beginPath();
        ctx.strokeStyle = `rgba(100, 100, 140, ${0.1 + gradient * 0.2})`;
        ctx.lineWidth = 0.5;
        ctx.moveTo(dotA.x, dotA.y);
        ctx.lineTo(dotB.x, dotB.y);
        ctx.stroke();
      }
    };

    initGrid();
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', initGrid);
    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', initGrid);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const containerStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    zIndex: -1, 
    backgroundColor: '#000',
    overflow: 'hidden',
  };

  const infoStyle = {
    position: 'absolute',
    bottom: '20px',
    color: '#666',
    textAlign: 'center',
    fontSize: '14px',
    width: '100%',
    pointerEvents: 'none',
  };

  return (
    <div style={containerStyle}>
      <canvas ref={canvasRef} style={{ display: 'block' }} />
    </div>
  );
};

export default FluidGrid;