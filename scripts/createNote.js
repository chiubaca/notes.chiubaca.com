const { Octokit } = require("@octokit/rest");

if (process.env.NODE_ENV === "development") {
  require("dotenv").config();
}

const octokit = new Octokit({
  auth: process.env.GH_KEY,
});

function currentDateStamp() {
  const dateObj = new Date();
  const date = ("0" + dateObj.getDate()).slice(-2);
  const month = ("0" + (dateObj.getMonth() + 1)).slice(-2);
  const year = dateObj.getFullYear();
  return year + month + date;
}

const currentDate = currentDateStamp();

async function main() {
  try {
    const placeholderText = `---
publish_date: ${currentDate}    
layout: ../../layouts/FleetingNoteLayout.astro
---
- no entry yet`;

    const buffContent = Buffer.from(placeholderText, "utf-8");
    const contentEncoded = buffContent.toString("base64");
    const { data } = await octokit.repos.createOrUpdateFileContents({
      owner: "chiubaca",
      repo: "learning",
      path: `src/pages/fleeting-notes/${currentDate}.md`,
      message: `Create ${currentDate}.md`,
      content: contentEncoded,
      committer: {
        name: process.env.NAME,
        email: process.env.EMAIL,
      },
      author: {
        name: process.env.NAME,
        email: process.env.EMAIL,
      },
    });

    console.log("Created placeholder journal", data);
  } catch (err) {
    console.error("Something went wrong", err);
  }
}

main();
