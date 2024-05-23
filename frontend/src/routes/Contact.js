 
import Navbar from '../Components/Navbar';
import "./Contactstyles.css";
 
function Contact()

{
    return(
    <>
    <Navbar/>
    <div className='contact'>
    <div className='healthcontact' >
      
      <p>
      <h1>Contact Us</h1>
        Welcome to our medical devices identifier and location provider! Ask a question, get health advice, give a compliment or make a complaint
      </p>
    </div>
      
      <form>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div>
            <label htmlFor="name">Family Name:</label>
            <input type="text" id="familyname" name="familyname" required />
          </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div>
            <label htmlFor="phone">Phone Number:</label>
            <input type="tel" id="phone" name="phone" />
          </div>
        <div>
            <label htmlFor="hospital">Which hospital or service is your feedback about?</label>
            <select id="hospital" name="hospital" required>
            <option value="">Select a hospital</option>
            <option value="hospital1">Menelik Hospital </option>
            <option value="hospital2">Yekatit Hospital </option>
            <option value="hospital3">St.Paul's Hospital </option>
    </select>
          </div>
        <div>
          <label htmlFor="message">Provide detailed feedback for us</label>
          <textarea id="message" name="message" rows="5" />
        </div>
        <div className='submit-container'> 
        <button type="submit">Submit</button>
        </div>
      </form>
      <div className='footer'>
        <div className='top'>
           <div>
            <h1>Hospital Information</h1>
            <p>Get the information  and location of the Hospitals.</p>
           </div>
       </div> 
             <div className='bottom'>
              <div>
                <h2>Services</h2>
                <a href='/'>Conditions</a>
                <a href='/'>Listings</a>
                <a href='/'>What we offer</a>
                <a href='/'>How it Works</a>
                <a href='/'>Latest News</a>
                 </div>
                 <div>
                <h2>Useful Links</h2>
                <a href='http://localhost:3000/About'>About</a>
                <a href='http://localhost:3000/service'>Services</a>
                <a href='http://localhost:3000/Hospital'>Hospitals</a>
                <a href='http://localhost:3000/Contact'>Contact</a>
             </div>
             <div>
              <h2>Follow us</h2>
              <a href='/'>Facebook</a>
              <a href='/'>Telegram</a>
              <a href='/'>whatsapp</a>
              <a href='/'>Twitter</a>
              <a href='/'>Instagram</a>
            </div>

             <div>
              <h2>Contact Us</h2>
            <a href='/'>firii9@gmail.com</a>
            <a href='/'>+251978796545</a>
            </div>

          
          
         </div>
        
     </div>
     
    </div>
     
    
 
    </>
        
    );
}
export default Contact;