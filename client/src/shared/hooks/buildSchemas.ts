import z from "zod";
interface ValidationRule {
  required?: boolean;
  minLength?: number;
  maxLength?: number;
}

interface FormControl {
  name: string;
  validation: ValidationRule;
}

export const buildSchemas = <T extends readonly FormControl[]>(controls: T) => {
  const schemaShape: Record<string, z.ZodTypeAny> = {};

  controls.forEach(({ name, validation }) => {
    let validator = z.string();

    if (validation.required) {
      validator = validator.min(1, { message: `${name} is required` });
    }

    if (name === "email") {
      validator = validator.email({ message: "Invalid email address" });
    }

    if (name === "password") {
      validator = validator.min(8, {
        message: "Password must be at least 8 characters long",
      });
    }

    if (validation.minLength) {
      validator = validator.min(validation.minLength, {
        message: `${name} must be at least ${validation.minLength} characters`,
      });
    }

    if (validation.maxLength) {
      validator = validator.max(validation.maxLength, {
        message: `${name} must be at most ${validation.maxLength} characters`,
      });
    }

    schemaShape[name] = validator;
  });

  // Build schema
  let schema = z.object(schemaShape);

  // 🔥 Add top-level refine for password confirmation
  if ("password" in schemaShape && "confirmPassword" in schemaShape) {
    schema = schema.refine(
      (data) => data.password === data.confirmPassword,
      {
        message: "Passwords do not match",
        path: ["confirmPassword"], // attach error to confirmPassword field
      }
    );
  }

  return schema;
};
