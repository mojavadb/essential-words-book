
export function GET(request: Request) {
    const words = [
        { id: 1, word: "example", definition: "a representative form or pattern" },
        { id: 2, word: "sample", definition: "a small part or quantity intended to show what the whole is like" },
        { id: 3, word: "test", definition: "a procedure intended to establish the quality, performance, or reliability of something" },
    ];
    return new Response(JSON.stringify(words), {
        headers: { "Content-Type": "application/json" },
    });
}
