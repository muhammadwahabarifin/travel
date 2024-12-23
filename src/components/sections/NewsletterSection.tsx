import React from "react";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import MainButton from "../common/MainButton";

function NewsletterSection() {
  return (
    <section className="bg-[#15291c] flex items-center flex-col md:flex-row justify-between drop-shadow-lg gap-16 md:rounded-[26px] md:-mb-[4rem] p-5 md:p-[80px] pt-8">
      <div className={cn("text-[40px] md:text-[64px] text-yellow-300")}>
        Our Newsletter
      </div>
      <div className="flex flex-col md:flex-row md:items-end gap-[32px] w-full md:w-[inherit]">
        <div>
          <p className="text-yellow-300 mb-4">Email</p>
          <Input
            type="email"
            placeholder="Enter your email"
            className="bg-[#FFE8D4] text-primary  h-[52px] rounded-[12px]"
          />
        </div>

        <div>
          <MainButton text="Subscribe" classes="h-[52px] w-[163px]" />
        </div>
      </div>
    </section>
  );
}

export default NewsletterSection;
