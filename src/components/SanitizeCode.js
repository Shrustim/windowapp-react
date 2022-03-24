import React from 'react'
import DOMPurify from 'dompurify';
export default function SanitizeCode() {
    const blog=`
    <h3>This is a blog title </h3>
    <p>This is some blog text. There could be <b>bold</b> elements as well as <i>italic</i> elements here! </p>
    <script> alert("go to hellll");
    console.log('heyyyyyyyyyyyyyyy') </script>
   `;
   const sanitizedBlog=DOMPurify.sanitize(blog)
//    
  return (
    <div><h1>Sanitize HTML Code</h1>
    
    {blog}
    <div dangerouslySetInnerHTML={{__html:blog}}>
    </div>
    <div dangerouslySetInnerHTML={{__html:sanitizedBlog}}>
    </div>
    
    </div>
  )
}
