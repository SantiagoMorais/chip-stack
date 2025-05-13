export class Token {
  private readonly value: string;

  constructor(value?: string) {
    this.value = value ?? Token.generate();
  }

  /**
   * Generates a unique token with 6 random characters.
   *
   * Example: "9YJC0Z"
   *
   * @param text {string}
   */
  private static generate(): string {
    return Math.random().toString(36).substring(2, 8).toUpperCase();
  }

  getValue(): string {
    return this.value;
  }

  equals(other: Token): boolean {
    return this.value === other.getValue();
  }

  toString(): string {
    return this.value;
  }
}
