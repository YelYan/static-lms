export const loginformControls = [
    {
        name : "email",
        label : "Email",
        placeholder : "Enter your email",
        componentType : "input",
        type : "email",
        validation : {required : true}
    },
    {
        name : "password",
        label : "Password",
        placeholder : "Enter your password",
        componentType : "input",
        type : "password",
        validation : {required : true, maxLength : 20, minLength : 6}
    },
]
export const registerformControls = [
    {
        name : "name",
        label : "Name",
        placeholder : "Enter your name",
        componentType : "input",
        type : "text",
        validation : {required : true}
    },
    {
        name : "email",
        label : "Email",
        placeholder : "Enter your email",
        componentType : "input",
        type : "email",
        validation : {required : true}
    },
    {
        name : "password",
        label : "Password",
        placeholder : "Enter your password",
        componentType : "input",
        type : "password",
        validation : {required : true, maxLength : 20, minLength : 6}
    },
]
export const forgotPasswordformControls = [
    {
        name : "email",
        label : "Email",
        placeholder : "Enter your email",
        componentType : "input",
        type : "email",
        validation : {required : true}
    },
]
export const resetPasswordFormControls = [
  {
    name: "password",
    label: "New Password",
    placeholder: "Enter your new password",
    componentType: "input",
    type: "password",
    validation: { required: true, minLength: 6 },
  },
  {
    name: "confirmPassword",
    label: "Confirm Password",
    placeholder: "Re-enter your new password",
    componentType: "input",
    type: "password",
    validation: { required: true, minLength: 6 },
  },
];
