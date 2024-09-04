// // import React, { useState } from "react";
// // import "./CSS/LoginSignup.css";

// // const LoginSignup = () => {
// //   const [state, setState] = useState("Entrar");
// //   const [formData, setFormData] = useState({ username: "", email: "", password: "" });

// //   const changeHandler = (e) => {
// //     setFormData({ ...formData, [e.target.name]: e.target.value });
// //   };

// //   const login = async () => {
// //     let dataObj;
// //     await fetch('http://localhost:4000/login', {
// //       method: 'POST',
// //       headers: {
// //         Accept: 'application/json',
// //         'Content-Type': 'application/json',
// //       },
// //       body: JSON.stringify(formData),
// //     })
// //       .then((resp) => resp.json())
// //       .then((data) => { dataObj = data });

// //     if (dataObj.success) {
// //       localStorage.setItem('auth-token', dataObj.token);
// //       localStorage.setItem('user-name', dataObj.username); // Salva o nome do usuário no localStorage
// //       window.location.replace("/");
// //     } else {
// //       alert(dataObj.errors);
// //     }
// //   };

// //   const signup = async () => {
// //     let dataObj;
// //     await fetch('http://localhost:4000/signup', {
// //       method: 'POST',
// //       headers: {
// //         Accept: 'application/json',
// //         'Content-Type': 'application/json',
// //       },
// //       body: JSON.stringify(formData),
// //     })
// //       .then((resp) => resp.json())
// //       .then((data) => { dataObj = data });

// //     if (dataObj.success) {
// //       localStorage.setItem('auth-token', dataObj.token);
// //       localStorage.setItem('user-name', dataObj.username); // Salva o nome do usuário no localStorage
// //       window.location.replace("/");
// //     } else {
// //       alert(dataObj.errors);
// //     }
// //   };

// //   return (
// //     <div className="loginsignup">
// //       <div className="loginsignup-container">
// //         <h1>{state}</h1>
// //         <div className="loginsignup-fields">
// //           {state === "Crie sua conta" && <input type="text" placeholder="Seu nome" name="username" value={formData.username} onChange={changeHandler} />}
// //           <input type="email" placeholder="Digite seu e-mail" name="email" value={formData.email} onChange={changeHandler} />
// //           <input type="password" placeholder="Digite sua senha" name="password" value={formData.password} onChange={changeHandler} />
// //         </div>
// //         <button onClick={() => { state === "Entrar" ? login() : signup() }}>{state}</button>
// //         {state === "Entrar"
// //           ? <p className="loginsignup-login">Não possui conta? <span onClick={() => setState("Crie sua conta")}>Crie sua conta aqui</span></p>
// //           : <p className="loginsignup-login">Já possui uma conta? <span onClick={() => setState("Entrar")}>Entre aqui</span></p>}
// //         <div className="loginsignup-agree">
// //           <input type="checkbox" />
// //           <p>Ao continuar, concordo com os termos de uso e política de privacidade.</p>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default LoginSignup;

// import React, { useState } from "react";
// import "./CSS/LoginSignup.css";

// const LoginSignup = () => {
//   const [state, setState] = useState("Entrar");
//   const [formData, setFormData] = useState({ username: "", email: "", password: "" });

//   const changeHandler = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const login = async () => {
//     let dataObj;
//     await fetch('http://localhost:4000/login', {
//       method: 'POST',
//       headers: {
//         Accept: 'application/json',
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(formData),
//     })
//       .then((resp) => resp.json())
//       .then((data) => { dataObj = data });

//     if (dataObj.success) {
//       localStorage.setItem('auth-token', dataObj.token);
//       localStorage.setItem('user-name', dataObj.username); // Salva o nome do usuário no localStorage
//       window.location.replace("/");
//     } else {
//       alert(dataObj.errors);
//     }
//   };

//   const signup = async () => {
//     let dataObj;
//     await fetch('http://localhost:4000/signup', {
//       method: 'POST',
//       headers: {
//         Accept: 'application/json',
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(formData),
//     })
//       .then((resp) => resp.json())
//       .then((data) => { dataObj = data });

//     if (dataObj.success) {
//       localStorage.setItem('auth-token', dataObj.token);
//       localStorage.setItem('user-name', dataObj.username); // Salva o nome do usuário no localStorage
//       window.location.replace("/");
//     } else {
//       alert(dataObj.errors);
//     }
//   };

//   return (
//     <div className="loginsignup">
//       <div className="loginsignup-container">
//         <h1>{state}</h1>
//         <div className="loginsignup-fields">
//           {state === "Crie sua conta" && <input type="text" placeholder="Seu nome" name="username" value={formData.username} onChange={changeHandler} />}
//           <input type="email" placeholder="Digite seu e-mail" name="email" value={formData.email} onChange={changeHandler} />
//           <input type="password" placeholder="Digite sua senha" name="password" value={formData.password} onChange={changeHandler} />
//         </div>
//         <button onClick={() => { state === "Entrar" ? login() : signup() }}>{state}</button>
//         {state === "Entrar"
//           ? <p className="loginsignup-login">Não possui conta? <span onClick={() => setState("Crie sua conta")}>Crie sua conta aqui</span></p>
//           : <p className="loginsignup-login">Já possui uma conta? <span onClick={() => setState("Entrar")}>Entre aqui</span></p>}
//         <div className="loginsignup-agree">
//           <input type="checkbox" />
//           <p>Ao continuar, concordo com os termos de uso e política de privacidade.</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginSignup;


import React, { useState } from "react";
import "./CSS/Login.css";

const LoginSignup = () => {
  // Estado para controlar a exibição entre "Entrar" e "Crie sua conta"
  const [state, setState] = useState("Entrar");

  // Estado para armazenar os dados do formulário
  const [formData, setFormData] = useState({ username: "", email: "", password: "" });

  // Função para lidar com mudanças nos campos do formulário
  const changeHandler = (e) => {
    // Atualiza o estado do formulário com base no nome do campo e seu valor
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Função para realizar login
  const login = async () => {
    try {
      // Envia uma solicitação POST para o endpoint de login
      const response = await fetch('http://localhost:4000/login', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      // Converte a resposta para JSON
      const data = await response.json();

      // Se o login for bem-sucedido, armazena o token e o nome do usuário no localStorage
      if (data.success) {
        localStorage.setItem('auth-token', data.token);
        localStorage.setItem('user-name', data.username);
        window.location.replace("/"); // Redireciona para a página inicial
      } else {
        alert(data.errors); // Exibe erros, se houver
      }
    } catch (error) {
      console.error('Erro ao fazer login:', error); // Captura e exibe erros
    }
  };

  // Função para realizar cadastro
  const signup = async () => {
    try {
      // Envia uma solicitação POST para o endpoint de cadastro
      const response = await fetch('http://localhost:4000/signup', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      // Converte a resposta para JSON
      const data = await response.json();

      // Se o cadastro for bem-sucedido, armazena o token e o nome do usuário no localStorage
      if (data.success) {
        localStorage.setItem('auth-token', data.token);
        localStorage.setItem('user-name', data.username);
        window.location.replace("/"); // Redireciona para a página inicial
      } else {
        alert(data.errors); // Exibe erros, se houver
      }
    } catch (error) {
      console.error('Erro ao fazer cadastro:', error); // Captura e exibe erros
    }
  };

  return (
    <div className="log">
      <div className="log-container">
        {/* Exibe o título com base no estado (Entrar ou Crie sua conta) */}
        <h1>{state}</h1>
        
        <div className="log-fields">
          {/* Exibe campo de nome apenas se o estado for "Crie sua conta" */}
          {state === "Crie sua conta" && (
            <input
              type="text"
              placeholder="Seu nome"
              name="username"
              value={formData.username}
              onChange={changeHandler}
            />
          )}
          <input
            type="email"
            placeholder="Digite seu e-mail"
            name="email"
            value={formData.email}
            onChange={changeHandler}
          />
          <input
            type="password"
            placeholder="Digite sua senha"
            name="password"
            value={formData.password}
            onChange={changeHandler}
          />
        </div>
        
        {/* Botão que executa login ou cadastro baseado no estado */}
        <button onClick={() => (state === "Entrar" ? login() : signup())}>
          {state}
        </button>
        
        {/* Alterna entre as opções de login e cadastro */}
        {state === "Entrar" ? (
          <p className="log-login">
            Não possui conta?{" "}
            <span onClick={() => setState("Crie sua conta")}>Crie sua conta aqui</span>
          </p>
        ) : (
          <p className="log-login">
            Já possui uma conta?{" "}
            <span onClick={() => setState("Entrar")}>Entre aqui</span>
          </p>
        )}
        
        {/* Checkbox para aceitar termos e políticas */}
        <div className="log-agree">
          <input type="checkbox" />
          <p>Ao continuar, concordo com os termos de uso e política de privacidade.</p>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
