export const COMMON_CONST = {
    EMAIL : 'email',
    CHECKBOX : 'checkbox',
    REQUIRED :'required',
    PATTERN: 'pattern'
};

export const INPUT_TYPES = ["text","email","password"];

export const FORM_A = [  
    { "type": "text", "label": "Full Name", "name": "fullName", "required": true },  
    { "type": "email", "label": "Email", "name": "email" },  
    { "type": "checkbox", "label": "Subscribe", "name": "subscribe" }
];

export const FORM_B = [  
    { "type": "text", "label": "Username", "name": "username", "required": true },  
    { "type": "password", "label": "Password", "name": "password", "required": true },  
    { "type": "checkbox", "label": "Remember Me", "name": "remember" }
];

export const FORM_TYPE_A = "Form A";

export const FORM_DETAILS = 'FormDetails';