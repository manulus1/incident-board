import { chromium } from "playwright-core";
import { pathToFileURL } from "node:url";
import path from "node:path";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(here, "..");

const jobs = [
  {
    html: path.join(here, "aufgabenblatt.html"),
    pdf: path.join(root, "Aufgabenblatt.pdf"),
  },
  {
    html: path.join(here, "01-quick-wins.html"),
    pdf: path.join(root, "missionskarten", "01-Quick-Wins.pdf"),
  },
  {
    html: path.join(here, "02-upgrade.html"),
    pdf: path.join(root, "missionskarten", "02-Upgrade.pdf"),
  },
  {
    html: path.join(here, "03-new-feature.html"),
    pdf: path.join(root, "missionskarten", "03-New-Feature.pdf"),
  },
  {
    html: path.join(here, "04-freestyle.html"),
    pdf: path.join(root, "missionskarten", "04-Freestyle.pdf"),
  },
  {
    html: path.join(here, "setup-leitfaden.html"),
    pdf: path.join(root, "Setup-Leitfaden.pdf"),
  },
];

const browser = await chromium.launch({ channel: "chrome" });

try {
  for (const job of jobs) {
    const page = await browser.newPage();
    await page.goto(pathToFileURL(job.html).href, { waitUntil: "networkidle" });
    await page.evaluate(() => document.fonts.ready);
    const isBriefing = job.html.endsWith("aufgabenblatt.html");
    await page.pdf({
      path: job.pdf,
      format: "A4",
      printBackground: true,
      preferCSSPageSize: true,
      margin: isBriefing
        ? { top: "0", right: "0", bottom: "10mm", left: "0" }
        : { top: "0", right: "0", bottom: "0", left: "0" },
      displayHeaderFooter: isBriefing,
      headerTemplate: "<div></div>",
      footerTemplate: isBriefing
        ? `<div style="width:100%;padding:0 16mm;color:#5a6573;font-family:Consolas,'Courier New',monospace;font-size:7.5px;letter-spacing:0.06em;display:flex;justify-content:space-between;">
            <span>VIVA//OPS · Bewerbertag</span>
            <span><span class="pageNumber"></span> / <span class="totalPages"></span></span>
            <span>Operation Restore · Aufgabenblatt</span>
          </div>`
        : "<div></div>",
    });
    await page.close();
    console.log("wrote", path.relative(root, job.pdf));
  }
} finally {
  await browser.close();
}
