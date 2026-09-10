"use client";

import { useEffect, useRef } from "react";
import { useTheme } from "@/components/ThemeProvider";

function Starfield() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animationFrame;
    let stars = [];
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    function init() {
      const count = Math.min(220, Math.floor(window.innerWidth / 8));
      stars = Array.from({ length: count }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.6 + 0.3,
        baseAlpha: Math.random() * 0.7 + 0.2,
        alpha: Math.random() * 0.7 + 0.2,
        twinkleSpeed: (Math.random() * 0.02 + 0.005) * (Math.random() > 0.5 ? 1 : -1),
        isCross: Math.random() > 0.88,
        color:
          Math.random() > 0.6
            ? "rgba(160, 200, 255,"
            : Math.random() > 0.3
            ? "rgba(210, 180, 255,"
            : "rgba(255, 255, 255,",
      }));
    }

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      stars.forEach((s) => {
        s.alpha += s.twinkleSpeed;
        if (s.alpha > 0.95 || s.alpha < 0.15) {
          s.twinkleSpeed = -s.twinkleSpeed;
        }

        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `${s.color}${s.alpha})`;
        ctx.fill();

        if (s.isCross && s.alpha > 0.5) {
          ctx.strokeStyle = `${s.color}${s.alpha * 0.4})`;
          ctx.lineWidth = 0.5;
          ctx.beginPath();
          ctx.moveTo(s.x - s.r * 3.5, s.y);
          ctx.lineTo(s.x + s.r * 3.5, s.y);
          ctx.moveTo(s.x, s.y - s.r * 3.5);
          ctx.lineTo(s.x, s.y + s.r * 3.5);
          ctx.stroke();
        }
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
      className="absolute inset-0 h-full w-full opacity-85"
      aria-hidden="true"
    />
  );
}

export default function AuroraBackground() {
  const { theme } = useTheme();
  const isLight = theme === "light";

  if (isLight) {
    // Clean professional light background: white with very subtle blue-tinted radial accents
    return (
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden transition-all duration-500"
        style={{ backgroundColor: "#f8f9ff" }}
      >
        {/* Soft blue-violet top-left glow */}
        <div
          className="absolute -left-[10%] -top-[10%] h-[70vh] w-[70vh] rounded-full blur-[130px]"
          style={{ background: "radial-gradient(circle, rgba(77,127,255,0.08) 0%, transparent 70%)" }}
        />
        {/* Soft violet right glow */}
        <div
          className="absolute -right-[10%] top-[10%] h-[60vh] w-[60vh] rounded-full blur-[130px]"
          style={{ background: "radial-gradient(circle, rgba(155,91,255,0.07) 0%, transparent 70%)" }}
        />
        {/* Very subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(18,18,31,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(18,18,31,0.6) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
            maskImage: "radial-gradient(ellipse 75% 65% at 50% 30%, #000 30%, transparent 100%)",
          }}
        />
      </div>
    );
  }

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-[#05050b]">
      {/* Deep Space Glowing Radial Gradients */}
      <div className="absolute -left-[20%] -top-[15%] h-[80vh] w-[80vh] rounded-full bg-gradient-to-br from-indigo-900/35 via-violet-900/20 to-transparent blur-[120px]" />
      <div className="absolute -right-[15%] top-[15%] h-[70vh] w-[70vh] rounded-full bg-gradient-to-bl from-blue-900/30 via-cyan-900/20 to-transparent blur-[120px]" />
      <div className="absolute bottom-[-10%] left-[25%] h-[65vh] w-[75vh] rounded-full bg-gradient-to-t from-purple-900/25 via-blue-950/20 to-transparent blur-[130px]" />
      <div className="absolute right-[30%] top-[45%] h-[50vh] w-[50vh] rounded-full bg-cyan-950/20 blur-[140px]" />

      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-30 [mask-image:radial-gradient(ellipse_75%_65%_at_50%_30%,#000_30%,transparent_100%)]" />

      {/* Starfield Particles */}
      <Starfield />

      {/* Soft Vignette Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#05050b]/90" />
    </div>
  );
}
