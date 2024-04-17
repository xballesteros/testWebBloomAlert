import React from 'react';
import ReCAPTCHA from "react-google-recaptcha";
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { useState } from 'react';

const cardStyles = {
    imagen: {
        margin: "auto",
        width: "40%",

    }
};

const Login = ({ colorMode, isNewThemeLoaded, onNewThemeChange, location, onLogin }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (e.nativeEvent.submitter.name === 'loginButton') {
            onLogin(email, password);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="pages-body login-page flex flex-column" style={{ background: 'none', backgroundColor: '#20ba84' }}>
                <div className="align-self-center mt-auto mb-auto">
                    <div className="pages-panel card flex flex-column">
                        <h1 className="pages-detail">Adquisiciones</h1>
                        <img src="assets/layout/images/Recurso-2.png" alt="" style={cardStyles.imagen} />

                        <h5 className="pages-detail mb-6 px-6">Bienvenido, inicia sesión para continuar</h5>

                        <div className="input-panel flex flex-column px-3">
                            <div className="p-inputgroup">
                                <span className="p-inputgroup-addon">
                                    <i className="pi pi-envelope"></i>
                                </span>
                                <span className="p-float-label">
                                    <InputText autoComplete="on" type="text" id="inputgroup1" value={email} onChange={handleEmailChange} />
                                    <label htmlFor="inputgroup1">Correo Electrónico</label>
                                </span>
                            </div>

                            <div className="p-inputgroup mt-3 mb-6">
                                <span className="p-inputgroup-addon">
                                    <i className="pi pi-lock"></i>
                                </span>
                                <span className="p-float-label">
                                    <InputText autoComplete="off" type="password" id="inputgroup2" value={password} onChange={handlePasswordChange} />
                                    <label htmlFor="inputgroup2">Contraseña</label>
                                </span>
                            </div>
                            <div className="p-inputgroup mt-3 mb-6" style={{paddingLeft: '9%'}}>
                                {/* Add reCAPTCHA component */}
                                <ReCAPTCHA sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI" />
                            </div>
                        </div>
                        <Button
                            type="submit"
                            name="loginButton" // Add a name to the "Ingresar" button
                            className="login-button mb-3 px-3"
                            label="Ingresar"
                            style={{ backgroundColor: '#20ba84' }}
                        ></Button>
                        <Button className="login-button mb-4 px-3" label="Registrarme" style={{ backgroundColor: 'white', color: '#20ba84', borderColor: '#20ba84', border: '1px solid #20ba84' }}></Button>
                        <Button className="login-button mb-3 px-3" label="Recuperar Contraseña" style={{ backgroundColor: 'white', color: '#6c757d', fontSize: '13px' }}></Button>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default Login;
