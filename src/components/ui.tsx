import { useEffect, useRef, useState, type ReactNode } from "react";
import { motion, useInView } from "framer-motion";
import { WHATSAPP_DEFAULT_MESSAGE, getWhatsAppUrl } from "../data";

interface AnimatedNumberProps {
  value: number;
  suffix?: string;
  duration?: number;
  className?: string;
}

export function AnimatedNumber({ value, suffix = "", duration = 2, className = "" }: AnimatedNumberProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const startTime = performance.now();
    const endTime = startTime + duration * 1000;

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplayValue(Math.floor(eased * value));
      if (currentTime < endTime) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [isInView, value, duration]);

  return (
    <span ref={ref} className={className}>
      {displayValue}{suffix}
    </span>
  );
}

interface SectionHeaderProps {
  sectionNumber: string;
  label: string;
  title: ReactNode;
  subtitle?: string;
  align?: "left" | "center";
}

export function SectionHeader({ sectionNumber, label, title, subtitle, align = "left" }: SectionHeaderProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`mb-12 md:mb-16 ${align === "center" ? "text-center" : ""}`}
    >
      <div className={`flex items-center gap-3 mb-4 ${align === "center" ? "justify-center" : ""}`}>
        <span className="text-accent text-xs font-mono tracking-wider font-medium">{sectionNumber}</span>
        <span className="w-8 h-px bg-accent/30" />
        <span className="text-text-muted text-xs font-mono tracking-wider uppercase">{label}</span>
      </div>
      <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary leading-tight tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 md:mt-6 text-text-secondary text-base md:text-lg max-w-2xl leading-relaxed" style={align === "center" ? { margin: "1.5rem auto 0" } : {}}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}

interface WhatsAppCTAProps {
  message?: string;
  children?: ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
}

export function WhatsAppCTA({
  message,
  children,
  className = "",
  variant = "primary",
  size = "md",
}: WhatsAppCTAProps) {
  const url = message ? getWhatsAppUrl(message) : getWhatsAppUrl(WHATSAPP_DEFAULT_MESSAGE);

  const sizeClasses = { sm: "px-4 py-2 text-sm", md: "px-6 py-3 text-sm", lg: "px-8 py-4 text-base" };
  const variantClasses = {
    primary: "bg-accent text-background hover:bg-accent-hover glow-green",
    secondary: "border border-accent/40 text-accent hover:bg-accent/10 hover:border-accent",
    ghost: "text-accent hover:text-accent-hover",
  };

  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`inline-flex items-center gap-2 font-medium rounded-lg transition-all duration-300 cursor-pointer ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
    >
      {children || (
        <>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91C21.95 6.45 17.5 2 12.04 2zm5.8 14.28c-.24.68-1.38 1.3-1.9 1.36-.5.06-1.02.08-1.56-.02-.36-.07-.82-.19-1.38-.4-2.42-1.04-3.98-3.5-4.1-3.66-.12-.16-.98-1.3-.98-2.5 0-1.2.62-1.8.84-2.04.22-.24.48-.3.64-.3.0 0 .16 0 .28.02.16.02.36-.06.56.44.2.5.68 1.66.74 1.78.06.12.1.26.02.42-.08.16-.12.26-.24.4-.12.14-.26.3-.36.4-.12.12-.24.26-.1.5.14.24.62 1.02 1.34 1.66.98.9 1.82 1.18 2.06 1.3.24.12.38.1.52-.06.14-.16.62-.72.78-.96.16-.24.32-.2.54-.12.22.08 1.38.64 1.62.76.24.12.38.18.44.28.06.1.06.58-.18 1.26z"/></svg>
          Falar no WhatsApp
          <span>→</span>
        </>
      )}
    </motion.a>
  );
}

export function FadeIn({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerContainer({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{ visible: { transition: { staggerChildren: 0.1 } }, hidden: {} }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
