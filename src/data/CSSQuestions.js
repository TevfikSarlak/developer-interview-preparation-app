export const CSSQuestions = [

{
    id: 1,
    question: "Name some CSS frameworks.",
    answer: "CSS frameworks are libraries that make web page styling easier. Some of them are Foundation, Bootstrap, Gumby, Ukit, Semantic UI, etc."
  },
  
  {
    id: 2,
    question: "What do you understand by the universal sector?",
    answer: "A universal selector is a selector that matches any element type's name instead of selecting elements of a particular type. \nExample:\n\n<style>    \n\n* {    \n\n   color: blue;    \n\n   font-size: 10px;    \n\n}     \n\n</style>   "
  },
 
  { 
    id: 3,
    question: 'Tell us about the use of the ruleset.',
    answer: 'The ruleset is used for the identification of selectors, which can be attached with other selectors. The two parts of a ruleset are:\n\nDeclaration block: contains one or more semicolon-separated declarations\nSector: indicates the HTML element needed to be styled'
  },
    {
      id: 4,
      question: 'What are the elements of the CSS Box Model?',
      answer: 'The CSS box model defines the layout and design of CSS elements. The elements are content (like text and images, padding (the area around content), border (the area around padding), and margin (the area around the border).'
    },
    {
      id: 5,
      question: 'Differentiate between CSS3 and CSS2.',
      answer: 'The main difference between CSS3 and CSS2 is that CSS divides different sections into modules and supports many browsers. It also contains new General Sibling Combinators responsible for matching similar elements.'
    },
    {
      id: 6,
      question: 'How can CSS be integrated into an HTML page?',
      answer: 'There are three ways of integrating CSS into HTML: using style tags in the head section, using inline-styling, writing CSS in a separate file, and linking into the HTML page by the link tag.'
    },
    {
      id: 7,
      question: 'Explain a few advantages of CSS.',
      answer: 'With CSS, different documents can be controlled using a single site, styles can be grouped in complex situations using selectors and grouping methods, and multiple HTML elements can have classes.'
    },
    {
      id: 8,
      question: 'What is meant by RGB stream?',
      answer: 'RGB represents colors in CSS. The three streams are namely Red, Green, and Blue. The intensity of colors is represented using numbers 0 to 256. This allows CSS to have a spectrum of visible colors.'
    },
    {
      id: 9,
      question: 'What was the purpose of developing CSS?',
      answer: 'CSS was developed to define the visual appearances of websites. It allows developers to separate the structure and content of a website that was not possible before.'
    },
    {
      id: 10,
      question: 'What is the difference between a class and an ID?',
      answer: 'Class is a way of using HTML elements for styling. They are not unique and have multiple elements. Whereas ID is unique and it can be assigned to a single element.'
    },
    {
        id: 11,
        question: "What are the different positioning schemes in CSS?",
        answer: "The different positioning schemes in CSS are static, relative, absolute, fixed, and sticky."
        },
        
        {
        id: 12,
        question: "What is the purpose of a CSS reset file?",
        answer: "The purpose of a CSS reset file is to reduce browser inconsistencies by resetting default browser styling to a common baseline. This allows web developers to start with a clean slate and then add their own styling on top of it."
        },
        
        {
        id: 13,
        question: "What is the difference between the display and visibility properties in CSS?",
        answer: "The display property determines if an element is shown or hidden, and how it affects the layout of other elements on the page. The visibility property only determines if an element is shown or hidden, but it does not affect the layout of other elements on the page."
        },
        
        {
        id: 14,
        question: "What is the CSS box model?",
        answer: "The CSS box model is a layout concept that describes how an HTML element is represented on a web page. It includes content, padding, border, and margin."
        },
        
        {
        id: 15,
        question: "What is the difference between padding and margin?",
        answer: "Padding is the space between an element's content and its border. Margin is the space between an element's border and the neighboring elements on the page."
        },
        
        {
        id: 16,
        question: "What are CSS selectors?",
        answer: "CSS selectors are patterns used to select and style HTML elements. There are many types of selectors, including element selectors, class selectors, ID selectors, attribute selectors, and pseudo-class selectors."
        },
        
        {
        id: 17,
        question: "What is the difference between an ID selector and a class selector?",
        answer: "An ID selector is used to select a single element on a web page. A class selector is used to select multiple elements on a web page. An element can have only one ID, but it can have multiple classes."
        },
        
        {
        id: 18,
        question: "What is the box-sizing property in CSS?",
        answer: "The box-sizing property in CSS determines how an HTML element's width and height are calculated. The default value is content-box, which includes only the content. When set to border-box, the width and height include the padding and border."
        },
        
        {
        id: 19,
        question: "What is the float property in CSS?",
        answer: "The float property in CSS is used to move an element to the left or right of its container. It is commonly used for positioning images or text around other elements on the page."
        },
        
        {
        id: 20,
        question: "What is a CSS pseudo-class?",
        answer: "A CSS pseudo-class is a keyword added to a selector"
    },
   
      {
        id: 21,
        question: "What is the CSS display property?",
        answer: "The CSS display property specifies how an element should be displayed. It can be set to values like block, inline, inline-block, flex, etc."
      },
      {
        id: 22,
        question: "What is the CSS clear property used for?",
        answer: "The CSS clear property is used to control the behavior of floating elements. It specifies whether an element should be moved below (cleared) the floating elements or not."
      },
      {
        id: 23,
        question: "What is the box-sizing property in CSS?",
        answer: "The box-sizing property in CSS specifies how the total width and height of an element is calculated. It can be set to values like content-box, border-box, or padding-box."
      },
      {
        id: 24,
        question: "What is the difference between em and rem units in CSS?",
        answer: "Both em and rem units are relative units in CSS. The difference is that em units are relative to the font size of the parent element, while rem units are relative to the font size of the root element (usually the <html> element)."
      },
      {
        id: 25,
        question: "Define z-index.",
        answer: "Z-index is used to specify the stack order of elements that overlap each other. Its default value is zero and can take both negative and positive values. A higher z-index value is stacked above the lower index element. It takes the following values- auto, number, initial, and inherit."
      },
      {
        id: 26,
        question: "What are the benefits of CSS Sprites?",
        answer: "With CSS sprites, loading multiple images is not an issue. Blinking is not seen. Advanced downloading of assets does not take place until needed."
      },
      {
        id: 27,
        question: "How can you target h3 and h2 with the same styling?",
        answer: "Multiple elements can be targeted by separating with a comma: h2, h3 {color: red;}"
      },
      {
        id: 28,
        question: "Name media types allowed by CSS.",
        answer: "The different media types allowed by CSS are: speech, audio, visual, tactile media, continuous or paged media, grip media or bitmap, interactive media."
      },
      {
        id: 29,
        question: "How can you use CSS to control image repetition?",
        answer: "The background-repeat property is used to control the image. Example: h3 {background-repeat: none;}"
      },
      {
        id: 30,
        question: "What is the box model?",
        answer: "The CSS box model is a design and layout concept that represents an element as a rectangular box, which has content, padding, borders, and margins."
      },
      {
        id: 31,
        question: "What is the difference between padding and margin?",
        answer: "Padding is the space between the content and the border of an element, while margin is the space between an element and adjacent elements."
      },
      {
        id: 32,
        question: "What is the difference between margin and padding in CSS?",
        answer: "Margin is the space outside an element, while padding is the space inside an element, between the element’s border and its content. Margin and padding can be set for each side of an element (top, right, bottom, left) using CSS properties such as margin-top, margin-right, margin-bottom, margin-left, padding-top, padding-right, padding-bottom, and padding-left."
        },
        {
            id: 33,
            question: "What is the difference between padding and margin in CSS?",
            answer: "Padding is the space inside an element between the element and its border, while margin is the space outside the element, between the element and other elements. In other words, padding adds space inside the element, while margin adds space outside the element."
            },
            {
            id: 34,
            question: "What is a CSS selector?",
            answer: "A CSS selector is a pattern used to select and style one or more elements in an HTML document. Selectors can be based on element names, classes, IDs, attributes, and more."
            },
            {
            id: 35,
            question: "What is the box model in CSS?",
            answer: "The box model is the concept that every HTML element is a rectangular box that can be manipulated with CSS. It consists of the content area (the actual content of the element), padding (the space between the content and the border), border (the line surrounding the content and padding), and margin (the space between the border and other elements)."
            },
            {
            id: 36,
            question: "What is the difference between inline and block elements in CSS?",
            answer: "Inline elements are elements that do not create line breaks and only take up as much width as necessary. Examples include <span> and <a>. Block elements, on the other hand, create line breaks and take up the full width of their parent element. Examples include <div> and <p>."
            },
            {
            id: 37,
            question: "What is the difference between absolute and relative positioning in CSS?",
            answer: "Absolute positioning positions an element relative to its nearest positioned ancestor (if any), while relative positioning positions an element relative to its normal position in the document flow. In other words, absolute positioning takes the element out of the normal document flow, while relative positioning does not."
            }
            
           
  ];
  



