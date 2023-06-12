import React from 'react'

export default function About(props) {
  return (

    <div style={{fontSize:'16px'}} className={`text-${props.mode==='light'?'dark':'light'} `}>
        <h1>About</h1>
      <p>TextMorpher is a cutting-edge React application designed to revolutionize your text manipulation experience. With its sleek interface and powerful functionality, TextMorpher puts the control of your text transformation at your fingertips.

The heart of TextMorpher lies in its intuitive buttons, carefully crafted to provide a seamless user experience. The "Start Recording" button allows you to capture your text input, ensuring that no brilliant idea or important note slips through the cracks. When you're ready, simply hit the "Stop Recording" button to save your masterpiece.

But that's not all. TextMorpher empowers you to wield the true potential of your text. Need to convert your text to uppercase for emphasis or an eye-catching headline? Just click the "Convert to Uppercase" button, and watch your text transform with a single touch. Conversely, if you prefer a softer tone, the "Convert to Lowercase" button elegantly brings your text to a more subdued state.

TextMorpher understands the importance of finding and replacing specific words or phrases effortlessly. The "Find and Replace" button takes the hassle out of tedious manual search and edit tasks. Simply input the word or phrase you're looking for, provide the replacement text, and let TextMorpher do the rest. It's like having your own personal editing assistant!

To enhance your productivity, TextMorpher equips you with additional tools for managing your text. The "Copy Text" button enables you to quickly duplicate your transformed text, allowing you to paste it anywhere you need it. And when you're ready to start fresh, the "Clear Text" button wipes the canvas clean, giving you a blank slate for your next literary endeavor.

Whether you're a writer, designer, or simply someone who appreciates the power of words, TextMorpher is the ideal companion for your text manipulation needs. It combines simplicity, functionality, and style to help you achieve text transformation like never before. Unleash your creativity with TextMorpher and watch your words come alive.</p> 
      <br />
      <div style={{fontSize:'20px'}}>
      <p>
        Created by: <b>Priyanshu</b>

        </p> 
        <p>
            <a href="https://www.linkedin.com/in/priyanshu-shukla-9b0460226?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BRUY%2BYEQBQFqPrWpXrlZDRA%3D%3D">LinkedIn     </a>

            <a className='mx-4' href="https://github.com/Priyanshuiiitg">Github</a>


        </p>
      
      </div>
       
       
        </div>
  )
}
