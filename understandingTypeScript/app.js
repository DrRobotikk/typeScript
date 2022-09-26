var userinput; // unknown type
var username; // string type
userinput = 5;
userinput = "Max";
if (typeof userinput === "string") {
    // type guard
    username = userinput;
}
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
generateError("An error occurred!", 500);
// Language: typescript
