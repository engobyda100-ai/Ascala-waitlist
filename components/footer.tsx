import Image from "next/image"

export function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Main%20logo-oEntXT5STuarfEErvtwYhxVRp1UzIQ.png"
            alt="Ascala"
            width={140}
            height={40}
            className="h-10 w-auto"
          />
          
          <nav className="flex items-center gap-8 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors duration-300">Privacy</a>
            <a href="#" className="hover:text-primary transition-colors duration-300">Terms</a>
            <a href="#" className="hover:text-primary transition-colors duration-300">Contact</a>
          </nav>
        </div>
        
        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Ascala. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
