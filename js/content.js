
const content = {
  main: `
  <section>
    <div class="mainpage">
      <div class="container">
        <img src="./img/markdown-mark-white.svg" alt="markdown-logo">
        <h4>The <i>Markdown Guide</i> is a free and open-source reference guide that explains how to use Markdown, the simple and easy-to-use markup language you can use to format virtually any document.</h4>
      </div>
    </div>
  </section>
  `,
  started: `
  <section>
    <div class="top-section">
      <div class="container">
        <h1>Getting Started</h1>
        <p>An overview of Markdown, how it works, and what you can do with it.</p>
      </div>
    </div>
    <div class="container">
      <article>
        <h2>What’s Markdown?</h2>
        <p>Markdown is a lightweight markup language that you can use to add formatting elements to plaintext text documents. Created by John Gruber in 2004, Markdown is now one of the world’s most popular markup languages.</p>
        <p>Using Markdown is different than using a <a href="https://en.wikipedia.org/wiki/WYSIWYG">WYSIWYG</a> editor. In an application like Microsoft Word, you click buttons to format words and phrases, and the changes are visible immediately. Markdown isn’t like that. When you create a Markdown-formatted file, you add Markdown syntax to the text to indicate which words and phrases should look different.</p>
      </article>
      <article>
        <h2>What’s Markdown Good For?</h2>
        <p>Markdown is a fast and easy way to take notes, create content for a website, and produce print-ready documents.</p>
        <p>It doesn’t take long to learn the Markdown syntax, and once you know how to use it, you can write using Markdown just about everywhere. Most people use Markdown to create content for the web, but Markdown is good for formatting everything from email messages to grocery lists.</p>
        <p>Here are some examples of what you can do with Markdown.</p>
      </article>
      <article>
      <h3>Websites</h3>
      <p>Markdown was designed for the web, so it should come as no surprise that there are plenty of applications specifically designed for creating website content.</p>
      <p>If you’re looking for the simplest possible way to create a website with Markdown files, check out blot.im and smallvictori.es. After you sign up for one of these services, they create a Dropbox folder on your computer. Just drag and drop your Markdown files into the folder and — poof! — they’re on your website. It couldn’t be easier.</p>
      <p>If you’re familiar with HTML, CSS, and version control, check out Jekyll, a popular static site generator that takes Markdown files and builds an HTML website. One advantage to this approach is that GitHub Pages provides free hosting for Jekyll-generated websites. If Jekyll isn’t your cup of tea, just pick one of the many other static site generators available.</p>
    </article>
    <article>
      <h3>Documents</h3>
      <p>Markdown doesn’t have all the bells and whistles of word processors like Microsoft Word, but it’s good enough for creating basic documents like assignments and letters. You can use a Markdown document authoring application to create and export Markdown-formatted documents to PDF or HTML file format. The PDF part is key, because once you have a PDF document, you can do anything with it — print it, email it, or upload it to a website.</p>
    </article>
    <article>
      <h3>Notes</h3>
      <p>In nearly every way, Markdown is the ideal syntax for taking notes. Sadly, Evernote and OneNote, two of the most popular note applications, don’t currently support Markdown. The good news is that several other note applications do support Markdown</p>
      <ul>
        <li>Simplenote is a free, barebones note-taking application available for every platform.</li>
        <li>Bear is an Evernote-like application available for Mac and iOS devices. It doesn’t exclusively use Markdown syntax by default, but you can enable Markdown compatibility mode.</li>
        <li>Boostnote bills itself as an “open source note-taking app designed for programmers.”</li>
      </ul>
    </article>
    <article>
      <h3>Documentation</h3>
      <p>Markdown is a natural fit for technical documentation. Companies like GitHub are increasingly switching to Markdown for their documentation — check out their blog post about how they migrated their Markdown-formatted documentation to Jekyll.</p>
    </article>
    </div>
  </section>`,
  basic: `
  <section>
    <div class="top-section">
      <div class="container">
        <h1>Basic Syntax</h1>
        <p>The Markdown elements outlined in John Gruber's design document.</p>
      </div>
    </div>
    <div class="container">
      <article>
        <h2>Overview</h2>
        <p>Nearly all Markdown applications support the basic syntax outlined in John Gruber’s original design document. There are minor variations and discrepancies between Markdown processors — those are noted inline wherever possible.</p>
      </article>
      <article>
        <h2>Basic Syntax</h2>
        <p>These are the elements outlined in John Gruber’s original design document. All Markdown applications support these elements.</p>

        <table>
          <thead>
            <tr>
              <th>Element</th>
              <th>Markdown Syntax</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Heading</td>
              <td># H1<br>
                ## H2<br>
                ### H3</td>
            </tr>
            <tr>
              <td>Bold</td>
              <td><b>**bold text**</b></td>
            </tr>
            <tr>
              <td>Italic</td>
              <td><i>*italicized text*</i>i></td>
            </tr>
            <tr>
              <td>Blockquote</td>
              <td>&gt; blockquote</td>
            </tr>
            <tr>
              <td>Ordered List</td>
              <td>
                1. First item<br>
                2. Second item<br>
                3. Third item<br>
              </td>
            </tr>
            <tr>
              <td>Unordered List</td>
              <td>
                - First item<br>
                - Second item<br>
                - Third item<br>
              </td>
            </tr>
            <tr>
              <td>Code</td>
              <td><code>${'`code`'}</code></td>
            </tr>
            <tr>
              <td>Horizontal Rule</td>
              <td>---</td>
            </tr>
            <tr>
              <td>Link</td>
              <td>[title](https://www.example.com)</td>
            </tr>
            <tr>
              <td>Image</td>
              <td>![alt text](image.jpg)</td>
            </tr>
          </tbody>
        </table>
      </article>
    </div>
  </section>`,
  adv: `
  <section>
    <div class="top-section">
      <div class="container">
        <h1>Advanced Syntax</h1>
        <p>Advanced features that build on the basic Markdown syntax.</p>
      </div>
    </div>
    <div class="container">
      <article>
        <h2>Overview</h2>
        <p>The basic syntax outlined in John Gruber’s original design document added many of the elements needed on a day-to-day basis, but it wasn’t enough for some people. That’s where extended syntax comes in.</p>
        <p>Several individuals and organizations took it upon themselves to extend the basic syntax by adding additional elements like tables, code blocks, syntax highlighting, URL auto-linking, and footnotes. These elements can be enabled by using a lightweight markup language that builds upon the basic Markdown syntax, or by adding an extension to a compatible Markdown processor.</p>
      </article>
      <article>
        <h2>Extended Syntax</h2>
        <p>These elements extend the basic syntax by adding additional features. Not all Markdown applications support these elements.</p>
        <table>
          <thead>
            <tr>
              <th>Element</th>
              <th>Markdown Syntax</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Table</td>
              <td>
                  | Syntax      | Description |<br>
                  | ----------- | ----------- |<br>
                  | Header      | Title       |<br>
                  | Paragraph   | Text        |
              </td>
            </tr>
            <tr>
              <td>Fenced Code Block</td>
              <td>${'```'}<br>
              {<br>
              &nbsp;&nbsp;"firstName": "John",<br>
              &nbsp;&nbsp;"lastName": "Smith",<br>
              &nbsp;&nbsp;"age": 25<br>
              }<br>
              ${'```'}
              </td>
            </tr>
            <tr>
              <td>Footnote</td>
              <td>
                Here's a sentence with a footnote. [^1]<br><br>
        
                [^1]: This is the footnote.
              </td>
            </tr>
            <tr>
              <td>Heading ID</td>
              <td>### My Great Heading {#custom-id}</td>
            </tr>
            <tr>
              <td>Definition List</td>
              <td>
                term<br>
                : definition
              </td>
            </tr>
            <tr>
              <td>Strikethrough</td>
              <td>~~The world is flat.~~</td>
            </tr>
            <tr>
              <td>Task List</td>
              <td>
                - [x] Write the press release<br>
                - [ ] Update the website<br>
                - [ ] Contact the media
              </td>
            </tr>
          </tbody>
        </table>
      </article>
    </div>
  </section>`
}