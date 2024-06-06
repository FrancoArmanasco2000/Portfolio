import './Contact.css';
import { IoSend } from "react-icons/io5";
import { motion } from 'framer-motion';
import { useState } from 'react';

export function Contact() {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('https://backend-email-nppy.onrender.com/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    to: 'programmingarmanasco@gmail.com',
                    subject: 'Nuevo mensaje de contacto',
                    html: `<p><strong>Email:</strong> ${email}</p><p><strong>Mensaje:</strong> ${message}</p>`,
                }),
            });

            const result = await response.json();
            if (response.ok) {
                alert('Email enviado exitosamente!');
                setEmail('');
                setMessage('');
            } else {
                console.error('Error:', result.error);
                alert('Error al enviar el email.');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Error al enviar el email.');
        }
    };

    return (
        <form className='contact-container' id='contacto' onSubmit={handleSubmit}>
            <h1>Contactame</h1>
            <p>Por favor contacta conmigo de manera directa mediante programmingarmanasco@gmail.com o completa el siguiente formulario</p>
            <input
                type='email'
                placeholder='Tu email'
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            <textarea
                placeholder='Tu mensaje'
                name='contenido'
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
            ></textarea>
            <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.9 }}
            >Enviar <IoSend /></motion.button>
        </form>
    );
}
