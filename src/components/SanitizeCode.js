import {useEffect, createRef} from 'react';
import DOMPurify from 'dompurify';

function EscapeHatches() {
  const divRef=createRef();
  const divRef2=createRef();
  const data="lorem ipsum just some random text"

  useEffect(()=>{
    var htmlpart = "<h1>After rendering, this will display</h1> <script>alert()</script>";
   //Escape Hatches in React Can Cause an XSS Attack
    //  innerHTML it is very harmfull ,instead of using it uses sanitize the html or innerText 

    divRef.current.innerText = htmlpart;
    divRef2.current.innerHTML = DOMPurify.sanitize(htmlpart);

  },[])

  return (
    <div className="App">
      <div className="container" ref={divRef}>
        {data}
      </div>

      <div className="container" ref={divRef2}>
        {data}
      </div>
    </div>
  );
}

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
    <u>Escape Hatches in React Can Cause an XSS Attack</u><br/>
    <u>  innerHTML it is very harmfull ,instead of using it uses sanitize the html or innerText 
</u><br/><br/><br/>
    <EscapeHatches/>
    
    </div>
  )
}
