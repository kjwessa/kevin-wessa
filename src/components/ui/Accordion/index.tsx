import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './index.client'

export { Accordion, AccordionContent, AccordionItem, AccordionTrigger }

export function AccordionDemo() {
  return (
    <Accordion type="single" collapsible className="w-full max-w-lg">
      <AccordionItem
        value="item-1"
        trigger="What is Brewww Studio?"
        triggerVariant="heading"
        content="Brewww Studio is a creative agency specializing in digital experiences, branding, and web development."
      />
      <AccordionItem
        value="item-2"
        trigger="Rich Text Example"
        content={`
          # This is a heading
          
          This content will be parsed as rich text because the richText prop is true.
          
          - List item 1
          - List item 2
          - List item 3
        `}
        richText
      />
      <AccordionItem
        value="item-3"
        trigger="Custom Content Example"
        content={
          <div className="space-y-4">
            <p>This is a custom content example with components.</p>
            <div className="bg-muted rounded-lg p-4">
              <code>You can put any React components here</code>
            </div>
          </div>
        }
      />
    </Accordion>
  )
}
