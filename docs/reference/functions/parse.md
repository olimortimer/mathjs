<!-- Note: This file is automatically generated from source code comments. Changes made in this file will be overridden. -->

# Function parse

Parse an expression. Returns a node tree, which can be evaluated by
invoking node.eval();


## Syntax

```js
math.parse(expr)
math.parse(expr, options)
math.parse([expr1, expr2, expr3, ...])
math.parse([expr1, expr2, expr3, ...], options)
```

### Parameters

Parameter | Type | Description
--------- | ---- | -----------
`expr` | string &#124; string[] &#124; Matrix | Expression to be parsed
`options` | {nodes: Object&lt;string, Node&gt;} | Available options: - `nodes` a set of custom nodes

### Returns

Type | Description
---- | -----------
Node &#124; Node[] | node


## Examples

```js
var node = math.parse('sqrt(3^2 + 4^2)');
node.compile().eval(); // 5

var scope = {a:3, b:4}
var node = math.parse('a * b'); // 12
var code = node.compile();
code.eval(scope); // 12
scope.a = 5;
code.eval(scope); // 20

var nodes = math.parse(['a = 3', 'b = 4', 'a * b']);
nodes[2].compile().eval(); // 12
```


## See also

[eval](eval.md),
[compile](compile.md)
