exports.postData = async (req, res) => {
    try {
        const { data } = req.body;

        if (!Array.isArray(data) || data.length === 0) {
            res.status(400).json({ error: "Data must have atleast one value." });
            return;
        }

        if (data.some(item => typeof item !== 'string')) {
            res.status(400).json({ error: "Data can contain only string values." });
            return;
        }

        const numbers = data.filter(item => !isNaN(item));
        const alphabets = data.filter(item => isNaN(item));

        let highest_alphabet = "";
        alphabets.forEach(alphabet => {
            if (!highest_alphabet || alphabet.toLowerCase() > highest_alphabet.toLowerCase()) {
                highest_alphabet = alphabet;
            }
        });

        let response = {
            is_success: true,
            user_id: "john_doe_17091999",
            email: "john@xyz.com",
            roll_number: "ABCD123",
            numbers: numbers,
            alphabets: alphabets,
            highest_alphabet: highest_alphabet !== "" ? [highest_alphabet] : []
        }
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getData = async (req, res) => {
    try {
        res.status(200).json({ operation_code: 1 });
    } catch (error) {
        res.status(500).json();
    }
};