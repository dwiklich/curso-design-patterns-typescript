// Component
export abstract class ValidationComponent {
  abstract validate(value: unknown): boolean;
}

// Leaf
export class ValidateEmail extends ValidationComponent {
  validate(value: unknown): boolean {
    if (typeof value !== 'string') return false;
    return /@/.test(value);
  }
}

// Leaf
export class ValidateString extends ValidationComponent {
  validate(value: unknown): boolean {
    return typeof value === 'string';
  }
}

// Leaf
export class ValidateNumber extends ValidationComponent {
  validate(value: unknown): boolean {
    return typeof value === 'number';
  }
}

// Composite
export class ValidationComposite extends ValidationComponent {
  private readonly children: ValidationComponent[] = [];

  validate(value: unknown): boolean {
    for (const child of this.children) {
      const validation = child.validate(value);
      if (!validation) return false;
    }
    // this.children.forEach((child) => {
    //   const validation = child.validate(value);
    //   if (!validation) return false;
    // });
    return true;
  }

  add(...validations: ValidationComponent[]): void {
    validations.forEach((validation) => this.children.push(validation));
  }
  remove(...validations: ValidationComponent[]): void {
    validations.forEach((validation) => {
      const indexChild = this.children.indexOf(validation);
      this.children.splice(indexChild, 1);
    });
  }
}

const validateEmail = new ValidateEmail();
const validateNumber = new ValidateNumber();
const validateString = new ValidateString();
const validationComposite = new ValidationComposite();
validationComposite.add(validateEmail, validateString);
console.log(validationComposite.validate('1@1'));

// validateEmail.validate('d.wilich@gmail.com');
// console.log(validateEmail.validate('d.wilich@gmail.com'));
