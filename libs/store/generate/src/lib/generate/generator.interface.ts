export interface GeneratorInterface {
  /**
   * Common interface for the generators
   * @param classes
   */
  generate(classes?: string[]): Promise<boolean>;
}
