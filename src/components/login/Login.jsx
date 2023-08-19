// Write all the code here
import React, { useState } from "react";
import{
    MDBContainer,
    MDBTabs,
    MDBTabsItem,
    MDBTabsLink,
    MDBTabsContent,
    MDBTabsPane,
    MDBBtn,
    MDBIcon,
    MDBInput,
    MDBCheckbox,
} from "mdb-react-ui-kit";

function Login() { 
    const [justifyActive, setJustifyActive] = useState("tab1");

    const handleJustifyClick = (value) => {
        if (value === justifyActive) {
            return;
        }
        setJustifyActive(value);
    };
    
    return(
        <MDBContainer className="p-3 my-5 d-flex flex-column w-50">
            <MDBTabs pills justify className="mb-3 d-flex flex-row justify-content-between"
            >
                <MDBTabsItem>
                    <MDBTabsLink
                    onClick={() => handleJustifyClick("tab1")}
                    active={justifyActive === "tab1"}
                    >
                        Iniciar sesión
                    </MDBTabsLink>
                </MDBTabsItem>
                <MDBTabsItem>
                    <MDBTabsLink
                    onClick={() => handleJustifyClick("tab2")}
                    active={justifyActive === "tab2"}            
                    >
                        Regístrate
                    </MDBTabsLink>
                </MDBTabsItem>
            </MDBTabs>

            <MDBTabsContent>
                <MDBTabsPane show={justifyActive === "tab1"}>
                    <div className="text-center mb-3">
                        <p>Iniciar sesión con:</p>

                        <div className="d-flex justify-content-between mx-auto"
                        style={{ width: "40%" }}
                    >
                        <MDBBtn 
                            tag="a"
                            color="none"
                            className="m-1"
                            style={{ color: "#1266f1" }}
                        >
                            <MDBIcon fab icon="facebook-f" size="sm" />
                        </MDBBtn>
                        <MDBBtn 
                            tag="a"
                            color="none"
                            className="m-1"
                            style={{ color: "#1266f1" }}
                        >
                            <MDBIcon fab icon="twitter" size="sm" />
                        </MDBBtn>
                        <MDBBtn 
                            tag="a"
                            color="none"
                            className="m-1"
                            style={{ color: "#1266f1" }}
                        >
                            <MDBIcon fab icon="google" size="sm" />
                        </MDBBtn>
                        <MDBBtn 
                            tag="a"
                            color="none"
                            className="m-1"
                            style={{ color: "#1266f1" }}
                        >
                            <MDBIcon fab icon="github" size="sm" />
                        </MDBBtn>
                        </div>
                        <p className="text-center mt-3">o con:</p>
                    </div>

                    <MDBInput
                        wrapperClass="mb-4"
                        label="Dirección de correo electrónico"
                        id="form1"
                        type="email"
                    />
                    <MDBInput
                        wrapperClass="mb-4"
                        label="Contraseña"
                        id="form2"
                        type="password"
                    />

                    <div className="d-flex justify-content-between mx-4 mb-4">
                        <MDBCheckbox
                            name="flexCheck"
                            value=""
                            id="flexCheckDefault"
                            label="Recuérdame"
                        />
                        <a href="!#">¿Olvidaste tu contraseña?</a>
                    </div>

                    <MDBBtn className="mb-4 w-100">Iniciar sesión</MDBBtn>
                    <p className="text-center">
                        ¿No estás registrado? <a href="#!">Regístrate</a>
                    </p>
                </MDBTabsPane>

                <MDBTabsPane show={justifyActive === "tab2"}>
                    <div className="text-center mb-3">
                        <p>Registrate con:</p>
                        <div 
                            className="d-flex justify-content-between mx-auto"
                            style={{ width: "40%" }}
                        >
                            <MDBBtn
                                tag="a"
                                color="none"
                                className="m-1"
                                style={{ color: "#1266f1" }}
                            >
                                <MDBIcon fab icon="facebook-f" size="sm" />
                            </MDBBtn>
                            <MDBBtn
                                tag="a"
                                color="none"
                                className="m-1"
                                style={{ color: "#1266f1" }}
                            >
                                <MDBIcon fab icon="twitter" size="sm" />
                            </MDBBtn>
                            <MDBBtn
                                tag="a"
                                color="none"
                                className="m-1"
                                style={{ color: "#1266f1" }}
                            >
                                <MDBIcon fab icon="google" size="sm" />
                            </MDBBtn>
                            <MDBBtn
                                tag="a"
                                color="none"
                                className="m-1"
                                style={{ color: "#1266f1" }}
                            >
                                <MDBIcon fab icon="github" size="sm" />
                            </MDBBtn>
                            </div>

                            <p className="text-center mt-3">o con:</p>
                    </div>

                    <MDBInput 
                        wrapperClass="mb-4"
                        label="Nombre"
                        id="form1"
                        type="text"
                    />
                    <MDBInput 
                        wrapperClass="mb-4"
                        label="Nombre de usuario"
                        id="form1"
                        type="text"
                    />
                    <MDBInput 
                        wrapperClass="mb-4"
                        label="Dirección de correo electrónico"
                        id="form1"
                        type="email"
                    />
                    <MDBInput 
                        wrapperClass="mb-4"
                        label="Contraseña"
                        id="form1"
                        type="password"
                    />

                    <div className="d-flex justify-content-center mb-4">
                        <MDBCheckbox
                            name="flexCheck"
                            id="flexCheckDefault"
                            label="He leído y acepto las condiciones"
                        />
                    </div>

                <MDBBtn className="mb-4 w-100">Regístrate</MDBBtn>
                </MDBTabsPane>
            </MDBTabsContent>
        </MDBContainer>
    );
}
export default Login;