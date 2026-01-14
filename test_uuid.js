function isValidUUID(uuid) {
    const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[4][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
    return uuidRegex.test(uuid);
}

const valid = "d342d11e-d424-4583-b36e-524ab1f0afa4";
const invalid = "invalid-uuid";

console.log("Valid UUID check:", isValidUUID(valid));
console.log("Invalid UUID check:", isValidUUID(invalid));
