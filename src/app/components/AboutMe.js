import './AboutMe.css';


export default function AboutMe() {
  return (
    <div className="about_me">
      <div className='about_me_text_box'>
        <h4>Hello! My name is Cristian Valle</h4>
        <p>
          I am a software engineer specializing in web development, with a strong emphasis on building dynamic and responsive applications using React frameworks.
        </p>
      </div>
      <div className='about_me_img_box'>
        <img src="/cv.jpg" alt="Cristian Valle" /> 
      </div>
    </div>
  );
}

