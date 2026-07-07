"use client";

import { useEffect, useRef } from "react";

function Particles() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animationFrame;
    let particles = [];
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    function init() {
      const count = Math.min(70, Math.floor(window.innerWidth / 22));
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.4 + 0.4,
        vx: (Math.random() - 0.5) * 0.15,
        vy: (Math.random() - 0.5) * 0.15,
        alpha: Math.random() * 0.5 + 0.15,
      }));
    }

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(150, 180, 255, ${p.alpha})`;
        ctx.fill();
      });
      animationFrame = requestAnimationFrame(draw);
    }

    resize();
    init();
    if (!reduceMotion) {
      draw();
    } else {
      draw();
      cancelAnimationFrame(animationFrame);
    }

    window.addEventListener("resize", () => {
      resize();
      init();
    });

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 h-full w-full opacity-70"
      aria-hidden="true"
    />
  );
}

export default function AuroraBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-base-950">
      <div className="absolute inset-0 bg-grid-pattern bg-grid [mask-image:radial-gradient(ellipse_70%_60%_at_50%_20%,#000_40%,transparent_100%)]" />
      <div className="absolute -left-1/4 top-[-10%] h-[70vh] w-[70vh] bg-aurora-1 blur-3xl" />
      <div className="absolute right-[-15%] top-[10%] h-[60vh] w-[60vh] bg-aurora-2 blur-3xl" />
      <div className="absolute bottom-[-20%] left-[20%] h-[60vh] w-[80vh] bg-aurora-3 blur-3xl" />
      <Particles />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-base-950" />
    </div>
  );
}
