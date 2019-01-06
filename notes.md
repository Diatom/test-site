---

No need for favicon.

---

When content really depends on JS, script doesn't need to be async.

---

`<input>` should be inside `<label>` or connected by `id` and `for`. This makes the label interactive.

---

Input and button should be inside a `<form>`. Buttons have two possible types: `type="button"` and `type="submit"`. "submit" is the default and causes the form to be submitted on Enter.

For non-submit buttons, always specify `type="button"`.

---

Variable names must be at least 3 characters long, with the exception of `i` in loops. Do the future yourself a favor, make the code readable.

---

When referencing elements from JS, select them by id, not class.

---

Inputs don't need an id, or any other selector. They can be found on the enclosing `form` by their `name`.

---

Elements with `onclick` must be buttons. NO EXCEPTIONS. Using `<a>` is retarded. Hyperlinks are strictly for URL navigation.

---

Styles should use mostly classes. Styling by id is usually a bad idea. Styling by tag is usually a bad idea. Styling by attribute can be useful, but prefer classes.

---

`var` is full of gotchas. It has many unintuitive behaviors and leads to bugs. Always use `let`, and optionally `const`.

---

Variables MUST be declared with `var`, `let` or `const`. Otherwise they're declared in the global scope, which leads to bugs.

---

Semicolons (`;`) are useless. Arguments in favor of `;` are retarded. Newer, modern languages, like Go and Swift, make semicolons optional.

---

If you can assign `onclick` in HTML, do it always or never. Be consistent.

Reading the code should not raise any questions. The reader shouldn't ask themselves "why it's done this way".

---

There should always be just one source of truth. When you have _data_ and _view_, the data must be the source of truth. The view must always correspond to the data. It shouldn't be possible for them to diverge. Any modifications should (1) change the data and (2) resync the view.

Making this convenient and efficient is the whole purpose of GUI libraries like React/Preact.

---

Scripts should be enclosed in a function to avoid leaking variables and functions into global scope. This avoids conflicts with built-ins and other scripts.

---

Unicode characters in JS source don't need any special encoding, like `\u0000`.

---

Learn Go!
