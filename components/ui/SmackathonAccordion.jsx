"use client"

import * as React from "react"
import * as AccordionPrimitive from "@radix-ui/react-accordion"
import Image from "next/image"

import { cn } from "@/lib/utils"

const Accordion = AccordionPrimitive.Root

const AccordionItem = React.forwardRef(({ className, ...props }, ref) => (
    <AccordionPrimitive.Item ref={ref} className={cn(className)} {...props} />
))
AccordionItem.displayName = "AccordionItem"


const AccordionTrigger = React.forwardRef(({ className, children, ...props }, ref) => (
    <AccordionPrimitive.Header className="flex">
        <AccordionPrimitive.Trigger
            ref={ref}
            className={cn(
                "flex w-full items-center justify-between py-4 font-medium transition-all [&[data-state=open]>.rocketsvg]:rotate-180",
                className
            )}
            {...props}
        >
            <div className="flex-1 text-left">{children}</div>
            <Image
                src={"/images/trackIcons/plane.svg"}
                width={30}
                height={30}
                alt="plane"
                className="h-8 w-8 shrink-0 transition-transform duration-200 rocketsvg"
            />
        </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
));

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
