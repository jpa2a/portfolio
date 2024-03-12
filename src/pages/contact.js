import { motion } from "framer-motion"

export function Contact(){
    

    return <>
       <main className="contact">
  {/*       <div>
        <div className="contact">
        <form action="#" method="post" className="form">
            <label htmlFor="firstName"></label>
            <input type="text" name="firstName" id="firstName" placeholder="Nom" />
            <label htmlFor="lastName"></label>
            <input type="text" name="lastName" id="lastName" placeholder="Prenom" />
            <label htmlFor="email"></label>
            <input type="email" name="email" id="email" placeholder="Email" />
            <label htmlFor="message"></label>
            <textarea name="message" id="message" cols="30" rows="10" placeholder="Message" ></textarea>
            <button>Envoyer</button>
		    </form>

        </div>
      
        </div> */}
        <div className="login-box">
            <h2>Contact</h2>
             <form>
            <div className="user-box">
                <input type="text" name="" required="" />
                <label>Nom</label>
            </div>
            <div className="user-box">
                <input type="text" name="" required="" />
                <label>Prenom</label>
            </div>
            <div className="user-box">
                <input type="email" name="" required="" />
                <label>Email</label>
            </div>
            <div className="user-box">
                <textarea rows="4" name="" required="" />
                <label>Message</label>
            </div>
    <a href="#">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      Envoyer
    </a>
  </form>
</div>
    </main>
    </>
  }