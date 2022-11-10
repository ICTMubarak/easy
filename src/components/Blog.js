import React from 'react';

const Blog = () => {
    return (
        <div>
            <div class="col-span-5 border-2">
                <h1>Welcome to our Blog</h1>
                <br />
                <h5>Question No-1 Difference between SQL and NoSQL</h5>
                <p>Answer: SQL databases are relational. The data typically represents real-world objects, like a customer and their order details.
NoSQL databases are non-relational. NoSQL is fast and holds a limitless amount of unstructured data types.</p>
                <br />
                <h5>Question No-2 What is JWT, and how does it work?</h5>
                <p>Answer: JSON Web Token is a proposed Internet standard for creating data with optional signature and/or optional encryption whose payload holds JSON that asserts some number of claims. The tokens are signed either using a private secret or a public/private key. Basically the identity provider(IdP) generates a JWT certifying user identity and Resource server decodes and verifies the authenticity of the token using secret salt / public key.

</p>
                <br />
                <h5>Question No-3 What is the difference between javascript and NodeJS?</h5>
                <p>Answer: JavaScript is a language that runs inside web browsers as part of documents loaded by the browser. It gives behaviour to your pages (HTML gives semantic structure, CSS gives form or look and feel). However nothing ought to restrict JavaScript to run solely inside the browser. Now being an interpreted language, it needs an interpreter to run. V8 is the Google Chrome JS engine and 'node' is a front-end to it that can be used to run JavaScript scripts outside the browser. Node.js or just Node usually refers to a collection of objects and methods available to your JavaScript code when run in V8 or through the node interpreter. It is a JavaScript libray cum runtime.</p>
                <br />
                <h5>Question No-4 How does NodeJS handle multiple requests at the same time?</h5>
                <p>Answer: Node’s main JavaScript thread uses an event loop. When multiple requests are made, the first is processed while the rest are blocked (until the first is complete). Each request is processed one loop at a time until they’re all processed. The loop executes very quickly and you kind of have to go out of your way to create apps that block.

There’s an important caveat to this: user requests (like web requests) are not the same as function requests. Multiple users can submit requests and they’ll be processed within nanoseconds of each other (not noticeable without tooling). This differs from a process calling the same function/memory space at the same time.</p>
                <br />
            </div>

        </div>
    );
};

export default Blog;