"use client";

import { Calendar } from "lucide-react";
import { Button } from "./ui/button";
import BlurFade from "./magicui/blur-fade";
const BLUR_FADE_DELAY = 0.04;
const ButtonsSection = () => {
  return (
    <section className="w-full flex">
      <BlurFade className="" delay={BLUR_FADE_DELAY * 4.5}>
        <p className="pl-4 text-md font-bold mb-4">Do you have questions?</p>
        <div className="flex items-center gap-4">
          <Button
            onClick={() => {
              window.location.href =
                "https://calendly.com/quicklaunchyoursaas/30min";
            }}
            variant="outline"
            className="ml-4"
          >
            <Calendar />
            <span className="ml-2">Book a call</span>
          </Button>
          <span className="text-sm">
            Or write me an email to{" "}
            <a className="font-bold" href="mailto:r.solerginer@gmail.com">
              r.solerginer@gmail.com
            </a>
          </span>
        </div>
        <div className="pl-6">
          <p className="text-sm font-bold mb-4 mt-3 flex items-center gap-2">
            {" "}
            <img src="/whatsapp.svg" className="w-8 h-8" alt="Whatsapp logo" />
            Whatsapp
          </p>
          <p className="text-sm">
            Write me to{" "}
            <a className="font-bold" href="https://wa.me/34600200862">
              +34 600 200 862
            </a>
          </p>
        </div>
      </BlurFade>
    </section>
  );
};

export default ButtonsSection;
