// Sample dataset
const dataset = [
    { input: "Who is Alireza?", output: "Alireza is a UX designer, web developer, and software engineer." },
    { input: "What does Alireza do?", output: "He designs and develops applications, websites, and user experiences." },
    { input: "Where was Alireza born?", output: "Alireza was born in Isfahan, Iran." },
    { input: "How old is Alireza?", output: "He is 26 years old." },
];

// Function to preprocess the dataset (tokenize and pad sequences)
const padSequence = (sequence, length) => {
    return [...sequence, ...Array(length - sequence.length).fill(0)];
};

const preprocessData = () => {
    const inputs = dataset.map(item => item.input.split(' ').map(token => token.charCodeAt(0))); // Tokenize inputs
    const outputs = dataset.map(item => item.output.split(' ').map(token => token.charCodeAt(0))); // Tokenize outputs

    const maxInputLength = Math.max(...inputs.map(seq => seq.length));
    const maxOutputLength = Math.max(...outputs.map(seq => seq.length));

    const paddedInputs = inputs.map(seq => padSequence(seq, maxInputLength));
    const paddedOutputs = outputs.map(seq => padSequence(seq, maxOutputLength));

    return { inputs: paddedInputs, outputs: paddedOutputs };
};

module.exports = { preprocessData };
