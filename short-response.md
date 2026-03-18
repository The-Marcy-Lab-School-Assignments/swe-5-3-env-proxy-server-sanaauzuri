# Short Response Questions

Answer each question below in your own words. Aim for 3–5 sentences per answer. Be specific — use the exact terms and concepts from the lesson.

Your responses will each be evaluated out of 6 points. You can earn 3 points for writing quality and 3 points for the accuracy and precision of the technical content per question.

---

## Question 1:

Why is it unsafe to make requests to a third-party API (like Giphy) directly from frontend JavaScript code? What specific risk does this create, and how can a malicious user exploit it?

**Your answer here**:

Making requests to a third-party API directly from frontend JavaScript is unsafe because client-side code is fully visible to anyone. A malicious user can open the Network tab in their browser's developer tools, find the fetch request, and find the API key. With that API key, malicious users can steal your request resources. 

## Question 2:

What is the proxy server strategy? How does it help avoid exposing API Keys in client-side code while still providing access to APIs that require keys?

**Your answer here**:

The proxy server strategy is when you set up your server as a middleman. This helps because the client can send the server a request **WITHOUT** an API key. Then, the server will send that request to the API **WITH** the API key and send the response to the client. Since the client cannot see what the server is doing, the API key stays hidden.

## Question 3:

What is an environment variable, and why do we store API keys in a .env file instead of directly in source code? What role does .gitignore play in this setup, and what could go wrong if the .env file were accidentally committed to GitHub?

**Your answer here**:

An environment variable is a hidden variable. We store API keys in a `.env` file instead of directly in source code because source code gets pushed to GitHub where anyone can see it. The `.env` file must be added to `.gitignore` so Git ignores it and it never gets pushed to GitHub, if it were accidentally committed, anyone who viewed the repository could steal your API key
