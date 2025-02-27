// Mapped Types - a way to create types that depend on other types
// - a Mapped Type is a generic type which uses a union of "Property Keys" to iterate through keys ti create a type

type OptionsFlags<Type> = {
  [Property in keyof Type]: boolean;
};
// OptionFlags will take all properties from the Type and change their values to be a boolean