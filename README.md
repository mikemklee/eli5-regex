# Explain RegEx like I'm 5

### [👉 Live preview](https://eli5-regex.vercel.app/)

This is an experiment to explore the potentials of leveraging OpenAI's [completions API](https://platform.openai.com/docs/api-reference/completions) for form field validation.

Given a RegEx pattern, we will use the `text-davinci-003` model to generate a human-friendly description of what would match the pattern.

We could then use this description to render helper messages for form fields, to assist the user input valid values.

Similarly, we can use this for rendering validation error feedback.

![image](https://user-images.githubusercontent.com/17537040/224511366-6ff97d79-8320-4bd7-b177-548fa8a47781.png)
