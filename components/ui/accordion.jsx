"use client"

import * as React from "react"
import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { ChevronDown } from "lucide-react"
import Image from "next/image"

import { cn } from "@/lib/utils"

const Accordion = AccordionPrimitive.Root

const AccordionItem = React.forwardRef(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item ref={ref} className={cn(className)} {...props} />
))
AccordionItem.displayName = "AccordionItem"


const AccordionTrigger = React.forwardRef(({ className, children, ...props }, ref) => {
  const [isOpen, setIsOpen] = React.useState(false); // State to track open/close
  
  const handleToggle = () => {
    setIsOpen(!isOpen); // Toggle open/close state
  };

  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        ref={ref}
        className={cn(
          "flex w-full items-center justify-between py-4 font-medium transition-all",
          className
        )}
        {...props}
        onClick={handleToggle}
      >
        <div className="flex-1 text-left">{children}</div>
        {/* Your plane.svg image */}
        <Image
          src={"/images/sprites/plane.svg"}
          width={30} 
          height={30}
          className={cn("h-6 w-8", 
          {
            // Toggle rotate-180 class based on isOpen state
            "rotate-180": isOpen,
          },
          )}
          style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }} // Rotate based on isOpen
        />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
});




AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName

const AccordionContent = React.forwardRef(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    {...props}>
    <div className={cn("pb-4 pt-0", className)}>{children}</div>
  </AccordionPrimitive.Content>
))

AccordionContent.displayName = AccordionPrimitive.Content.displayName

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
