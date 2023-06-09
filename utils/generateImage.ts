const { createCanvas } = require("canvas");
const fs = require("fs");

const sdk = require("node-appwrite");

const projectId = "64829c05a0882260c5b9";
const bucketId = "64829c970e840dba76e8";
const token =
  "c3e175b545a69dcdcfce46cf12d03e98162f7968645554f22e2119195f282b142ed54f7db31e8fa0631eed1ef1ce0390b0811a5e980b30911d4d95b72ae226683b62d05087ebe4aca072608500c308662912817106ab210365c776bd384b65cbfb44e633bcef960986a805333d594a776e658625c3a518ff636d725a59a08d88";

export const getImage = (
  sourceTimeString: any,
  destinationTimeString: any,
  fileId: any
) => {
  // Dimensions for the image
  const width = 1200;
  const height = 627;

  // Instantiate the canvas object
  const canvas = createCanvas(width, height);
  const context = canvas.getContext("2d");

  // Fill the rectangle with purple
  context.fillStyle = "#7F00FF";
  context.fillRect(0, 0, width, height);

  // Set the style of the test and render it to the canvas
  context.font = "bold 70pt 'PT Sans'";
  context.textAlign = "center";
  context.fillStyle = "#fff";
  // 600 is the x value (the center of the image)
  // 170 is the y (the top of the line of text)
  context.fillText(sourceTimeString, 600, 170);
  context.fillText(destinationTimeString, 600, 500);

  // Write the image to file
  const buffer = canvas.toBuffer("image/png");
  fs.writeFileSync(`./${fileId}.png`, buffer);

  const client = new sdk.Client();

  const storage = new sdk.Storage(client);

  client
    .setEndpoint("https://apw.techsapien.dev/v1") // Your API Endpoint
    .setProject(projectId) // Your project ID
    .setKey(token); // Your secret API key

  return storage
    .createFile(
      bucketId,
      fileId,
      sdk.InputFile.fromPath(`./${fileId}.png`, `${fileId}.png`)
    )
    .then(() => {
      // delete the file
      fs.rm(`./${fileId}.png`, () => {});
    });
};
