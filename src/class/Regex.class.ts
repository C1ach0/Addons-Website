class RegL {
    name!: string;
    reg!: RegExp
}

const exp: RegL[] = [
    {name: "name", reg: /^[A-Za-z]+$/},
    {name: "passwordStrong", reg: /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/},
    {name: "email", reg: /\S+@\S+\.\S+/}
] 

/* The Regex class provides methods for checking if a given string matches certain patterns, such as
containing a specific word, being a strong password, or matching an email address. */
export default class Regex {
    private findExpression(name: string): RegExp | undefined {
        return exp.find((v) => v.name === name).reg;
    }

    /**
     * The function checks if the input text contains the word "name".
     * @param {string} text - a string that represents the text to be tested for the presence of the
     * word "name". The function returns a boolean value indicating whether the word "name" is present
     * in the text or not.
     * @returns A boolean value is being returned.
     */
    public name(text: string): boolean {
        return this.findExpression("name").test(text);
    }

    /**
     * The function checks if a given string meets the criteria for a strong password.
     * @param {string} text - The text parameter is a string that represents the password that needs to
     * be checked for strength. The function returns a boolean value indicating whether the password is
     * strong or not.
     * @returns A boolean value is being returned.
     */
    public passwordStrong(text: string): boolean {
        return this.findExpression("passwordStrong").test(text);
    }

    /**
     * The function checks if a given string matches the pattern of an email address.
     * @param {string} text - a string that represents an email address.
     * @returns A boolean value is being returned.
     */
    public email(text: string): boolean {
        return this.findExpression("email").test(text);
    }

    /**
     * The function checks if a regular expression matches a given string and returns a boolean value.
     * @param {RegExp} reg - RegExp is a built-in object in JavaScript that represents a regular
     * expression, which is a pattern used to match character combinations in strings.
     * @param {string} text - The text parameter is a string that represents the text that we want to
     * test against the regular expression.
     * @returns A boolean value is being returned.
     */
    public custom(reg: RegExp, text: string): boolean {
        return reg.test(text)
    }
}