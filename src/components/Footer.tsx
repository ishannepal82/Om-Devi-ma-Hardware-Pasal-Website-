import { FacebookIcon, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-white shadow-md p-4 flex justify-between items-center">
        <div className="text-primary">
            <h1 className="text-h2">Om Devi Ma Hardware Pasal</h1>
            <p>Find us on social media</p>
        </div>
        <div className="contact-us flex gap-4">
            <FacebookIcon />
            <Instagram />
            <Linkedin />
        </div>
    </footer>
  )
}
