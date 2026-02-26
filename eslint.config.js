export default [
  {
    files: ["**/*.js"],
    rules: {
      "no-unused-vars": "warn",
      "no-undef": "warn",
      "no-console": "off",
      "semi": ["warn", "always"],
      "eqeqeq": ["warn", "always"]
    },
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "script",
      globals: {
        window: "readonly",
        document: "readonly",
        console: "readonly",
        setTimeout: "readonly",
        clearTimeout: "readonly",
        setInterval: "readonly",
        clearInterval: "readonly",
        localStorage: "readonly",
        sessionStorage: "readonly",
        alert: "readonly",
        confirm: "readonly",
        navigator: "readonly",
        location: "readonly",
        history: "readonly",
        fetch: "readonly",
        Promise: "readonly",
        Math: "readonly",
        Date: "readonly",
        JSON: "readonly",
        Array: "readonly",
        Object: "readonly",
        String: "readonly",
        Number: "readonly",
        Boolean: "readonly",
        Error: "readonly",
        RegExp: "readonly",
        Map: "readonly",
        Set: "readonly",
        requestAnimationFrame: "readonly",
        cancelAnimationFrame: "readonly",
        speechSynthesis: "readonly",
        SpeechSynthesisUtterance: "readonly",
        prompt: "readonly",
        AudioContext: "readonly",
        webkitAudioContext: "readonly",
        HTMLElement: "readonly",
        Event: "readonly",
        CustomEvent: "readonly"
      }
    }
  }
];
