//using the try{}catch(error){} format
function fail() {
  try {
    console.log("this has worked");
  } catch (error) {
    console.log("oppsie there is a mistake", error);
  } finally {
    console.log("sharitech");
  }
}
fail();
