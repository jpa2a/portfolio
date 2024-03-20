//import { motion } from "framer-motion"
import { useForm } from "react-hook-form"
import emailjs from '@emailjs/browser';
import { useRef } from "react";

export function Contact(){
    const form = useRef();
    const { register, handleSubmit, formState: { errors, isSubmitting }, } = useForm();

    const onSubmit = async data => {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        console.log(data);

        emailjs
      .sendForm('service_7kqj65m', 'template_4koei1w', form.current, {
        publicKey: 'xxxx',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
 
    }

    return <>
       <main className="contact">
 
        <div className="contact__info">
            <h2>Contact</h2>
             <form ref={form} onSubmit={ handleSubmit(onSubmit)}>
            <div className="contact__nom">
                <label>Nom</label>
                <input name="user_name" {...register("nom", {required: "le nom doit etre renseigné", minLength: {value: 3, message: "le nom doit avoir au moins 3 caractères",},})} type="text" />
                {errors.nom && <div className="form__error">{errors.nom.message}</div>}
            </div>
            <div className="contact__prenom">
                <label>Prenom</label>
                <input {...register("prenom", {required: "le prénom doit etre renseigné", minLength: {value: 3, message: "le prenom doit avoir au moins 3 caractères",},})} type="text" />
                {errors.prenom && <div className="form__error">{errors.prenom.message}</div>}
            </div>
            <div className="contact__email">
                <label>Email</label>
                <input {...register("email", {required: "email obligatoire",pattern: {
      value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
      message: 'email addresse invalide',
    },})} type="text" />
                {errors.email && <div className="form__error">{errors.email.message}</div>}
                
            </div>
            <div className="contact__message">
                <label>Message</label>
                <textarea {...register("message", {required: "un message est obligatoire", minLength: {value: 20, message: "le message doit avoir au moins 20 caractères",},})} rows="3" />
                {errors.message && <div className="form__error">{errors.message.message}</div>}
            </div>
    <button disabled={isSubmitting} type="submit" className="contact__submit">{isSubmitting ? "Envoi ..." : "Envoyer"}</button>
  </form>
</div>
    </main>
    </>
  }