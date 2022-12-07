import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const editionDrop = await sdk.getEditionDrop("0xD3811970162f776726b9C4E1599918bc661c80a1");

(async () => {
  try {
    await editionDrop.createBatch([
      {
        name: "doggo funny smile",
        description: "This NFT will give you access to SmilingDoggo DAO!",
        image: readFileSync("scripts/assets/dogsmile.jpg"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();