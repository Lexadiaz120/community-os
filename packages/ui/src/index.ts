export { default as Button } from "./components/Button.vue";
export { default as Badge } from "./components/Badge.vue";
export { default as Input } from "./components/Input.vue";

export { default as Card } from "./components/Card.vue";
export { default as CardHeader } from "./components/CardHeader.vue";
export { default as CardTitle } from "./components/CardTitle.vue";
export { default as CardDescription } from "./components/CardDescription.vue";
export { default as CardContent } from "./components/CardContent.vue";
export { default as CardFooter } from "./components/CardFooter.vue";

export { default as Table } from "./components/Table.vue";
export { default as TableHeader } from "./components/TableHeader.vue";
export { default as TableBody } from "./components/TableBody.vue";
export { default as TableRow } from "./components/TableRow.vue";
export { default as TableHead } from "./components/TableHead.vue";
export { default as TableCell } from "./components/TableCell.vue";

export { default as Modal } from "./components/Modal.vue";

export { cn } from "./utils/cn";

// Side-effect import: consuming apps get the design tokens for free by
// importing anything from "@community-os/ui". Apps that want explicit
// control over CSS ordering (e.g. relative to Tailwind's own layers)
// can instead import "@community-os/ui/styles.css" directly and skip
// this file's side effect — see the ui architecture notes.
import "./styles/tokens.css";
