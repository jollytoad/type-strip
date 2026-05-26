import a from "../foo/bar.js";
import { b } from "../fiz/bar.js";
import { c,} from "@baz/bar";

export { b } from "../fiz/bar.js";
export { c, } from "@baz/bar";

import("../foo/bar.js");
import("../fiz/bar.js");
import("@baz/bar");

// Expressions are not rewritten
import("$foo/bar" + ".ts");
