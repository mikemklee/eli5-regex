# Explain RegEx like I'm 5 

This is an experiment to explore potentials of leveraging OpenAI's [completions API](https://platform.openai.com/docs/api-reference/completions) for form field validation.

Given a RegEx pattern, we will use the `text-davinci-003` to provide a human-friendly description of what would match the pattern.

We could then use this description to render helper messages for form fields, to help the user input valid values.

Similarly, we can use this for rendering validation error feedback.

![image](https://user-images.githubusercontent.com/17537040/224508912-e553dcef-77a4-429a-9fdd-9b1655c46a1f.png)



