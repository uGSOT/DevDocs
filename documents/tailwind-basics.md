# Tailwind CSS Basics

Tailwind CSS lets you style HTML by adding utility classes directly to an element's `class` attribute. Each class applies a specific style, so you can combine classes to build a design.

## Flex layouts

Use `flex` to arrange an element's children with CSS Flexbox. Add `flex-col` to stack them vertically, `flex-row` to arrange them horizontally, and `gap-4` to add space between them.

```html
<div class="flex flex-col gap-4">
  <p>First item</p>
  <p>Second item</p>
</div>


Padding adds space inside an element, between its content and its edge. Use p-4 for padding on all sides, px-4 for left and right padding, or py-2 for top and bottom padding.

Colors ,  bg-* classes for background colors and text-* classes for text colors. For example, bg-blue-600 adds a blue background and text-white makes the text white.
