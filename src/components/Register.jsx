import React from 'react'
import { useState } from 'react'
const Register = () => {
    //Estados del formulario
    const [email, setEmail] = useState('')
    const [contraseña, setContraseña] = useState('')
    const [confirmContraseña, setConfirmContraseña] = useState('')

    //Estado mensaje
    const [mensaje, setMensaje] = useState({ tipo: '', texto: '' })

    //validar datos
    const validarDatos = (e) => {
        e.preventDefault()

        if (!email.trim() || !contraseña.trim() || !confirmContraseña.trim()) {
            setMensaje({ tipo: 'error', texto: 'Todos los campos son obligatorios' })
        } else if (contraseña.length < 6) {
            setMensaje({ tipo: 'error', texto: 'La contraseña debe tener al menos 6 caracteres' })
        } else if (contraseña !== confirmContraseña) {
            setMensaje({ tipo: 'error', texto: 'Las contraseñas no coinciden' })
        } else {
            setMensaje({ tipo: 'exito', texto: '¡Registro exitoso!' })
            setEmail('')
            setContraseña('')
            setConfirmContraseña('')
        }
    }

    return (
        <div className='register-sect'>
            <form className='formulario container w-50 mt-5' onSubmit={validarDatos}>
                <h2>Register</h2>
                <div className='form-group'>
                    <label className='mt-3'>Email</label>
                    <input type="text" className='form-control' onChange={(e) => setEmail(e.target.value)} value={email}/>
                </div>
                
                <div className='form-group'>
                    <label className='mt-3'>Contraseña</label>
                    <input type="text" className='form-control' onChange={(e) => setContraseña(e.target.value)} value={contraseña}/>
                </div>

                <div className='form-group'>
                    <label className='mt-3'>Confirmar contraseña</label>
                    <input type="text" className='form-control' onChange={(e) => setConfirmContraseña(e.target.value)} value={confirmContraseña}/>
                </div>
                <button className='btn btn-primary mt-3'>Register</button>
                {mensaje.texto && (<p className={`fw-bold fs-4 mt-5 ${mensaje.tipo === 'error' ? 'text-danger' : 'text-success'}`}>{mensaje.texto}</p>)}
            </form>
        </div>
    )
}

export default Register