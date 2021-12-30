// import React from "react";
// import { useHistory } from "react-router-dom";
// import { URL } from "../../constants";

// export default function LoginUser() {
//   const history = useHistory();

//   const onLoginUser = () => {
//     history.push(URL.USER_PROFILE);
//   };

//   const onForgetBtn = () => {
//     // let forget = document.querySelector(".forget-password");
//     // let searchForm = document.querySelector(".search-form");
//     // let shoppingCart = document.querySelector(".shopping-cart");
//     // let login = document.querySelector(".login-form");
//     // let navbar = document.querySelector(".navbar");
//     // let signup = document.querySelector(".signup-form");
//     // forget.classList.toggle("active");
//     // signup.classList.remove("active");
//     // searchForm.classList.remove("active");
//     // shoppingCart.classList.remove("active");
//     // login.classList.remove("active");
//     // navbar.classList.remove("active");
//   };

//   const onSignup = () => {
//     // let signup = document.querySelector(".signup-form");
//     // let navbar = document.querySelector(".navbar");
//     // let searchForm = document.querySelector(".search-form");
//     // let shoppingCart = document.querySelector(".shopping-cart");
//     // let login = document.querySelector(".login-form");
//     // let forget = document.querySelector(".forget-password");
//     // signup.classList.toggle("active");
//     // navbar.classList.remove("active");
//     // searchForm.classList.remove("active");
//     // shoppingCart.classList.remove("active");
//     // login.classList.remove("active");
//     // forget.classList.remove("active");
//   };

//   return (
//     <div>
//       <form action="" className="login-form" id="login-form">
//         <h3>Login</h3>
//         <input
//           type="email"
//           name="name"
//           ie=""
//           placeholder="Enter your email"
//           className="box"
//         />
//         <input
//           type="password"
//           name="password"
//           placeholder="Enter password"
//           className="box"
//         />
//         <div className="remember">
//           <input type="checkbox" name="" id="remember-me" />
//           <label if="remember-me">remember me</label>
//         </div>
//         <button onClick={() => onLoginUser()} className="btn">
//           Login
//         </button>
//         <p>
//           forget password?
//           <span
//             onClick={() => {
//               onForgetBtn();
//             }}
//           >
//             click here
//           </span>
//         </p>
//         <p>
//           don't have an account?
//           <span
//             onClick={() => {
//               onSignup();
//             }}
//           >
//             Create account
//           </span>
//         </p>
//       </form>
//       <div
//         className="modal fade"
//         id="exampleModal"
//         tabindex="-1"
//         aria-labelledby="exampleModalLabel"
//         aria-hidden="true"
//       >
//         <div className="modal-dialog">
//           <div className="modal-content">
//             <div className="modal-header">
//               <h5 className="modal-title" id="exampleModalLabel">
//                 New message
//               </h5>
//               <button
//                 type="button"
//                 className="btn-close"
//                 data-bs-dismiss="modal"
//                 aria-label="Close"
//               ></button>
//             </div>
//             <div className="modal-body">
//               <form>
//                 <div className="mb-3">
//                   <label for="recipient-name" className="col-form-label">
//                     Recipient:
//                   </label>
//                   <input
//                     type="text"
//                     className="form-control"
//                     id="recipient-name"
//                   />
//                 </div>
//                 <div className="mb-3">
//                   <label for="message-text" className="col-form-label">
//                     Message:
//                   </label>
//                   <textarea
//                     className="form-control"
//                     id="message-text"
//                   ></textarea>
//                 </div>
//               </form>
//             </div>
//             <div className="modal-footer">
//               <button
//                 type="button"
//                 className="btn btn-secondary"
//                 data-bs-dismiss="modal"
//               >
//                 Close
//               </button>
//               <button type="button" className="btn btn-primary">
//                 Send message
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
