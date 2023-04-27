// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import zonaUm from '../../backEnd/teste/gerarFreezers.js';
// import FreezerComp from '../Components/FreezerComp';
// import HeaderComp from '../Components/HeaderComp.js';
// import imgConfig from '../Imagens/Configs.png'

// function Produto() {
//   const navigate = useNavigate();
//   const goToConfig = () => {
//     return navigate('/produto/config');
//   }
//   return (
//     <main className="homePage">
//       <HeaderComp />
//       <h1>Painel da Planta 01</h1>
//       <div className="divConfig">
//         <img src={ imgConfig } alt="Configurações" className="imgConfig" onClick={ goToConfig }/>  
//       </div>
//       <div className="dispFreezer">
//         <div className='uEsquerda'>
//           {
//             zonaUm.map((cadaFreezer) => {
//               return cadaFreezer.id < 6 && <FreezerComp 
//                 key={ cadaFreezer.id }
//                 id={ cadaFreezer.id }
//                 temp={ cadaFreezer.temp }
//                 porta={ cadaFreezer.porta }
//                 />
//             })
//           }
//         </div>
//         <div className='uBaixo'>
//           {
//             zonaUm.map((cadaFreezer) => {
//               return (cadaFreezer.id > 5 && cadaFreezer.id < 11) &&
//               <FreezerComp 
//                 key={ cadaFreezer.id }
//                 id={ cadaFreezer.id }
//                 temp={ cadaFreezer.temp }
//                 porta={ cadaFreezer.porta }
//                 />
//               }
//             )
//           }
//         </div>
//         <div className='uDireita'>
//           {
//             zonaUm.map((cadaFreezer) => {
//               return (cadaFreezer.id > 10) &&
//               <FreezerComp 
//                 key={ cadaFreezer.id }
//                 id={ cadaFreezer.id }
//                 temp={ cadaFreezer.temp }
//                 porta={ cadaFreezer.porta }
//                 />
//             })
//           }
//         </div>
//       </div>
//     </main>
//   )
// }

// export default Produto;