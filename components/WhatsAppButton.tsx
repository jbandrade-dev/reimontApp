import Image from "next/image";
import Link from "next/link";

export function WhatsAppButton() {
  return (
    <Link href="https://wa.me/5521964980394">
      <a target="_blank" className="fixed bottom-2 right-1 z-50">
        <div className="relative">
          <Image
            className=""
            src="/whatsapp.png"
            alt="WhatsApp logo"
            width={90}
            height={45}
            loading="lazy"
         />
        </div>
      </a>
    </Link>
  );
}
