export const HTMLQuestions = [
{
id: 1,
question: 'What is HTML?',
answer: "HTML stands for HyperText Markup Language and is the language of the internet. It is the standard text formatting language used for creating and displaying pages on the Internet.",
},
{
id: 2,
question: "What are HTML tags?",
answer: "HTML tags are used for placing the elements in the proper and appropriate format. Tags use the symbols <, and > to set them apart from the HTML content.",
},
{
id: 3,
question: "What are HTML attributes?",
answer: "Attributes are the properties that can be added to an HTML tag. These attributes change the way the tag behaves or is displayed. For example, a <img> tag has an src attribute, which you use to add the source from which the image should be displayed.",
},
{
id: 4,
question: "What is a marquee in HTML?",
answer: "Marquee is used for scrolling text on a web page. It scrolls the image or text up, down, left, or right automatically. To apply for a marquee, you have to use </marquee> tags.",
},
{
id: 5,
question: "How do you separate a section of texts in HTML?",
answer: "We separate a section of texts in HTML using the <br> tag for line breaks, <p> tag for paragraphs, and <blockquote> tag for large quoted sections.",
},
{
id: 6,
question: "Define the list types in HTML?",
answer: "The list types in HTML are ordered list (<ol> tag), unordered list (<ul> tag), and definition list (<dl>, <dt>, <dd> tags).",
},
{
id: 7,
question: "How do you align list elements in an HTML file?",
answer: "We can align the list elements in an HTML file by using indents to properly nest and format the lists and their elements.",
},
{
id: 8,
question: "Differentiate between an Ordered list and an Unordered list?",
answer: "An unordered list uses <ul> </ul> tags and each element of the list is written between <li> </li> tags. The list items are displayed as bullets rather than numbers.\n\nAn ordered list uses <ol> </ol> tags and each element of the list is written between <li> </li> tags. The list items are displayed as numbers rather than bullet points."
},
{
id: 9,
question: "How do you display a table in an HTML webpage?",
answer: "The HTML <table> tag is used to display data in a tabular format. It is also used to manage the layout of the page, for example, header section, navigation bar, body content, footer section. Given below are the list of HTML tags used for displaying a table in an HTML webpage: <table>, <tr>, <th>, <td>, <caption>, <colgroup>, <col>, <tbody>, <thead>, <tfoot>."
},
{
id: 10,
question: "How would you display the given table on an HTML webpage?",
answer: "The HTML Code for the problem depicted above is: <table> <tr> <td>50 pcs</td> <td>100</td> <td>500</td> </tr> <tr> <td>10 pcs</td> <td>5</td> <td>50</td> </tr> </table>."
},
{
id: 11,
question: "How do we insert a comment in HTML?",
answer: "We can insert a comment in HTML by beginning with a lesser than sign and ending with a greater than sign. For example, <!-- and -->."
},
{
id: 12,
question: "How do you insert a copyright symbol in HTML?",
answer: "You can insert a copyright symbol by using &copy; or &#169; in an HTML file."
},
{
id: 13,
question: "What is white space in HTML?",
answer: "An empty sequence of space characters is called the white space in HTML. This white space is considered as a single space character in the HTML. White space helps the browser to merge multiple spaces into one single space, and so taking care of indentation becomes easier. White space helps in better organizing the content and tags, making them readable and easy to understand."
},
{
id: 14,
question: "How do you create links to different sections within the same HTML web page?",
answer: "We use the <a> tag, along with referencing through the use of the # symbol, to create several links to different sections within the same web page."
},
{
id: 15,
question: "How do you create a hyperlink in HTML?",
answer: "We use the anchor tag <a> to create a hyperlink in HTML that links one page to another page. The hyperlink can be added to images too."
},
{
id: 16,
question: "Define an image map?",
answer: "An image map in HTML helps in linking with the different kinds of web pages using a single image. It can be used for defining shapes in the images that are made part of the image mapping process."
},
{
id: 17,
question: "Why do we use a style sheet in HTML?",
answer: "A style sheet helps in creating a well-defined template for an HTML webpage that is both consistent as well as portable. We can link a single style sheet template to various web pages, which makes it easier to maintain and change the look of the website."
},
{
id: 18,
question: "What is semantic HTML?",
answer: "Semantic HTML is a coding style. It is the use of HTML markup to reinforce the semantics or meaning of the content. For example: In semantic HTML <b> </b> tag is not used for bold statement as well as <i> </i> tag is not used for italic. Instead of these we use <strong></strong> and <em></em> tags."
},
{
id: 19,
question: "What is SVG in HTML?",
answer: "HTML SVG is used to describe vector or raster graphics. SVG images and their behaviors are defined in XML text files. It is mostly used for vector type diagrams like pie charts, 2-Dimensional graphs in an X, Y coordinate system. Example code: <svg width='100' height='100'><circle cx='50' cy='50' r='40' stroke='yellow' stroke-width='4' fill='red' /></svg>"
},
{
id: 20,
question: "What would happen if there is no text between the HTML tags?",
answer: "If there is no text present between HTML tags, nothing will appear on the screen as there would be nothing to format. Some tags, such as <img> tag which do not require any closing tag, do not require any text between them."
},
{
id: 21,
question: "How do you create nested web pages in HTML?",
answer: "Nested web pages can be created in HTML using the <iframe> tag, which defines an inline frame. Example code: <!DOCTYPE html><html><body><h2>HTML Iframes example</h2><p>Specify the size of the iframe using the height and width attributes:</p><iframe src='https://simplilearn.com/' height='600' width='800'></iframe></body></html>"
},
{
id: 22,
question: "How do you add buttons in HTML?",
answer: "Buttons can be added to an HTML web page using the <button> tag. Example code: <!DOCTYPE html><html><body><h2>HTML Button Tag Example</h2><button name='button' type='button'>CLICK ME</button></body></html>"
},
{
id: 23,
question: "What are the different types of headings in HTML?",
answer: "There are six types of heading tags in HTML, defined with <h1> to <h6> tags. Each heading tag displays a different text size, with <h1> being the largest and <h6> being the smallest. Example code: <!DOCTYPE html><html><body><h1>This is Heading 1</h1><h2>This is Heading 2</h2><h3>This is Heading 3</h3><h4>This is Heading 4</h4><h5>This is Heading 5</h5><h6>This is Heading 6</h6></body></html>"
},
{
id: 24,
question: "How do you insert an image in the HTML webpage?",
answer: "You can insert an image in the HTML webpage by using the following code: <!DOCTYPE html> <html> <body> <h2>HTML Image Example</h2> <img src='tulip.jpeg' /> </body> </html>"
},
{
id: 25,
question: "What is the alt attribute in HTML?",
answer: "The alt attribute is used for displaying a text in place of an image whenever the image cannot be loaded due to any technical issue. <!DOCTYPE html> <html> <body> <h2>HTML Alt Example</h2> <img src='tulip.jpeg' alt='Tulip Garden' /> </body> </html>"
},
{
id: 26,
question: "How are hyperlinks inserted in the HTML webpage?",
answer: "You can insert a hyperlink in the HTML webpage by using the following code: <!DOCTYPE html> <html> <body> <h2>HTML Hyperlink Example</h2> <a href='url'>link text</a> </body> </html>"
},
{
id: 27,
question: "How do you add colour to the text in HTML?",
answer: "You can add colour to the text in HTML by using the following code: <!DOCTYPE html> <html> <body> <h2>HTML Color Text Example</h2> <h1 style='color: Red'>Hello HTML</h1> <p style='color: Blue'>Line 1</p> <p style='color: Green'>Line 2</p> </body> </html>"
},
{
id: 28,
question: "How do you add CSS styling in HTML?",
answer: "There are three ways to include the CSS with HTML: Inline CSS: It is used when less amount of styling is needed or in cases where only a single element has to be styled. To use inline styles add the style attribute in the relevant tag. External Style Sheet: This is used when the style is applied to many elements or HTML pages."
},
{
id: 29,
question: "What hierarchy do the style sheets follow?",
answer: "If a single selector includes three different style definitions, the definition that is closest to the actual tag takes precedence. Inline style takes priority over embedded style sheets, which takes priority over external style sheets."
}


];


