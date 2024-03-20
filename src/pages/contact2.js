//import { motion } from "framer-motion"
import { useForm } from "react-hook-form"
export function Contact2(){
    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        console.log(data);

    }

    return <>
       <main className="contact">
 
        <div className="login-box">
            <h2>Contact</h2>
             <form onSubmit={ handleSubmit(onSubmit)}>
            <div className="user-box">
                <input {...register("nom")} type="text" required />
                <label>Nom</label>
            </div>
            <div className="user-box">
                <input {...register("prenom")} type="text" required />
                <label>Prenom</label>
            </div>
            <div className="user-box">
                <input {...register("email")} type="email" required />
                <label>Email</label>
            </div>
            <div className="user-box">
                <textarea {...register("message")} rows="4" required />
                <label>Message</label>
            </div>
    <a href="#">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      Envoyer
    </a>
    <button type="submit"> envoi </button>
  </form>
</div>
    </main>
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
    </>
  }