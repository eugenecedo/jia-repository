# Jiandra — Faith, Creativity & Purpose

Personal portfolio of **Jiandra Louise F. De Jesus**.

A complete static personal portfolio. It works offline and needs no installation,
external fonts, framework, image service, or account.

## Open the site

Extract this ZIP, then open **index.html** in a modern browser. Keep **style.css**
and **script.js** in the same folder. The separately supplied
**Jiandra_Portfolio.html** is a standalone version you can open without other files.

## Make it yours

1. Scroll to the footer and choose **Personalize your copy**.
2. Update your name, monogram, introduction, biography, and mission.
3. Upload your own JPG, PNG, or WebP portrait if you want one. Without a photo,
   the site uses the built-in monogram artwork.
4. Edit the three starting collections, or add your own projects (up to 12).
   Each project supports a category, title, summary, full details, status, and
   optional HTTP/HTTPS link. Remove entries you do not need.
5. Choose **Apply changes** to see your changes and retain them in this browser.
6. Choose **Download updated HTML** to create a portable version containing your
   current photo and content. Open or publish THAT downloaded file to share your
   changes with other people.

Browser storage is local to the current device and browser profile. A visitor's
personalization does not change anyone else's copy. This feature is a local
editor, not a shared admin account. Keep your exported HTML as your reusable copy.

## Closing note

The email form, email address fields, email links, and message sending/drafting
actions have been removed. The page ends with a short encouragement and a link
back to the Bible section. There is no visitor message collection or email app
launching.

## Included features

- Responsive desktop, tablet, and phone layouts
- Working mobile menu, section links, active section indicator, reading progress,
  and back-to-top control
- Dark/light theme with saved preference and system theme support
- Portfolio category filters, project details dialogs, and safe external links
- Journey reflection dialogs
- Three manually controlled Bible inspirations with a copy button
- A complete offline King James Version Bible reader: 66 books, 1189 chapters,
  book/chapter selection, previous/next chapters, reference and word search,
  verse highlighting, text size controls, and verse/chapter copying
- A closing encouragement with a link to the Bible section
- Local personalization, portrait upload, editable project collections, and
  self-contained HTML export
- Keyboard navigation, native modal focus handling, reduced-motion support,
  meaningful labels, and print styling

Creative Works and Projects begin as growing collections. Add your actual work
through Personalize. Clicking the Future Goals card opens a popup with three
aspirations: win souls for Christ, become a Registered Nurse, and become a
surgeon. These details appear in the popup rather than on the portfolio card.
The supplied profile portrait is embedded in the HTML using its original PNG
bytes. No retouching or image changes were applied. It displays inside the
profile frame and remains included in standalone exports. You can replace it
through Personalize, or choose **Use monogram instead**.

## Bible reader

Choose **Bible** in the navigation, then **Open the Bible**, or select a featured
passage. Choose any book and chapter using the menus. Enter a reference such as
`John 3:16`, `Psalm 23`, or `Proverbs 3:5-6` to jump to a passage. Enter words or a
phrase such as `faith` or `fear not` to search all books. Results open the matching
chapter and highlight the verse. More results are available in batches of 40.

Use A− / A+ to change text size. Tap a verse number to copy that verse, or use the
copy button to copy the whole chapter. The reader remembers your last chapter
and text size in this browser. All Bible text is included in the HTML; no API,
login, or network connection is required to read or search.

Translation: King James Version (KJV). Source: Project Gutenberg eBook #10,
https://www.gutenberg.org/ebooks/10. The text has been arranged by book, chapter,
and verse for this reader. Source notices and the full Project Gutenberg license
are included under **Translation, text source & license** and in
**BIBLE_SOURCE_LICENSE.txt**. Keep the source notice and license with the Bible.

## Publish

For the three-file source, upload index.html, style.css, and script.js together
to a static web host. To publish a customized export, rename the downloaded HTML
to index.html and upload it by itself. It contains its own styling, JavaScript,
content, and any uploaded portrait.

## Editing the source directly

- **index.html** contains the page structure and initial content in the
  `portfolio-config` JSON block. Edit that JSON for site-wide default content.
- **style.css** contains the full design and responsive rules.
- **script.js** contains all interactions and a stylesheet fallback for offline
  export. When editing CSS directly, use the standalone export generated from an
  HTTP-served source page to capture your latest stylesheet. The delivered
  fallback already matches the delivered stylesheet.

Existing browser personalization takes precedence over the initial JSON. Use a
fresh browser profile, remove the site's saved content, or change `siteId` in the
JSON to preview new source defaults. No build step is required.
