"use client";
 
 import { useEffect } from "react";
 import Lenis from "lenis";
 
 export default function LenisProvider({
   children,
 }: {
   children: React.ReactNode;
 }) {
   useEffect(() => {
     const lenis = new Lenis({
       lerp: 0.1,
       smoothWheel: true,
     });
 
     if (typeof window !== "undefined") {
       (window as any).lenis = lenis;
     }
 
     function raf(time: number) {
       lenis.raf(time);
       requestAnimationFrame(raf);
     }
 
     requestAnimationFrame(raf);
 
     return () => {
       if (typeof window !== "undefined") {
         (window as any).lenis = null;
       }
       lenis.destroy();
     };
   }, []);
 
   return <>{children}</>;
 }
