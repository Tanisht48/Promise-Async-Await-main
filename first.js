function getHumanReadbleResponse(response) {
    if (response.data.hasSucceeded) {
        return "Success " + response.data.message;
    }
    return "OOPs";
}
const apiResponse = {
    data: {
        hasSucceeded: true,
        message: "Got it"
    },
};
console.log(getHumanReadbleResponse(apiResponse));
