let userinput: unknown; // unknown type
let username: string; // string type

userinput = 5;
userinput = "Max";
if (typeof userinput === "string") {
  // type guard
  username = userinput;
}

function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code };
}

generateError("An error occurred!", 500);

// Language: typescript
