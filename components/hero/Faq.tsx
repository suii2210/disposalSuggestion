import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  
  export function AccordionDemo() {
    return (
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>What is Smart Waste Disposal?</AccordionTrigger>
          <AccordionContent>
 Smart Waste Disposal is a technology that identifies waste types in real-time and provides guidance on proper disposal or recycling based on environmental standards.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>What features does the app offer?</AccordionTrigger>
          <AccordionContent>
          The app offers waste recognition, disposal suggestions, nearby recycling centers, and real-time environmental impact alerts.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger> Is the app user-friendly?</AccordionTrigger>
          <AccordionContent>
          Yes, the app is designed with a simple interface, guiding users step-by-step through the waste identification and disposal process.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    )
  }
  export default AccordionDemo;