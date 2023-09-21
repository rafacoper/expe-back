import cheerio from 'cheerio';
import axios from 'axios';

const url = 'https://portalsped.fazenda.mg.gov.br/portalnfce/sistema/qrcode.xhtml?p=31230801928075002658650060002313971086058164|2|1|1|8817544ceb344953125fc3cb80b2d84e3c1775df'; // Replace with your target URL

async function scrapeWebpage() {
  try {
    const response = await axios.get(url);
    const $ = cheerio.load(response.data);

    // Select the table with class "table table-striped"
    const table = $('.table.table-striped');

    // Iterate over each row in the table's tbody
    table.find('tbody tr').each((index: any, rowElement: any) => {
      const rowData: Record<string, string> = {}; // Use TypeScript's type annotation

      // Extract data from each cell in the row
      $(rowElement).find('td').each((cellIndex: any, cellElement: any) => {
        const cellText = $(cellElement).text().trim();
        const cellData = cellText.split(':');
        const key = cellData[0].trim();
        const value = cellData[1].trim();

        rowData[key] = value;
      });

      // Now, you can access the data for each row
      console.log('Row Data:', rowData);
    });
  } catch (error) {
    console.error('Error:', error);
  }
}

scrapeWebpage();
