"use client";

import { useEffect, useRef } from "react";

type Point = { x:number; y:number; vx:number; vy:number; r:number };

export function NetworkCanvas() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    let points: Point[] = [];
    let width = 0;
    let height = 0;
    const mouse = { x:-9999, y:-9999 };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.min(72, Math.max(34, Math.floor(width / 18)));
      points = Array.from({length:count}, (_, i) => ({
        x: Math.random()*width, y: Math.random()*height,
        vx:(Math.random()-.5)*.22, vy:(Math.random()-.5)*.22,
        r:i % 9 === 0 ? 2.4 : 1.2
      }));
    };

    const move = (e: MouseEvent) => {
      const r = canvas.getBoundingClientRect();
      mouse.x = e.clientX-r.left; mouse.y = e.clientY-r.top;
    };
    const leave = () => { mouse.x=-9999; mouse.y=-9999; };

    const draw = () => {
      ctx.clearRect(0,0,width,height);
      for (const p of points) {
        p.x += p.vx; p.y += p.vy;
        if (p.x < -20 || p.x > width+20) p.vx *= -1;
        if (p.y < -20 || p.y > height+20) p.vy *= -1;
        const dx = mouse.x-p.x, dy = mouse.y-p.y, d = Math.hypot(dx,dy);
        if (d > 0 && d < 150) { p.x -= dx/d*.08*(150-d)/150; p.y -= dy/d*.08*(150-d)/150; }
      }
      for (let i=0;i<points.length;i++) {
        for (let j=i+1;j<points.length;j++) {
          const a=points[i], b=points[j], d=Math.hypot(a.x-b.x,a.y-b.y);
          if (d<115) {
            ctx.strokeStyle = `rgba(16,185,129,${(1-d/115)*.22})`;
            ctx.lineWidth=.7; ctx.beginPath(); ctx.moveTo(a.x,a.y); ctx.lineTo(b.x,b.y); ctx.stroke();
          }
        }
      }
      for (const p of points) {
        const active = Math.hypot(mouse.x-p.x, mouse.y-p.y)<110;
        ctx.fillStyle = active ? "rgba(59,130,246,.95)" : "rgba(16,185,129,.65)";
        ctx.beginPath(); ctx.arc(p.x,p.y,p.r+(active?1.2:0),0,Math.PI*2); ctx.fill();
      }
      raf=requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener("resize",resize);
    canvas.addEventListener("mousemove",move);
    canvas.addEventListener("mouseleave",leave);
    draw();
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize",resize);
      canvas.removeEventListener("mousemove",move);
      canvas.removeEventListener("mouseleave",leave);
    };
  }, []);

  return <canvas ref={ref} aria-hidden="true" className="absolute inset-0 h-full w-full opacity-80" />;
}
