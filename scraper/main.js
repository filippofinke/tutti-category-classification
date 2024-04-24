const tutti_api = require("tutti-api");
const createCsvWriter = require("csv-writer").createObjectCsvWriter;

(async () => {
  // Get category from first argument
  const category = process.argv[2];

  console.log(`Scraping category ${category}`);

  const csvWriter = createCsvWriter({
    path: `dataset-${category}.csv`,
    header: [
      { id: "title", title: "TITLE" },
      { id: "body", title: "BODY" },
      { id: "formattedPrice", title: "FORMATTED_PRICE" },
      { id: "timestamp", title: "TIMESTAMP" },
      { id: "category", title: "CATEGORY" },
    ],
  });
  let rows = [];
  let offset = 0;

  try {
    while (true) {
      let result = await tutti_api.search
        .languages("it")
        .category(category)
        .first(100)
        .offset(offset)
        .find();

      for (let i = 0; i < result.edges.length; i++) {
        const {
          title,
          body,
          formattedPrice,
          timestamp,
          primaryCategory: { categoryID },
        } = result.edges[i].node;

        rows.push({
          title,
          body,
          formattedPrice,
          timestamp,
          category: categoryID,
        });
        offset++;
      }

      console.log(`Scraped ${rows.length} records for category ${category}`);
      // Sleep for a random between 1 and 10 seconds
      await new Promise((resolve) =>
        setTimeout(resolve, 1000 + Math.random() * 10000)
      );
    }
  } catch (e) {
    await new Promise((resolve) => setTimeout(resolve, 5000));
  } finally {
    console.log(`Writing ${rows.length} records to file`);
    await csvWriter.writeRecords(rows);
  }
})();
