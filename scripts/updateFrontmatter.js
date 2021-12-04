/**
 * Quick and dirty script to update frontmatter of all markdown to include
 * 'publish_date' and 'layout' for astro.
 */

const { read, batch } = require("frontmatter-file-batcher");

(async () => {
  // const fileContents = await read("src/pages/fleeting-notes/20200920.md");
  // console.log(fileContents);

  await batch(
    "src/pages/fleeting-notes/**",
    100,
    async ({ goods, actions }) => {
      //get file name from path
      const fileName = goods.path.split("/").pop().split(".")[0];

      // const { publish_date } = goods.data;
      const { update, save } = actions;

      const newData = update({
        data: {
          layout: { $set: "../../layouts/FleetingNoteLayout.astro" },
          publish_date: { $set: Number(fileName) },
        },
      });

      // At the end you can save your post with the new data.
      await save(newData);
    }
  );
})();
