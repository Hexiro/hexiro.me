// copy of https://github.com/jane/gql-compress
// made to work with Tagged Template Literals
// which not only looks cool, but it works with syntax highlighting from this extension:
// https://marketplace.visualstudio.com/items?itemName=GraphQL.vscode-graphql

export default function gql(query: TemplateStringsArray, ...variables: string[]): string {
    return (
        query
            // convert tagged template literal to literal string
            .map((value, index) => `${value}${variables[index] || ""}`)
            .join("")
            // replace multiple whitespace with a single
            .replace(/(\b|\B)\s+(\b|\B)/gm, " ")
            // remove all whitespace between everything except for word and word boundaries
            .replace(/(\B)\s+(\B)|(\b)\s+(\B)|(\B)\s+(\b)/gm, "")
            .trim()
    );
}
