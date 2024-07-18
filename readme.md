# Focus

This sample shows that by calling `focus()` on a `span` element when the screen reader is on it will not read the focused element unless you specify `tabindex="0"` on the element. This could also be done with `role="button"`. Note: In general, you only want to focus on interactive elements rather than on messages.
